"use client";
import { title } from "@/styles/globalStyleVars";
import { Col, Row,Container } from "react-bootstrap";
import styled from "styled-components";
import { MyButton } from "../MyButton";

export const CallToAction = () => {
    return (
        <StyledSection>
            <Container>
            <Row className="align-items-center">
                <Col sm={12} lg={6}>
                    <StyledH1>
                        Manufacturing excellence across industries
                    </StyledH1>
                </Col>
                <Col>
                    <StyledSliderOuter>
                        <StyledSliderContainer>
                            <StyledSlider>
                                <p className="slider-text">
                                Exemplifying leadership in manufacturing, this organisation delivers high-quality products across various sectors with a commitment to innovation and sustainability. 
                                </p>
                                <div className="slider-pages">
                                    <span className="slider-page" />
                                    <span className="slider-page" />
                                    <span className="slider-page" />
                                </div>
                                <MyButton text={"Our values"} />
                            </StyledSlider>
                        </StyledSliderContainer>
                    </StyledSliderOuter>
                </Col>
            </Row>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    padding-top: 4rem;
    height:90vh;
    font-family:${title};
`

const StyledH1 = styled.h1`
    font-weight: bold;
    color: white;
    font-size:2.625rem;
    @media screen and (min-width:1024px) {
        font-size:5rem;
    }
`
const StyledSliderOuter = styled.div`
    position:relative;
    height:300px;
`

const StyledSliderContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0px;
    right:0px;
    @media screen and (min-width:768px){
        width:425px;
    }
`

const StyledSlider = styled.div`
    width:100%;
    height:100%;
    padding: 2.5rem;
    display:grid;
    gap:10px;
    align-items: center;
    justify-content: start;
    background-image:radial-gradient(252% 110.16% at 24.49% 80.21%, #00167D 0%, #001A94 100%);
    backdrop-filter: blur(15px);
    color:white;
    .slider-pages {
        display:flex;
        gap:5px;
        .slider-page {
            width: 10px;
            height:10px;
            border-radius:50%;
            border: 1px solid white;
        }
    }
`
const Button = styled.button`
    padding:0.5rem 0.5rem;
    border:none;
    width: 40%;
    color:blue;
`