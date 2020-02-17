import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NuevoPuesto = () => {

    //State para guardar puesto
    const [puesto, guardarPuesto] = useState({
        positionName: '',
        typeWorker: '',
        costCenter: '',
    })

    //Extraer de puesto
    const { positionName, typeWorker, costCenter } = puesto;

    const onChange = e => {
        guardarPuesto({
            ...puesto,
            [e.target.name] : e.target.value
        })
    }

    //Crear puesto
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios

        //Mandar submit
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear puesto</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="positionName">Nombre Puesto</label>
                        <input 
                            type="text"
                            id="positionName"
                            name="positionName"
                            value={positionName}
                            placeholder="Ingrese el nombre del puesto"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="typeWorker">Tipo de trabajador</label>
                        <select 
                            id="typeWorker"
                            name="typeWorker"
                            value={typeWorker}
                            onChange={onChange}
                        >
                            <option value="" disabled>-- Seleccione tipo de trabajador --</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="costCenter">Centro de costos</label>
                        <select 
                            id="costCenter"
                            name="costCenter"
                            value={costCenter}
                            onChange={onChange}
                        >
                            <option value="" disabled>-- Seleccione centro de costo --</option>
                        </select>
                    </div>


                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear puesto"/>
                    </div>

                    <Link to={'/recursos-humanos'}>
                        <div className="campo-form">
                            <input type="submit" className="btn btn-cancelar btn-block"
                            value="Cancelar"/>
                        </div>
                    </Link>
                    
                </form>

                
            </div>
        </div>
    );
}
 
export default NuevoPuesto;