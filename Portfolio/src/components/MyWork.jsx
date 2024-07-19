import amazon from "../assets/Amazon.png";
import croeng from "../assets/Croeng.png";
import epicTours from "../assets/Epic Tours.png";
import sakakeja from "../assets/Sakakeja.png";
import { FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSwipper = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      title: "Amazon",
      content: "This is Amazon clone web.",
      image: amazon,
      direction: <FaArrowRight />,
      link: "https://challenge-bd883.web.app/",
    },
    {
      id: 2,
      title: "Croeng",
      content: "This is Croeng Ltd website.",
      image: croeng,
      direction: <FaArrowRight />,
      link: "https://croeng.vercel.app/",
    },
    {
      id: 3,
      title: "Epic Tours",
      content: "This is Epic Tours website.",
      image: epicTours,
      direction: <FaArrowRight />,
      link: "https://epictours-frontend.vercel.app/",
    },
    {
      id: 4,
      title: "Sakakeja",
      content: "This is Sakakeja web App.",
      image: sakakeja,
      direction: <FaArrowRight />,
      link: "https://saka-keja-xy3n.vercel.app/",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-full mx-auto py-8 bg-black text-white">
        <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:mb-10 mb-4">
          My Work
        </h1>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-4">
              <div className="rounded overflow-hidden shadow-lg bg-white mx-auto">
                <img className="w-full" src={card.image} alt={card.title} />
                <div className="md:px-2 md:py-2">
                  <div className="text-lime-500 font-bold text-2xl mb-2">
                    {card.title}
                  </div>
                  <div className="flex flex-row gap-[100px] mx-auto">
                    <p className="text-black text-base ">{card.content}</p>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1 className="text-lime-500 text-4xl">
                        {card.direction}
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSwipper;
