import React from "react";
import {FooterStyled} from "./styles/Footer.styled";

export const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <FooterStyled>
            <span>
                <h5>Cocktails &copy;</h5>
            </span>
            <span>
                <h5>{date}</h5>
            </span>
        </FooterStyled>
    )
}