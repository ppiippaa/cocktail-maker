import React from "react";
import {StyledNav} from "./styles/Nav.styled";
import {Link} from "react-router-dom";
import {EmailOutline} from "@styled-icons/evaicons-outline/EmailOutline";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Facebook} from "@styled-icons/entypo-social/Facebook";
import {DrinksContext} from "../state/DrinksContext";
import { useContext} from "react";

export const Nav = () => {
    const { setDrinks } = useContext(DrinksContext)

    const handleNavigate = () => {
        setDrinks([])
    }

    return (
            <StyledNav>
                <ul>
                    <li>
                        <h1>Cocktail Maker</h1>
                    </li>
                    <li>
                        <Link onClick={handleNavigate} to='/favourites' className='link'>Favourites</Link>
                    </li>
                    <li>
                        <Link onClick={handleNavigate} to='/' className='link'>Search</Link>
                    </li>

                    <li>
                        <a href="#">
                            <EmailOutline size='40' className='link'/>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <Instagram size='40' className='link'/>
                        </a>


                    </li>
                    <li>
                        <a href="#">
                            <Facebook size='32' className='link'/>
                        </a>

                    </li>
                </ul>
            </StyledNav>
    )
}