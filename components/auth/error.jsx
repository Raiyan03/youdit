import { MdWarningAmber } from "react-icons/md";

const ErrorBox = ({message}) => {
    return (
        <div className="flex gap-1 rounded-lg text-[#ff2c2c] h-10 justify-center items-center">
            <MdWarningAmber />
            <div>
                {message}
            </div>
        </div>
    );
}

export default ErrorBox;