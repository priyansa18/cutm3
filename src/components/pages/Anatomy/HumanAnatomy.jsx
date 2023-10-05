import React from "react";
import { Link, } from "react-router-dom";
import AnatomyBackButton from "../../layouts/AnatomyBackButton";
import skinimg from "../../../assets/cardimages/skin.gif";
import reproductiveimg from "../../../assets/cardimages/reproductive.gif";
import neuronimg from "../../../assets/cardimages/neuron.gif";
import nervousimg from "../../../assets/cardimages/nervous.gif";
import Liverimg from "../../../assets/cardimages/Liver.gif";
import Muscularimg from "../../../assets/cardimages/muscular system.gif";
import Kidneyimg from "../../../assets/cardimages/kidney.gif";
import Heartimg from "../../../assets/cardimages/heart.gif";
import eyeimg from "../../../assets/cardimages/eye.gif";
import digestiveimg from "../../../assets/cardimages/digestive.gif";
import dentalimg from "../../../assets/cardimages/dental.gif";
import earimg from "../../../assets/cardimages/ear.gif";
import cellimg from "../../../assets/cardimages/cell.gif";

const HumanAnatomy = (props) => {
  return (
    <>
      <div className="bg-gray-900 py-10">


        <div className="flex mt-10 ml-14">
          <Link to="/anatomy">
            <AnatomyBackButton />
          </Link>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 shadow-xl flex flex-col gap-6 justify-center  items-center bg-zinc-900">
            <img src={skinimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Skin Anatomy
              </h5>
            </div>
            <Link to="/skinanatomy" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img
              src="https://gaming-35085.web.app/images/respiratory.gif"
              className="h-32 w-full"
              alt=""
            />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Respiratory System
              </h5>
            </div>
            <Link to="/respiratory" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={reproductiveimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Reproductive System
              </h5>
            </div>
            <Link to="/reproductive" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={neuronimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Neuron Anatomy
              </h5>
            </div>
            <Link to="/neuron" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={nervousimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Nervous System
              </h5>
            </div>
            <Link to="/nervous" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={Liverimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Liver Anatomy
              </h5>
            </div>
            <Link to="/liver" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={Kidneyimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Kidney Anatomy
              </h5>
            </div>
            <Link to="/kidney" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={Muscularimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Muscular System
              </h5>
            </div>
            <Link to="/muscular" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={Heartimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Heart Anatomy
              </h5>
            </div>
            <Link to="/heart" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={eyeimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Eye Anatomy
              </h5>
            </div>
            <Link to="/eye" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={digestiveimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Digestive System
              </h5>
            </div>
            <Link to="/digestive" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={dentalimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Dental Anatomy
              </h5>
            </div>
            <Link to="/dental" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={earimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Ear Anatomy
              </h5>
            </div>
            <Link to="/ear" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={cellimg} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Cell Anatomy
              </h5>
            </div>
            <Link to="/cell" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HumanAnatomy;
