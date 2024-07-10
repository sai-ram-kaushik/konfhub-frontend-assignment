import React from "react";
import Navbar from "../components/Navbar";
import data from "../data/navbar.json";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navbar={data.navbar} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
