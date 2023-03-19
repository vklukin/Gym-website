import React from "react";
import {Route, Routes} from "react-router-dom";

import IndexPage from "../pages/IndexPage/IndexPage";

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage/>}/>
        </Routes>
    )
}