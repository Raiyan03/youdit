import { auth } from "@/auth";
import { addYoutuberToEditor, getAssignedEditors, updateEditor } from "@/data/editor";
import { getEditor, getUserByEmail } from "@/data/user";
import { addEditorToYoutuber } from "@/data/youtuber";
import { parseEditor } from "@/lib/util";
import { emailValidation } from "@/lib/validation";
import { NextResponse } from "next/server";

export const AssignEditor = async (req) => {
    const {email, youtuberEmail}  = await req.json();
    const isValid = emailValidation(email);
    if (isValid.error){
        return NextResponse.json({message: isValid.error}, {status: 400});
    }
    const editor = await getUserByEmail(email);
    if (editor){
        const youtuber = await getUserByEmail(youtuberEmail);
        addYoutuberToEditor(editor, youtuber);
        addEditorToYoutuber(youtuber, editor);
    }
    return NextResponse.json({message: "You are registered successfully"}, {status: 200});
}

export const getEditors = async (req) => {
    const { id } = await req.json();
    try {
        const editors = await getAssignedEditors(id);
        const response = parseEditor(editors);
        return NextResponse.json(response, {status: 200});
    } catch (error) {
        return NextResponse.json({message: "something went wrong"}, {status: 400});
    }
}