import React, { useEffect, useState } from 'react'
import PanelNav from '../Components/PanelNav'
import axios from 'axios';

import { FcOvertime } from "react-icons/fc"
import { TiCancel, TiEye } from "react-icons/ti";
import { FaDotCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
function Panel_Rdv() {


    const[rdv, setRdv] = useState([]);
    const [clients, setClients] = useState([]);
    const [index, setIndex] = useState(1);
    const [lastIndex, setLastIndex] = useState(1);
    const notifSuccess = (msg) => toast.success(msg);
    const url = "http://localhost:8000";
    const urlPublic =
        "https://www.api.andory-barbershop.com";

    const fetchRdv = () => {

        axios.get(`${urlPublic}/api/all-rdv-pag?page=${index}`).then((resp) => {
            setRdv(resp.data.data)
            setLastIndex(resp.data.last_page);
        }).catch((err) => {

        })
    }
    const handleToday = () => {

        axios.get(`${urlPublic}/api/all-rdv`).then((resp) => {
              const today = new Date();

              const todayRdv = resp.data.filter((rd) => {
                  const dateObj = new Date(rd.date_rdv);
                  return dateObj.getFullYear() == today.getFullYear() &&
                    dateObj.getMonth() == today.getMonth() &&
                    dateObj.getDay() == today.getDay()
              });
            setRdv(todayRdv);
        }).catch((err) => { })
    }

    const handleTomorrow = () => {
        axios.get(`${urlPublic}/api/all-rdv`)
            .then((resp) => {
                const today = new Date();
                const tomorrowRdv = resp.data.filter((rd) => {
                    const dateObj = new Date(rd.date_rdv);
                    return (
                        dateObj.getFullYear() == today.getFullYear() &&
                        dateObj.getMonth() == today.getMonth() &&
                        dateObj.getDay() == today.getDay()+1
                    );
                });
                setRdv(tomorrowRdv);
            })
            .catch((err) => {});
    };

    const cancelRdv = (e, id) => {
        e.preventDefault();
         axios.patch(`${urlPublic}/api/update-rdv/${id}`)
             .then((resp) => {
                 notifSuccess(resp.data.message);
                 fetchRdv();
             })
             .catch((err) => {});
    }
    const fetchClients = () => {
        axios.get(`${urlPublic}/api/all-clients`)
            .then((resp) => {
                setClients(resp.data);
            })
            .catch((err) => {});
    };

    const handleNext = () => {
        if(index<lastIndex)
        setIndex(index + 1);
    }
    const handlePrev = () => {
        setIndex(index - 1 );

    }
    useEffect(() => {
        fetchRdv();
        fetchClients();

    },[index])
  return (
      <div>
          <PanelNav />

          <div className=" ">
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
              <div class="flex flex-col">
                  <div className="my-2 mx-10 flex justify-center">
                      <div
                          class="inline-flex justify-center rounded-md shadow-sm"
                          role="group"
                      >
                          <button
                              onClick={handleToday}
                              type="button"
                              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                          >
                              RDV Aujordhui
                          </button>
                          <button
                              onClick={handleTomorrow}
                              type="button"
                              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                          >
                              RDV Demain
                          </button>
                          <button
                              onClick={fetchRdv}
                              type="button"
                              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
                          >
                              Tous les RDV
                          </button>
                      </div>
                  </div>
                  <div class="overflow-x-auto ">
                      <div class="inline-block min-w-full py-2 space-y-4 sm:px-6 lg:px-8">
                          <div class="overflow-hidden">
                              <table class="min-w-full text-left text-sm font-light rounded-3xl font-secondary ">
                                  <thead class="rounded-2xl bg-secondary font-medium text-white">
                                      <tr>
                                          <th scope="col" class="px-2 py-2">
                                              Nom
                                          </th>
                                          <th scope="col" class="px-2 py-2">
                                              Tel
                                          </th>
                                          <th scope="col" class="px-2 py-2">
                                              Date
                                          </th>
                                          <th scope="col" class="px-2 py-2">
                                              Heure
                                          </th>
                                          <th scope="col" class="px-2 py-2">
                                              Prix
                                          </th>
                                          <th scope="col" class="px-2 py-2">
                                              Statut
                                          </th>
                                          <th scope="col" class="px-2 py-2">
                                              Action
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {rdv.map((item) => {
                                          const unClient = clients.find(
                                              (cli) => cli.id == item.client_id
                                          );
                                          return (
                                              <tr
                                                  key={item.id}
                                                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
                                              >
                                                  <td class="whitespace-nowrap px-2 py-8 font-medium">
                                                      {unClient
                                                          ? unClient.nom +
                                                            " - " +
                                                            unClient.prenom
                                                          : ""}
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2">
                                                      {unClient ? (
                                                          <a
                                                              href={`tel:${unClient.tel}`}
                                                              className="hover:font-bold"
                                                          >
                                                              {unClient.tel}
                                                          </a>
                                                      ) : (
                                                          ""
                                                      )}
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2">
                                                      {item.date_rdv}
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2">
                                                      {item.heure_rdv}
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2 ">
                                                      <span className="bg-primary p-2 border rounded-full  text-white font-bold ">
                                                          {item.prix_tot} DH
                                                      </span>
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2 ">
                                                      <FaDotCircle
                                                          className={
                                                              item.statut
                                                                  ? "text-green-600"
                                                                  : "text-red-600"
                                                          }
                                                      />
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2 ">
                                                      <div className="flex gap-2">
                                                          <button
                                                              disabled={!item.statut}
                                                              onClick={(e) => {
                                                                  cancelRdv(
                                                                      e,
                                                                      item.id
                                                                  );
                                                              }}
                                                              className="rounded-full text-xl bg-red-600 font-secondary text-white p-2  hover:opacity-60 disabled:bg-slate-400 disabled:cursor-not-allowed"
                                                          >
                                                              <TiCancel />
                                                          </button>
                                                          <button className="rounded-full text-xl bg-secondary font-secondary text-white p-2  hover:opacity-60">
                                                              <TiEye />
                                                          </button>
                                                      </div>
                                                  </td>
                                              </tr>
                                          );
                                      })}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                  {rdv.length == 0 ? (
                      <h1 className="text-6xl text-gray-600  font-primary">
                          Aucun RDV trouvé
                      </h1>
                  ) : (
                      <div className="flex gap-4">
                          <button
                              disabled={index == 1}
                              onClick={handlePrev}
                              className="bg-primary p-2 w-20 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                              Previous
                          </button>
                          <button
                              disabled={index == lastIndex}
                              onClick={handleNext}
                              className="bg-primary p-2 w-20 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                              Next
                          </button>
                      </div>
                  )}
              </div>
          </div>
      </div>
  );
}

export default Panel_Rdv
