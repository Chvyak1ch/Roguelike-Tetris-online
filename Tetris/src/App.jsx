import './App.css'
import React, { createContext } from 'react';
import GamePage from './Pages/GamePage'
import Header from './components/Header'
import { BrowserRouter, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import AppRouter from './components/AppRouter';
import UserStore from './store/UserStore';
import NavBar from './components/navBar/NavBar';
export const AuthContext = createContext();


function App() {

  return (
    <>
    <AuthContext.Provider value={{
      user: UserStore
    }}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>      
    </AuthContext.Provider>
    </>
  )
}

export default App
