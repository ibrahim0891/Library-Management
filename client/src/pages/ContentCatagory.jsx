import {
    Book,
    List,
    ListBullets,
    PaintBrush,
    Plus,
    Sparkle,
    Star,
} from "phosphor-react";
import React, { useState } from "react";
import Heading from "../components/elements/Heading";
import Books from "../components/elements/Books";


const booksForArts = [
    {
        id: 3,
        title: "অসামাপ্ত আত্মজীবনী",
        author: "দেবদাস চক্রবর্তী",
        year: 1950,
        image: "https://4.bp.blogspot.com/-cMMxaBuplbw/V4joKg-V0uI/AAAAAAAAAMg/YznFT3tkgqYBE7ibhhtlVe32YBB3GsBNgCLcB/s1600/oshomapto-attojiboni-by-sheikh-Mujibur-Rahman.jpg",
    },
    {
        id: 4,
        title: "Ways of Seeing",
        author: "John Berger",
        year: 1972,
        image: "https://www.ebookconversion.com/wp-content/uploads/2015/12/0_Page_41.jpg",
    },
    {
        id: 6,
        title: "Art Through the Ages",
        author: "Helen Gardner",
        year: 1926,
        image: "https://th.bing.com/th/id/R.fc8de65203e7d945a594380a4acc05ae?rik=rEXgVvGv07hBFw&pid=ImgRaw&r=0",
    },
    {
        id: 7,
        title: "মুক্ত বাতাসের খোঁজে ",
        author: "লস্ট মডেস্টি",
        year: 1994,
        image: "https://th.bing.com/th/id/OIP.cPs2BOmvY_wvlLJ84B0lgQAAAA?w=474&h=739&rs=1&pid=ImgDetMain",
    },
    {
        id: 7,
        title: "মুক্ত বাতাসের খোঁজে ",
        author: "লস্ট মডেস্টি",
        year: 1994,
        image: "https://th.bing.com/th/id/OIP.cPs2BOmvY_wvlLJ84B0lgQAAAA?w=474&h=739&rs=1&pid=ImgDetMain",
    },
];
const booksForHistory = [
    {
        id: 3,
        title: "সমাপ্ত আত্মজীবনী",
        author: "শেখ মুজিব চক্রবর্তী",
        year: 1950,
        image: "https://4.bp.blogspot.com/-cMMxaBuplbw/V4joKg-V0uI/AAAAAAAAAMg/YznFT3tkgqYBE7ibhhtlVe32YBB3GsBNgCLcB/s1600/oshomapto-attojiboni-by-sheikh-Mujibur-Rahman.jpg",
    },
    {
        id: 4,
        title: "২৪ এর গনঅভ্যুত্থান ",
        author: "John Berger",
        year: 1972,
        image: "https://www.ebookconversion.com/wp-content/uploads/2015/12/0_Page_41.jpg",
    },
    {
        id: 6,
        title: "Art Through the Ages",
        author: "Helen Gardner",
        year: 1926,
        image: "https://th.bing.com/th/id/R.fc8de65203e7d945a594380a4acc05ae?rik=rEXgVvGv07hBFw&pid=ImgRaw&r=0",
    },
    {
        id: 7,
        title: "খোলা বাতাসের খোঁজে ",
        author: "লস্ট মডেস্টি",
        year: 1994,
        image: "https://th.bing.com/th/id/OIP.cPs2BOmvY_wvlLJ84B0lgQAAAA?w=474&h=739&rs=1&pid=ImgDetMain",
    },
];

const categories = [
    { id: 1, name: "Arts", icon: "🎨", totalBooks: booksForArts.length },
    { id: 2, name: "History", icon: "🏛️", totalBooks: booksForHistory.length },
    { id: 3, name: "Fiction", icon: "📚", totalBooks: 0 },
    { id: 4, name: "Science", icon: "🔬", totalBooks: 0 },
    { id: 5, name: "Children", icon: "👶", totalBooks: 0 },
    { id: 6, name: "Biography", icon: "👤", totalBooks: 0 },
    { id: 7, name: "Philosophy", icon: "🤔", totalBooks: 0 },
    { id: 8, name: "Poetry", icon: "📜", totalBooks: 0 },
    { id: 9, name: "Education", icon: "🎓", totalBooks: 0 },
    { id: 10, name: "Religion", icon: "🙏", totalBooks: 0 },
];

const catagoryAndBooks = {
    arts: booksForArts,
    history: booksForHistory,
    // Add more categories and books as needed
};
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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-3'>
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
    return (
        <div className='flex-1 bg-gray-50 p-6 h-full overflow-y-scroll'>
            <div className='border border-gray-200 rounded-lg p-5  w-full shadow-sm bg-white '>
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
