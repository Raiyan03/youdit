import ErrorMsg from "./error-msg";
import SuccessMsg from "./succes-msg";
const FormModal = ({isOpen, title, onClose, onSubmit, inputFields, submitLabel="Submit", errorMsg, successMsg}) => {
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
            <form onSubmit={onSubmit} className="flex gap-2 flex-col my-1 ">
                { inputFields.map((field, index) => {
                    return(
                        <input onChange={field?.onChange} className={`h-10 border-2 focus:outline-primary rounded-lg p-2  ${isOpen ? 'focus:ring-primary' : ''}`} type={field?.type} placeholder={field?.placeholder} autoFocus={index === 0} />
                    )
                })}
                {errorMsg && <ErrorMsg msg={errorMsg} />}
                {successMsg && <SuccessMsg msg={successMsg} />}
                <button type="submit" className=" p-1 text-white self-center rounded-md shadow-sm bg-primary w-fit">
                    {submitLabel}
                </button>
            </form>
        </div>
    )
} 

export default FormModal;