
import React from 'react'
import robo from './robp.jpeg'

export const Alertas = () => {

    const alertas = [["camara 2","12/03/19","16:07"],["camara 4","12/03/19","1:30"],["camara 2","06/08/15","7:48"]]

    return (
        <div>
            <h2 className="center white-text">Alertas</h2>
            <table className="highlight white m-1">
                <thead>
                    <tr>
                        <th>Camara</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Foto</th>
                        <th className="center">Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{ alertas[0][0]} </td>
                        <td>{ alertas[0][1]} </td>
                        <td>{ alertas[0][2] } </td>
                        <td><img src={robo} alt="robo"/></td>
                        <td className="center"> <span>X</span> </td>
                    </tr>
                    <tr>
                        <td>{ alertas[1][0]} </td>
                        <td>{ alertas[1][1]} </td>
                        <td>{ alertas[1][2]} </td>
                        <td><img src={robo} alt="robo"/></td>
                        <td className="center"> <span>X</span> </td>
                    </tr>
                    <tr>
                        <td>{ alertas[2][0]} </td>
                        <td>{ alertas[2][1]} </td>
                        <td>{ alertas[2][2]}</td>
                        <td><img src={robo} alt="robo"/></td>
                        <td className="center"> <span>X</span> </td>
                    </tr>
                    {/*
                        alertas.forEach( (alerta) =>(
                            <tr>
                                <td>{ alerta[0]} </td>
                                <td>{ alerta[1]} </td>
                                <td>{ alerta[2]} </td>
                            </tr>
                        ))
                        */}
                </tbody>
            </table>
        </div>
    )
}
