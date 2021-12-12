import React from "react";
import Review from "./Review";

function Reviews({reviews, index}) {
    console.log(index);
    return <>
        {
        reviews.map((person, personIndex) => {
          const {id, image, name, title, quote} = person;
          let position = "nextSlide";
          if(personIndex === index) {
            position = "activeSlide";
          }
          if(personIndex === index - 1 || (index === 0 && personIndex === reviews.length - 1)) {
            position = "lastSlide";
          }
          return <Review id={name} review={person}/>
        })
      }
    </>
}

export default Reviews;