import SidenavLogo from "./SidenavLogo";
import constants from "../../constents/constents";
import {
    House,
    Book,
    BookOpen,
    Star,
    BookmarkSimple,
    Sparkle,
    Gear,
    Question,
    Info,
    Hamburger,
    List,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Button, Drawer, DrawerAction, DrawerClose, DrawerContent } from "keep-react";

let sidenavLinks = [
    {
        linkText: "Home",
        linkIcon: <House />,
        link: "/",
    },
    {
        linkText: "Category",
        linkIcon: <Book />,
        link: "/catogory",
    },
    {
        linkText: "My Library",
        linkIcon: <BookOpen />,
        link: "/library",
    },
    {
        linkText: "Favorites",
        linkIcon: <Star />,
        link: "/favorites",
    },
    {
        linkText: "Reading List",
        linkIcon: <BookmarkSimple />,
        link: "/reading-list",
    },
    {
        linkText: "Recommendations",
        linkIcon: <Sparkle />,
        link: "/recommendations",
    },
];
let sidenavLinks2 = [
    {
        linkText: "Settings",
        linkIcon: <Gear />,
        link: "/settings",
    },
    {
        linkText: "Help",
        linkIcon: <Question />,
        link: "/help",
    },
    {
        linkText: "About",
        linkIcon: <Info />,
        link: "/about",
    },
];
let Sidenav = () => {
    return (
        <div className='bg-white p-6 pt-0 shadow-md gap-4 sticky top-0 h-screen flex flex-col hidden md:flex'>
            
            <div className='flex-grow'>
                <SidenavLogo text={constants.logoText}> </SidenavLogo>
                <hr className='mb-6' />
                

                {sidenavLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.link}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gray-800 text-white flex items-center gap-4 px-4 py-3  rounded-md"
                                : "hover:bg-gray-100 flex items-center gap-4 px-4 py-3 rounded-md "
                        }
                    >
                        <span
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-800 text-white rounded-md p-2 border"
                                    : "bg-gray-100 rounded-md p-2 border hover:bg-indigo-500 hover:text-white"
                            }
                        >
                            {link.linkIcon}
                        </span>
                        <span> {link.linkText} </span>
                    </NavLink>
                ))}
            </div>
            <div className='mt-auto'>
                <hr className='my-3' />
                {sidenavLinks2.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.link}
                        className='hover:bg-gray-100 flex items-center gap-4 px-2 py-2 my-2 '
                    >
                        <span className='bg-gray-100 rounded-md p-2 border hover:bg-indigo-500 hover:text-white '>
                            {link.linkIcon}
                        </span>
                        <span> {link.linkText} </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Sidenav;
