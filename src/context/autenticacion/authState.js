import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';

import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    CONSULTA_EXITOSA,
    CONSULTA_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';

 const AuthState = props => {

    const initialState = {
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    //Las funciones
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/crear-empleado', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

        } catch (error) {
            console.log(error);

            dispatch({
                type: REGISTRO_ERROR
            });
        }
    }

    const registrarDepartamento = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/crear-departamento', datos);
            console.log(respuesta.data.message);

            const alerta = {
                msg: respuesta.data.message,
                categoria: 'alerta-ok'
            }

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: alerta
            });
        } catch (error) {
            console.log(error.response.data.message);
            const alerta = {
                msg: error.response.data.message,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            });
        }
    }

    const consultarDepartamentos = async datos => {
        try {
            const respuesta = await clienteAxios.get('/api/consultar-departamentos', datos);
            console.log(respuesta.data.message);

            dispatch({
                type: CONSULTA_EXITOSA,
                payload: respuesta.data
            })
        } catch (error) {
            console.log(error.response.data.message);

             dispatch({
                 type: CONSULTA_ERROR,
                 payload: error.response.data
             })
        }
    }


    return (
        <AuthContext.Provider
            value = {{
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                registrarDepartamento,
                consultarDepartamentos
            }}
        >{props.children}
        </AuthContext.Provider>
    )

 }

 export default AuthState;