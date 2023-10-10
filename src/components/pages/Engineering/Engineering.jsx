import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AnatomyBackButton from "../../layouts/AnatomyBackButton";
import transformer from "../../../assets/cardimages/transformer.gif";
import twinscrew from "../../../assets/cardimages/twinscrew.gif";
import syphone from "../../../assets/cardimages/syphone.gif";
import router from "../../../assets/cardimages/router.gif";
import molecule from "../../../assets/cardimages/molecule.gif";
import drone from "../../../assets/cardimages/drone.gif";
import fridge from "../../../assets/cardimages/fridge.jpg";
import xray from "../../../assets/cardimages/xray.gif";
import electrical from "../../../assets/cardimages/electrical.gif";
import camera from "../../../assets/cardimages/camera.gif";
import engine from "../../../assets/cardimages/4stroke.gif";
import diselEngine from "../../../assets/cardimages/dieselengine.gif";
import gs from "../../../assets/cardimages/gs.gif";
import rotax from "../../../assets/cardimages/rotaxImage.jpg";
import lightsensor from "../../../assets/cardimages/lsensor.gif";
import steppermotor from "../../../assets/cardimages/steppermotor.gif";
import  microusb from "../../../assets/cardimages/microusbboard.gif";
import  dewalt from "../../../assets/cardimages/dewalt.gif";
import  drill from "../../../assets/cardimages/drill.gif";














const Engineering = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-900 py-10">
        <div className="flex mt-10 ml-14">
          <Link to="/">
            <AnatomyBackButton />
          </Link>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 shadow-xl flex flex-col gap-6 justify-center  items-center bg-zinc-900">
            <img src={transformer} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Transformer
              </h5>
            </div>
            <Link to="/transformer" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={twinscrew} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Twinscrew
              </h5>
            </div>
            <Link to="/twinscrew" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={syphone} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Syphone
              </h5>
            </div>
            <Link to="/syphone" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={router} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Router
              </h5>
            </div>
            <Link to="/router" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={molecule} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Molecule
              </h5>
            </div>
            <Link to="/molecule" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={drone} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Drone
              </h5>
            </div>
            <Link to="/drone" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={fridge} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Fridge
              </h5>
            </div>
            <Link to="/fridge" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={xray} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                X-Ray Machine
              </h5>
            </div>
            <Link to="/xray" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={electrical} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Basic Electrical
              </h5>
            </div>
            <Link to="/electrical" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={engine} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  4 Stroke Engine
                </h5>
              </div>

              <span
                onClick={(e) => navigate("/engine")}
                className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg"
              >
                Explore
              </span>
            </div>

            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={diselEngine} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  disel engine
                </h5>
              </div>
              <Link to="/electrical" className="py-4">
                <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                  Explore
                </span>
              </Link>
            </div>

            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={camera} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  CAMERA
                </h5>
              </div>
              <Link to="/camera" className="py-4">
                <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                  Explore
                </span>
              </Link>
            </div>



    
          </div>


        

        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


        <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
        <img src={gs} className="h-32 w-full" alt="" />
        <div className="p-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
            Grain Separator
          </h5>
        </div>
        <Link to="/camera" className="py-4">
          <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
            Explore
          </span>
        </Link>
      </div>


      <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
      <img src={rotax} className="h-32 w-full" alt="" />
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
          Rotax
        </h5>
      </div>
      <Link to="/camera" className="py-4">
        <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
          Explore
        </span>
      </Link>
    </div>


    
    <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
    <img src={lightsensor} className="h-32 w-full" alt="" />
    <div className="p-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
        Light Sensor
      </h5>
    </div>
    <Link to="/camera" className="py-4">
      <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
        Explore
      </span>
    </Link>
  </div>



<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={steppermotor} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Stepper Motor
  </h5>
</div>
<Link to="/steppermotor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={microusb} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Micro USB Board
  </h5>
</div>
<Link to="/microusb" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dewalt} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Dewalt Wood Router
  </h5>
</div>
<Link to="/dewaltwoodrouter" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Cordless Drill Machine
  </h5>
</div>
<Link to="/cordlessmachine" className="py-4">
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

export default Engineering;


