import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'
import productos from '../../images/productos.jpg';

const Maquina = () => {
    return ( 
        <div className="contenedor-seccion">
            <div className="contenido">
                <h3>Productos</h3>
                <div className="imagen-contenedor">
                    <img src={productos} alt="Imágen Producto"/>
                </div>
                <p><FontAwesomeIcon icon={faCog}/> 0 productos registrados</p>
                <Link to={'/crear-producto'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-agregar btn-block"
                    value="Crear producto"/>
                </div>
                </Link>
                <Link to={'/consultar-producto'}>
                <div className="campo-form">
                    <input type="submit" className="btn btn-consultar btn-block"
                    value="Consultar productos"/>
                </div>
                </Link>
            </div>
        </div>
    );
}
 
export default Maquina;