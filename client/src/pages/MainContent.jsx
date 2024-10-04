import ContentDetails from "../components/content-detail/ContentDetails";
import BookContext from "../context/context";

import { useContext, useState } from "react";

let MainContent = () => {
    const books = useContext(BookContext);
    const [ bookID, setBookID ] = useState("");
    return (
        <div className='flex bg-gray-200 h-full'>
            <div className='bg-white p-8 shadow-md  overflow-auto flex-1 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
                {books.map((book, index) => (
                    <div
                        key={index}
                        className=' p-4 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-200 space-y-4'
                        onClick={() => {
                            setBookID(index);
                        }}
                    >
                        <img
                            src={book.imageLink}
                            alt=''
                            className=' w-full object-cover mb-4'
                        />
                        <h2 className='text-2xl font-bold mb-2'>
                            {book.bookName}
                        </h2>
                        <p className='text-gray-600 text-sm'>
                            {book.authorName}
                        </p>
                    </div>
                ))}
            </div>
            <ContentDetails className='sticky top-0  flex-1' bookID={bookID} />
        </div>
    );
};

export default MainContent;
