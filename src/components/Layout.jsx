import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>

      <main className=" min-h-96" >{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
