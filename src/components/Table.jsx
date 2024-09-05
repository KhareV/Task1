import React from 'react';
import data from '../../data.json';

const Table = () => {
    const tableData = data.slice(3); // Skip top three

    return (
        <div className="bg-customBlue text-white rounded-3xl p-6 w-96 mr-24">
            {tableData.map((user) => (
                <div key={user.ranking} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center">
                        <span className="bg-customBlue h-10 w-10 text-white rounded-full flex items-center justify-center border-2 border-gray-50 text-xl font-semibold mr-4">
                            #{user.ranking}
                        </span>
                        <span>{user.name}</span>
                    </div>
                    <div className="text-right">
                        <p>{user.points}</p>
                        <span className={`${user.status === 'up' ? 'text-green-500' : 'text-red-500'} text-xs`}>
                            {user.status === 'up' ? '▲' : '▼'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Table;
