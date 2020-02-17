import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import bloques from '../../images/bloques.jpg';

const Bloque = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Bloques</h3>
                <div className="imagen-contenedor">
                    <img src={bloques} alt="Imágen Bloques"/>
                </div>
                <p><FontAwesomeIcon icon={faSquare}/> 0 bloques registrados</p>
                <Link to={'/crear-bloque'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear bloque"/>
                </div>
                </Link>
                <Link to={'/consultar-bloque'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar bloques"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Bloque;