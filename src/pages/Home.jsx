import Banner from "../components/Banner";
import Adds from "../components/Adds"

import bannersData from "../assets/data/banners.json";
import Layout from "../components/Layout";
import addsData from "../assets/data/adds.json";
import News from "../components/News";
import MainCtx from "../context/main";
import { useContext } from "react";

export function Home() {
    const { news, newsLenta } = useContext(MainCtx);
    return <>
        <Banner {...bannersData[0]} pattern={false} bgPos="70% 40%" />

        <Layout>
            <Adds {...addsData[0]} />
        </Layout>

        <Layout dt={2}>
            <Adds {...addsData[1]} />
            <Adds {...addsData[2]} />
        </Layout>

        <Layout mb={2} dt={4}>
            {news.length > 0 && news.map((el, i) =>
                <News key={`new-${i}`} data={el} isTitled={true} />)}
        </Layout>

        <Layout mb={2} dt={4}>
            {newsLenta.length > 0 < 10 && newsLenta.map((el, i) =>
                <News key={`new-${i}`} data={el} />)}
        </Layout>
    </>
}