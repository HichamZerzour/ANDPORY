import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react'
import { ImSpinner9 } from "react-icons/im";
import {FaRegMoneyBillAlt} from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function RdvPage() {

    const [loadingPage, setLoadingPage] = useState(true);
const navigate = useNavigate();
    const notifySuccess = () => toast.success("Rendez-vous bien envoyé MERCI!",);
    const notifyError = (msg) =>
        toast.error(
            msg,
            {
                onClose: () => setLoading(false),
            }
        );



    const [loading, setLoading] = useState(false);

    const [choix, setChoix] = useState([]);
    const [total, setTotal] = useState(0);
    const [choixChecked, setChoixChecked] = useState([]);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [heure, setHeure] = useState("");

    const [startDate, setStartDate] = useState();
    const today = new Date().toISOString().substr(0, 10);
    //ERROR states
    const [telError, setTelError] = useState();
    const [heureError, setHeureError] = useState();
    //FIN
    const url = "http://localhost:8000";
   const urlPublic = "https://www.api.andory-barbershop.com";
    const dateDefault = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        setDate(formattedDate);
    }
    const getAllChoix=()=>{
        axios.get(`${urlPublic}/api/all-choix`)
        .then((resp) => {
            setChoix(resp.data);
        })
        .catch((err) => {
            console.log("error");
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        setLoading(true);
         axios.get(`${urlPublic}/api/all-rdv`)
             .then((resp) => {

                 const allRdv = resp.data.filter(
                     (item) => item.heure_rdv==heure+":00" && item.date_rdv==date
                 );

                 if (allRdv.length == 0) {

                    const data = { nom, prenom, tel, email };
                    axios.post(`${urlPublic}/api/add-client`, data)
                        .then((resp) => {

                            addRdv(resp.data);
                        })
                        .catch((err) => {
                            notifyError(
                                "Une erreur est rencontré lors de la création d'utilisateur"
                            );
                        });

                 } else {
                     notifyError("Veuillez choisissez une autre HEURE SVP");
                 }
             })
             .catch((err) => {
                 notifyError("Une erreur est rencontré");
             });


    }
    const addRdv = (id) => {

        const data = {
                    date_rdv: date,
                    heure_rdv: heure,
                    choix: choixChecked,
                    peiment: false,
                    client_id: id,
        };
        axios.post(`${urlPublic}/api/add-rdv`, data)
            .then((res) => {
                setLoading(false);
                initialise();
                notifySuccess();
                navigate("/RdvSuccess")
            })
            .catch((err) => {
                notifyError(
                    "Une erreur est rencontré lors de la création de RDV"
                );
            });

    }

    const initialise = () => {
        setChoixChecked([]);
        setNom("");
        setPrenom("");
        setTel("");
        setEmail("");
        setDate("");
        setHeure("");
        setTotal(0);
    }

    const getCheckedChoix = (e,id,prix) => {
        if (e.target.checked) {
              setTotal(total + prix);
             setChoixChecked([...choixChecked, id]);

         } else {
             setTotal(total - prix);
             setChoixChecked(choixChecked.filter((item) => item != id));
         }
    }

    useEffect(() => {
        setLoadingPage(false)
        getAllChoix();
        dateDefault();
    },[]);

    return (
        <div className="container  mx-auto flex items-center justify-center ">
            {loadingPage ? (
                <div className="fixed z-50  inset-0 flex items-center justify-center bg-gray-900 opacity-100">
                    <ImSpinner9 className="animate-spin text-primary mr-3 text-8xl" />
                </div>
            ) : (
                ""
            )}
            {loading ? (
                <div className="fixed z-50  inset-0 flex items-center justify-center bg-gray-900 opacity-100">
                    <ImSpinner9 className="animate-spin text-primary mr-3 text-8xl" />
                </div>
            ) : (
                ""
            )}
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
            <form onSubmit={handleSubmit}>
                <div className="bg-slate-100 p-4 h-auto md:p-10">
                    <h1 className="text-5xl text-center my-6 bg-primary rounded-lg py-2   text-white font-secondary">
                        Vos informations
                    </h1>
                    <div className="my-8">
                        <div className="grid  grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="nom"
                                    className="text-gray-600 font-secondary"
                                >
                                    Nom
                                </label>
                                <input
                                    required
                                    onChange={(e) => {
                                        setNom(e.target.value);
                                    }}
                                    type="text"
                                    id="nom"
                                    className="w-full border-2 border-gray-200 rounded-lg p-3 text-gray-500 focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="prenom"
                                    className="text-gray-600 font-secondary"
                                >
                                    Prenom
                                </label>
                                <input
                                    required
                                    onChange={(e) => {
                                        setPrenom(e.target.value);
                                    }}
                                    type="text"
                                    id="prenom"
                                    className="w-full border-2 border-gray-200 rounded-lg p-3 text-gray-500 focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="tel"
                                    className="text-gray-600 font-secondary"
                                >
                                    Tel
                                </label>
                                <input
                                    onChange={(e) => {
                                        setTel(e.target.value);
                                        e.target.value.length != 10
                                            ? setTelError(
                                                  "Le tel doit avoir 10 chiffres"
                                              )
                                            : setTelError("");
                                    }}
                                    pattern="^[0-9]{3,45}$"
                                    type="tel"
                                    required
                                    minLength={10}
                                    maxLength={10}
                                    id="tel"
                                    className="w-full border-2 border-gray-200 rounded-lg p-3 text-gray-500 focus:outline-none focus:border-primary"
                                />
                                <p className="text-red-600 font-secondary text-sm">
                                    {telError}
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-gray-600 font-secondary"
                                >
                                    Email
                                </label>
                                <input
                                    required
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    id="email"
                                    className="w-full border-2 border-gray-200 rounded-lg p-3 text-gray-500 focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 my-4">
                            <div>
                                <label
                                    required
                                    htmlFor="date"
                                    className="text-gray-600 font-secondary"
                                >
                                    Date
                                </label>

                                <input
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                    value={date}
                                    min={today}
                                    type="date"
                                    id="date"
                                    className="w-full border-2 border-gray-200 rounded-lg p-3 text-gray-500 focus:outline-none focus:border-primary"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="date"
                                    className="text-gray-600 font-secondary"
                                >
                                    Heure
                                </label>
                                <input
                                    min="11:00"
                                    max="22:00"
                                    onChange={(e) => {
                                        setHeure(e.target.value);
                                        if (date == today) {
                                            var heureH =
                                                e.target.value.split(":")[0];
                                            var heureM =
                                                e.target.value.split(":")[1];
                                            const currentDate = new Date();
                                            if (
                                                heureH < currentDate.getHours()
                                            ) {
                                                setHeureError(
                                                    "Vous pouvez pas choisir une heure dans le Passé"
                                                );
                                            } else {
                                                setHeureError("");
                                            }
                                        } else {
                                            setHeureError("");
                                        }
                                    }}
                                    type="time"
                                    onkeydown="return false"
                                    step={3600}
                                    id="date"
                                    required
                                    className="w-full border-2 border-gray-200 rounded-lg p-3 text-gray-500 focus:outline-none focus:border-primary"
                                />
                                <p className="text-red-600 font-secondary text-sm">
                                    {heureError}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-6 md:gap-20">
                        <div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    class="sr-only peer"
                                />
                                <div
                                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                                  peer-focus:ring-primary border-2 peer-checked:border-none border-gray-300 rounded-full peer
                                   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-['']
                                   after:absolute md:after:top-[2px] md:after:left-[2px] after:-left-[0px]  after:top-0.5  after:bg-white after:border-gray-300
                                   after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                                 peer-checked:bg-primary"
                                ></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 ">
                                    Peiment en ligne
                                </span>
                            </label>
                        </div>
                    </div>
                    <h1 className="text-5xl text-center my-6 bg-primary rounded-lg py-2   text-white font-secondary">
                        Votre choix
                    </h1>
                    <div className="md:grid-cols-3 grid grid-cols-2 justify-between gap-4">
                        {choix.map((ch) => {
                            return (
                                <div key={ch.id}>
                                    <input
                                        type="checkbox"
                                        id={ch.id}
                                        value={ch.prix_un}
                                        class="hidden peer"
                                        required=""
                                        onChange={(e) =>
                                            getCheckedChoix(
                                                e,
                                                ch.id,
                                                ch.prix_un
                                            )
                                        }
                                    />
                                    <label
                                        for={ch.id}
                                        className="text-center inline-flex items-center justify-center  w-full p-5 text-gray-600 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer peer-checked:border-primary peer-checked:bg-primary hover:text-white  peer-checked:text-white hover:bg-primary/40"
                                    >
                                        <div class="block  ">
                                            <div class="w-full text-lg font-semibold">
                                                {ch.libelle}
                                            </div>
                                            <div className="border-t-4 p-2 mt-4 ">
                                                <h1 className="font-thin font-secondary  flex items-center gap-2">
                                                    <FaRegMoneyBillAlt className="text-lg text-secondary font-bold" />
                                                    PRIX:{" "}
                                                    <span className="font-bold font-primary  group-checked:text-white ">
                                                        {ch.prix_un} DH
                                                    </span>
                                                </h1>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center font-bold mt-6 font-secondary">
                        Prix total : <span>{total} DH</span>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            disabled={choixChecked.length == 0 ? true : false}
                            type="submit"
                            className="bg-secondary p-6 disabled:cursor-not-allowed disabled:opacity-40 text-white font-bold rounded-lg hover:bg-secondary/80"
                        >
                            Prenez la résérvation
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RdvPage
