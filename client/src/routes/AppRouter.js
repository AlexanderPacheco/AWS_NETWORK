import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import User from '../views/User';
import { Nuevo } from '../pages/Reporte/Nuevo';
import { Lista } from '../pages/Reporte/Lista';
import { Individual } from '../pages/Reporte/Individual';
import { Nuevo as NuevaAsistencia } from '../pages/Asistencia/Nuevo';
import { Lista as ListaAsistencia } from '../pages/Asistencia/Lista';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/reporte/nuevo">
          <User>
            <Nuevo />
          </User>
        </Route>
        <Route exact path="/reporte/">
          <User>
            <Lista />
          </User>
        </Route>
        <Route exact path="/reporte/:id">
          <User>
            <Individual />
          </User>
        </Route>
        <Route exact path="/asistencia/nuevo">
          <User>
            <NuevaAsistencia />
          </User>
        </Route>
        <Route exact path="/asistencia/">
          <User>
            <ListaAsistencia />
          </User>
        </Route>
        <Route exact path="">
          <Redirect to="/reporte/" />
        </Route>
      </Switch>
    </Router >
  )
}
