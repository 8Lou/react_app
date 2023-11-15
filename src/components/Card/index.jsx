import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Card = ({
    _id,
    name,
    price,
    discount,
    pictures,
    tags,
    likes,
    reviews,
    available,
    stock
}) => {

    const tag = tags[tags.length - 1];
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    }




    return <Link className="card" to={`/product/${_id}`} >
        {tag && <button
            className={`card__btn card__tag card__tag_${tag}`}

        >{tag}</button>}

        <span className="card__img" style={imgStyle}></span>
        <span className="card__content">

            <span className="card__title">{name}</span>
            <span className="card__rate">{reviews.length}</span>
            <span className="card__price">{price}</span>
            <span className="card__buttons">
                <button className='card__btn card__btn_basket'>Buy</button>
                <button className='card__btn'>Like</button>
            </span>
        </span>
    </Link>
}

export default Card;