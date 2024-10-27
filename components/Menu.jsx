"use client"
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {gsap, TimelineLite} from "gsap";
import Link from "next/link";
import {Black, Transition} from "@/styles/globalStyleVars";
import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin';
import { usePathname } from 'next/navigation'

const MyComponent = () => {
    const pathName = usePathname()
    if (typeof window !== "undefined") {
        gsap.registerPlugin(CSSRulePlugin);
    }
    const [pageTitle, setPageTitle] = useState();

    useEffect(() => {
        const pathName = location.pathname;
        if (pathName === '/') {
            setPageTitle("Home")
        }
        if (pathName === '/about') {
            setPageTitle("About")
        }
        if (pathName.startsWith("/project")) {
            setPageTitle("Portfolio")
        }
        if (pathName.startsWith('/career')) {
            setPageTitle("Career")
        }
        if (pathName === '/contact') {
            setPageTitle("Contact")
        }
        if (pathName.startsWith("/services")) {
            setPageTitle("Services")
        }
    }, [pathName])

    // menu action
    useEffect(() => {
        // main menu toggle down
        const tl = new TimelineLite();
        const ti = new TimelineLite();
        const tl2 = new TimelineLite();
        document.querySelector('.menu-desktop__items__top').addEventListener('click', function () {
            if (!document.querySelector('.menu-desktop').classList.contains("menu-slided")) {
                document.querySelector('.menu-desktop').classList.add("menu-slided")
                tl.to(".menu-desktop__items", .4, {
                    height: "auto",
                    // overflow: "auto",

                }).to(".open-menu, .menu-desktop__items__slide__subs, .as-join", 1, {
                    opacity: 1,
                    y: 0,
                    stagger: .15,
                    ease: "cubic-bezier(.22,.6,.36,1)"
                }, "-=.2")
            } else {
                tl.to(".open-menu, .menu-desktop__items__slide__subs, .as-join", .3, {
                    opacity: 0,
                    y: "25px",
                    stagger: .1,
                    ease: "cubic-bezier(.22,.6,.36,1)"
                },).to(".menu-desktop__items", .4, {
                    height: "48px"
                }, "-=.5")
                document.querySelector('.menu-desktop').classList.remove("menu-slided")
            }
        });

        // close manu on outside click
        window.addEventListener("click", (e) => {
            if (document.querySelector('.menu-desktop').classList.contains("menu-slided")) {
                if (!e.target.matches(".menu-desktop__items, .menu-desktop__items div,.menu-desktop__items span,.menu-desktop__items__slide,.menu-desktop__items__top, .menu-desktop__items__top h4,.menu-desktop__items__slide ul,.menu-desktop__items__slide li,.menu-desktop__items__slide,.menu-desktop__items__slide img,.as-service-sub,.menu-desktop__items__slide__subs:not(.as-join),.menu-desktop__items__slide__subs h4,.menu-desktop__items__inner-sub, .menu-desktop__items__inner-sub ul, .menu-desktop__items__inner-sub li")) {
                    ti.to(".menu-desktop__items__inner-sub ul li", .1, {
                        y: "20px",
                        opacity: 0,
                    }).to(".menu-desktop__items__inner-sub ul", {
                        display: "none",
                    }, '-=.2').to('.menu-desktop__items__inner-sub', {
                        width: '0px',
                        opacity: 0,
                        display: "none"
                    }, '-=.3').to(".open-menu, .menu-desktop__items__slide__subs, .as-join", .3, {
                        opacity: 0,
                        y: "25px",
                        stagger: .1,
                        ease: "cubic-bezier(.22,.6,.36,1)"
                    }, '-=.5').to(".menu-desktop__items", .4, {
                        height: "48px"
                    }, "-=.6")
                    document.querySelector('.menu-desktop').classList.remove("menu-slided")
                }
            }

        })


        // service sub menu action
        const getAllSubClick = document.querySelectorAll('.as-service-sub ul li');
        const getAllSub = document.querySelectorAll('.menu-desktop__items__inner-sub ul');
        getAllSubClick.forEach((e, i) => {
            e.addEventListener('click', function () {

                tl2.to(getAllSub, 0, {
                    display: 'none'
                }).to(".menu-desktop__items__inner-sub li", .2, {
                    y: 20,
                    opacity: 0,
                }).to('.menu-desktop__items__inner-sub', {
                    display: "block",
                    width: '340px',
                    opacity: 1
                }).to(getAllSub[i], {
                    display: "block",
                }, '-=.2').to(getAllSub[i].querySelectorAll('li'), {
                    y: 0,
                    opacity: 1,
                    stagger: .1
                }, '-=.4')
            });

        })

    }, [])


    //----- mobile menu action
    useEffect(() => {
        let getMobileMenuBar = document.querySelector('.main-menu-mobile');
        let getItemsParent = document.querySelector('.main-menu-mobile__items');

        let getItems = document.querySelectorAll('.main-item');

        let getBacks = document.querySelectorAll('.sub-menu-back');
        let getHamburgerClick = document.querySelector('#open-click')
        let getHamburgerCloseClick = document.querySelector('.menu-open #open-click')
        let tl = new TimelineLite();
        let tl2 = new TimelineLite();

        // menu open toggle
        getHamburgerClick.addEventListener('click', () => {
            if (document.querySelector('.main-menu-mobile').classList.contains('menu-open')) {
                if (document.querySelector('.main-item.active')) {
                    getItemsParent.classList.remove('active')
                    document.querySelector('.main-item.active').classList.remove('active')
                }

                tl.to(getItemsParent, {
                    duration: .2,
                    x: '100%'
                }).to(getItemsParent, {
                    duration: .2,
                    display: 'none'
                })
                getMobileMenuBar.classList.remove('menu-open')
                document.body.classList.remove('stop-scroll')
            } else {
                getMobileMenuBar.classList.add('menu-open')
                document.body.classList.add('stop-scroll')

                tl2.to(getItemsParent, {
                    duration: .2,
                    display: 'block',
                }).to(getItemsParent, {
                    duration: .2,
                    x: 0
                }, '-=.2')
            }


        })


        // sub menu toggle
        getItems.forEach(i => {
            i.addEventListener('click', () => {
                document.querySelector('.main-menu-mobile__items').scroll(0, 0)
                getItemsParent.classList.add('active')
                i.classList.add('active')
            })
        })

        getBacks.forEach(i => {
            i.addEventListener('click', (e) => {

                getItemsParent.classList.remove('active')
                i.parentNode.parentElement.classList.remove('active')
                e.stopPropagation()
            })
        })

        // on click a tag menu hide
        let getAlla = document.querySelectorAll('.main-menu-mobile a');
        getAlla.forEach(i => {
            i.addEventListener('click', (e) => {
                // e.stopPropagation();
                getMobileMenuBar.classList.remove('menu-open');
                document.body.classList.remove('stop-scroll');
                // console.log('have or not', document.querySelector('.main-item.active'))
                setTimeout(() => {
                    if (document.querySelector('.main-item.active')) {

                        getItemsParent.classList.remove('active')
                        document.querySelector('.main-item.active').classList.remove('active')
                    }
                }, 300)

                tl2.to(getItemsParent, {
                    duration: .3,
                    x: '100%'
                }).to(getItemsParent, {
                    duration: .3,
                    display: 'none'
                })
            })
        })

    }, [])


    return (
        <>
            {/*desktop menu*/}
            <StyledComponent className={'menu-desktop'}>
                <Container>
                    <Row>
                        <Col sm={6} className={"d-flex"}>
                            <div className="menu-desktop__logo">
                                <Link href={"/"}><img src="/images/static/logo.svg" alt=""/></Link>
                            </div>

                            <div className="menu-desktop__items">
                                <div className="menu-desktop__items__top">
                                    <h4>{pageTitle}</h4>
                                    <div className="menu-desktop__items__top__hamburger">
                                        <span/>
                                        <span/>
                                        <span/>
                                    </div>
                                </div>

                                {/*service sub menus*/}
                                <div className="menu-desktop__items__inner-sub">
                                    <ul>
                                        <li><Link href={"/services/detail"}>Insight & Strategy <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>SEO <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>Social Media Marketing <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>PPC <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                    </ul>

                                    <ul>
                                        <li><Link href={"/services/detail"}>Insight & Strategy 2<img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>SEO <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>Social Media Marketing <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>PPC <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                    </ul>

                                    <ul>
                                        <li><Link href={"/services/detail"}>Insight & Strategy 3<img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>SEO <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>Social Media Marketing <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                        <li><Link href={"/services/detail"}>PPC <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                    </ul>
                                </div>


                                <div className="menu-desktop__items__slide">
                                    <ul className={"open-menu"}>
                                        <li><Link href={"/"}>Home <img src="/images/static/arrow-right-white.svg"
                                                                     alt=""/></Link></li>
                                        <li><Link href={"/about"}>About Us <img src="/images/static/arrow-right-white.svg"
                                                                              alt=""/> </Link></li>
                                        <li><Link href={"/project"}>Portfolios <img
                                            src="/images/static/arrow-right-white.svg"
                                            alt=""/></Link></li>
                                    </ul>
                                    <div className="menu-desktop__items__slide__subs as-service-sub">
                                        <h4>Services</h4>
                                        <ul>
                                            <li>Insight & Strategy <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/>
                                            </li>
                                            <li>Brand Identity <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/></li>
                                            <li>Organic Marketing <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/></li>
                                            <li>Paid Marketing <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/></li>
                                            <li>Digital Design <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/></li>
                                            <li>Photography & Video <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/></li>
                                        </ul>
                                    </div>
                                    <div className="menu-desktop__items__slide__subs as-join">
                                        <ul>
                                            <li><Link href={"/career"}>Join us <img
                                                src="/images/static/arrow-right-white.svg"
                                                alt=""/></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={6} className={"menu-desktop__contact"}>
                            <Link href={"/contact"}>Contact us <img src="/images/static/arrow-right-white.svg"
                                                                  alt=""/></Link>
                        </Col>
                    </Row>
                </Container>
            </StyledComponent>
            {/*mobile menu*/}
            <StyledMobileMenu className='main-menu-mobile'>
                <div className="main-menu-mobile__bar">
                    <div className="main-menu-mobile__bar__logo">
                        <Link href={'/'}><img alt='' src={'/images/static/logo.svg'}/></Link>
                    </div>

                    <div className="main-menu-mobile__bar__hamburger" id='open-click'>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>

                <div className="main-menu-mobile__items">
                    <ul>
                        <li style={{marginBottom: "50px"}}><Link style={{width: '100%', display: 'block'}}
                                                                 href={'/invest'}><img
                            style={{maxWidth: 'calc(100vw - 30px)'}}
                            src="/images/static/contact-btn.svg"
                            alt=""/></Link>
                        </li>


                        <li>
                            <Link href={'/'}> Home</Link>
                        </li>
                        <li>
                            <Link href={'/about'}> About us</Link>
                        </li>
                        <li>
                            <Link href={'/project'}> Portfolios</Link>
                        </li>
                        <li>
                            <Link href={'/career'}> Join us</Link>
                        </li>

                        <h4>Services</h4>

                        <li className='main-item'>
                            Insight & Strategy
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>
                        <li className='main-item'>
                            Brand Identity
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>
                        <li className='main-item'>
                            Organic Marketing
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>
                        <li className='main-item'>
                            Paid Marketing
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>
                        <li className='main-item'>
                            Digital Design
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>
                        <li className='main-item'>
                            Web Development
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>
                        <li className='main-item'>
                            Photography & Video
                            <ul>
                                <p className='sub-menu-back'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.207" height="11.414"
                                         viewBox="0 0 11.207 11.414">
                                        <g id="Group_4824" data-name="Group 4824" transform="translate(0.707 0.707)">
                                            <g id="Group_4823" data-name="Group 4823">
                                                <line id="Line_9" data-name="Line 9" x1="5" y2="5" fill="none"
                                                      stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                                <line id="Line_10" data-name="Line 10" x2="5" y2="5"
                                                      transform="translate(0 5)" fill="none" stroke="#fff"
                                                      stroke-linecap="round" stroke-width="1"/>
                                            </g>
                                            <line id="Line_11" data-name="Line 11" x1="10" transform="translate(0 5)"
                                                  fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
                                        </g>
                                    </svg>

                                    <strong>Go Back</strong>
                                </p>
                                {/*<h3>About Us</h3>*/}
                                <li><Link href={'/about#corporate-profile'}>Insight & Strategy</Link></li>
                                <li><Link href={'/about#mission'}>SEO</Link></li>
                                <li><Link href={'/about#leadership'}>Social Media Marketing</Link></li>
                                <li><Link href={'/about#awards'}>PPC</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </StyledMobileMenu>
        </>

    );
};

