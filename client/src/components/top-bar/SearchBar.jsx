import { MagnifyingGlass } from "phosphor-react";

 


const SearchBar = () => {
    return (
        <div className='flex items-center gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300'> 
            <MagnifyingGlass size={20} className="text-gray-500" />
            <input 
                placeholder="Search Library..." 
                type="text" 
                className="border-none bg-transparent focus:ring-0 placeholder-gray-400 text-gray-700  focus:outline-none w-full"
            />
        </div>
    );
};
 
export default SearchBar;