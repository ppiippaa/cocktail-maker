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
        </StyledLayout>
    );
};

export default Layout;