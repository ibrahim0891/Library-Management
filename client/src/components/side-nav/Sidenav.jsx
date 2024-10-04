

import SidenavLinks from "./SidenavLinks";
import SidenavLogo from "./SidenavLogo"; 
import constants from "../../constents/constents";
import { House , Book , BookOpen , Star , BookmarkSimple , Sparkle  , Gear , Question , Info} from "phosphor-react";

let sidenavLinks = [
    {
        linkText: "Home",
        linkIcon: <House/>,
        link: "/",
    },
    {
        linkText: "Category",
        linkIcon: <Book />,
        link: "/",
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
        <div className='bg-white p-6 pt-6 shadow-md gap-4 sticky top-0 h-screen'>
            <SidenavLogo text={constants.logoText}> </SidenavLogo> 
            {sidenavLinks.map((link, index) => (
                <SidenavLinks
                    key={index}
                    linkText={link.linkText}
                    linkIcon={link.linkIcon}
                    link={link.link}
                />
            ))} 
            {sidenavLinks2.map((link, index) => (
                <SidenavLinks
                    key={index}
                    linkText={link.linkText}
                    linkIcon={link.linkIcon}
                    link={link.link}
                />
            ))}
        </div>
    );
};

export default Sidenav;
