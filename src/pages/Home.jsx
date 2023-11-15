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
import goodsData from "../assets/data/goods.json";

export function Home() {
    const { newsLenta } = useContext(MainCtx);
    return <>
        <Banner {...bannersData[2]} pattern={false} bgPos="70% 40%" />

        <Layout>
            <Adds {...addsData[0]} />
        </Layout>

        {goodsData.length > 0 && <Layout mb={2} dt={4} title='New'>
            {goodsData.map(el => <Card key={el._id} {...el} />)}
        </Layout>}

        <Layout dt={2}>
            <Adds {...addsData[1]} />
            <Adds {...addsData[2]} />
        </Layout>

        {goodsData.length > 0 && <Layout mb={2} dt={4} title='Popular'>
            {goodsData.map(el => <Card key={el._id} {...el} />)}
        </Layout>}

        <Layout>
            <Adds {...addsData[6]} />
        </Layout>

        {goodsData.length > 0 && <Layout mb={2} dt={4} title='Viewed'>
            {goodsData.map(el => <Card key={el._id} {...el} />)}
        </Layout>}

        <Layout mb={1} dt={2} title="Lenta.ru News">

            {newsLenta.length > 0 &&
                <Carousel
                    data={newsLenta.map((el, i) =>
                        <News key={`new-${i}`} data={el} />)}
                    cnt={window.innerWidth < 1064 ? 1 : 2}
                />}
        </Layout>
    </>
}