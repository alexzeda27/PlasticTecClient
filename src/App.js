import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/principal/Home';
import HumanResources from './components/principal/HumanResources';
import Movilidad from './components/principal/Movilidad';
import Seguridad from './components/principal/Seguridad';
import PlantaProduccion from './components/principal/PlantaProduccion';
import NuevoEmpleado from './components/empleado/NuevoEmpleado';
import NuevoDepartamento from './components/departamento/NuevoDepartamento';
import NuevoPuesto from './components/puesto/NuevoPuesto';
import NuevoBloque from './components/bloque/NuevoBloque';
import NuevaMaquina from './components/maquina/NuevaMaquina';
import NuevoCliente from './components/cliente/NuevoCliente';
import NuevoProducto from './components/producto/NuevoProducto';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <AlertaState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/recursos-humanos" component={HumanResources}/>
            <Route exact path="/planta-produccion" component={PlantaProduccion}/>
            <Route exact path="/movilidad" component={Movilidad}/>
            <Route exact path="/seguridad" component={Seguridad}/>
            <Route exact path="/crear-empleado" component={NuevoEmpleado}/>
            <Route exact path="/crear-departamento" component={NuevoDepartamento}/>
            <Route exact path="/crear-puesto" component={NuevoPuesto}/>
            <Route exact path="/crear-bloque" component={NuevoBloque}/>
            <Route exact path="/crear-maquina" component={NuevaMaquina}/>
            <Route exact path="/crear-cliente" component={NuevoCliente}/>
            <Route exact path="/crear-producto" component={NuevoProducto}/>
          </Switch>
        </Router>
      </AuthState>
    </AlertaState>
  );
}

export default App;
