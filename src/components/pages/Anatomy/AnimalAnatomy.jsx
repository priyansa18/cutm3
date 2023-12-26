import React from "react";
import { Link } from "react-router-dom";
import AnatomyBackButton from "../../layouts/AnatomyBackButton";
import fishimg from "../../../assets/cardimages/fishres.gif";
import grasshopperimg from "../../../assets/cardimages/grasshopper.gif";
import insectmorphimg from "../../../assets/cardimages/insectmorph.png";
import labeorohitaimg from "../../../assets/cardimages/labeorohita.jpg";
import palemonimg from "../../../assets/cardimages/palemon.png";
import ras from "../../../assets/cardimages/ras.jpg";
import host from "../../../assets/cardimages/host.jpeg";
import ab from "../../../assets/cardimages/ab.gif";
import pathogenesis from "../../../assets/cardimages/pathogenesis.jpg";
import brooding from "../../../assets/cardimages/brooding.jpg";
import hatchery from "../../../assets/cardimages/hatchery.jpg";
import shellfish from "../../../assets/cardimages/shellfish.jpg";











const AnimalAnatomy = () => {
  return (
    <>
    <div className="py-10 bg-gray-900">


      <div className="flex mt-10 ml-14">
        <Link to="/anatomy">
          <AnatomyBackButton />
        </Link>
      </div>

      <div className=" md:flex-col sm:flex-col lg:flex lg:flex-row gap-6 justify-center items-start my-10 mx-4 ">
        <div className="w-72 shadow-xl flex flex-col gap-6 justify-center bg-zinc-900  items-center">
          <img src={fishimg} className="h-32 w-full" alt="" />
          <div className="p-3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Fish Respiration
            </h5>
          </div>
          <Link to="/fishrespiration" className="py-4">
            <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
              Explore
            </span>
          </Link>
        </div>
        <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
          <img src={grasshopperimg} className="h-32 w-full" alt="" />
          <div className="p-3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Grasshopper Anatomy
            </h5>
          </div>
          <Link to="/grasshopper" className="py-4">
            <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
              Explore
            </span>
          </Link>
        </div>
        <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
          <img src={insectmorphimg} className="h-32 w-full" alt="" />
          <div className="p-3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Insect Morphology
            </h5>
          </div>
          <Link to="/insectmorphology" className="py-4">
            <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
              Explore
            </span>
          </Link>
        </div>
        <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
          <img src={labeorohitaimg} className="h-32 w-full" alt="" />
          <div className="p-3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Labeo Rohita Anatomy
            </h5>
          </div>
          <Link to="/labeorohita" className="py-4">
            <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
              Explore
            </span>
          </Link>
        </div>
      </div>
      <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 justify-center items-start my-10 mx-4 ">
        <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
          <img src={palemonimg} className="h-32 w-full" alt="" />
          <div className="p-3">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Palemon Structure Analysis
            </h5>
          </div>
          <Link to="/palemon" className="py-4">
            <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
              Explore
            </span>
          </Link>
        </div>
      
      
      <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
        <img src={ras} className="h-32 w-full" alt="" />
        <div className="p-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
            Recirculatory Aquaculture System
          </h5>
        </div>
        <Link to="/aquaculture" className="py-4">
          <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
            Explore
          </span>
        </Link>
      </div>

      <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
      <img src={host} className="h-32 w-full" alt="" />
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
          Host Pathogen Interaction
        </h5>
      </div>
      <Link to="/hostpathogen" className="py-4">
        <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
          Explore
        </span>
      </Link>
    </div>

    <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
    <img src={ab} className="h-32 w-full" alt="" />
    <div className="p-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
        Animal Biotechnology
      </h5>
    </div>
    <Link to="/animalbio" className="py-4">
      <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
        Explore
      </span>
    </Link>
  </div>
  </div>

  <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 justify-center items-start my-10 mx-4 ">
  <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
    <img src={pathogenesis} className="h-32 w-full" alt="" />
    <div className="p-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
        Structural Defense Mechanism of Plants During Pathogenesis
      </h5>
    </div>
    <Link to="/pathogenesis" className="py-4">
      <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
        Explore
      </span>
    </Link>
  </div>

  <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
    <img src={brooding} className="h-32 w-full" alt="" />
    <div className="p-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
        Brooding Management
      </h5>
    </div>
    <Link to="/brooding" className="py-4">
      <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
        Explore
      </span>
    </Link>
  </div>
  <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
  <img src={hatchery} className="h-32 w-full" alt="" />
  <div className="p-3">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
      Hatchery Management
    </h5>
  </div>
  <Link to="/hatchery" className="py-4">
    <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
      Explore
    </span>
  </Link>
</div>
<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={shellfish} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Fish and Shellfish
  </h5>
</div>
<Link to="/shellfish" className="py-4">
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

export default AnimalAnatomy;
