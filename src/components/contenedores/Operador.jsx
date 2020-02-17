import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import operadores from '../../images/operadores.jpg';

const Operador = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Operadores</h3>
                <div className="imagen-contenedor">
                    <img src={operadores} alt="Imágen Operador"/>
                </div>
                <p><FontAwesomeIcon icon={faUser}/> 0 operadores activos</p>
                <Link to={'/crear-operador'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear operador"/>
                </div>
                </Link>
                <Link to={'/consultar-operador'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar operadores"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Operador;