  
import ContentDetails from "./content-detail/ContentDetails";
import MainContent from "./main-content/MainContent";
import Sidenav from "./side-nav/Sidenav";
import Topbar from "./top-bar/Topbar";

let Home = () => {
    return (
        <div className='bg-gray-300 p-4 '>
            <div className='rounded-lg flex '> 
                <Sidenav />
                <div className='flex-1'>
                    <Topbar />
                    <div className='flex flex-1'>  
                        <MainContent />
                        < ContentDetails />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
