'use client';
import { Transition } from "@/styles/globalStyleVars";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styled from "styled-components"

export const HistoricalVideo = () => {
    return(
        <StyledSection>
            <Container>
                <div className="image-ctn">
                <div className="play-icon-ctn">
                    <svg className="play-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="white"/>
                        <path d="M52 38.2679C53.3333 39.0378 53.3333 40.9623 52 41.7321L35.5 51.2583C34.1667 52.0281 32.5 51.0659 32.5 49.5263L32.5 30.4737C32.5 28.9341 34.1667 27.9719 35.5 28.7417L52 38.2679Z" fill="#001A94"/>
                    </svg>
                </div> 
                <Image className="image" width={1000} height={1000} src="/images/static/historical_image.jpg" alt="Our History" />
                </div>
            </Container>
        </StyledSection>
    )
}



const StyledSection = styled.section`
    padding-top:50px;
    margin-block: 50px;
    overflow:hidden;
    background: rgb(243, 243, 243);
    backdrop-filter: blur(15px);
    .image-ctn {
        height:100%;
        width:100%;
        position:relative;
        cursor:pointer;
        .play-icon-ctn {
            position:absolute;
            border:2px solid white;
            border-radius: 50%;
            top:50%;
            left:50%;
            width:80px;
            height:80px;
            transform:translate(-50%,-50%);
            transition: all 500ms ${Transition};
            opacity:0.5;
            .play-icon {
                width:100%;
            }
        }
        &:hover {
            .play-icon-ctn {
                width:150px;
                height:150px;
                opacity:0.1;
            }
        }
    }
    .image {
        width:100%;
        height:100%;
    }
`