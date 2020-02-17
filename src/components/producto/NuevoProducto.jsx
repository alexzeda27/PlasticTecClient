import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const NuevoProducto = () => {

    //State para guardar producto
    const [producto, guardarProducto] = useState({
        productName: '',
        numberPart: '',
        version: '',
        customer: '',
    })

    //Extraer de producto
    const { productName, numberPart, version, customer } = producto;

    const onChange = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    //Crear Producto
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios

        //Mandar submit
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear producto</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="productName">Nombre Producto</label>
                        <input 
                            type="text"
                            id="productName"
                            name="productName"
                            value={productName}
                            placeholder="Ingrese el nombre del producto"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="numberPart">Número de parte</label>
                        <input 
                            type="number"
                            id="numberPart"
                            name="numberPart"
                            value={numberPart}
                            placeholder="Ingrese el número de parte"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="version">Versión del producto</label>
                        <input 
                            type="text"
                            id="version"
                            name="version"
                            value={version}
                            placeholder="Ingrese la versión del producto"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="customer">Cliente del producto</label>
                        <select 
                            id="customer"
                            name="customer"
                            value={customer}
                            onChange={onChange}
                        >
                            <option value="" disabled>-- Seleccione un cliente --</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear producto"/>
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
 
export default NuevoProducto;