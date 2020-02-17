import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Bloque from '../contenedores/Bloque';
import Maquina from '../contenedores/Maquina';
import Cliente from '../contenedores/Cliente';
import Producto from '../contenedores/Producto';
import Operador from '../contenedores/Operador';
import Supervisor from '../contenedores/Supervisor';
import Footer from '../layout/Footer';

const PlantaProduccion = () => {
    return ( 
        <Fragment>

            <Header />

            <NavBar />

            <section className="seccion-principal">
                <h2>Planta - Producción</h2>
                <div className="contenedor">

                    <Bloque />

                    <Maquina />

                    <Cliente />


                </div>
                <div className="contenedor">

                    <Producto />

                    <Operador />

                    <Supervisor />

                </div>
            </section>

            <Footer />

        </Fragment>
    );
}
 
export default PlantaProduccion;