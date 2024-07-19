// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const CardSwipper = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   const cards = [
//     { id: 1, title: 'Card 1', content: 'This is card 1 content.' },
//     { id: 2, title: 'Card 2', content: 'This is card 2 content.' },
//     { id: 3, title: 'Card 3', content: 'This is card 3 content.' },
//     { id: 4, title: 'Card 4', content: 'This is card 4 content.' },
//     { id: 5, title: 'Card 5', content: 'This is card 5 content.' },
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <Slider {...settings}>
//         {cards.map((card) => (
//           <div key={card.id} className="px-4">
//             <div className="max-w-sm rounded overflow-hidden shadow-lg">
//               <img className="w-full" src={`https://via.placeholder.com/300?text=${card.title}`} alt={card.title} />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{card.title}</div>
//                 <p className="text-gray-700 text-base">
//                   {card.content}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CardSwipper;

import amazon from "../assets/Amazon.png";
import croeng from "../assets/Croeng.png";
import epicTours from "../assets/Epic Tours.png";
import sakakeja from "../assets/Sakakeja.png";
import { WiDirectionRight } from "react-icons/wi";

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
  };

const cards = [
  {
    id: 1,
    title: "Amazon",
    content: "This is Amazon card content.",
    image: amazon,
    direction: <WiDirectionRight />,
  },
  {
    id: 2,
    title: "Croeng",
    content: "This is Croeng card content.",
    image: croeng,
    direction: <WiDirectionRight />,
  },
  {
    id: 3,
    title: "Epic Tours",
    content: "This is Epic Tours card content.",
    image: epicTours,
    direction: <WiDirectionRight />,
  },
  {
    id: 4,
    title: "Sakakeja",
    content: "This is Sakakeja card content.",
    image: sakakeja,
    direction: <WiDirectionRight />,
  },
];

  return (
    <div className="container mx-auto py-8 bg-black text-white">
      <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:mb-10 mb-4">
        My Work
      </h1>
      <Slider {...settings}>
{cards.map((card) => (
  <div key={card.id} className="md:px-8">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="" src={card.image} alt={card.title} />
      <div className="md:px-6 md:py-4">
        <div className="font-bold text-xl mb-2">{card.title}</div>
        <p className="text-gray-700 text-base">{card.content}</p>
        <h1>{card.direction}</h1>
      </div>
    </div>
  </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSwipper;
