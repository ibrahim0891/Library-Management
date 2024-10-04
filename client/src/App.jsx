import { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteContent from "./pages/FavoriteContent";
import MainContent from "./pages/MainContent";
import ContentCatagory from "./pages/ContentCatagory";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<MainContent />} />
                    <Route path='favorites' element={<FavoriteContent />} />
                    <Route path='/catogory' element={<ContentCatagory />} />
                    <Route path="*" element={<NotFound/> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
