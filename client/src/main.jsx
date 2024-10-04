import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./../src/index.css";

import BookContext from "./context/context";

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

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BookContext.Provider value={books}>    
            <App />
        </BookContext.Provider>
    </StrictMode>
);
