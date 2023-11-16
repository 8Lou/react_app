import React, { useState } from "react";
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

    const navigate = useNavigate();
    const [isLike, setIsLike] = useState(likes.includes(3));
    const [inBasket, setInBasket] = useState(false);

    const tag = tags[tags.length - 1];
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    }

    const tagHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/products/category/${tag}`);
    }
    const basketHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setInBasket(!inBasket);
    }
    const likeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLike(!isLike);
    }


    return <Link className="card" to={`/product/${_id}`} >
        {tag && <button
            className={`card__btn card__tag card__tag_${tag}`}
            onClick={tagHandler}
        >{tag}</button>}

        <span className="card__img" style={imgStyle}></span>
        <span className="card__content">

            <span className="card__title">{name}</span>
            <span className="card__rate">{reviews.length}</span>
            <span className="card__price">{price}</span>

            <span className="card__buttons">
                {inBasket
                    ? <button
                        className="card__btn card__btn_basket"
                        onClick={basketHandler}
                    >
                        <i className="lni lni-cart-full" />
                        В корзине
                    </button>
                    : <button
                        className="card__btn card__btn_basket"
                        onClick={basketHandler}
                    >
                        <i className="lni lni-cart" />
                        В корзину
                    </button>
                }

                <button
                    className='card__btn'
                    onClick={likeHandler}
                >Like</button>
            </span>
        </span>
    </Link>
}

export default Card;