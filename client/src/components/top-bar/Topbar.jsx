
import SearchBar from "./SearchBar";  

function Topbar() {
    return (
        <div className='bg-white p-4 flex gap-4 sticky top-0 items-center justify-between border-b-2 border-gray-200 shadow-sm'>
            <SearchBar />
        
        </div>
    );
}

export default Topbar;
