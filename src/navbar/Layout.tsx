import React from "react";
import './styleNavbar.css';
import NavBar from "./NavBar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
        return <>
                <NavBar />
                <Outlet />
                <Footer />
        </>
}
