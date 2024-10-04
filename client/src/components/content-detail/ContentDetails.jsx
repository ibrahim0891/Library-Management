import { Books, Plus, Star, User } from "phosphor-react";
import Reviews from "./Reviews";
import Ratings from "./Ratings";
import BookDetails from "./BookDetails";

let ContentDetails = () => {
    return (
        <div className=' w-96 bg-white h-[calc(100vh-100px)] p-8 pb-0 overflow-y-auto '>
            <div className="text-3xl font-bold shadow-sm border-b -m-8 p-6 mb-6 flex items-center space-x-3 justify-start"> 
                <Books />
                <h1> Book Details</h1>
            </div>
            <div>
                <img
                    src='https://static-cse.canva.com/blob/142565/Blue-Orange-and-Yellow-Cool-Memoir_Inspirational-Book-Cover.jpg'
                    alt=''
                />
            </div>
            <div>
                <h1 className=' text-3xl font-bold my-4  text-center'>
                    Futurama{" "}
                </h1>
            </div>
            <div className='mt-8'>
                <BookDetails></BookDetails>
            </div>
            <div>
                {/* rateing and review */}

                <Ratings />

                <Reviews />
            </div>
            <div className='sticky bottom-0 flex  bg-white p-2 border-t'>
                <button className='p-4 w-1/2 hover:bg-gray-100 rounded-md'>
                    {" "}
                    Borrow{" "}
                </button>
                <button className='p-4 w-1/2 hover:bg-gray-100 rounded-md'>
                    {" "}
                    Wishlist{" "}
                </button>
            </div>
        </div>
    );
};

export default ContentDetails;
