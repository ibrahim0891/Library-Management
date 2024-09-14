import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [title, setTitle] = useState(" ");
  const [author, setAuthor] = useState(" ");

  const sendRequest = (e) => {
    e.preventDefault();
    let bookinfo = {
      title,
      author,
    };
    fetch("http://localhost:3000/addbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookinfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div>
        <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter book title"
          />
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter author name"
          />
          <button
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={(e) => sendRequest(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
name;
export default App;
