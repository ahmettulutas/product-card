import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout:React.FC<{children:React.ReactElement}> = ({ children }) => (
  <div className="flex flex-col h-screen dark:bg-gray-900 text-gray-500 dark:text-gray-400">
    <Header />
    <main className="flex-1 overflow-y-auto">
      {children}
    </main>
    <Footer />
  </div>

);

export default Layout;