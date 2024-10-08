import { Card } from "keep-react";
import { useContext } from "react";
import { BookContext } from "../context/context";
import Heading from "../components/elements/Heading";
import { Heart } from "phosphor-react";

let FavoriteContent = () => {
    const books = useContext(BookContext);

    const favoriteBooks = [];
    const numRandomBooks = Math.floor(Math.random() * 2) + 3; // Random number between 3 and 4

    for (let i = 0; i < numRandomBooks; i++) {
        const randomIndex = Math.floor(Math.random() * books.length);
        favoriteBooks.push(books[randomIndex]);
    }
    return (
        <div className="w-full h-full bg-gray-50 overflow-auto p-4">
            <div className="h-full w-full bg-white shadow-md rounded-md border p-4"> 
                <Heading text={"Your Favorite Books"} icon={<Heart size={24}></Heart>}></Heading>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default FavoriteContent;
