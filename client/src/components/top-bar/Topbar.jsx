
import SearchBar from "./SearchBar";  

function Topbar() {
    return (
        <div className='bg-white p-4 flex gap-4  items-center justify-between border-b-2 border-gray-200 shadow-sm sticky top-0'>
            <SearchBar />
        
        </div>
    );
}

export default Topbar;
