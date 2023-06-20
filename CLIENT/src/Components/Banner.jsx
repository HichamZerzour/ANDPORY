import React from 'react'

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from 'react-router-dom';

import hero  from "../assets/imgs/hero1.png"
function Banner() {
  return (
      <div
          className="hero h-screen bg-no-repeat bg-cover flex items-center bg-fixed md:p-20 p-6"

      >
          <div className="text-center md:text-start">
              <div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className="md:w-2/3"
              >
                  <h1 className="text-xl font-primary text-secondary uppercase">
                      Andory barberShop Marrakech
                  </h1>
                  <p className="my-8 uppercase font-secondary text-white font-bold text-7xl">
                      Le meilleur coiffeur en ville.
                  </p>
              </div>
              <div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex"
              >
                  <Link
                      to="/rdv"
                      className="bg-secondary  font-secondary text-2xl text-white p-4"
                  >
                      Prenez un Rdv dés Maintenant
                  </Link>
              </div>
          </div>
      </div>
  );
}

export default Banner
