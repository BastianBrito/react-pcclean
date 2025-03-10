import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsCarousel = () => {
  const reviews = [
    { name: "Juan", text: "Excelente servicio, mi PC quedó como nueva!" },
    { name: "Ana", text: "Rápidos y profesionales. Los recomiendo!" },
    { name: "Carlos", text: "Gran trabajo, buen precio y atención amable." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="reviews-carousel">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <p>"{review.text}"</p>
          <strong>- {review.name}</strong>
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsCarousel;
