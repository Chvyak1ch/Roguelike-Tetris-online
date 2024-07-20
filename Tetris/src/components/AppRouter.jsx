import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import UserStore from "../store/UserStore";
import { observer } from "mobx-react-lite";

const AppRouter = () => {

    return(
        UserStore._isAuth
        ?
        <Routes>
                { authRoutes.map(route =>
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={route.element}
                        exact={route.exact}
                    />
                )}
            <Route path='*'element={<Navigate to='/game'/>}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route 
                    key={route.path} 
                    path={route.path} 
                    element={route.element}
                    exact={route.exact}
                />
            )}
            <Route path='*'element={<Navigate to='/enterUser'/>}/>
            </Routes>
    );
}

export default observer(AppRouter);