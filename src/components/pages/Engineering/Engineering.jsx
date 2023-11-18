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
import dieselengine from "../../../assets/cardimages/dieselengine.gif";
import gs from "../../../assets/cardimages/gs.gif";
import lightsensor from "../../../assets/cardimages/lsensor.gif";
import steppermotor from "../../../assets/cardimages/steppermotor.gif";
import  microusb from "../../../assets/cardimages/microusbboard.gif";
import  dewalt from "../../../assets/cardimages/dewalt.gif";
import  drill from "../../../assets/cardimages/drill.gif";
import  arduinonano from "../../../assets/cardimages/arduino.gif";
import  nodemcumini from "../../../assets/cardimages/nodemcumini.gif";
import  sparkfunmotor from "../../../assets/cardimages/sparkfunmotor.gif";
import  raspberrypi from "../../../assets/cardimages/raspberrypi.gif";
import  v12combustion from "../../../assets/cardimages/v12combustion.gif";
import  anglegrinder from "../../../assets/cardimages/anglegrinder.gif";
import  rotaxe from "../../../assets/cardimages/rotaxe.jpg";
import  singlecylinder from "../../../assets/cardimages/singlecylinder.gif";
import  bikeselfstart from "../../../assets/cardimages/bikeselfstart.gif";
import  escalator from "../../../assets/cardimages/escalator.gif";
import  barretm82 from "../../../assets/cardimages/barretm82.gif";
import  blendermachine from "../../../assets/cardimages/blender.gif";
import  cylinderblock from "../../../assets/cardimages/cylinderblock.gif";
import  fivespeed from "../../../assets/cardimages/fivespeed.gif";
import  esp from "../../../assets/cardimages/esp.gif";
import  headphone from "../../../assets/cardimages/headphone.gif"; 
import  v6engine from "../../../assets/cardimages/v6engine.gif";
import  handdrill from "../../../assets/cardimages/handdrill.gif";
import  binocular from "../../../assets/cardimages/binocular.gif";
import  discbrake from "../../../assets/cardimages/discbrake.gif";
import  motor from "../../../assets/cardimages/motor.gif";
import  automaticairvalve from "../../../assets/cardimages/automaticairvalve.gif";
import  ertf from "../../../assets/cardimages/ertf.gif";
import  lipocharger from "../../../assets/cardimages/lipocharger.gif";
import  matek from "../../../assets/cardimages/matek.png";
import  rvalve from "../../../assets/cardimages/rvalve.gif";

















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
                  Four Stroke Engine
                </h5>
              </div>

              <span
                onClick={(e) => navigate("/fourstrokeengine")}
                className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg"
              >
                Explore
              </span>
            </div>

            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={dieselengine} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Diesel engine
                </h5>
              </div>
              <Link to="/diesel" className="py-4">
                <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                  Explore
                </span>
              </Link>
            </div>

            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={camera} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Camera
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
        <Link to="/grainseparator" className="py-4">
          <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
            Explore
          </span>
        </Link>
      </div>

      

      <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
      <img src={rotaxe} className="h-32 w-full" alt="" />
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
          Rotax-582 Engine
        </h5>
      </div>
      <Link to="/rotax" className="py-4">
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
    <Link to="/lightsensor" className="py-4">
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

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={arduinonano} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Arduino Nano
  </h5>
</div>
<Link to="/arduinonano" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div> 


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={nodemcumini} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Node MCU Mini
  </h5>
</div>
<Link to="/nodemcumini" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={sparkfunmotor} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Sparkfun Qwiic Motor Driver
  </h5>
</div>
<Link to="/sparkfunmotor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={raspberrypi} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Raspberry Pi Zero
  </h5>
</div>
<Link to="/raspberrypizero" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={v12combustion} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  V12 Combustion Engine
  </h5>
</div>
<Link to="/v12combustion" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={singlecylinder} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Single Cylinder Engine
  </h5>
</div>
<Link to="/singlecylinder" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>



<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={anglegrinder} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Angle Grinder
  </h5>
</div>
<Link to="/anglegrinder" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={bikeselfstart} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Bike Self Start Motor
  </h5>
</div>
<Link to="/bikeselfstart" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={escalator} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Escalator
  </h5>
</div>
<Link to="/escalator" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={barretm82} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Barret M82
  </h5>
</div>
<Link to="/barretm82" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={blendermachine} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Blender Machine
  </h5>
</div>
<Link to="/blendermachine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cylinderblock} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Cylinder Block Assembly
  </h5>
</div>
<Link to="/cylinderblockassembly" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={fivespeed} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Five Speed Transmission
  </h5>
</div>
<Link to="/fivespeed" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={v6engine} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  V6 Engine
  </h5>
</div>
<Link to="/v6engine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={discbrake} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Disc Brake
  </h5>
</div>
<Link to="/discbrake" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={esp} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  ESP8266-ESP01
  </h5>
</div>
<Link to="/esp" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={handdrill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hand Drill
  </h5>
</div>
<Link to="/handdrill" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={headphone} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Headphone
  </h5>
</div>
<Link to="/headphone" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={motor} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Motorcycle Exhaust
  </h5>
</div>
<Link to="/motor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={binocular} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Binocular
  </h5>
</div>
<Link to="/binocular" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={automaticairvalve} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Automatic Air Valve
  </h5>
</div>
<Link to="/automaticairvalve" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>
</div>



<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={ertf} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  ER-TFTM1.54 B
  </h5>
</div>
<Link to="/ertftm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={lipocharger} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Micro USB Lipo Charger
  </h5>
</div>
<Link to="/lipocharger" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={matek} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Matek Power Hub
  </h5>
</div>
<Link to="/matek" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={rvalve} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Refrigirator Valve
  </h5>
</div>
<Link to="/refrigiratorvalve" className="py-4">
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


