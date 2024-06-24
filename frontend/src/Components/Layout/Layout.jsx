import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='min-h-screen scroll-smooth bg-black text-white text-2xl'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
