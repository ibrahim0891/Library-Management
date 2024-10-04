  
import ContentDetails from "./content-detail/ContentDetails";
import MainContent from "./main-content/MainContent";
import Sidenav from "./side-nav/Sidenav";
import Topbar from "./top-bar/Topbar";

let Home = () => {
    return (
        <div className='bg-gray-300 h-screen overflow-hidden'>
            <div className='rounded-lg flex h-full'> 
                <Sidenav className='sticky top-0 h-screen' />
                <div className='flex-1 flex flex-col'>
                    <Topbar className='sticky top-0 z-10' />
                    <div className='flex flex-1 overflow-hidden'>  
                        <div className='flex-1 overflow-y-auto'>
                            <MainContent />
                        </div>
                        <ContentDetails className='sticky top-0 h-auto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
