import { auth } from "@/auth";
import { addYoutuberToEditor, updateEditor } from "@/data/editor";
import { getEditor, getUserByEmail } from "@/data/user";
import { addEditorToYoutuber } from "@/data/youtuber";
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