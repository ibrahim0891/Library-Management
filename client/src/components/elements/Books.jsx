let Books = ({ imageLink, bookName, authorName }) => {
    return (
        <div className=' p-4 border-2 border-gray-200 rounded-lg hover:shadow-lg transition duration-200 space-y-4 cursor-pointer'>
            <div className='relative'>
                <img src={imageLink} alt='' className='w-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4'>
                    <h2 className='text-2xl font-bold text-white truncate'>
                        {bookName}
                    </h2>
                    <p className='text-gray-300 text-sm'>{authorName}</p>
                </div>
            </div>
        </div>
    );
};

export default Books;
