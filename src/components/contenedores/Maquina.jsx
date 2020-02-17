import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import maquinas from '../../images/maquinas.jpg';

const Maquina = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Maquinas</h3>
                <div className="imagen-contenedor">
                    <img src={maquinas} alt="Imágen Maquina"/>
                </div>
                <p><FontAwesomeIcon icon={faRobot}/> 0 maquinas registrados</p>
                <Link to={'/crear-maquina'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear maquina"/>
                </div>
                </Link>
                <Link to={'/consultar-maquina'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar maquinas"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Maquina;