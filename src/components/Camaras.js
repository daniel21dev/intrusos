import React from 'react'

export const Camaras = () => {
    return (
        <>
        <div className="col s12 m5 black camara">
            Camara 1

            <span className="right btn-floating pulse green"><i class="material-icons">add</i></span>
        </div>
        <div className="col s12 m5 black camara">
            Camara 2
            <span className="right btn-floating red"><i class="material-icons">remove</i></span>
        </div>
        <div className="col s12 m5 black camara">
            Camara 3
            <span className="right btn-floating red"><i class="material-icons">remove</i></span>
        </div>
        <div className="col s12 m5 black camara">
            Camara 4
            <span className="right btn-floating pulse green"><i class="material-icons">add</i></span>
        </div>
        </>
    )
}
