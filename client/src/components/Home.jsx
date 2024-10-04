import { Outlet } from "react-router-dom";
import ContentDetails from "./content-detail/ContentDetails";
import Sidenav from "./side-nav/Sidenav";
import Topbar from "./top-bar/Topbar";

let Home = () => {
    return (
        <div className='bg-gray-300 h-screen overflow-hidden'>
            <div className='rounded-lg flex flex-col md:flex-row h-full'>
                <Sidenav className='sticky top-0 w-full md:w-auto md:h-screen' />
                <div className='flex-1 flex flex-col'>
                    <Topbar className='sticky top-0 z-10' />
                    <div className='flex flex-1 overflow-hidden'>
                        <div className='flex-1 overflow-y-auto'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
