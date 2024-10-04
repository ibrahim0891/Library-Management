




import React from "react";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
            <a href='/' className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Go to Home</a>
        </div>
    );
}

export default NotFound;
