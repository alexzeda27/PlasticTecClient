import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import empleados from '../../images/empleados.jpg';

const Empleado = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Empleados</h3>
                <div className="imagen-contenedor">
                    <img src={empleados} alt="Imágen Empleados"/>
                </div>
                <p><FontAwesomeIcon icon={faUser}/> 0 empleados activos</p>
                <Link to={'/crear-empleado'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear empleado"/>
                </div>
                </Link>
                <Link to={'/consultar-empleado'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar empleados"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Empleado;