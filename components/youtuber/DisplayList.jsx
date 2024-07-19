import Image from "next/image"
import Frame from "./editor-video-fram"
export const DisplayList = ({data}) => {
    return (
        <div className="p-2 flex w-full flex-col gap-3">
            {data.map((item, index) => {
                return (
                    <Frame data={item} key={index}/>
                )
            })}
        </div>
    )
}