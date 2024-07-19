import { DisplayList } from "../DisplayList";

const EditorsList = () => {
    const data  = [{link: "/logo2.png", title: "Gangnam Style"},{link: "/logo2.png", title: "Gangnam Style"} ]

    return (
        <div className="border p-3 flex w-full rounded-md">
            <DisplayList data={data} />
        </div>
    );
}

export default EditorsList;