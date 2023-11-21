import Layout from "../components/Layout";
import { useState } from "react";

export function Favorites() {
    const [favorites, setFavorites] = useState([])
    return <>
        {favorites.length > 0 ? <Layout>
            <h1>Favorites</h1>
        </Layout> : <></>}
    </>
}
