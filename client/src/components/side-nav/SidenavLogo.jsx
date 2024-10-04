import { Book } from "phosphor-react";

 

let SidenavLogo = ({text}) => {
    return (
        <div className='flex items-center justify-start pl-4  h-16 bg-white'>
            <Book/>
            <h1 className='font-bold text-xl'>{text}</h1>
        </div>
    );
};
export default SidenavLogo;
