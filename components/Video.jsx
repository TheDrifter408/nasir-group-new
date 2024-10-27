"use client";
import styled from "styled-components"

export const Video = () => {
    return (
        <VideoContainer>
            <video className="video" muted autoPlay loop>
                <source src="/images/home_video.mp4" type="video/mp4" />
            </video>
        </VideoContainer>
    )
}

const VideoContainer = styled.div`
    position: absolute;
    width:100vw;
    height:100vh;
    top:0;
    padding:0;
    margin:0;
    z-index: -20;
    .video {
        width:100%;
        height:100%;
        object-fit: cover;
    }
`