import React, { useContext, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai"
import logo2 from "../assets/imgs/logo2.png";
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import { Link } from "react-scroll";
import { scrollContext } from '../Pages/Home';
import { NavLink } from 'react-router-dom';

function Nav() {
     const scroll = useContext(scrollContext);
    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }
    const variants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 10,
                duration: 0.5,
            },
        },
    };

    console.log(scroll)
    return (
        <>
            <div
                variants={variants}
                initial="hidden"
                animate={show ? "visible" : "hidden"}
                className={`md:hidden p-10 bg-black/90 w-full  fixed top-20 ${
                    show
                        ? "block transition duration-500 ease-in-out"
                        : "hidden "
                }`}
            >
                <ul className=" items-center text-xl text-white gap-20 justify-center text-center  grid font-secondary font-bold">
                    <li>
                        <a href="/home">Acceuil</a>
                    </li>
                    <li>
                        <a href="#">A Propos</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                    <NavLink
                        to="/rdv"
                        className="bg-primary font-secondary p-4 px-8"
                    >
                        Prenez un RDV
                    </NavLink>
                </ul>
            </div>
            <div
                class={`${scroll} fixed   h-20 flex justify-between md:p-10 p-4 items-center   w-full`}
            >
                <div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                >
                    <h1 className="text-white flex items-center gap-4">
                        <img
                            src={logo2}
                            className="w-16 shadow-2xl shadow-primary h-16 border-2 border-primary rounded-full"
                            alt=""
                            srcset=""
                        />
                        <h1 className="font-secondary text-sm font-thin md:flex gap-1">
                            <p className="font-bold">Andory</p> BarberShop
                        </h1>
                    </h1>
                </div>
                <div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    className=""
                >
                    <ul className="hidden md:flex items-center text-white gap-20 font-secondary font-light">
                        <li>
                            <a href="/home">Acceuil</a>
                        </li>
                        <li>
                            <Link to="about" spy={true} smooth={true}>
                                A Propos
                            </Link>
                        </li>
                        <li>
                            <Link to="service" spy={true} smooth={true}>
                                Service
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contact
                            </Link>
                        </li>

                        <NavLink
                            to="/rdv"
                            className="bg-primary font-secondary p-4 px-8"
                        >
                            Prenez un RDV
                        </NavLink>
                        <NavLink
                            to="/connexion"
                            className="font-secondary "
                        >
                            admin
                        </NavLink>
                    </ul>
                    <button
                        className="md:hidden bg-primary rounded-xl p-2"
                        onClick={handleClick}
                    >
                        <AiOutlineUnorderedList className="text-white font-bold text-3xl" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Nav
