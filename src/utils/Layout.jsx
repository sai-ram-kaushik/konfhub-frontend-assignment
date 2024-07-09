import React from "react";
import Navbar from "../components/Navbar";
import data from "../data/navbar.json";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navbar={data.navbar} />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
