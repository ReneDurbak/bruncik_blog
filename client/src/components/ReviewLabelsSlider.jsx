import { useState } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function ReviewLabelsSlider({ review }) {
  function NextArrowReviewLabels(props) {
    const { className, style, onClick } = props;
    const totalSlides = review.labels.length;
    const slidesToShow = slideSettings.slidesToShow;
    const isLastSlide = currentSlide >= totalSlides - slidesToShow;

    // console.log(`total slides: ${totalSlides}`);
    // console.log(`slides to show: ${slidesToShow}`);
    // console.log(`current slide: ${currentSlide}`);
    // console.log(isLastSlide);

    return (
      <div>
        <FaChevronRight
          className={` ${
            isLastSlide ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute xl:right-[-25px] right-[-15px]  xl:top-[25%] top-[18%]`}
          size={12}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function PrevArrowReviewLabels(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <FaChevronLeft
          className={`${
            currentSlide === 0 ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute xl:left-[-25px]  left-[-15px]  xl:top-[25%] top-[18%]`}
          size={12}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    swipeToSlide: true,
    draggable: false,
    nextArrow: <NextArrowReviewLabels />,
    prevArrow: <PrevArrowReviewLabels />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...slideSettings}>
        {review.labels &&
          review.labels.map((label) => (
            <div
              className="xl:text-base lg:text-sm text-xs p-2 mb-4 bg-black text-white rounded-lg whitespace-nowrap text-center"
              key={label}
            >
              {label}
            </div>
          ))}
      </Slider>
    </>
  );
}
