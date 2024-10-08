import Sidenav2 from "../side-nav/Sidenav-2";
import SearchBar from "./SearchBar";

import { Bell, PlusCircle, User } from "phosphor-react";

function Topbar() {
    return (
        <div className='bg-white p-4 flex gap-4  items-center justify-between border-b-2 border-gray-200 shadow-sm sticky top-0'>
            <Sidenav2 className='sticky top-0 w-full md:w-auto' />
            <SearchBar className='w-/3' />
            <div className='items-center gap-4 flex '>
                <button className='hidden md:flex text-black bg-metal-100 px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white transition-colors duration-300 items-center'>
                    <PlusCircle className="mr-2 text-lg"></PlusCircle>
                    Add Book
                </button>
                <Bell size={24} className='text-gray-600 cursor-pointer' />
                <div className='w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center'>
                    <User size={24} className='text-gray-600' />
                </div>
            </div>
        </div>
    );
}

export default Topbar;
