// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const MyWork = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };

// const cards = [
//   {
//     id: 1,
//     title: "Amazon",
//     content: "This is Amazon card content.",
//     image: amazon,
//     direction: <WiDirectionRight />,
//   },
//   {
//     id: 2,
//     title: "Croeng",
//     content: "This is Croeng card content.",
//     image: croeng,
//     direction: <WiDirectionRight />,
//   },
//   {
//     id: 3,
//     title: "Epic Tours",
//     content: "This is Epic Tours card content.",
//     image: epicTours,
//     direction: <WiDirectionRight />,
//   },
//   {
//     id: 4,
//     title: "Sakakeja",
//     content: "This is Sakakeja card content.",
//     image: sakakeja,
//     direction: <WiDirectionRight />,
//   },
// ];

//   return (
//     <div className="container mx-auto py-8 bg-black text-white">
//       <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:mb-10 mb-4">
//         My Work
//       </h1>
//       <Slider {...settings}>
// {cards.map((card) => (
//   <div key={card.id} className="md:px-8">
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//       <img className="" src={card.image} alt={card.title} />
//       <div className="md:px-6 md:py-4">
//         <div className="font-bold text-xl mb-2">{card.title}</div>
//         <p className="text-gray-700 text-base">{card.content}</p>
//         <h1>{card.direction}</h1>
//       </div>
//     </div>
//   </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default MyWork;

import amazon from "../assets/Amazon.png";
import croeng from "../assets/Croeng.png";
import epicTours from "../assets/Epic Tours.png";
import sakakeja from "../assets/Sakakeja.png";
import { WiDirectionRight } from "react-icons/wi";

function MyWork() {
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
    <div className="min-h-full bg-black">
      <h1 className="text-lime-500 md:font-bold font-medium md:text-6xl text-4xl text-center md:mb-4 mb-4">
        My Work
      </h1>
      <div className="md:flex flex md:flex-row flex-col md:gap-2 gap-4 md:flex-wrap md:pb-4 pb-4 md:justify-evenly">
        {cards.map((card) => (
          <div key={card.id} className="md:px-2">
            <div className="md:w-[250px] w-[350px] rounded overflow-hidden bg-white mx-auto shadow-lg shadow-lime-500/100">
              <img className="" src={card.image} alt={card.title} />
              <div className="md:px-2 md:py-2">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-700 text-base">{card.content}</p>
                <h1>{card.direction}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;

{
  /* <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <img src={croeng} alt="" />
          <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
        </div>

//         <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
//           <img src={epicTours} alt="" />
//           <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
//         </div>

//         <div className="border-2 border-lime-500 md:w-[500px] w-[300px] md:mx-8 mx-auto max-w-sm rounded overflow-hidden shadow-lg">
//           <img src={sakakeja} alt="" />
//           <h1 className="text-white p-4 font-extrabold">Amazon clone app</h1>
//         </div> */
}
//{" "}
