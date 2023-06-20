import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home"
import RdvPage from './Pages/RdvPage';
import Page_404 from "./Pages/Page_404";
import RdvSuccess from "./Pages/RdvSuccess";
import Connexion from "./Pages/Connexion";
import PanelAdmin from "./Pages/PanelAdmin";
import Panel_Rdv from "./Pages/Panel_Rdv";
import Panel_client from "./Pages/Panel_client";
import Panel_choix from "./Pages/Panel_choix";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/rdv",
        element: <RdvPage />,
    },
    {
        path: "/RdvSuccess",
        element: <RdvSuccess />,
    },
    {
        path: "/connexion",
        element: <Connexion />,
    },
    {
        path: "/panel-admin",
        element: <PanelAdmin />,
    },
    {
        path: "/panel-rdv",
        element: <Panel_Rdv />,
    },
    {
        path: "/panel-clients",
        element: <Panel_client />,
    },
    {
        path: "/panel-choix",
        element: <Panel_choix />,
    },

    {
        path: "*",
        element: <Page_404 />,
    },
]);

export default router;
