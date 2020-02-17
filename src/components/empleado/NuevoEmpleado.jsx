import React, {useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const NuevoEmpleado = () => {

    //Extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { registrarUsuario } = authContext;

    //State para inciar sesión
    const [usuario, guardarUsuario] = useState({
        payroll: '',
        name: '',
        surnameP: '',
        surnameM: '',
        username: '',
        email: '',
        password: '',
        position: '',
        department: ''
    })

    //Extraer de usuario
    const { payroll, name, surnameP, surnameM, username, email, password, position, department } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Crear Empleado
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios
        if( payroll.trim() === '' ||
            name.trim() === '' ||
            surnameP.trim() === '' ||
            username.trim() === '' ||
            password.trim() === '' ||
            position.trim() === '' ||
            department.trim() === ''
        ){
            mostrarAlerta('Los campos con * son obligatorios', 'alerta-error');
            return
        }

        //Validar password más de 6 caracteres
        if(password.length < 6)
        {
            mostrarAlerta('La contraseña debe ser de al menos seis caracteres', 'alerta-error');
            return 
        }

        //Mandar action
        registrarUsuario({
            payroll,
            name,
            surnameP,
            surnameM,
            username,
            email,
            password,
            position,
            department
        });
    }

    return ( 
        <div className="form-usuario">

            {alerta 
            ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> )
            : null}

            <div className="contenedor-form sombra-dark">
                <h1>Crear empleado</h1>

                <form onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="payroll">Número de nómina</label>
                        <input 
                            type="number"
                            id="payroll"
                            name="payroll"
                            value={payroll}
                            placeholder="Ingrese el número de nómina"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Ingrese el nombre"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="surnameP">Apellido Paterno</label>
                        <input 
                            type="text"
                            id="surnameP"
                            name="surnameP"
                            value={surnameP}
                            placeholder="Ingrese el apellido parterno"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="surnameP">Apellido Materno</label>
                        <input 
                            type="text"
                            id="surnameM"
                            name="surnameM"
                            value={surnameM}
                            placeholder="Ingrese el apellido materno"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            placeholder="Ingrese el nombre de usuario"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Correo Bocar</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Ingrese correo Bocar"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Ingrese una contraseña"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="position">Puesto</label>
                        <select 
                            id="position"
                            name="position"
                            onChange={onChange}
                        >
                            <option value="" disabled selected>-- Seleccione un puesto --</option>
                            <option value={position.positionName}></option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="department">Departamento</label>
                        <select 
                            id="department"
                            name="department"
                            value={department}
                            onChange={onChange}
                        >
                            <option value="" disabled selected>-- Seleccione un departamento --</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Crear empleado"/>
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
 
export default NuevoEmpleado;