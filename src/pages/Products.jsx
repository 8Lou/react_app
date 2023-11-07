import { useParams } from "react-router-dom";

export function Products({
    isFav = false,
    isCat = false
}) {
    const { name } = useParams()
    return <>
        {isFav && <h1>Favorite products</h1>}
        {isCat && <h1>Category Page "{name}"</h1>}
        {!isFav && !isCat && <h1>Catalog</h1>}
    </>
}