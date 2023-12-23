import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import HeroBullets from "./components/layouts/HeroSec/HeroBullets";
import Anatomy from "./components/pages/Anatomy/Anatomy";
import Footer from "./components/layouts/Footer/Footer";
import HumanAnatomy from "./components/pages/Anatomy/HumanAnatomy";
import Engineering from "./components/pages/Engineering/Engineering";
import AnimalAnatomy from "./components/pages/Anatomy/AnimalAnatomy";
import Navbar from "./components/layouts/Navbar/Navbar";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import SkinAnatomy from "./components/container/SkinAnatomy";
import Respiratory from "./components/container/Respiratory";
import ReproductiveSystem from "./components/container/ReproductiveSystem";
import NeruonAnatomy from "./components/container/NeruonAnatomy";
import NervousSystem from "./components/container/NervousSystem";
import LiverAnatomy from "./components/container/LiverAnatomy";
import KidneyAnatomy from "./components/container/KidneyAnatomy";
import MuscularSystem from "./components/container/MuscularSystem";
import HearAnatomy from "./components/container/HearAnatomy";
import EyeAnatomy from "./components/container/EyeAnatomy";
import DigestiveSystem from "./components/container/DigestiveSystem";
import DentalAnatomy from "./components/container/DentalAnatomy";
import EarAnatomy from "./components/container/EarAnatomy";
import CellAnatomy from "./components/container/CellAnatomy";
import FishRespiration from "./components/container/FishRespiration";
import Grasshopper from "./components/container/Grasshopper";
import InsectMorphology from "./components/container/InsectMorphology";
import LabeoRohita from "./components/container/LabeoRohita";
import Palemon from "./components/container/Palemon";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./components/pages/Login/Signin";
import Protected from "./components/routes/Protected";
import Transformer from "./components/container/Engineering/Transformer";
import Twinscrew from "./components/container/Engineering/Twinscrew";
import Syphone from "./components/container/Engineering/Syphone";
import RouterModel from "./components/container/Engineering/RouterModel";
import Molecule from "./components/container/Engineering/Molecule";
import DroneSim from "./components/container/Engineering/DroneSim";
import Freezer from "./components/container/Engineering/Freezer";
import XrayModel from "./components/container/Engineering/XrayModel";
import BasicElectrical from "./components/container/Engineering/BasicElectrical";
import Steppermotor from "./components/container/Engineering/Steppermotor";
import MicroUSB from "./components/container/Engineering/MicroUSB";
import DewaltWoodRouter from "./components/container/Engineering/DewaltWoodRouter";
import CordlessDrillMachine from "./components/container/Engineering/CordlessDrillMachine";
import ArduinoNano from "./components/container/Engineering/ArduinoNano";
import Lightsensor from "./components/container/Engineering/Lightsensor";
import NodeMCUMini from "./components/container/Engineering/NodeMCUMini";
import SparkfunQwiicMotorDriver from "./components/container/Engineering/SparkfunQwiicMotorDriver";
import RaspberryPiZero from "./components/container/Engineering/RaspberryPiZero";
import V12combustion from "./components/container/Engineering/V12combustion";
import AngleGrinder from "./components/container/Engineering/AngleGrinder";
import Rotax from "./components/container/Engineering/Rotax";
import FourStrokeEngine from "./components/container/Engineering/FourStrokeEngine";
import SingleCylinder from "./components/container/Engineering/SingleCylinder";
import GrainSeparator from "./components/container/Engineering/Grainseparator";
import Camera from "./components/container/Engineering/Camera";
import Bikeselfstart from "./components/container/Engineering/Bikeselfstart";
import Escalator from "./components/container/Engineering/Escalator";
import BarretM82 from "./components/container/Engineering/BarretM82";
import BlenderMachine from "./components/container/Engineering/BlenderMachine";
import Cylinderblockassembly from "./components/container/Engineering/Cylinderblockassembly";
import DieselEngine from "./components/container/Engineering/DieselEngine";
import FiveSpeedTransmission from "./components/container/Engineering/FiveSpeedtransmission";
import V6Engine from "./components/container/Engineering/V6Engine";
import DiscBrake from "./components/container/Engineering/DiscBrake";
import Esp8266 from "./components/container/Engineering/Esp8266";
import Handdrill from "./components/container/Engineering/Handdrill";
import Headphone from "./components/container/Engineering/Headphone";
import MotorcycleExhaust from "./components/container/Engineering/MotorcycleExhaust";
import Binocular from "./components/container/Engineering/Binocular";
import AutomaticAirValve from "./components/container/Engineering/AutomaticAirValve";
import LipoCharger from "./components/container/Engineering/LipoCharger";
import MatekPowerHub from "./components/container/Engineering/MatekPowerHub";
import RefrigiratorValve from "./components/container/Engineering/RefrigiratorValve";
import WifiSwitchRelay from "./components/container/Engineering/WifiSwitchRelay";
import Rodandbearing from "./components/container/Engineering/Rodandbearing";
import Carsteering from "./components/container/Engineering/Carsteering";
import ShockAbsorber from "./components/container/Engineering/ShockAbsorber";
import RadiatorHeatExchanger from "./components/container/Engineering/RadiatorHeatExchanger";
import RollerConveyor from "./components/container/Engineering/RollerConveyor";
import Sonoff from "./components/container/Engineering/Sonoff";
import StormSensor from "./components/container/Engineering/StormSensor";
import EspEye from "./components/container/Engineering/EspEye";
import ChargingModule from "./components/container/Engineering/ChargingModule";
import Hobbywing from "./components/container/Engineering/Hobbywing";
import ESP32mcontroller from "./components/container/Engineering/ESP32mcontroller";
import Alternator from "./components/container/Engineering/Alternator";
import Camshaft from "./components/container/Engineering/Camshaft";
import CatalyticConverter from "./components/container/Engineering/CatalyticConverter";







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/"
            element={
              <Protected>
                <App />
              </Protected>
            }
          />
          <Route
            path="/"
            element={
              <Protected>
                <App />
              </Protected>
            }
          />

          <Route
            path="/"
            element={
              <Protected>
                <HeroBullets />
              </Protected>
            }
          />
          <Route
            path="/anatomy"
            element={
              <Protected>
                <Anatomy />
              </Protected>
            }
          />
          <Route
            path="/humananatomy"
            element={
              <Protected>
                <HumanAnatomy />
              </Protected>
            }
          />
          <Route
            path="/animalanatomy"
            element={
              <Protected>
                <AnimalAnatomy />
              </Protected>
            }
          />
          <Route
            path="/engineering"
            element={
              <Protected>
                <Engineering />
              </Protected>
            }
          />
          <Route
            path="/about"
            element={
              <Protected>
                <About></About>
              </Protected>
            }
          />
          <Route
            path="/team"
            element={
              <Protected>
                <Team />
              </Protected>
            }
          />

          <Route
            path="/skinanatomy"
            element={
              <Protected>
                <SkinAnatomy />
              </Protected>
            }
          />
          <Route
            path="/respiratory"
            element={
              <Protected>
                <Respiratory />
              </Protected>
            }
          />
          <Route
            path="/reproductive"
            element={
              <Protected>
                <ReproductiveSystem />
              </Protected>
            }
          />
          <Route
            path="/neuron"
            element={
              <Protected>
                <NeruonAnatomy />
              </Protected>
            }
          />
          <Route
            path="/nervous"
            element={
              <Protected>
                <NervousSystem />
              </Protected>
            }
          />
          <Route
            path="/liver"
            element={
              <Protected>
                <LiverAnatomy></LiverAnatomy>
              </Protected>
            }
          />
          <Route
            path="/kidney"
            element={
              <Protected>
                <KidneyAnatomy />
              </Protected>
            }
          />
          <Route
            path="/muscular"
            element={
              <Protected>
                <MuscularSystem />
              </Protected>
            }
          />
          <Route
            path="/heart"
            element={
              <Protected>
                <HearAnatomy />
              </Protected>
            }
          />
          <Route
            path="/eye"
            element={
              <Protected>
                <EyeAnatomy />
              </Protected>
            }
          />
          <Route
            path="/digestive"
            element={
              <Protected>
                <DigestiveSystem />
              </Protected>
            }
          />
          <Route
            path="/dental"
            element={
              <Protected>
                <DentalAnatomy />
              </Protected>
            }
          />
          <Route
            path="/ear"
            element={
              <Protected>
                <EarAnatomy />
              </Protected>
            }
          />
          <Route
            path="/cell"
            element={
              <Protected>
                <CellAnatomy />
              </Protected>
            }
          />

          <Route
            path="/fishrespiration"
            element={
              <Protected>
                <FishRespiration />
              </Protected>
            }
          />
          <Route
            path="/grasshopper"
            element={
              <Protected>
                <Grasshopper />
              </Protected>
            }
          />
          <Route
            path="/insectmorphology"
            element={
              <Protected>
                <InsectMorphology />
              </Protected>
            }
          />
          <Route
            path="/labeorohita"
            element={
              <Protected>
                <LabeoRohita />
              </Protected>
            }
          />
          <Route
            path="/palemon"
            element={
              <Protected>
                <Palemon />
              </Protected>
            }
          />

          <Route
            path="/transformer"
            element={
              <Protected>
                <Transformer />
              </Protected>
            }
          />

          <Route
            path="/twinscrew"
            element={
              <Protected>
                <Twinscrew />
              </Protected>
            }
          />

          <Route
            path="/syphone"
            element={
              <Protected>
                <Syphone />
              </Protected>
            }
          />

          <Route
            path="/router"
            element={
              <Protected>
                <RouterModel />
              </Protected>
            }
          />

          <Route
            path="/molecule"
            element={
              <Protected>
                <Molecule></Molecule>
              </Protected>
            }
          />

          <Route
            path="/drone"
            element={
              <Protected>
                <DroneSim />
              </Protected>
            }
          />

          <Route
            path="/fridge"
            element={
              <Protected>
                <Freezer></Freezer>
              </Protected>
            }
          />

          <Route
            path="/xray"
            element={
              <Protected>
                <XrayModel />
              </Protected>
            }
          />

          <Route
            path="/electrical"
            element={
              <Protected>
                <BasicElectrical />
              </Protected>
            }
          />


      <Route
      path="/steppermotor"
      element={
        <Protected>
          <Steppermotor/>
        </Protected>
      }
    />

    <Route
      path="/cordlessmachine"
      element={
        <Protected>
          <CordlessDrillMachine/>
        </Protected>
      }
    />

   

    <Route
    path="/microusb"
    element={
      <Protected>
        <MicroUSB/>
      </Protected>
    }
  />

  <Route
    path="/dewaltwoodrouter"
    element={
      <Protected>
        <DewaltWoodRouter/>
      </Protected>
    }
  />
      
  <Route
    path="/arduinonano"
    element={
      <Protected>
        <ArduinoNano/>
      </Protected>
    }
  />
    
  <Route
  path="/lightsensor"
  element={
    <Protected>
      <Lightsensor/>
    </Protected>
  }
