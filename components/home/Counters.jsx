'use client';
import Image from "next/image";
import CountUp from "react-countup";
import styled from "styled-components";

export const Counters = () => {
    return(
        <StyledFlex>
            <StyledImageContainer>
            <Image className="image" width={800} height={800} src="/images/static/yearsOfExp.png" />
            </StyledImageContainer>
            <StyledCounterContainer>
                <Counter className="counter">
                    <h1 className="counter-text" >
                        <CountUp className="count" end={25} duration={5} />
                    </h1>
                    <p className="counter-caption">years of experience</p>
                </Counter>
                <Counter className="counter">
                    <h1 className="counter-text" >
                        <CountUp className="count" end={11} duration={5} />
                    </h1>
                    <p className="counter-caption">sister concerns we have</p>
                </Counter>
                <Counter className="counter">
                    <h1 className="counter-text" >
                        <CountUp className="count" end={45000} duration={5} />
                    </h1>
                    <p className="counter-caption">
                        employees nationwide 
                    </p>
                </Counter>    
            </StyledCounterContainer>   
        </StyledFlex>
    )
}

const StyledFlex = styled.div`
    display:flex;
    margin-top:5rem;
    justify-content: space-between;
    background-color:white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    .counter {
        flex:1;
    }
`

const StyledImageContainer = styled.div`
    flex-shrink: 0;
    .image {
        display:none;
        width:100%;
        height:100%;
    }
    @media screen and (min-width:1024px){
        .image {
            display:block;
        }
    }
`

const StyledCounterContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    .counter:nth-of-type(1) {
        border-right: 1px solid rgba(0, 27, 148, 0.708);
    }
    .counter:nth-of-type(3) {
        border-top: 1px solid rgba(0, 27, 148, 0.708);
    }
`

const Counter = styled.div`
    min-width:50%;
    padding: 2rem;
    color:rgb(0, 26, 148);
    font-size:5rem;
    position:relative;
    .counter-text::after {
        content:"+";
        top:0;
        right:0;
        font-size:5rem;
    }
    .counter-text .count {
        font-size:5rem;
        font-weight:600;
    }
    .counter-caption {
        font-size: 1.125rem;
        font-weight: 400;
    }
    @media screen and (max-width:640px){
        .counter-text .count {
            font-size: 2.625rem;
        }
        .counter-text::after {
            font-size: 2.625rem;
        }
    }
`