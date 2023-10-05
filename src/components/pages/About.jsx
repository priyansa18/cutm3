import React from 'react'
import Muktikanta from "../../assets/Team/muktisir.jpg";
import DNRAO from "../../assets/Team/dn-sir.jpg";
import SupriyaPattanayak from "../../assets/Team/supriya-mam.jpg";
import BabuShankar from "../../assets/Team/babu-sir.png";

const About = () => {
  return (
    <div className="bg-white mb-28">
    <div className="flex justify-center flex-col items-center w-full h-full text-center ">
      <div>
        <h1
          className="text-4xl mt-24  sm:text-center sm:text-6xl font-bold text-blue-800 "
        >
          Our Leaders
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-20 height mt-24 px-4 font-mono">
        <div className="flex flex-col sm:flex-col justify-center items-center gap-3">
          <img
            src={Muktikanta}
            className="rounded-full h-auto w-60 max-w-full "
            alt=""
          />
          <span className="font-extrabold font-serif text-lg   text-black">
            President
          </span>
          <span className="font-bold text-pink-600">Muktikanta Mishra</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            src={DNRAO}
            className="rounded-full h-auto w-60 max-w-full"
            alt=""
          />
          <span className="font-extrabold font-serif text-lg text-black">
            Vice-President
          </span>
          <span className="font-bold text-pink-600">D.N Rao</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <img
            src={SupriyaPattanayak}
            className="rounded-full h-auto w-60 max-w-full"
            alt=""
          />
          <span className="font-extrabold font-serif text-lg   text-black">
            Vice-Chancellor{" "}
          </span>
          <span className="font-bold text-pink-600">Supriya Pattanayak</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            src={BabuShankar}
            className="rounded-full h-auto w-60 max-w-full"
            alt=""
          />
          <span className="font-extrabold font-serif text-lg   text-black">
            Managing Director
          </span>
          <span className="font-bold text-pink-600">Babu Shankar</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About