import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";


const ChooseYoutuberDropdown = () => {
  const [selectedName, setSelectedName] = useState('Youtuber');
  const [isOpen, setIsOpen] = useState(false);

  const names = ['Anwar Raiyan', 'Chan Sheung Man', 'Chawala Shoyeb', 'Dhillon Amrit Singh', 'Fok Tat Chun'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNameSelect = (name) => {
    setSelectedName(name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center px-4 py-2 text-lg text-gray-500 font-semibold hover:bg-gray-100 rounded-lg"
        onClick={toggleDropdown}
      >
        {selectedName}
        <IoIosArrowUp className={`w-5 h-5 ml-2 duration-500 transition-all  ${isOpen ? ' ' : 'transform rotate-180'}`} />
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-56 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg ring-black ring-opacity-5 ">
          <span className='p-2 text-xs mt-4 text-gray-500'>Youtubers</span>
          <hr className='mt-1'/>
          {names.map((name, index) => (
            <li
              key={index}
              onClick={() => handleNameSelect(name)}
              className="flex justify-between items-center mx-3 my-3 p-2 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100"
            >
            {name}
            {selectedName === name &&
                <FaCircleCheck  className=" text-primary" size={16} />
                }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChooseYoutuberDropdown;
