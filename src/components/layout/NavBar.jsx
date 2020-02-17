import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return ( 
        <Fragment>

            <nav>
                <div className="barra">
                    <div className="contenedor-barra">
                        <div className="contenido-bar">
                            <Link to={'/home'}> <a>Inicio</a> </Link>
                            <Link to={'/recursos-humanos'}> <a>Recursos Humanos</a> </Link>
                            <Link to={'/planta-produccion'}> <a>Planta Producción</a> </Link>
                            <Link to={'/movilidad'}> <a>Movilidad</a> </Link>
                            <Link to={'/seguridad'}> <a>Seguridad</a> </Link>
                        </div>
                    </div>
                </div>
            </nav>
            
        </Fragment>
    );
}
 
export default NavBar;