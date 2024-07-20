import { useState } from "react";
const FormModal = ({isOpen, title, onClose, onSubmit, inputFields, submitLabel="Submit"}) => {
    const [inputValue, setInputValue] = useState();

    return (
        <div className="w-1/4 p-3 z-50 bg-gray-100 shadow-lg rounded-lg border-1 top-[50%] self-center  fixed ">
            <div className="flex justify-between gap-3 w-full">
                <h1 className="self-center font-semibold">
                    {title}
                </h1>
                <button className=" self-end" onClick={onClose}>
                    X
                </button>
            </div>
            <form action="" className="flex gap-2 flex-col my-1 ">
                { inputFields.map((field, index) => {
                    return(
                        <input className={`h-10 border-2 focus:outline-primary rounded-lg p-2 my-3 ${isOpen ? 'focus:ring-primary' : ''}`} type={field?.type} placeholder={field?.placeholder} autoFocus={index === 0} />
                    )
                })}
                <button type="submit" className=" text-white self-center rounded-md shadow-sm bg-primary w-1/4">
                    {submitLabel}
                </button>
            </form>
        </div>
    )
} 

export default FormModal;