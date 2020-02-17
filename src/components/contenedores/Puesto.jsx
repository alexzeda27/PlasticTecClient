import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import puestos from '../../images/puestos.jpg';

const Puesto = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Puestos</h3>
                <div className="imagen-contenedor">
                    <img src={puestos} alt="Imágen Puestos"/>
                </div>
                <p><FontAwesomeIcon icon={faBriefcase}/> 0 puestos registrados</p>
                <Link to={'/crear-puesto'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear puesto"/>
                </div>
                </Link>
                <Link to={'/consultar-puesto'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar puestos"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Puesto;