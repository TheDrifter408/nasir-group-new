'use client';
import { Transition } from '@/styles/globalStyleVars';
import styled from 'styled-components';

const links = [
    "Home",
    "About Us",
    "Concerns",
    "News & Media",
    "Career",
    "Contact Us"
];

export const MobileMenu = ({ isOpen }) => {
    return (
        <StyledNavMobile isOpen={isOpen}>
                    <ul className="menu-inner">
                        {
                            links.map((link,idx) => (
                                <li key={idx} className="menu-inner-item">
                                    <div>
                                        <a href="">{link}</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </StyledNavMobile>
    )
}

const StyledNavMobile = styled.nav`
    position:absolute;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    overflow:hidden;
    display:hidden;
    width:100%;
    height:${(props) => props.isOpen ? '100vh' : '0vh'};
    transition: height 2s ${Transition};
    top:69px;
    bottom:0;
    left:0;
    z-index:10;
    background-image:radial-gradient(252% 110.16% at 24.49% 80.21%, #00167D 0%, #001A94 100%);
    .menu-inner {
        display:grid;
        .menu-inner-item {
            font-size: 0.875rem;
            padding: 1.5rem 1rem;
            font-weight: 600;
            color: white;
        }
        .menu-inner-item div {
            width:100%;
            padding: 0.85rem 0rem;
            border-bottom:2px solid #9f9fa4;
        }
        .menu-inner-item div a {
            text-decoration: none;
            color:white;
        }
        .menu-inner-item div a:visited {
            color:inherit;
        }
    }
`


