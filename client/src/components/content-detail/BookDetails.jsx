const bookDetails = [
    { label: "Author", value: "Michel Macarthy" },
    { label: "Publisher", value: "HarperCollins" },
    { label: "ISBN", value: "978-0-06-207350-1" },
    { label: "Published", value: "2007" },
    { label: "Pages", value: "320" },
    { label: "Language", value: "English" },
];

let BookDetails = () => {
    return (
        <table className='w-full border-collapse border-2 border-indigo-200 rounded-lg overflow-hidden'>
            <tbody>
                {bookDetails.map((detail, index) => (
                    <tr
                        key={index}
                        className={`${
                            index % 2 === 0 ? "bg-slate-100" : ""
                        } hover:bg-gray-100 transition duration-300`}
                    >
                        <td className='py-4 px-6 text-slate-600 font-semibold text-lg'>
                            {detail.label}
                        </td>
                        <td className='py-4 px-6 text-gray-800 font-medium text-md whitespace-nowrap overflow-hidden text-ellipsis'>
                            {detail.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BookDetails;
