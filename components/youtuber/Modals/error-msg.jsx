import React from 'react'
import { MdWarningAmber } from 'react-icons/md'
const ErrorMsg = ({msg}) => {
  return (
    <div className='flex gap-1 rounded-lg text-red-400 p-1 justify-center items-center'>
        <MdWarningAmber />
        <div>
            {msg}
        </div>
    </div>
  )
}

export default ErrorMsg