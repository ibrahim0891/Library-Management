
import BookContext from "../../context/context";

import { useContext } from "react";

let MainContent = () => {
    const books = useContext(BookContext);
    return (
        <div className='flex-1 bg-gray-200 p-6 '>
            {/* main container */}
             <div className="bg-white p-10 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {books.map((book, index) => (
                    <div key={index} className=" p-8 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-200 space-y-4">
                        <img src={book.imageLink} alt="" className=" w-full object-cover mb-4" />
                        <h2 className="text-2xl font-bold mb-2">{book.bookName}</h2> 
                        <p className="text-gray-600 text-sm">{book.authorName}</p>
                    </div>
                ))}
             </div>
        </div>
    );
};

export default MainContent; 
