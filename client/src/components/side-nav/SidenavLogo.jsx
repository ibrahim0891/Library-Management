import { Book } from "phosphor-react";

 

let SidenavLogo = ({text}) => {
    return (
        <div className='flex items-center justify-start pl-4 h-16 mt-3 bg-white'>
            <div className='flex items-center transition-transform duration-300 hover:scale-105 hover:animate-pulse'>
                <Book className='mr-2 text-xl' />
                <h1 className='font-bold text-xl'>{text}</h1>
            </div>
        </div>
    );
};
export default SidenavLogo;
