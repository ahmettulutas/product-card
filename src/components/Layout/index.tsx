import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <div className="grid grid-rows-layout h-screen dark:bg-gray-900 text-gray-500 dark:text-gray-400">
    <Header />
    <main className="mt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
