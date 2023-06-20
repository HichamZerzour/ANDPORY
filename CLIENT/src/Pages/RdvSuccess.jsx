import React, { useEffect } from 'react'

import qr from "../assets/imgs/qr.webp"

import { BsInstagram, BsFacebook, BsFillTelephoneFill, BsTabletFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
function RdvSuccess() {
    const notifySuccess = () => toast.success("Rendez-vous bien envoyé MERCI!");

    useEffect(() => {
        notifySuccess();
        console.log("csdc");
    },[])
  return (
      <div>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
          <div className="container  mx-auto flex items-center justify-center ">
              <div className="bg-slate-100 p-4  md:p-10 h-auto">
                  <h1 className="text-5xl  text-center my-6 bg-primary rounded-lg py-2   text-white font-secondary">
                      Informations de Salon
                  </h1>
                  <h2 className="text-center font-secondary font-bold">
                      Vous pouvez SCANNEZ le QR CODE pour toutes les
                      informations
                  </h2>
                  <div className="flex justify-center">
                      <img src={qr} alt="" className="md:w-96 md:h-96 " />
                  </div>
                  <div className="  flex justify-center">
                      <div className="space-y-3">
                          <div className="">
                              <a
                                  href="tel:+212675464751"
                                  target="_blank"
                                  className="flex gap-4 items-center"
                              >
                                  <BsFillTelephoneFill className="text-xl text-primary" />
                                  <p className="font-thin text-xl uppercase hover:text-primary">
                                      06 75 46 47 51
                                  </p>
                              </a>
                          </div>
                          <div className="">
                              <a
                                  href="https://www.instagram.com/andorybarbershop/"
                                  target="_blank"
                                  className="flex gap-4 items-center"
                              >
                                  <BsInstagram className="text-xl text-primary" />
                                  <p className="font-thin text-xl uppercase hover:text-primary">
                                      @andorybarbershop
                                  </p>
                              </a>
                          </div>
                          <div className="">
                              <a
                                  href="https://www.facebook.com/amer.angelhairstyle"
                                  target="_blank"
                                  className="flex gap-4 items-center"
                              >
                                  <BsFacebook className="text-xl text-primary" />
                                  <p className="font-thin text-xl uppercase hover:text-primary">
                                      Abdeljabbar Anbdour
                                  </p>
                              </a>
                          </div>
                          <div className="">
                              <a
                                  href="https://www.google.com/maps/search/?api=1&query=@andorybarbershop"
                                  target="_blank"
                                  className="flex gap-4 items-center"
                              >
                                  <ImLocation className="text-xl text-primary" />
                                  <p className="font-thin text-xl uppercase hover:text-primary">
                                      Massira 1
                                  </p>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default RdvSuccess