/>
  
<Route
  path="/nodemcumini"
  element={
    <Protected>
      <NodeMCUMini/>
    </Protected>
  }
/>
      
<Route
  path="/sparkfunmotor"
  element={
    <Protected>
      <SparkfunQwiicMotorDriver/>
    </Protected>
  }
/>
 
<Route
  path="/raspberrypizero"
  element={
    <Protected>
      <RaspberryPiZero/>
    </Protected>
  }
/>

<Route
  path="/v12combustion"
  element={
    <Protected>
      <V12combustion/>
    </Protected>
  }
/>

<Route
  path="/anglegrinder"
  element={
    <Protected>
      <AngleGrinder/>
    </Protected>
  }
/>

<Route
  path="/rotax"
  element={
    <Protected>
      <Rotax/>
    </Protected>
  }
/>

<Route
  path="/fourstrokeengine"
  element={
    <Protected>
      <FourStrokeEngine/>
    </Protected>
  }
/>

<Route
  path="/singlecylinder"
  element={
    <Protected>
      <SingleCylinder/>
    </Protected>
  }
/>

<Route
  path="/grainseparator"
  element={
    <Protected>
      <GrainSeparator/>
    </Protected>
  }
/>

<Route
  path="/camera"
  element={
    <Protected>
      <Camera/>
    </Protected>
  }
