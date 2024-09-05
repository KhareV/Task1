import React, { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { PiDotsNine } from "react-icons/pi";
import { FidgetSpinner } from 'react-loader-spinner';

const Header = () => {
    const [activeButton, setActiveButton] = useState('organisation');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <div className="w-full h-auto bg-blue-50 flex flex-col items-center">
            <div className="w-full h-16 flex items-center justify-between px-4">
                <SlArrowLeft className="text-2xl" />
                <h1 className="font-semibold text-2xl">Leaderboard</h1>
                <PiDotsNine className="text-3xl" />
            </div>

            <div className="relative flex justify-center items-center h-16 w-96 bg-gray-50 rounded-2xl">
                <div className="relative flex space-x-6">
                    <button
                        className={`relative text-lg font-semibold py-2 px-4 ${activeButton === 'organisation' ? 'text-blue-700' : 'text-gray-500'}`}
                        onClick={() => handleButtonClick('organisation')}
                    >
                        Organisation
                    </button>

                    <button
                        className={`relative text-lg font-semibold py-2 px-4 ${activeButton === 'department' ? 'text-blue-700' : 'text-gray-500'}`}
                        onClick={() => handleButtonClick('department')}
                    >
                        Department
                    </button>
                </div>

                <div
                    className={`absolute bottom-0 h-1 bg-blue-700 transition-all duration-300 ${activeButton === 'organisation' ? 'w-24 left-1/4' : 'w-24 left-3/4'
                        } transform -translate-x-1/2`}
                />
            </div>

            <div className={`w-full mt-10 text-center ${activeButton === 'department' ? 'block' : 'hidden'}`}>
                <h2 className="text-2xl font-bold">404 Not Found</h2>
                <p className="text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
                <div className="flex items-center justify-center">
                    <FidgetSpinner
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="fidget-spinner-loading"
                        wrapperStyle={{}}
                        wrapperClass="fidget-spinner-wrapper"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
