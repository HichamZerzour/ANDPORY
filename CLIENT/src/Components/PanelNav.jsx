import React from 'react'
import { Link } from 'react-router-dom';

function PanelNav() {
  return (
      <div className="">
          <div className="bg-slate-100 h-auto">
              <div>
                  <ul className="flex justify-between gap-4 font-bold p-10 items-center font-secondary">
                      <li className=" rounded-2xl border-secondary p-4  text-black">
                          <Link to={"/panel-rdv"}>Mes RDV</Link>
                      </li>
                      <li className=" rounded-2xl border-secondary p-4  text-black">
                          <Link to={"/panel-choix"}> Mes Choix</Link>
                      </li>
                      <li className=" rounded-2xl border-secondary p-4  text-black">
                          <Link to={"/panel-clients"}> Mes Clients</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default PanelNav
