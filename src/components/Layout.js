import React from 'react';
import {StyledLayout} from "./styles/Layout.styled";
import {Nav} from "./Nav";
import {Footer} from "./Footer";


const Layout = ({children}) => {



    return (
        <StyledLayout>
            <Nav />
            <div>
            {children}
            </div>
            <Footer />
            // ADD CUSTOM FOOTER COMPONENT HERE
        </StyledLayout>
    );
};

export default Layout;