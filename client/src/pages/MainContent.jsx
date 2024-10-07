import {
    Drawer,
    DrawerAction,
    DrawerContent,
    DropdownAction,
} from "keep-react";
import ContentDetails from "../components/content-detail/ContentDetails";
import {BookContext} from "../context/context";

import { useContext, useState } from "react";
import Books from "../components/elements/Books";

let MainContent = () => {
    const books = useContext(BookContext);
    const [bookID, setBookID] = useState("");
    const [active, setActive] = useState(0);
    return (
        <div className='flex bg-gray-200 h-full flex-nowrap'>
            <div className='bg-white p-8 shadow-md  overflow-auto flex-1 grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-6 '>
                {books.map((book, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setBookID(index);
                            setActive(index);
                        }}
                        className={`${
                            active === books.indexOf(book) ? "border-2 border-gray-500 rounded-lg" : ""
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
            <ContentDetails className='sticky top-0  flex-1' bookID={bookID} />
        </div>
    );
};

export default MainContent;
