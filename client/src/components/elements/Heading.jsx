


let Heading = ({ text, icon }) => {
    return (
      <h1 className='font-bold text-3xl text-gray-800 flex items-center'>
        {icon && <span className='mr-2'>{icon}</span>}
        <span>{text}</span>
      </h1>
    );
}

export default Heading;