import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NuevoBloque = () => {

    //State para guardar bloque
    const [bloque, guardarBloque] = useState({
        numberSquare: '',
        department: '',
    })

    //Extraer de bloque
    const { numberSquare, department } = bloque;

    const onChange = e => {
        guardarBloque({
            ...bloque,
            [e.target.name] : e.target.value
        })
    }

    //Crear bloque
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios

        //Mandar submit
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear bloque</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="numberSquare">Número de Bloque</label>
                        <input 
                            type="text"
                            id="numberSquare"
                            name="numberSquare"
                            value={numberSquare}
                            placeholder="Ingrese el número de bloque"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="department">Departamento</label>
                        <select 
                            id="department"
                            name="department"
                            value={department}
                            onChange={onChange}
                        >
                            <option value="" disabled>-- Seleccione un departamento --</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear bloque"/>
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
 
export default NuevoBloque;