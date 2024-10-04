import { Star } from "phosphor-react";

 


let Ratings = () => {
  return (
      <div className='mt-6'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Rating</h2>
          <div className='flex items-center'>
              <span className='text-3xl font-bold text-yellow-500 mr-2'>
                  4.0
              </span>
              <div className='flex'>
                  <Star weight='fill' className='w-6 h-6 text-yellow-500' />
                  <Star weight='fill' className='w-6 h-6 text-yellow-500' />
                  <Star weight='fill' className='w-6 h-6 text-yellow-500' />
                  <Star weight='fill' className='w-6 h-6 text-yellow-500' />
                  <Star weight='regular' className='w-6 h-6 text-yellow-500' />
              </div>
              <span className='ml-2 text-sm text-gray-600'>(245 reviews)</span>
          </div>
      </div>
  );
}

export default Ratings;