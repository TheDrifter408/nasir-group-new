"use client";
import styled from "styled-components"
import Image from "next/image";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Transition } from "@/styles/globalStyleVars";

export const Header = () => {
    const [isOpen,setOpen] = useState(false);
    return(
            <StyledHeader isOpen={isOpen}>
                <div className="image-container">
                    <Image width={245} height={50} className="image-container-image" src="/images/static/Logo.svg" alt="Nasir Group Logo" />
                </div>
                <div className="d-lg-none dm-sm-block">
                    <StyledButton onClick={() => setOpen(!isOpen)}>
                        <span />
                        <span />
                        <span />
                    </StyledButton>
                </div>
                <div className="d-sm-none d-lg-block">
                    <StyledNavDesktop>
                        <ul className="menu-inner">
                            <li className="menu-inner-item">
                                <a href="">Home</a>
                            </li>
                            <li className="menu-inner-item"><a href="">About Us</a></li>
                            <li className="menu-inner-item"><a href="">Concerns</a></li>
                            <li className="menu-inner-item"><a href="">News & Media</a></li>
                            <li className="menu-inner-item"><a href="">Career</a></li>
                            <li className="menu-inner-item"><a href="">Contact Us</a></li>
                        </ul>    
                    </StyledNavDesktop>
                </div>  
                <MobileMenu isOpen={isOpen} />
            </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display:flex;
    width:100%;
    margin-inline:auto;
    padding: 10px 0;
    align-items: center;    
    justify-content: space-between;
    z-index:10;
    &::after {
        content:'';
        position:absolute;
        width: 100%;
        left:0;
        top:0;
        z-index:-1;
        height: ${props => props.isOpen ? '80px': '0px'};
        background-image:radial-gradient(252% 110.16% at 24.49% 80.21%, #00167D 0%, #001A94 100%);
        transition: height 500ms ${Transition};
        
    }
    .image-container {
        width: max-content;
        position:relative;
        .image {
            left:0;
            top:0;
        }
    }
    @media screen and (max-width:640px){
        border-bottom: 1px solid white;
    }
`

const StyledButton = styled.button`
    border-radius: 50%;
    background-color: white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:3px;
    flex-grow:0;
    height:50px;
    width:50px;
    border:none;
    flex-shrink: 0;
    flex-grow: 0;
    span:nth-of-type(1){
        width:50%;
        border-radius:20px;
        height: 1px;
        background-color: black;
    }
    span:nth-of-type(2){
        width:50%;
        border-radius:20px;
        height: 1px;
        background-color: black;
    }
    span:nth-of-type(3){
        width:50%;
        border-radius:20px;
        height: 1px;
        background-color: black;
    }    
`


const StyledNavDesktop = styled.nav`
    width:100%;
    height:100%;
    z-index: 20;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: color 300ms ease-in;
    .menu-inner {
        display:flex;
        gap: 15px;
    }
    .menu-inner-item {   
        color:white;
    }
    .menu-inner-item a {
        color:white;
        font-size:1rem;
        font-weight: 600;
        &:hover {
            color:blue;
        }
        &:visited {
            color:white;
        }
    }
`