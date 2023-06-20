import React, { useEffect, useState } from 'react'
import PanelNav from '../Components/PanelNav';
import axios from 'axios';

function Panel_client() {
    const [clients, setClients] = useState([]);
     const [index, setIndex] = useState(1);
    const [lastIndex, setLastIndex] = useState(1);

const url = "http://localhost:8000";
const urlPublic =
    "https://www.api.andory-barbershop.com";

    const fetchClients = () => {
        axios.get(`${urlPublic}/api/all-clients-pag?page=${index}`)
            .then((resp) => {
                setClients(resp.data.data);
                setLastIndex(resp.data.last_page);
            })
            .catch((err) => {});
    };

    const handleNext = () => {
        if (index < lastIndex) setIndex(index + 1);
    };
    const handlePrev = () => {
        setIndex(index - 1);
    };
    useEffect(() => {
        fetchClients();
    }, [index]);
  return (
      <div>
          <PanelNav />

          <div className=" ">
              <div class="flex flex-col">

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
                                              Email
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {clients.map((item) => {

                                          return (
                                              <tr
                                                  key={item.id}
                                                  class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
                                              >
                                                  <td class="whitespace-nowrap px-2 py-8 font-medium">
                                                     {item.nom + " - " + item.prenom}
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2">
                                                      {item.tel}
                                                  </td>
                                                  <td class="whitespace-nowrap px-2 py-2">
                                                      {item.email}
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
                  {clients.length == 0 ? (
                      <h1 className="text-6xl text-gray-600  font-primary">
                          Aucun Client trouvé
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

export default Panel_client
