import logo from './ladron.png'
import React, { useState } from 'react'

export const Acceso = () => {

    const [intentos, setIntentos] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIntentos( intentos + 1)
    }
    return (
        <>
        <div className="col m3"></div>

        <div className="col s12 m6 card purple hoverable">
            <div className="row">
                <div className="col s3 m3"></div>
                <img src={logo} alt="ladron" className="card-image logo col s6 m6"/>
                <div className="col s2"></div>
            </div>

            <p className="white-text card-title center">Acceder</p>
                
                <form 
                    className="row"
                    onSubmit={ handleSubmit }
                >
                    
                <div className="input-field col s12 white-text">
                        <input type="text" name="usuario" className="white-text"/>
                        <label >Usuario</label>
                </div>

                <div className="input-field col s12 white-text">
                        <input type="password" name="contraseña" className="white-text"/>
                        <label >Contraseña</label>
                </div>

                <div className="input-field col s12 white-text">
                        <button 
                        className=" col s12 blue btn  waves-effect waves-light"
                        type="submit"
                        > Ingresar </button>
                </div>

                </form>

                <div className="row">
                    <p className="center white-text"> intentos : {intentos}
                    </p>
                    <a href="#" className="yellow-text m-1">Recuperar contraseña</a>
                </div>
        </div>
        </>
    )
}
