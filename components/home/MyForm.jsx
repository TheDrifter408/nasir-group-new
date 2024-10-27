"use client";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import { MyButton } from "../MyButton";

export const MyForm = () => {
    const [formInput,setFormInput] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        message:''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput({
            ...formInput,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        for(const vals of form){
            console.log(vals);
        }
    }

    return(
        <StyledSection>
            <Container>
            <Row>
                <Col sm={12} lg={3}>
                    <div className="form-title-ctn">
                        <h1>Get in touch</h1>
                        <p>Send us a note to get the conversation started - or click on an office below for more information on our locations.</p>
                    </div>
                </Col>
                <Col lg={9}>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-parent">
                            <div className="input-ctn">
                                <label htmlFor="firstName">
                                    First Name *
                                </label>
                                <input id="firstName" name="firstName" type="text" placeholder="John" value={formInput.firstName} onChange={handleChange} />
                            </div>
                            <div className="input-ctn">
                                <label htmlFor="lastName">
                                    Last Name *
                                </label>
                                <input id="lastName" name="lastName" type="text" placeholder="Doe" value={formInput.lastName} onChange={handleChange} />
                            </div>
                            <div className="input-ctn">
                                <label name="email">
                                    Email *
                                </label>
                                <input id="email" name="email" type="email" placeholder="your@gmail.com" value={formInput.email} onChange={handleChange} />
                            </div>
                            <div className="input-ctn">
                                <label htmlFor="phoneNumber">
                                    Phone Number *
                                </label>
                                <input id="phoneNumber" name="phoneNumber" type="text" placeholder="01........" value={formInput.phoneNumber} onChange={handleChange} />
                            </div>
                            <div className="input-ctn-textarea">
                                <label htmlFor="message">
                                    Message *
                                </label>
                                <textarea id="message" name="message" placeholder="My Message is" value={formInput.message} onChange={handleChange} cols="30" />
                            </div>
                        </div>
                        <MyButton text={"Submit Message"} type="submit" bgBlue fontWhite />
                    </form>
                </Col>
            </Row>
            </Container>
        </StyledSection>  
    );
}

const StyledSection = styled.section`
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color:black;
    .form-title-ctn {
        display:grid;
        gap:30px;
        padding-bottom:40px;
        h1 {
            font-weight:700;
            font-size:2rem;
            color:#00167D;
        }
        p {
            font-weight:400;
            font-size: 1rem;
        }
        @media screen and (min-width:768px){
            h1 {
                font-size: 3.75rem;
            }
        }
    }
    .form {
        display:grid;
        margin-bottom:15px;
        .input-parent {
            display:flex;
            align-items: start;
            flex-wrap: wrap;
            gap:20px;
        }
        .input-ctn {
            flex-shrink:0;
            min-width:100%;
            input {
                display:block;
                width:100%;
                border-top:none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid black;
                padding-bottom: 10px;
            }
            input:focus, textarea:focus {
                outline:none;
            }
            @media screen and (min-width:768px){
                min-width:48%;
            }
        }
        .input-ctn-textarea {
            min-width:100%;
            textarea {
                min-height:170px;
                border-top:none;
                border-left: none;
                border-right: none;
                border-bottom: 1px solid black;
                padding-bottom: 10px;
                min-width:100%;
                flex-shrink: 0;
            }
            textarea:focus {
                outline:none;
            }
        }
    }
`