/>

<Route
  path="/bikeselfstart"
  element={
    <Protected>
      <Bikeselfstart/>
    </Protected>
  }
/>

<Route
  path="/escalator"
  element={
    <Protected>
      <Escalator/>
    </Protected>
  }
/>

<Route
  path="/dieselengine"
  element={
    <Protected>
      <DieselEngine/>
    </Protected>
  }
/>


<Route
  path="/barretm82"
  element={
    <Protected>
      <BarretM82/>
    </Protected>
  }
/>

<Route
  path="/blendermachine"
  element={
    <Protected>
      <BlenderMachine/>
    </Protected>
  }
/>

<Route
  path="/cylinderblockassembly"
  element={
    <Protected>
      <Cylinderblockassembly/>
    </Protected>
  }
/>

<Route
  path="/fivespeed"
  element={
    <Protected>
      <FiveSpeedTransmission/>
    </Protected>
  }
/>

<Route
  path="/v6engine"
  element={
    <Protected>
      <V6Engine/>
    </Protected>
  }
/>


<Route
  path="/discbrake"
  element={
    <Protected>
      <DiscBrake/>
    </Protected>
  }
/>

<Route
  path="/esp"
  element={
    <Protected>
      <Esp8266/>
    </Protected>
  }
/>


<Route
  path="/handdrill"
  element={
    <Protected>
      <Handdrill/>
    </Protected>
  }