// desktop menu
const StyledComponent = styled.section`
  position: fixed;
  width: 100%;
  left: 0;
  top: 30px;
  z-index: 9;
  @media (max-width: 991px) {
    display: none;
  }
  //logo
  .menu-desktop__logo {
    height: 48px;
    width: 86px;
    background-color: rgba(38, 38, 38, .48);
    backdrop-filter: blur(80px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    border-radius: 8px;
  }

  //items
  .menu-desktop__items {
    width: 340px;
    height: 48px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: rgba(38, 38, 38, .48);
    backdrop-filter: blur(80px);
    border-radius: 8px;
    position: relative;
    z-index: 9;
    //overflow-y: hidden;
    //overflow-x: visible !important;

    &__top {
      padding: 15px 28px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      cursor: pointer;

      h4 {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        color: #ffffff;
      }

      //hamburger
      &__hamburger {
        width: 15px;
        height: 10px;
        position: relative;
        margin: auto 0;

        span {
          height: 1px;
          background-color: #FFF;
          position: absolute;
          right: 0;
          width: 8px;
          transition: 1s ${Transition};

          &:nth-of-type(1) {
            top: 0;
          }

          &:nth-of-type(2) {
            width: 15px;
            top: 5px;
          }

          &:nth-of-type(3) {
            top: 10px;
            left: 0;
          }

          &:not(:nth-last-of-type(1)) {
            margin-bottom: 5px;
          }
        }
      }

      &:hover {
        .menu-desktop__items__top__hamburger {
          span {
            width: 16px;
          }
        }
      }
    }

    //service sub menu 
    &__inner-sub {
      position: absolute;
      //width: 340px;
      padding: 28px;
      border-radius: 10px;
      left: calc(100% + 30px);
      background-color: rgb(0, 0, 0);
      backdrop-filter: blur(80px);
      top: 210px;
      min-height: 300px;
      width: 0;
      overflow: hidden;
      opacity: 0;
      z-index: 9;
      display: none;
      //&:before {
      //  position: absolute;
      //  content: '';
      //  height: 100%;
      //  inset: 0;
      //  backdrop-filter: grayscale(100%);
      //  //background-color: rgb(0, 0, 0);
      //}

      ul {
        position: relative;
        z-index: 2;
        width: 100%;
        display: none;

        li {
          transform: translateY(20px);
          opacity: 0;

          a {
            font-size: 16px;
            line-height: 20px;
            position: relative;
            display: flex;
            width: 100%;
            padding: 5px 0;
            margin-bottom: 10px;
            color: #ffffff !important;

            img {
              padding-left: 5px;
              opacity: 0;
              transition: .6s ${Transition};
            }

            &:hover {
              img {
                opacity: 1;
                margin-left: 10px;
              }
            }
          }

          &:nth-of-type(1) {
            a {
              font-weight: 500;
              padding-bottom: 20px;
              border-bottom: 1px solid #707070;
              margin-bottom: 20px;

              img {
                opacity: 1;
                position: absolute;
                right: 0;
                top: 10px;

              }
            }
          }
        }
      }
    }

    //menu items
    &__slide {
      padding: 0px 28px 28px 28px;
      width: 100%;
      margin-top: 20px;
      overflow: hidden;
      height: 100%;

      ul {
        li {
          a {
            color: #FFF !important;
            font-size: 24px;
            line-height: 32px;
            display: flex;

            img {
              padding-left: 5px;
              opacity: 0;
              transition: .6s ${Transition};
            }

            &:hover {
              img {
                opacity: 1;
                margin-left: 10px;
              }
            }
          }

          &:not(:nth-last-of-type(1) a) {
            margin-bottom: 16px;
          }
        }
      }

      //inside sub menus
      &__subs {
        background-color: rgba(38, 38, 38, .48);
        backdrop-filter: blur(80px);
        padding: 24px;
        border-radius: 8px;

        h4 {
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
          padding-bottom: 15px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(112, 112, 112, 0.53);
        }

        ul {
          li {
            margin-bottom: 18px !important;
            position: relative;
            font-size: 16px;
            line-height: 20px;
            cursor: pointer;

            img {
              padding-left: 5px;
              opacity: 0;
              transition: .6s ${Transition};
            }

            a {
              font-size: 16px;
              line-height: 20px;
            }

            &:nth-last-of-type(1) {
              margin-bottom: 0 !important;
            }

            &:hover {
              img {
                opacity: 1;
                margin-left: 10px;
              }
            }
          }
        }

        &.as-join {
          margin-top: 16px;
          padding-top: 12px;
          padding-bottom: 12px;

          li {
            margin-bottom: 0px !important;

            a {
              position: relative;

              img {
                opacity: 1;
                right: 0;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0 !important;
              }

              &:hover {
                img {
                  right: -10px;
                }
              }
            }
          }
        }
      }

      //animation initial stage
      .open-menu, .menu-desktop__items__slide__subs, .as-join {
        transform: translateY(25px);
        opacity: 0;
      }
    }

  }

  //contact
  .menu-desktop__contact {
    display: flex;
    justify-content: flex-end;

    a {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      color: #FFFFFF !important;
      background-color: rgba(38, 38, 38, .48);
      backdrop-filter: blur(80px);
      width: 180px;
      height: 48px;
      display: flex;
      align-items: center;
      position: relative;
      padding: 0 24px;
      border-radius: 8px;

      img {
        position: absolute;
        right: 24px;
        transition: 1s ${Transition};
      }

      &:hover {
        img {
          right: 18px;
        }
      }
    }
  }

  //after menu slider style change
  &.menu-slided {
    .menu-desktop__items__top__hamburger {
      span {
        width: 16px;

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:nth-of-type(1) {
          transform: rotate(43deg);
          transform-origin: left;
        }

        &:nth-of-type(3) {
          transform: rotate(-45deg) translate(-1px);
          transform-origin: left;
        }
      }
    }
  }


`;

