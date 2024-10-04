
import SearchBar from "./SearchBar";  

import { Bell, User } from "phosphor-react";

function Topbar() {
    return (
        <div className='bg-white p-4 flex gap-4  items-center justify-between border-b-2 border-gray-200 shadow-sm sticky top-0'>
            <SearchBar/>
            <div className='flex items-center gap-4'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300'>
                    Add Book
                </button>
                <Bell size={24} className="text-gray-600 cursor-pointer" />
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <User size={24} className="text-gray-600" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
