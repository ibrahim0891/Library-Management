 

const SidenavLinks = ({linkText, linkIcon, link}) => {
  return (
    <a href={link} className='hover:bg-gray-100 flex items-center gap-4 px-2 py-2 my-2 '>
        <span className="bg-gray-100 rounded-md p-2 border hover:bg-indigo-500 hover:text-white ">{linkIcon}</span>
        <span>{linkText}</span>
    </a>
  )
}

export default SidenavLinks;