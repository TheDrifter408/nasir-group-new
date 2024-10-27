"use client";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from "styled-components";
import Image from "next/image";

const slides = [
    {
        id:1,
        title:"Expansion into Renewable Energy",
        year:"2024",
        image:"/images/static/history/renewable-energy.webp",
        body:"Nasir Group launches its renewable every division, focusing on solar and wind power projects across the country."
    },
    {
        id:2,
        title:"Digital Transformation Initiative",
        year:"2022",
        image:"/images/static/history/transformation-initiative.webp",
        body:"Implementation of group-wide digital transformation strategy, enhancing operational efficiency and customer experience."
    },
    {
        id:3,
        title:"International Market Entry",
        year:"2019",
        image:"/images/static/history/international-market.webp",
        body:"Nasir Group expands operations into Southeast Asian markets, marking its first major international venture."
    },
    {
        id:4,
        title:"Innovation Hub Launch",
        year:"2017",
        image:"/images/static/history/innovation-hub.webp",
        body:"Establishment of the Nasir Innovation Hub, fostering technological advancements and start-up collaborations."
    },
    {
        id:5,
        title:"Diversification into Tech Sector",
        year:"2014",
        image:"/images/static/history/transformation-initiative.webp",
        body:"Nasir Group enters the technology sector with the acquisition of a leading software development company."
    },
    {
        id:6,
        title:"Innovation in glass production",
        year:"2012",
        image:"/images/static/history/transformation-initiative.webp",
        body:"Founded on the principles of integrity and excellence, Nasir Group has grown into a multifaceted conglomerate, embracing cutting-edge technology."
    },
]

export const HistorySwiper = () => {
    return(
        <StyledSection>
            <Container>
                <h1 className="title">History</h1>
                <Swiper slidesPerView={1} spaceBetween={50} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                    {
                        slides.map((slider) => (
                            <SwiperSlide key={slider.id}>
                        <div className="swiper-card">
                            <h1>{slider.year}</h1>
                            <div className="swiper-card-inner">
                                <div className="swiper-card-image">
                                <Image src={slider.image} height={300} width={800} alt={slider.title} />
                                </div>
                                <p className="swiper-card-body">
                                    {slider.body}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height:90vh;
    .title {
        color: #001A94;
        font-size: 3.75rem;
        font-weight:700;
    }
    .swiper-card {
        display:flex;
        align-items:start;
        padding:0;
        border: 1px solid blue;
        h1 {
            
        }
        .swiper-card-inner {
            display:grid;
            height:400px;
        }
        .swiper-card-image {
            width:100%;
            image {
                display:block;
                width:100%;
                height:100%;
            }
        }
    }
`