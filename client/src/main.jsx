import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./../src/index.css";

import {BookContext, CatagoryContext } from "./context/context";

//book will be fetched here \
let books = [
    {
        imageLink:
            "https://static-cse.canva.com/blob/142565/Blue-Orange-and-Yellow-Cool-Memoir_Inspirational-Book-Cover.jpg",
        bookName: "Futurama",
        authorName: "Michel Macarthy",
        publisher: "Openbooks.org",
        pages: 320,
        isbn: "978-1234567890",
        publishYear: 2022,
        rating: 4
    },

    {
        imageLink:
            "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
        bookName: "The Lost City",
        authorName: "Emily Johnson",
        publisher: "Mystery Press",
        pages: 280,
        isbn: "978-2345678901",
        publishYear: 2021,
        rating: 3
    },
    {
        imageLink:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930",
        bookName: "Echoes of Eternity",
        authorName: "Michael Chen",
        publisher: "Sci-Fi Publications",
        pages: 400,
        isbn: "978-3456789012",
        publishYear: 2023,
        rating: 5
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIP.nZBy3sCgeKohyHazuFccWgHaL2?rs=1&pid=ImgDetMain",
        bookName: "Whispers in the Dark",
        authorName: "Sarah Thompson",
        publisher: "Thriller House",
        pages: 350,
        isbn: "978-4567890123",
        publishYear: 2020,
        rating: 4
    },
    {
        imageLink:
            "https://images.playground.com/37965031-c15b-4c0d-b0e3-f4cc80856cef.jpeg",
        bookName: "The Quantum Paradox",
        authorName: "David Rodriguez",
        publisher: "Science Books Inc.",
        pages: 420,
        isbn: "978-5678901234",
        publishYear: 2022,
        rating: 5
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIF.NG8deQVNMqVAZCSnt2esqw?rs=1&pid=ImgDetMain",
        bookName: "Beneath the Willow",
        authorName: "Laura Nakamura",
        publisher: "Green Leaf Press",
        pages: 300,
        isbn: "978-6789012345",
        publishYear: 2021,
        rating: 3
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIP.nZBy3sCgeKohyHazuFccWgHaL2?rs=1&pid=ImgDetMain",
        bookName: "Whispers in the Dark",
        authorName: "Sarah Thompson",
        publisher: "Thriller House",
        pages: 350,
        isbn: "978-4567890123",
        publishYear: 2020,
        rating: 4
    },
    {
        imageLink:
            "https://images.playground.com/37965031-c15b-4c0d-b0e3-f4cc80856cef.jpeg",
        bookName: "The Quantum Paradox",
        authorName: "David Rodriguez",
        publisher: "Science Books Inc.",
        pages: 420,
        isbn: "978-5678901234",
        publishYear: 2022,
        rating: 5
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIF.NG8deQVNMqVAZCSnt2esqw?rs=1&pid=ImgDetMain",
        bookName: "Beneath the Willow",
        authorName: "Laura Nakamura",
        publisher: "Green Leaf Press",
        pages: 300,
        isbn: "978-6789012345",
        publishYear: 2021,
        rating: 3
    },
];

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


const catagoryAndBooks = {
    arts: booksForArts,
    history: booksForHistory,
    // Add more categories and books as needed
};

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

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BookContext.Provider value={books}>
            <CatagoryContext.Provider value={{categories, catagoryAndBooks}}>
                <App />
            </CatagoryContext.Provider>
        </BookContext.Provider>
    </StrictMode>
);
