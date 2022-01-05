import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import "./fullscreencarousel.scss";
import { CloseIcon } from "../SideBar/SidebarStyled";

const FullScreenCarousel = ({ images, toggle, currItemIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = images?.map((img) => ({ src: img }));

  const next = () => {
    // if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    // if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        // onExiting={() => setAnimating(true)}
        // onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    currItemIndex !== activeIndex && setActiveIndex(currItemIndex);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  //   console.log(activeIndex);

  return (
    <div className="full-screen-carousel">
      <div className="full-carousel">
        <div className="full-carousel-inner ">
          <div className="full-carousel-item">
            <img
              src={items[activeIndex]?.src}
              alt={items[activeIndex]?.altText}
            />
          </div>
        </div>

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />

        <div className="total-items text-right">
          <span className="text-white">{`${activeIndex + 1} of ${
            items.length
          }`}</span>
        </div>
      </div>

      <div className="close-icon" onClick={toggle}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default FullScreenCarousel;
