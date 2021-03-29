import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import TopLearn from "./Toplearn";


const App = () => {


    return (
        <BrowserRouter>
            <TopLearn/>
            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;
