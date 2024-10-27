import { CallToAction } from "@/components/home/CallToAction";
import { Video } from "@/components/Video";
import { Container } from "react-bootstrap";
import { Expectations } from "@/components/home/Expectations";
import { HistoricalVideo } from "@/components/HistoricalVideo";
import { MyForm } from "@/components/home/MyForm";
import { HistorySwiper } from "@/components/home/HistorySwiper";

export const metadata = {
    title: {
        default: "Dcastalia",
    },
    description: "Dcastalia is a software development company in Bangladesh that started its journey with the aim to deliver innovative result-driven software solutions.",
};

export default async function Home() {
    
    return (
        <>
        <Video />
        <CallToAction />
        <Expectations />
        <HistoricalVideo />
        <HistorySwiper />
        <MyForm />
        </>
    );
};


