import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Empleado from '../contenedores/Empleado';
import Departamento from '../contenedores/Departamento';
import Puesto from '../contenedores/Puesto';
import Footer from '../layout/Footer';

const HumanResources = () => {
    return ( 
        <Fragment>

            <Header />

            <NavBar />

            <section className="seccion-principal">
                <h2>Recursos Humanos</h2>
                <div className="contenedor">

                    <Empleado />

                    <Departamento />

                    <Puesto />

                </div>
            </section>

            <Footer />

        </Fragment>
    );
}
 
export default HumanResources;