import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NuevaMaquina = () => {

    //State para guardar máquina
    const [maquina, guardarMaquina] = useState({
        numberMachine: '',
        square: '',
    })

    //Extraer de máquina
    const { numberMachine, square } = maquina;

    const onChange = e => {
        guardarMaquina({
            ...maquina,
            [e.target.name] : e.target.value
        })
    }

    //Crear máquina
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios

        //Mandar submit
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear máquina</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="numberMachine">Número de máquina</label>
                        <input 
                            type="text"
                            id="numberMachine"
                            name="numberMachine"
                            value={numberMachine}
                            placeholder="Ingrese el número de máquina"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="square">Número de Bloque</label>
                        <select 
                            id="square"
                            name="square"
                            value={square}
                            onChange={onChange}
                        >
                            <option value="" disabled>-- Seleccione un bloque --</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear maquina"/>
                    </div>

                    <Link to={'/planta-produccion'}>
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
 
export default NuevaMaquina;