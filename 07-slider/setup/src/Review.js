import React from "react";
import { FaQuoteRight } from 'react-icons/fa';

function Review({review}) {
    const {id, position, image, name, title, quote} = review;
    return <article key={name} className={position}>
    <img src={image} alt={name} className="person-img"/>
    <h4>{name}</h4>
    <p className="title">{title}</p>
    <p className="text">{quote}</p>
    <FaQuoteRight className="right" />
  </article>
}

export default Review;