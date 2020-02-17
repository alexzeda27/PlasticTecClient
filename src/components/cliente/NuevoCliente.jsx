import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NuevoCliente = () => {

    //State para guardar cliente
    const [cliente, guardarCliente] = useState({
        customerName: '',
    })

    //Extraer de cliente
    const { customerName } = cliente;

    const onChange = e => {
        guardarCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    //Crear Cliente
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios

        //Mandar submit
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cliente</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="customerName">Nombre Cliente</label>
                        <input 
                            type="text"
                            id="customerName"
                            name="customerName"
                            value={customerName}
                            placeholder="Ingrese el nombre del cliente"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear cliente"/>
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
 
export default NuevoCliente;