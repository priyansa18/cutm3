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
