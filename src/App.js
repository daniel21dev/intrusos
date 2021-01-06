
import React from 'react'
import {Acceso} from './components/Acceso'
import { Alertas } from './components/Alertas'
import { Camaras } from './components/Camaras'
import { Cuenta } from './components/Cuenta'
import { Header } from './components/Header'



export const App = () => {

  return (
    <>
    <Header />
    <div class="container">
      
      
      <div className="row">
        {/* <Alertas /> */}
        {/* <Camaras /> */}
        <Cuenta />
        {/* <Acceso /> */}
      </div>

    </div>
    </>
  )
}

