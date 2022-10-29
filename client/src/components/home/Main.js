import React, { useEffect, useState, createRef } from "react";
import MainComponent from "../../StyledComponents/home/Main";
import { HeaderOne, HeaderTwo } from "../../StyledComponents/utility";
import Footer from "./Footer";
import dropdown from "../layout/svgs/dropdown.svg";
import { Link } from "react-router-dom";
import {
  FeatureClickParagraph,
  FeatureOpenedContent,
} from "../../StyledComponents/utility";

const Main = () => {
  const [currentOpener, setCurrentOpener] = useState("first");

  const showFeatureBool = (position) => {
    return position === currentOpener;
  };

  const showOpener = (position) => {
    setCurrentOpener(position);
  };

  return (
    <MainComponent>
      <section className="first-section">
        <HeaderOne home className="main-header">
          NVCTI
        </HeaderOne>
      </section>
      <section className="features">
        <HeaderTwo home className="features-header">
          NVCTI INVENTORY MANAGEMENT
        </HeaderTwo>
        <p className="grey-para">
          Numerous features make it possible to customize the system in
          accordance with all your needs and still get the best out of it.
        </p>

        <div className="features-body">
          <div className="opener">
            <FeatureClickParagraph
              clicked={showFeatureBool("first")}
              onClick={() => showOpener("first")}
            >
              Robotic Technology
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("first")}
            >
              <h3>Robotic Technology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi distinctio facilis alias voluptatem, repudiandae
                beatae delectus, nisi laudantium quae mollitia est praesentium.
                Debitis, similique exercitationem assumenda cupiditate odio amet
                reiciendis.
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("second")}
              onClick={() => showOpener("second")}
            >
              Electronics and IoT
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("second")}
            >
              <h3>Electronics and IoT</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                iure labore molestias a dolore perferendis ad ratione recusandae
                ipsum necessitatibus, iste nulla quaerat provident minima ipsam,
                qui architecto sit distinctio?
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("third")}
              onClick={() => showOpener("third")}
            >
              Data and Software Technology
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>

            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("third")}
            >
              <h3>Data and Software Technology</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                consequuntur recusandae asperiores delectus fugiat ad omnis,
                magnam, quam eaque eos mollitia at assumenda facilis facere,
                voluptate ullam vero incidunt praesentium kn?
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("fourth")}
              onClick={() => showOpener("fourth")}
            >
              Animation and Game Design
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("fourth")}
            >
              <h3>Animation and Game Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quasi repellendus iure corrupti, sunt culpa aliquam, explicabo
                placeat temporibus magni modi distinctio at id eius numquam
                fugit vero nulla sequi.
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("fifth")}
              onClick={() => showOpener("fifth")}
            >
              Electric Mobility
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("fifth")}
            >
              <h3>Electric Mobility</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quasi repellendus iure corrupti, sunt culpa aliquam, explicabo
                placeat temporibus magni modi distinctio at id eius numquam
                fugit vero nulla sequi.
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("sixth")}
              onClick={() => showOpener("sixth")}
            >
              Finanace Technology
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("sixth")}
            >
              <h3>Finanace Technology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quasi repellendus iure corrupti, sunt culpa aliquam, explicabo
                placeat temporibus magni modi distinctio at id eius numquam
                fugit vero nulla sequi.
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("seventh")}
              onClick={() => showOpener("seventh")}
            >
              Aeronautics and Space Technology
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("seventh")}
            >
              <h3>Aeronautics and Space Technology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quasi repellendus iure corrupti, sunt culpa aliquam, explicabo
                placeat temporibus magni modi distinctio at id eius numquam
                fugit vero nulla sequi.
              </p>
            </FeatureOpenedContent>

            <FeatureClickParagraph
              clicked={showFeatureBool("eigth")}
              onClick={() => showOpener("eigth")}
            >
              Smart Manufacturing
              <img className="dropdown" src={dropdown} alt="arrow icon" />
            </FeatureClickParagraph>
            <FeatureOpenedContent
              mobileOpenerContent
              showContent={showFeatureBool("eigth")}
            >
              <h3>Smart Manufacturing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quasi repellendus iure corrupti, sunt culpa aliquam, explicabo
                placeat temporibus magni modi distinctio at id eius numquam
                fugit vero nulla sequi.
              </p>
            </FeatureOpenedContent>
          </div>
          <div className="opener-content">
            <FeatureOpenedContent showContent={showFeatureBool("first")}>
              <h3>Robotic Technology</h3>
              <p>
                This unit is designed to develop intelligent robots and to train
                them. Major equipments are Industrial Robot, IP Camera, Workshop
                Tools, Parallel Robot Actuator and Controller, Pneumatics IoT
                Training Systems, Mechanical Simulator Software, PLC Training
                System.
              </p>
              <Link
                to={{ pathname: "login", state: { lab: "robotic-technology" } }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("second")}>
              <h3>Electronics and IoT</h3>
              <p>
                This section consists of the basic and advanced instruments to
                study the different behaviour of electronic circuits. This
                section is providing the focused, practical environment for
                students who want to learn the hands-on of Electronics design
                for innovation and Industrial Application. It offers in-depth
                learning of Electronics Circuit Design and Simulation with PCB
                designing followed by fabrication of the circuits and validation
                of the same. Benefits and features of this section are like
                hands-on experience of circuit design, hands-on experience of
                working with PCB Design and fabrication, acquire skills to do
                improved projects, knowledge of Electronic instruments and
                components, understanding schematic circuit design techniques,
                Involvement with live projects Function Generator (33622A
                Waveform Generator) A function generator is usually a piece of
                electronic test equipment or software used to generate different
                types of electrical waveforms over a wide range of frequencies
                Oscilloscope /DSO (DSOX3014A Oscilloscope) An oscilloscope is a
                laboratory instrument commonly used to display and analyze the
                waveform of electronic signals. Digital M
              </p>
              <Link
                to={{ pathname: "login", state: { lab: "electronics-iot" } }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("third")}>
              <h3>Data and Software Technology</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                odio debitis ex blanditiis. Cupiditate eaque iure autem laborum
                ratione doloremque! Eligendi quaerat earum expedita perferendis
                blanditiis, voluptas nam maxime tempore.
              </p>
              <Link
                to={{
                  pathname: "login",
                  state: { lab: "data-and-software-technology" },
                }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("fourth")}>
              <h3>Animation and Game Design</h3>
              <p>
                India is emerging as an outsourcing hub for animation and visual
                effects with a large number of international media companies
                entering into joint ventures with animation studios in India.
                Gaming and Animation Design Unit will equip students and
                professionals with Industry-standard resources. The Unit
                primarily contains software used for design, animation and
                games. It has design softwares such as Solid Works. There will
                be CAD/CAM software such as SurfCAM and MasterCAM, which can be
                used with CNC programming for obtaining complex geometries and
                operations. Maya animation software will be used for animation,
                environment, motion graphics, virtual reality and character
                creation.
              </p>
              <Link
                to={{
                  pathname: "login",
                  state: { lab: "animation-and-gaming" },
                }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("fifth")}>
              <h3>Electric Mobility</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas tenetur provident eligendi quae incidunt sit inventore,
                iusto, illo, excepturi ipsam hic rem at harum consectetur itaque
                adipisci corrupti praesentium magnam?
              </p>
              <Link
                to={{ pathname: "login", state: { lab: "electric-mobility" } }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("sixth")}>
              <h3>Finanace Technology</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas tenetur provident eligendi quae incidunt sit inventore,
                iusto, illo, excepturi ipsam hic rem at harum consectetur itaque
                adipisci corrupti praesentium magnam?
              </p>
              <Link
                to={{ pathname: "login", state: { lab: "finance-technology" } }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("seventh")}>
              <h3>Aeronautics and Space Technology</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas tenetur provident eligendi quae incidunt sit inventore,
                iusto, illo, excepturi ipsam hic rem at harum consectetur itaque
                adipisci corrupti praesentium magnam?
              </p>
              <Link
                to={{
                  pathname: "login",
                  state: { lab: "aeronautics-and-space" },
                }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
            <FeatureOpenedContent showContent={showFeatureBool("eigth")}>
              <h3>Smart Manufacturing</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas tenetur provident eligendi quae incidunt sit inventore,
                iusto, illo, excepturi ipsam hic rem at harum consectetur itaque
                adipisci corrupti praesentium magnam?
              </p>
              <Link
                to={{
                  pathname: "login",
                  state: { lab: "smart-manufacturing" },
                }}
                className="get-started"
              >
                Login as Lab-In-charge
              </Link>
            </FeatureOpenedContent>
          </div>
        </div>
      </section>
      {/* <section className="help-business">
                <HeaderTwo home>Let us help your business grow</HeaderTwo>

        <p className="grey-para">
          Haven developed smart solutions for numerous types of organizations,
          we know what matters most.
        </p>

                <div className="get-started-wrapper">
                    <Link to={{ pathname: "login", state: { lab: "Robotic-Technology" } }} className="get-started">
                        Login as Lab-In-charge
                    </Link>
                </div>
            </section> */}
      <Footer />
    </MainComponent>
  );
};

export default Main;
