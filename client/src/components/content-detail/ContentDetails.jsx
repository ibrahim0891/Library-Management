import {
    BookOpen,
    Books,
    Hand,
    HandPalm,
    Heart,
    Plus,
    Star,
    User,
} from "phosphor-react";
import Reviews from "./Reviews";
import Ratings from "./Ratings";
import BookDetails from "./BookDetails";
import { useContext } from "react";
import { BookContext } from "../../context/context";

let ContentDetails = ({ bookObject }) => {
    let book = bookObject; 
    return (
        <div className=' w-96 shadow-md border bg-white pb-0 overflow-y-auto  '>
            {book ?<div className='m-8 mb-0 '>
                <div className='text-2xl font-bold shadow-sm border-b -m-8 p-6 mb-6 flex items-center space-x-3 justify-start sticky top-0 bg-white'>
                    <Books />
                    <h1> Book Details - id: {book.id} </h1>
                </div>
                <div>
                    <img
                        src={book.imageLink}
                        alt=''
                        className='w-2/4 block m-auto'
                    />
                </div>
                <div>
                    <h1 className=' text-2xl font-bold my-4   text-center'>
                        {book.bookName}
                    </h1>
                </div>
                <div className='mt-4'>
                    <BookDetails bookData={book}></BookDetails>
                </div>
                <div>
                    {/* rateing and review */}

                    <Ratings startCount={book.rating} />

                    <Reviews />
                </div>
            </div> : <div className="w-full h-full flex items-center justify-center">No book seleced </div>}
             
            

            <div className='sticky bottom-0 p-4 gap-4 flex w-full border-t  bg-white'>
                <button className='w-1/2 bg-gray-200/60 text-gray-800 hover:bg-gray-200 rounded-md flex items-center justify-center border-r-2'>
                    <Heart className='mr-2' />
                    Add to Wishlist
                </button>
                <button className='p-4 w-1/2 bg-gray-200/60 text-gray-800 hover:bg-gray-200 rounded-md flex items-center justify-center'>
                    <HandPalm className='mr-2' />
                    Borrow
                </button>
            </div>
        </div>
    );
};

export default ContentDetails;
