import React from 'react'

import { GiBeard, GiHeadbandKnot, GiHairStrands } from "react-icons/gi";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
function Services() {
  return (
      <div className="" id="service">
          <div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="service p-10 flex items-center text-center justify-center bg-no-repeat "
          >
              <div>
                  <h1 className="uppercase text-white text-2xl my-4 font-primary ">
                      Nos Services professionnels
                  </h1>
                  <p className="text-white text-5xl font-bold font-secondary">
                      OUR BEST SERVICES THAT <br /> WE OFFERING TO YOU
                  </p>
              </div>
          </div>

          <div
              variants={fadeIn("bottom", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="container mx-auto m-12"
          >
              <div className="grid md:grid-cols-3 md:space-x-6 space-y-6 md:space-y-0 text-center justify-center ">
                  <div className="group p-12 space-y-8 bg-gray-100 rounded-lg">
                      <div className=" flex items-center  justify-center">
                          <div className="p-4 bg-primary  duration-700 group-hover:scale-75 rounded-2xl">
                              <GiBeard className="text-5xl  text-white" />
                          </div>
                      </div>
                      <p className="font-secondary uppercase font-bold text-3xl group-hover:text-primary">
                          Stylé la Barbe
                      </p>
                      <p className="font-light">
                          Sorem spsum dolor sit amsectetur adipisclit, seddo
                          eiusmod tempor incididunt ut laborea.
                      </p>
                  </div>
                  <div className="group p-12 space-y-8 bg-gray-100 rounded-lg">
                      <div className=" flex items-center  justify-center">
                          <div className="p-4 bg-primary rounded-2xl duration-700 group-hover:scale-75">
                              <GiHeadbandKnot className="text-5xl  text-white" />
                          </div>
                      </div>
                      <p className="font-secondary uppercase font-bold text-3xl group-hover:text-primary">
                          Soin de visage
                      </p>
                      <p className="font-light">
                          Sorem spsum dolor sit amsectetur adipisclit, seddo
                          eiusmod tempor incididunt ut laborea.
                      </p>
                  </div>
                  <div className="group p-12 space-y-8 bg-gray-100 rounded-lg">
                      <div className=" flex items-center  justify-center">
                          <div className="p-4 bg-primary rounded-2xl duration-700 group-hover:scale-75">
                              <GiHairStrands className="text-5xl  text-white" />
                          </div>
                      </div>
                      <p className="font-secondary uppercase font-bold text-3xl group-hover:text-primary">
                          Coup de choix
                      </p>
                      <p className="font-light">
                          Sorem spsum dolor sit amsectetur adipisclit, seddo
                          eiusmod tempor incididunt ut laborea.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Services
