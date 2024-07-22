import { DisplayList } from "../DisplayList";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { FetchEditors } from "@/server/calls";
const EditorsList = ({isOpenModal, closeModal, openModal}) => {
    const data  = [{link: "/logo2.png", title: "Gangnam Style"},{link: "/logo2.png", title: "Gangnam Style"} ]
    const [editors, setEditors] = useState();
    const session = useSession().data;
    useEffect( () => {
        ( async () => {
            if (!session){
                return null;
            }
            const res = await FetchEditors(session.user.id);
            setEditors(res);
        })();
    }, [session]);

    return (
        <div className="border p-3 flex w-full rounded-md">
            <DisplayList data={editors} isOpenModal={isOpenModal} closeModal={closeModal} openModal={openModal} />
        </div>
    );
}

export default EditorsList;