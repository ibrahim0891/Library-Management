import {
    Book,
    List,
    ListBullets,
    PaintBrush,
    Plus,
    Sparkle,
    Star,
} from "phosphor-react";
import React, { useContext, useState } from "react";
import Heading from "../components/elements/Heading";
import Books from "../components/elements/Books";
import ContentDetails from "../components/content-detail/ContentDetails";
import { CatagoryContext } from "../context/context";

//books for aarts and book for histroy will be imported here as a context then we will map them

const CategoryCard = ({ name, icon, totalBooks }) => (
    <div className=' rounded-lg shadow-md p-4 flex flex-col items-center space-x-3 cursor-pointer hover:bg-gray-100 transition duration-200'>
        <span className='text-2xl mb-2'>{icon}</span>
        <span className='font-medium text-lg text-gray-700'>{name}</span>
        <span className='text-sm text-gray-500 whitespace-nowrap'>
            {totalBooks} books
        </span>
    </div>
);

const BookListSection = ({ booksData, catagoryName }) => {
    return (
        <div className='my-3'>
            <Heading text={catagoryName} icon={<Book size={24} />} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
                {booksData != undefined ? (
                    booksData.map((book) => (
                        <div key={book.id}>
                            <Books
                                imageLink={book.image}
                                bookName={book.title}
                                authorName={book.author}
                            />
                        </div>
                    ))
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        {" "}
                        No books found!{" "}
                    </div>
                )}
            </div>
        </div>
    );
};
let ContentCatagory = () => {
    const [selectedCategory, setSelectedCategory] = useState("arts");
    const [active, setActive] = useState("arts");
    const BooksCatagoryContext = useContext(CatagoryContext);
    const categories = BooksCatagoryContext.categories;
    const catagoryAndBooks = BooksCatagoryContext.catagoryAndBooks;

    return (
        <div className='flex flex-nowrap h-full'>
            <div className='flex-1 bg-gray-50 p-6 h-full overflow-y-scroll'>
                <div className='border border-gray-200 rounded-lg p-5  w-full shadow-sm overflow-auto '>
                    <Heading
                        text='Browse by Category' 
                        icon={<ListBullets size={24} />}
                    />
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-6'>
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(
                                        category.name.toLowerCase()
                                    );
                                    setActive(category.name.toLowerCase());
                                }}
                                className={`${
                                    active === category.name.toLowerCase()
                                        ? "ring-2 ring-slate-500 rounded-md bg-slate-100"
                                        : ""
                                } hover:bg-slate-50 transition-colors duration-200`}
                            >
                                <CategoryCard
                                    key={category.id}
                                    name={category.name}
                                    icon={category.icon}
                                    totalBooks={category.totalBooks} 
                                    className='cursor-pointer bg-transparent'
                                />
                            </div>
                        ))}
                    </div>
                    <BookListSection
                        catagoryName={selectedCategory}
                        booksData={catagoryAndBooks[selectedCategory]}
                    />
                </div>
            </div>
            <ContentDetails
                className='sticky top-0 overflow-auto h-full'
                bookID={1}
            />
        </div>
    );
};

// let ContentCatagory = () => {
//   return (
//       <div className='flex-1 bg-gray-50 p-6 h-full'>
//           <div className='border border-gray-200 rounded-lg p-5 h-full w-full shadow-sm'>
//               <h1 className="font-bold text-3xl text-gray-800 mb-4">Browse by Category</h1>
//               <div className="flex flex-wrap gap-4">

//               </div>
//           </div>
//       </div>
//   );
// }

export default ContentCatagory;
