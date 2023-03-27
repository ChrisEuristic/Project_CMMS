import * as React from 'react';

import { Route, Routes } from "react-router-dom";
import RouterNv from './RouterNv';
import Home from './Home';
import JoinForm from './Signup/JoinForm';

const RouterMain = () => {
    return (
        <>
            <RouterNv />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<JoinForm />} />
            </Routes>
        </>
    );
}

export default RouterMain;