import { Button, Card } from "keep-react";
import { useContext } from "react";
import { BookContext } from "../context/context";
import Heading from "../components/elements/Heading";
import { Heart, Star, ThumbsUp, X } from "phosphor-react";
import Books from "../components/elements/Books";

let FavoriteContent = () => {
    const books = useContext(BookContext);

    const favoriteBooks = [];
    const numRandomBooks = Math.floor(Math.random() * books.length) + 4;

    for (let i = 0; i < numRandomBooks; i++) {
        const randomIndex = Math.floor(Math.random() * books.length);
        favoriteBooks.push(books[randomIndex]);
    }

    return (
        <div className='w-full h-full bg-gray-50 overflow-auto p-4'>
            <div className='min-h-full w-full bg-white shadow-md rounded-md border p-4'>
                <Heading
                    text={"Your Favorite Books"}
                    icon={<Heart size={24}></Heart>}
                ></Heading>
                <div className='grid grid-cols-1 sm:grid-cols-2    gap-4 mt-4 overflow-auto'>
                    {favoriteBooks.map((book, index) => (
                        <div
                            className='flex md:flex-row items-center gap-6 p-5 hover:shadow-xl border rounded-lg transition-all duration-300 hover:scale-95 bg-white'
                            key={index}
                        >
                            <div className='relative group '>
                                <img
                                    className='h-36 aspect-[2/3] object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300'
                                    src={book.imageLink}
                                    alt={book.bookName}
                                />
                                <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center'>
                                    <Heart
                                        size='32'
                                        className='text-white'
                                        weight='fill'
                                    />
                                </div>
                            </div>
                            <div className='flex-1  space-y-1'>
                                <h1 className='text-xl font-bold text-gray-800 leading-tight'>
                                    {book.bookName}
                                </h1>
                                <p className='text-md md:text-lg text-gray-600 font-medium'>
                                    By - {book.authorName}
                                </p>
                                <div className='flex items-center md:space-x-2'>
                                    <span className='text-sm text-gray-500 hidden md:block'>
                                        Published: {book.publishYear}
                                    </span>
                                    <span className='text-gray-300 hidden md:block'>|</span>
                                    <div className='hidden md:flex items-center'>
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star
                                                key={i}
                                                size='16'
                                                weight={
                                                    i <= Math.floor(book.rating)
                                                        ? "fill"
                                                        : "regular"
                                                }
                                                className={`${
                                                    i <= Math.floor(book.rating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        ))}
                                        <span className='ml-2 text-sm font-semibold text-gray-700'>
                                            {book.rating.toFixed(1)}
                                        </span>
                                         
                                    </div>
                                </div>
                                <div className='mt-3 space-y-1'> 
                                    <p className='text-sm text-gray-600'>
                                        <span className="font-bold">Genre: </span>{book.category || "Unknown"}
                                    </p>
                                    <p className='text-sm text-gray-600'>
                                        Pages: {book.pages || "Not specified"}
                                    </p>
                                    <button className="text-xs text-red-500 border p-1 md:hidden"> Remove from favorite</button>
                                </div>
                            </div>
                            <button className='mt-4 md:mt-0 text-red-500 hover:bg-gray-50 p-3  font-bold transition-colors duration-300 hidden md:block'>
                                <X size={20}></X>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoriteContent;
