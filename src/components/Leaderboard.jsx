import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("../../data.json")
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-end mt-28 ml-20">
            {/* Second Place */}
            <div className="relative flex flex-col items-center">
                <div className="bg-customBlue h-28 w-36 rounded-t-lg flex justify-center items-center relative border-b-0">
                    <img
                        src={data[1].image}
                        alt={data[1].name}
                        className="absolute -top-10 w-24 h-24 rounded-full border-4 border-gray-400 object-cover"
                    />
                    <div className="absolute -bottom--7 bg-gray-400 text-black text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-black">
                        2
                    </div>
                </div>
                <div className="bg-customBlue w-36 text-center py-2 text-white">
                    <p className="font-semibold">{data[1].name}</p>
                    <p className="font-bold text-lg">{data[1].points}</p>
                </div>
            </div>

            {/* First Place */}
            <div className="relative flex flex-col items-center border-l-2 border-r-2 border-gray-50">
                <div className="bg-customBlue h-48 w-44 rounded-t-lg flex justify-center items-center relative border-b-0">
                    <img
                        src={data[0].image}
                        alt={data[0].name}
                        className="absolute -top-12 w-36 h-36 rounded-full border-4 border-yellow-500 object-cover"
                    />
                    <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 text-yellow-500 text-6xl">
                        👑
                    </div>
                    <div className="absolute -bottom--8 bg-yellow-500 text-black text-sm font-bold rounded-full w-11 h-11 flex items-center justify-center border-2 border-black">
                        1
                    </div>
                </div>
                <div className="bg-customBlue w-44 text-center py-2 text-white">
                    <p className="font-semibold">{data[0].name}</p>
                    <p className="font-bold text-lg">{data[0].points}</p>
                </div>
            </div>

            {/* Third Place */}
            <div className="relative flex flex-col items-center">
                <div className="bg-customBlue h-28 w-36 rounded-t-lg flex justify-center items-center relative border-b-0">
                    <img
                        src={data[2].image}
                        alt={data[2].name}
                        className="absolute -top-10 w-24 h-24 rounded-full border-4 border-yellow-700 object-cover"
                    />
                    <div className="absolute -bottom--7 bg-yellow-700 text-black text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-black">
                        3
                    </div>
                </div>
                <div className="bg-customBlue w-36 text-center py-2 text-white">
                    <p className="font-semibold">{data[2].name}</p>
                    <p className="font-bold text-lg">{data[2].points}</p>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
