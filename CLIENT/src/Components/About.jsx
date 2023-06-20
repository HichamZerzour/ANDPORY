import React, { useContext } from 'react'

import about from "../assets/imgs/about.png"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { scrollContext } from '../Pages/Home';
function About() {


  return (
      <div id='about' className="md:p-20 my-8  grid md:space-x-32 md:grid-cols-2 grid-cols-1">
          <div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="hidden md:block"
          >
              <img src={about} alt="" className="md:w-full w-full  " />
          </div>
          <div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="flex items-center teext-center"
          >
              <div className="space-y-10 ">
                  <h1 className="uppercase text-lg text-gray-700 text-center">
                      A propos de notre company
                  </h1>
                  <h1 className="uppercase text-5xl font-bold font-secondary text-black text-center">
                      +18 ans d'expérience en coupe de cheveux !
                  </h1>
                  <p className="font-thin text-lg text-center">
                      Brook présente ses services avec des mises en page
                      flexibles, pratiques et esthétiques. Vous pouvez
                      sélectionner vos mises en page et éléments préférés pour
                      des résultats précis avec des possibilités de
                      personnalisation illimitées. Une reproduction précise des
                      designs est garantie
                  </p>
                  <p className="text-2xl text-gray-600 font-secondary text-center">
                      Reserver Maintenant, Précisez votre choix{" "}
                      <span className="text-primary"> je vous attnds</span>
                  </p>
              </div>
          </div>
      </div>
  );
}

export default About
