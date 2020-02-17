import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import clientes from '../../images/clientes.jpg';

const Cliente = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Clientes</h3>
                <div className="imagen-contenedor">
                    <img src={clientes} alt="Imágen Puestos"/>
                </div>
                <p><FontAwesomeIcon icon={faCar}/> 0 clientes registrados</p>
                <Link to={'/crear-cliente'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear cliente"/>
                </div>
                </Link>
                <Link to={'/consultar-cliente'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar clientes"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Cliente;