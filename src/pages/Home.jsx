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

    const favGoods = goodsData.filter(el => el.reviews.length !== 0).sort((a, b) => {
        const aSum = a.reviews.reduce((acc, el) => acc + el.rating, 0) / a.reviews.length;
        const bSum = b.reviews.reduce((acc, el) => acc + el.rating, 0) / b.reviews.length;
        return bSum - aSum;
    })

    const newGoods = [...goodsData].sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    });

    return <>
        <Banner {...bannersData[2]} pattern={false} bgPos="70% 40%" />

        <Layout>
            <Adds {...addsData[0]} />
        </Layout>

        {newGoods.length > 0 && <Layout mb={2} dt={4} title='New'>
            {newGoods.map(el => <Card key={el._id} {...el} />)}
        </Layout>}

        <Layout dt={2}>
            <Adds {...addsData[1]} />
            <Adds {...addsData[2]} />
        </Layout>

        {favGoods.length > 0 && <Layout mb={2} dt={4} title='Popular'>
            {favGoods.map(el => <Card key={el._id} {...el} />)}
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