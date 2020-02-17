import React, {Fragment} from 'react'

const Footer = () => {

    const fecha = new Date().getFullYear();

    return ( 
        <Fragment>
            <footer>
                <div className="contenedor-footer">
                    <div className="contenedor-principal">
                        <div className="contenido-footer">
                            <h4>Acerca de <span>Grupo Bocar</span></h4>
                            <p>Como Grupo, somos capaces de ofrecer a la industria automotriz un sofisticado rango de productos 
                                y servicios. Somos su socio en desarrollo y un proveedor de servicio completo capaz de producir 
                                series de productos en aluminio y plástico para requerimientos específicos.</p>
                                <p>Esto nos coloca entre las pocas compañías capaces de ofrecer soluciones híbridas en distintos materiales.</p>
                        </div>

                        <div className="contenido-footer">
                            <h4>¿Qué es <span>DOL</span>?</h4>
                            <p>
                                Grupo Bocar está basado en 3 principios:
                            </p>
                            <p><span>Disciplina:</span> Realizar las actividades cumpliendo estándares e indicaciones en forma y tiempo.</p>
                            <p><span>Orden:</span> Hay un lugar para cada cosa y cada cosa en su lugar.</p>
                            <p><span>Limpieza:</span> Mantener el lugar de trabajo limpio y evitar ensuciarlo.</p>
                        </div>

                        <div className="contenido-footer">
                            <h4>Productos y <span>Tecnología</span></h4>
                            <p><span>Aluminio:</span> Manufactura partes y ensambles complejos de aluminio, desarrollo y producción de 
                            piezas por fundición a alta presión y fundición por gravedad.</p>
                            <p><span>Plastico:</span> Desarrolla y produce componentes de inyección de plástico para interiores, exteriores, 
                            cajuela y motores de autos. </p>

                        </div>
                    </div>
                    <div className="copyright">
                        <p>Derechos Reservados Grupo Bocar Plastic Servicios S.A de C.V. &copy; {fecha} </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}
 
export default Footer;