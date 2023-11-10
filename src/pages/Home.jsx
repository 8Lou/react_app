
import Banner from "../components/Banner";

import bannersData from "../assets/data/banners.json";

export function Home() {
    return <>
        <Banner {...bannersData[0]} pattern={false} bgPos="70% 40%" />
    </>
}