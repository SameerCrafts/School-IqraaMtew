import React, { useState, useEffect } from "react";
import mm1 from "../assets/images/mm1.jpg";
import mm2 from "../assets/images/mm2.jpg";
import mm3 from "../assets/images/mm3.jpg";

const images = [mm1, mm2, mm3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* <div className="bg-black bg-opacity-50 p-6 md:p-10 rounded text-white max-w-3xl"> */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-10 text-white text-center max-w-3xl px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          We{" "}
          <span className="text-green-500">
            "Mewat Trust for Educational Welfare"
          </span>{" "}
          are an <span className="text-green-500">NGO.</span>
        </h1>
        <p className="mt-4 text-lg">
          We are a dedicated education trust committed to transforming lives
          through quality education.
        </p>
        <a href="#about">
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition">
            Know More
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;

// function Home() {
//   return (
//     <section
//       id="home"
//       className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
//       style={{
//         backgroundImage: "url('/mm1.jpg')",
//       }}
//     >
//       <div className="bg-black bg-opacity-60 p-6 md:p-10 rounded text-white max-w-3xl">
//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           We <span className="text-green-400">"Mewat Trust for Educational Welfare"</span> are an NGO.
//         </h1>
//         <p className="mt-4 text-lg">
//           We are a dedicated education trust committed to transforming lives through quality education.
//         </p>
//         {/* <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow">
//           Know More
//         </button> */}
//         <a href="#about">
//   <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
//     Know More
//   </button>
// </a>

//       </div>
//     </section>
//   );
// }
// export default Home;
