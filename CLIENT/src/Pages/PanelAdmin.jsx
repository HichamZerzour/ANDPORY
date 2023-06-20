import React from 'react'
import {Navigate, useLocation, useNavigate } from 'react-router-dom'
import PanelHome from '../Components/PanelHome';

function PanelAdmin() {
    const location = useLocation();
    const key = location.state;

    const navigate = useNavigate();
    if (key != import.meta.env.VITE_PANEL_KEY) {
         <Navigate to={"/home"} />;
    }

    return <div>{key ? <PanelHome/> : <Navigate to={"/home"} />}</div>;

}

export default PanelAdmin
