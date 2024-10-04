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
    },

    {
        imageLink:
            "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg",
        bookName: "The Lost City",
        authorName: "Emily Johnson",
    },
    {
        imageLink:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/enceladus.jpg?auto=format&q=60&fit=max&w=930",
        bookName: "Echoes of Eternity",
        authorName: "Michael Chen",
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIP.nZBy3sCgeKohyHazuFccWgHaL2?rs=1&pid=ImgDetMain",
        bookName: "Whispers in the Dark",
        authorName: "Sarah Thompson",
    },
    {
        imageLink:
            "https://images.playground.com/37965031-c15b-4c0d-b0e3-f4cc80856cef.jpeg",
        bookName: "The Quantum Paradox",
        authorName: "David Rodriguez",
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIF.NG8deQVNMqVAZCSnt2esqw?rs=1&pid=ImgDetMain",
        bookName: "Beneath the Willow",
        authorName: "Laura Nakamura",
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIP.nZBy3sCgeKohyHazuFccWgHaL2?rs=1&pid=ImgDetMain",
        bookName: "Whispers in the Dark",
        authorName: "Sarah Thompson",
    },
    {
        imageLink:
            "https://images.playground.com/37965031-c15b-4c0d-b0e3-f4cc80856cef.jpeg",
        bookName: "The Quantum Paradox",
        authorName: "David Rodriguez",
    },
    {
        imageLink:
            "https://th.bing.com/th/id/OIF.NG8deQVNMqVAZCSnt2esqw?rs=1&pid=ImgDetMain",
        bookName: "Beneath the Willow",
        authorName: "Laura Nakamura",
    },
];

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BookContext.Provider value={books}>    
            <App />
        </BookContext.Provider>
    </StrictMode>
);
