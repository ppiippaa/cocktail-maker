import React from "react";
import {StyledNav} from "./styles/Nav.styled";
import {Link} from "react-router-dom";
import {EmailOutline} from "@styled-icons/evaicons-outline/EmailOutline";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Facebook} from "@styled-icons/entypo-social/Facebook";

export const Nav = () => {
    return (
            <StyledNav>
                <ul>
                    <li>
                        <h1>Cocktails</h1>
                    </li>
                    <li>
                        <Link to='/favourites' className='navLink' class='link'>Favourites</Link>
                    </li>
                    <li>
                        <Link to='/' className='navLink' class='link'>Search</Link>
                    </li>

                    <li>
                        <a href="#">
                            <EmailOutline size='50' className='socialIcon'/>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <Instagram size='50' className='socialIcon'/>
                        </a>


                    </li>
                    <li>
                        <a href="#">
                            <Facebook size='40' className='socialIcon'/>
                        </a>

                    </li>
                </ul>
            </StyledNav>
    )
}