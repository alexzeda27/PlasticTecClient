import React, {useState, setState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevoDepartamento = (props) => {

    //Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarDepartamento, consultarDepartamentos } = authContext;

    //En caso de registro duplicado
    useEffect(() => {
        if(autenticado, mensaje)
        {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        if(mensaje)
        {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado, props.history]);


    //State para guardar departamento
    const [departamento, guardarDepartamento] = useState({
        departmentName: '',
    })

    //Extraer de departamento
    const { departmentName } = departamento;

    const onChange = e => {
        guardarDepartamento({
            ...departamento,
            [e.target.name] : e.target.value
        })
    }

    //Crear departamento
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios
        if( departmentName.trim() === '')
        {
            mostrarAlerta('Los campos * son obligatorios', 'alerta-error');
            return
        }

        //Mandar action
        registrarDepartamento({
            departmentName
        });

        consultarDepartamentos({
            
        });
    }

    return ( 
        <div className="form-usuario">

            {alerta 
            ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> )
            : null}

            <div className="contenedor-form sombra-dark">
                <h1>Crear departamento</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="departmentName">Nombre Departamento</label>
                        <input 
                            type="text"
                            id="departmentName"
                            name="departmentName"
                            value={departmentName}
                            placeholder="Ingrese el nombre del departamento"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear departamento"/>
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
 
export default NuevoDepartamento;