import ContentDetails from "../components/content-detail/ContentDetails";
import { BookContext } from "../context/context";

import { useContext, useState } from "react";
import Books from "../components/elements/Books";
import Heading from "../components/elements/Heading";
import { Sparkle } from "phosphor-react";

let MainContent = () => {
    const books = useContext(BookContext);
    const [bookID, setBookID] = useState(1);
    const [active, setActive] = useState(0);
    return (
        <div className='flex bg-gray-200 h-full flex-nowrap'>
            <div className='bg-white p-8 shadow-md  overflow-auto flex-1  '>
                <Heading
                    text={"Todays featured books "}
                    icon={<Sparkle></Sparkle>}
                    
                /> 

                <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-4 mt-5'>
                    {books.map((book, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setBookID(book.id);
                                setActive(index);
                            }}
                            className={`${
                                active === books.indexOf(book)
                                    ? "border-2 border-gray-500 rounded-lg"
                                    : ""
                            }`}
                        >
                            <Books
                                imageLink={book.imageLink}
                                bookName={book.bookName}
                                authorName={book.authorName}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ContentDetails
                className='sticky top-0  flex-1'
                bookObject={books.find((book) => book.id === bookID)}
            />
        </div>
    );
};

export default MainContent;
