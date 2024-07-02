import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GamePage from "./Pages/GamePage";
import History from "./Pages/History";
import ProjectInfo from "./Pages/ProjectInfo";
import PageFAQ from "./Pages/PageFAQ";
import AppTetris from "./gamePlay/AppTetris";


const Router = () => (

        <Routes>
            <Route element={<GamePage />} path="/" />
            <Route element={<History />} path="/history" />
            <Route element={<ProjectInfo />} path="/projectInfo" />
            <Route element={<PageFAQ />} path="/pageFAQ" />
            <Route element={<AppTetris />} path="/tetris" />
        </Routes>


)

export default Router;