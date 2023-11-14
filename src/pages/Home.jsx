import Banner from "../components/Banner";
import Adds from "../components/Adds"
import bannersData from "../assets/data/banners.json";
import Layout from "../components/Layout";
import addsData from "../assets/data/adds.json";
import News from "../components/News";
import MainCtx from "../context/main";
import { useContext } from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

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

        <Layout mb={1} dt={2} title="Новости Lenta.ru">

            {newsLenta.length > 0 &&
                <Carousel
                    data={newsLenta.map((el, i) =>
                        <News key={`new-${i}`} data={el} />)}
                    cnt={window.innerWidth < 1064 ? 1 : 2}
                />}
        </Layout>
    </>
}