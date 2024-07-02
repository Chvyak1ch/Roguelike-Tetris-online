import './App.css'
import React from 'react';
import GamePage from './Pages/GamePage'
import Header from './components/Header'
import { BrowserRouter, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Router from './Router';



function App() {

  return (
    <>
      <Header />
      <Router />  
    </>
  )
}

export default App
