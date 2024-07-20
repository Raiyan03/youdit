import React from 'react'
import { MdCheck, MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md'
import { FaCheckCircle } from "react-icons/fa";

const SuccessMsg = ({msg}) => {
  return (
    <div className='flex gap-1 rounded-lg text-emerald-500 p-1 justify-center items-center'>
        <FaCheckCircle />
        <div>
            {msg}
        </div>
    </div>
  )
}

export default SuccessMsg