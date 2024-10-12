import {
    Book,
    List,
    ListBullets,
    PaintBrush,
    Plus,
    Sparkle,
    Star,
    CaretLeft,
    CaretRight,
    DotsThree,
} from "phosphor-react";


import {
    Pagination,
    PaginationItem,
    PaginationList,
    PaginationNavigator,
} from "keep-react"; 


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

let ContentCatagory = () => {
    const [selectedCategory, setSelectedCategory] = useState("arts");
    const [active, setActive] = useState("arts");

    const [activeBook, setActiveBook] = useState(0);
    /**
     * Retrieves the categories and category-book mapping from the CatagoryContext.
     * The `categories` array contains the available categories, and the `catagoryAndBooks` object
     * maps each category name to an array of book data.
     */
    const BooksCatagoryContext = useContext(CatagoryContext);
    const categories = BooksCatagoryContext.categories;
    const catagoryAndBooks = BooksCatagoryContext.catagoryAndBooks;

    return (
        <div className='flex flex-nowrap h-full'>
            <div className='flex-1 bg-gray-50 p-0 h-full overflow-y-scroll'>
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

                    {/* //book of the catagroies is mapped and displayed here */}
                    <div className='my-3'>
                        <Heading
                            text={selectedCategory}
                            icon={<Book size={24} />}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-3 h-full'>
                            {catagoryAndBooks[selectedCategory] != undefined ? (
                                catagoryAndBooks[selectedCategory].map(
                                    (book, index) => (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                setActiveBook(book.id)
                                            }
                                            className={`${
                                                activeBook === book.id
                                                    ? "ring-2 ring-slate-500 rounded-md bg-slate-100"
                                                    : ""
                                            } hover:bg-slate-50 transition-colors duration-200`}
                                        >
                                            <Books
                                                imageLink={book.imageLink}
                                                bookName={book.bookName}
                                                authorName={book.authorName}
                                            />
                                        </div>
                                    )
                                )
                            ) : (
                                <div className='w-full h-full flex items-center justify-center'>
                                    {" "}
                                    No books found!{" "}
                                </div>
                            )}
                        </div>
                        {catagoryAndBooks[selectedCategory] != undefined ? (
                            <div className='pt-5 filter opacity-50' title="Not implemented yet">
                                <Pagination shape='rounded' className="m-auto justify-center">
                                    <PaginationNavigator>
                                        <CaretLeft size={18} />
                                        Previous
                                    </PaginationNavigator>
                                    <PaginationList>
                                        <PaginationItem>1</PaginationItem>
                                        <PaginationItem active>
                                            2
                                        </PaginationItem>
                                        <PaginationItem>3</PaginationItem>
                                        <PaginationItem>4</PaginationItem>
                                        <PaginationItem>
                                            <DotsThree size={20} />
                                        </PaginationItem>
                                        <PaginationItem>10</PaginationItem>
                                    </PaginationList>
                                    <PaginationNavigator>
                                        Next
                                        <CaretRight size={18} />
                                    </PaginationNavigator>
                                </Pagination>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            {catagoryAndBooks[selectedCategory] != undefined ? (
                <ContentDetails
                    className='sticky top-0 overflow-auto h-full'
                    bookObject={catagoryAndBooks[selectedCategory].find(
                        (book) => book["id"] === activeBook
                    )}
                />
            ) : null}
        </div>
    );
};

export default ContentCatagory;
