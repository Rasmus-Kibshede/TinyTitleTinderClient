import { Outlet } from "react-router-dom";
import MainMenuNavBar from "./MainMenuNavBar";


import React from 'react'

function Layout() {
    return (
        <div id="wrapper">
            <MainMenuNavBar />
            <Outlet />
        </div>
    );
}

export default Layout

