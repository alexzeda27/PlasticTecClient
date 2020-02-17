import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import supervisores from '../../images/supervisores.jpg';

const Supervisor = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Supervisores</h3>
                <div className="imagen-contenedor">
                    <img src={supervisores} alt="Imágen Supervisor"/>
                </div>
                <p><FontAwesomeIcon icon={faUser}/> 0 supervisores activos</p>
                <Link to={'/crear-supervisor'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear supervisor"/>
                </div>
                </Link>
                <Link to={'/consultar-supervisor'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar supervisores"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Supervisor;