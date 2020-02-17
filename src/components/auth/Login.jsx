import React, {useState} from 'react'

const Login = () => {

    //State para inciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    //Extraer de usuario
    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Inciar Sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validación campos vacios

        //Mandar submit
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Ingresa tu email"
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
                            placeholder="Ingresa tu contraseña"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-fom">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Login;