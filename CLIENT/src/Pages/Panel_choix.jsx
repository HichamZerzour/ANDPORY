import React, { useEffect, useState } from "react";
import PanelNav from "../Components/PanelNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Panel_choix() {
    const [choix, setChoix] = useState([]);
    const [libelle, setLibelle] = useState("");
    const [prix_un, setPrix] = useState("");

    const notifSuccess =(msg)=> toast.success(msg);
    const notifError = (msg) => toast.error(msg);

const url = "http://localhost:8000";
const urlPublic =
    "https://www.api.andory-barbershop.com";
    const fetchChoix = () => {
        axios.get(`${urlPublic}/api/all-choix`)
            .then((resp) => {
                setChoix(resp.data);
            })
            .catch((err) => {});
    };

    const addChoix = (e) => {
        e.preventDefault();
         axios.post(`${urlPublic}/api/add-choix`,{libelle,prix_un})
             .then((resp) => {
                 notifSuccess(resp.data.message);
                 fetchChoix();
             })
             .catch((err) => {
                 notifError(err.data)
             });
    };

    const deleteChoix = (e,id) => {
        axios.delete(`${urlPublic}/api/delete-choix/${id}`)
            .then((resp) => {
                notifSuccess(resp.data.message);

                fetchChoix();
            })
            .catch((err) => {
                notifError("une erreur survenue lors de la supression de Choix");
            });
    }

    useEffect(() => {
        fetchChoix();
    },[]);
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
                    <div className="gap-6 m-8 md:flex grid  items-center justify-center">
                        <div className="block">
                            <label
                                htmlFor="libelle"
                                className="font-secondary text-sm"
                            >
                                Votre choix
                            </label>{" "}
                            <br />
                            <input
                                onChange={(e) => setLibelle(e.target.value)}
                                type="text"
                                id="libelle"
                                className="border border-gray-300 p-3 rounded-lg"
                            />
                        </div>
                        <div className="block">
                            <label
                                htmlFor="prix"
                                className="font-secondary text-sm"
                            >
                                Prix de choix
                            </label>{" "}
                            <br />
                            <input
                                onChange={(e) => setPrix(e.target.value)}
                                type="number"
                                id="prix"
                                className="border border-gray-300 p-3 rounded-lg"
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="text-center">
                                <label
                                    htmlFor=""
                                    className="text-center font-secondary text-sm"
                                >
                                    Ajouter
                                </label>{" "}
                                <br />
                                <button
                                    className="text-white bg-primary font-primary p-3 rounded-lg"
                                    onClick={addChoix}
                                >
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto ">
                        <div class="inline-block min-w-full py-2 space-y-4 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-left text-sm font-light rounded-3xl font-secondary ">
                                    <thead class="rounded-2xl bg-secondary font-medium text-white">
                                        <tr>
                                            <th scope="col" class="px-2 py-2">
                                                id
                                            </th>
                                            <th scope="col" class="px-2 py-2">
                                                Libelle
                                            </th>
                                            <th scope="col" class="px-2 py-2">
                                                Prix
                                            </th>
                                            <th scope="col" class="px-2 py-2">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {choix.map((item) => {
                                            return (
                                                <tr
                                                    key={item.id}
                                                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
                                                >
                                                    <td class="whitespace-nowrap px-2 py-8 font-medium">
                                                        {item.id}
                                                    </td>
                                                    <td class="whitespace-nowrap px-2 py-2">
                                                        {item.libelle}
                                                    </td>
                                                    <td class="whitespace-nowrap px-2 py-2">
                                                        {item.prix_un}
                                                    </td>
                                                    <td class="whitespace-nowrap px-2 py-2">
                                                        <button onClick={(e)=>deleteChoix(e,item.id)}
                                                            className="rounded-full bg-primary font-secondary text-white p-2 text-sm hover:opacity-90">
                                                            Delete
                                                        </button>
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
                    {choix.length == 0 ? (
                        <h1 className="text-6xl text-gray-600  font-primary">
                            Aucun Choix trouvé
                        </h1>
                    ) : (
                        <div className="flex gap-4">""</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Panel_choix;
