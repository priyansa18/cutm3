import React from "react";
import { Link } from "react-router-dom";
import AnatomyBackButton from "../../layouts/AnatomyBackButton";
import animalgif from "../../../assets/cardimages/animalanatomy.gif"
import humangif from "../../../assets/cardimages/humananatomy.gif"

const Anatomy = () => {
  return (
    <>
    <div>


      <div className="flex mt-10 ml-14 mb-10">
        <Link to="/">
          <AnatomyBackButton />
        </Link>
      </div>
      <div className="flex justify-center items-center  py-16">
        <div className="flex-col lg:flex md:flex-col lg:flex-row gap-10 px-8 max-w-5xl">
          <Link to="/humananatomy">
            <img
              alt="Art"
              src={humangif}
              class="h-64 w-full object-cover sm:h-80 lg:h-30 border border-solid border-black"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl ">
              Human Anatomy
            </h3>
          </Link>
          <Link to="/animalanatomy">
            <img
              alt="Art"

              src={animalgif}
              class="h-64 w-full object-cover sm:h-80 lg:h-30 border border-solid border-black"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Animal Anatomy
            </h3>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Anatomy;
