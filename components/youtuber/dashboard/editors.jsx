import { DisplayList } from "../DisplayList";

const EditorsList = ({isOpenModal, closeModal, openModal}) => {
    const data  = [{link: "/logo2.png", title: "Gangnam Style"},{link: "/logo2.png", title: "Gangnam Style"} ]

    return (
        <div className="border p-3 flex w-full rounded-md">
            <DisplayList data={data} isOpenModal={isOpenModal} closeModal={closeModal} openModal={openModal} />
        </div>
    );
}

export default EditorsList;