import "./index.css";
import { Banners as BannerImg } from "../../assets/img";
import Layout from "../Layout";

const Banner = ({
    text,
    bg,
    title = "BeerFood",
    main = true,
    pattern = true,
    bgPos = 'center'
}) => {
    const bannerStyle = {
        backgroundImage: `url(${BannerImg[bg]})`,
        backgroundSize: pattern ? "contain" : "cover",
        backgroundPosition: bgPos
    }

    return <div className="banner" style={bannerStyle}>
        <Layout gap="small">
            {main
                ? <h1 className="banner__caption">{title}</h1>
                : <h2 className="banner__caption">{title}</h2>}
            <div className="banner__text">{text}</div>
        </Layout>
    </div>
}

export default Banner;