import Image from "next/image"
const NoEditor = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <Image src="/noeditor.png" width={300} height={300} alt="No editor" />
        </div>
    )
}

export default NoEditor;