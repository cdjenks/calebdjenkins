import React from "react";
import Footer from "./footer.js";

function Layout({ children }) {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;