/>


<Route
  path="/headphone"
  element={
    <Protected>
      <Headphone/>
    </Protected>
  }
/>

<Route
  path="/motor"
  element={
    <Protected>
      <MotorcycleExhaust/>
    </Protected>
  }
/>


<Route
  path="/binocular"
  element={
    <Protected>
      <Binocular/>
    </Protected>
  }
/>

<Route
  path="/automaticairvalve"
  element={
    <Protected>
      <AutomaticAirValve/>
    </Protected>
  }
/>





<Route
  path="/lipocharger"
  element={
    <Protected>
      <LipoCharger/>
    </Protected>
  }
/>

<Route
  path="/matek"
  element={
    <Protected>
      <MatekPowerHub/>
    </Protected>
  }
/>

<Route
  path="/refrigiratorvalve"
  element={
    <Protected>
      <RefrigiratorValve/>
    </Protected>
  }
/>

<Route
  path="/rodandbearing"
  element={
    <Protected>
      <Rodandbearing/>
    </Protected>
  }
/>


<Route
  path="/wifiswitchrelay"
  element={
    <Protected>
      <WifiSwitchRelay/>
    </Protected>
  }
/>

<Route
  path="/carsteering"
  element={
    <Protected>
      <Carsteering/>
    </Protected>
  }
/>



<Route
  path="/shockabsorber"
  element={
    <Protected>
      <ShockAbsorber/>
    </Protected>
  }
/>

<Route
  path="/heatexchanger"
  element={
    <Protected>
      <RadiatorHeatExchanger/>
    </Protected>
  }
/>

<Route
  path="/rollerconveyor"
  element={
    <Protected>
      <RollerConveyor/>
    </Protected>
  }
/>

<Route
  path="/sonoff"
  element={
    <Protected>
      <Sonoff/>
    </Protected>
  }
/>


<Route
  path="/storm"
  element={
    <Protected>
      <StormSensor/>
    </Protected>
  }
/>
         


<Route
  path="/espeye"
  element={
    <Protected>
      <EspEye/>
    </Protected>
  }
/>
     

<Route
  path="/chargingm"
  element={
    <Protected>
      <ChargingModule/>
    </Protected>
  }
/>
    

     

<Route
  path="/hobbywing"
  element={
    <Protected>
      <Hobbywing/>
    </Protected>
  }
/>
    


<Route
  path="/esp32mc"
  element={
    <Protected>
      <ESP32mcontroller/>
    </Protected>
  }
/>



<Route
  path="/alternator"
  element={
    <Protected>
      <Alternator/>
    </Protected>
  }
/>



<Route
  path="/camshaft"
  element={
    <Protected>
      <Camshaft/>
    </Protected>
  }
/>

<Route
  path="/catalytic"
  element={
    <Protected>
      <CatalyticConverter/>
    </Protected>
  }
/>




















































        </Routes>

        {/* <Route path="*" element={<div><h1>Page Not Found</h1></div>}/> */}
      </AuthContextProvider>
    </MantineProvider>

    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
