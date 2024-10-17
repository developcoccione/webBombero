import { RouteProps } from '@solidjs/router';
import {Component} from 'solid-js'
import Inicio from './inicio/Inicio'
import Trayecto from './trayecto/trayecto';

const routes: RouteProps<any, () => Component>[] = [
  {
    path: '/',
    component: Inicio,
  },
  {
    path: '/trayecto',
    component: Trayecto,
  },
];

export default routes;