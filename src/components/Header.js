
import React from 'react'
import logo from './ladron.png'

export const Header = () => {
    return (
        <nav class="nav-extended purple">

        <div class="nav-wrapper">
                <a href="#!" class="brand-logo ">
                    <img src={logo} alt="logo" className="logo"/>
                    <span className="hide-on-med-and-down">Deteccion de intrusos</span>
                </a>
                <ul class="right hide-on-med-and-down">
                <li><a> Camaras </a></li>
                <li><a> Alertas </a></li>
                <li><a> Cuenta </a></li>
                </ul>
            </div>
            <div class="nav-content hide-on-large-only">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a>Camaras</a> </li>
                    <li class="tab"> <a>Alertas</a></li>
                    <li class="tab"> <a>Cuenta</a></li>
                </ul>
            </div>
        </nav>
    )
}
