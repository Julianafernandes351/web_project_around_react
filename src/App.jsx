import { useState } from 'react'
import logo from "./images/logo.svg";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import {CurrentUserProvider} from './context/CurrentUserContext.jsx'

function App() {
 
  return (
    <CurrentUserProvider>
      <div className="page__content" >
        <Header />
        <Main  />
        <Footer />  
      </div>
    </CurrentUserProvider>
  );
}

export default App