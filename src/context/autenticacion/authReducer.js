import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    CONSULTA_EXITOSA,
    CONSULTA_ERROR
 } from '../../types';

export default (state, action) => {
    switch(action.type)
    {
        case REGISTRO_EXITOSO:
            return{
                ...state,
                autenticado: true,
                mensaje: action.payload
            }

        case REGISTRO_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }

        case CONSULTA_EXITOSA:
            return{
                ...state,
                mensaje: action.payload
            }

        case CONSULTA_ERROR:
            return{
                ...state,
                mensaje: action.payload
            }

        default: 
        return state;
    }
}