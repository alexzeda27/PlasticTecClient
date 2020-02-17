import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import departamentos from '../../images/departamentos.png';

const Departamento = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Departamentos</h3>
                <div className="imagen-contenedor">
                    <img src={departamentos} alt="Imágen Departamentos"/>
                </div>
                <p><FontAwesomeIcon icon={faBuilding}/> 0 departamentos registrados</p>
                <Link to={'/crear-departamento'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear departamento"/>
                </div>
                </Link>
                <Link to={'/consultar-departamento'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar departamentos"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Departamento;