// mobile menu
const StyledMobileMenu = styled.section`
  position: fixed;
  width: 100%;
  z-index: 99999;
  top: 0;
  left: 0;
  //height: 100vh;
  //overflow-x: hidden;
  //overflow-y: auto;
  //background-color: #fff;
  //display: none;
  //transition: all .4s ease;

  @media (min-width: 992px) {
    display: none;
  }

  .main-menu-mobile__bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-bottom: 1px solid rgba(242, 242, 242, 0.5);
    padding: 0 25px;
    position: fixed;
    top: 20px;
    right: 15px;
    left: 15px;
    z-index: 999;
    transition: all .4s ease;
    height: 50px;
    background-color: rgba(38, 38, 38, 0.48);
    backdrop-filter: blur(80px);
    border-radius: 8px;


    &__hamburger {
      width: 15px;
      height: 10px;
      position: relative;
      margin: auto 0;

      span {
        height: 1px;
        background-color: #FFF;
        position: absolute;
        right: 0;
        width: 8px;
        transition: 1s ${Transition};

        &:nth-of-type(1) {
          top: 0;
        }

        &:nth-of-type(2) {
          width: 15px;
          top: 5px;
        }

        &:nth-of-type(3) {
          top: 10px;
          left: 0;
        }

        &:not(:nth-last-of-type(1)) {
          margin-bottom: 5px;
        }
      }
    }


  }


  .main-menu-mobile__items {
    padding: 0 15px;
    position: relative;
    transform-origin: top left;
    transition: all .3s ease-out;
    //display: none;
    height: calc(${`100svh`});
    //margin-top: 170px;
    //overflow-x: hidden;
    //overflow-y: auto;
    overflow-y: auto;
    padding-bottom: 50px;
    padding-top: 120px;
    overflow-x: hidden;
    background-color: ${Black};
    width: 200vw;
    transform: translateX(100%);
    display: none;

    ul {
      width: 100%;

      h4 {
        font-size: 28px;
        line-height: 32px;
        color: #ffffff;
        margin-top: 60px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.3);
        width: calc(100vw - 30px);
        margin-bottom: 20px;
      }

      li {
        text-transform: capitalize;
        display: block;
        width: 100%;
        color: #FFFF;
        font-size: 28px;
        line-height: 32px;
        //position: relative;

        //&:nth-of-type(1) {
        //  margin-bottom: 50px !important;
        //}

        &.main-item {
          //border-bottom: 1px solid rgba(198, 198, 198, 0.5);
          //padding-bottom: 15px;

          span {
            content: '';
            width: calc(100vw - 30px);
            background-color: rgba(198, 198, 198, 0.5);
            //position: absolute;
            //bottom: 0;
            //left: 0;
            height: 1px;
            display: block;
            margin-top: 10px;
            position: relative;

            img {
              position: absolute;
              right: 0;
              bottom: 15px;
            }
          }

          &:nth-last-child(1) span {
            background-color: transparent;
          }
        }

        &:hover {
          color: #FFF;
        }

        &:not(:nth-last-of-type(1)) {
          margin-bottom: 20px;

        }

        a {
          color: #FFF;
          font-size: 28px;
          line-height: 32px;
          font-weight: 400;

        }

        &:nth-child(n+7) {
          font-size: 16px;
          line-height: 20px;
        }

        //sub menus
        ul {
          left: 0;
          list-style: none;
          margin: 0;
          position: absolute;
          top: 120px;
          padding: 0 15px;
          //height: 100vh;
          opacity: 0;
          transform: translate3d(100vw, 0, 0);
          transition: all .3s ease;
          //padding-bottom: 40px;
          width: 100vw;
          padding-bottom: 25px;

          p {
            margin-bottom: 35px;


            strong {
              border-color: transparent !important;
              font-size: 16px;
              color: #FFF;
              padding-left: 20px;
              line-height: 20px;
              font-weight: 400;
            }

          }

          h3 {
            font-size: 30px;
            line-height: 40px;
            font-weight: 400;
            margin: 0;
            text-transform: capitalize;
            padding-bottom: 20px;
            border-bottom: 1px solid #FFF;
            margin-bottom: 40px;
          }

          li {
            a {
              font-size: 16px;
              line-height: 20px;
              text-transform: capitalize;
              display: block;
              width: 100%;
              margin-bottom: 20px;
            }

            &:nth-of-type(1) a {
              font-size: 28px;
              line-height: 32px;
              border-bottom: 1px solid rgba(112, 112, 112, 0.3);
              padding-bottom: 20px;
            }
          }
        }

        &.active {
          ul {
            opacity: 1;
            z-index: 2;
          }
        }

      }
    }

    &.active {
      transform: translate3d(-100vw, 0, 0) !important;
    }
  }

  //toggle action
  &.menu-open {
    .main-menu-mobile__bar {
      background-color: #3C3C3B;


      &__hamburger {
        span {
          width: 16px;

          &:nth-of-type(2) {
            opacity: 0;
          }

          &:nth-of-type(1) {
            transform: rotate(43deg);
            transform-origin: left;
          }

          &:nth-of-type(3) {
            transform: rotate(-45deg) translate(-1px);
            transform-origin: left;
          }
        }
      }
    }
  }
`;

export default MyComponent;
