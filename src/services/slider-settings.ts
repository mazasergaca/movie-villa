export const sliderSettingsForBoxCast = {
  infinite: false,
  speed: 500,
  slidesToScroll: 7,
  slidesToShow: 7,
  swipeToSlide: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
      },
    },
  ],
};

export const sliderSettingsForBoxMovie = {
  draggable: false,
  speed: 500,
  slidesToScroll: 5,
  slidesToShow: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToScroll: 4,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
        draggable: true,
      },
    },
  ],
};

export const sliderSettingsForHero = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const sliderSettingsForPersonDetails = {
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 5,
  draggable: false,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
      },
    },
  ],
};
