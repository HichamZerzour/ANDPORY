import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import router from './router'
import Nav from './Components/Nav'
import Announce from './Components/Announce'
import Home from './Pages/Home'
import RdvPage from './Pages/RdvPage'
import RdvSuccess from './Pages/RdvSuccess'
import Connexion from './Pages/Connexion'
import PanelAdmin from './Pages/PanelAdmin'
import Panel_Rdv from './Pages/Panel_Rdv'
import Panel_client from './Pages/Panel_client'
import Panel_choix from './Pages/Panel_choix'
import Page_404 from './Pages/Page_404'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rdv" element={<RdvPage />} />
                <Route path="/RdvSuccess" element={<RdvSuccess />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/panel-admin" element={<PanelAdmin />} />
                <Route path="/panel-rdv" element={<Panel_Rdv />} />
                <Route path="/panel-clients" element={<Panel_client />} />
                <Route path="/panel-choix" element={<Panel_choix />} />
                <Route path="*" element={<Page_404 />} />
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);
