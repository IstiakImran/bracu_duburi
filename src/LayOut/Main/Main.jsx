import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import './Main.css'

const Main = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="Main">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>

        </>
    );
};

export default Main;