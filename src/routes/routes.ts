import { RouteProps } from '@solidjs/router';
import {Component} from 'solid-js'
import Inicio from './inicio/Inicio'
import Trayecto from './trayecto/trayecto';
import Certificado from './certificacion/Certificacion';
import Mascotas from './mascotas/mascotas';
import Requisito from './requisitos/requisitos';


const routes: RouteProps<any, () => Component>[] = [
  {
    path: '/',
    component: Inicio,
  },
  {
    path: '/trayecto',
    component: Trayecto,
  },
  {
    path: '/certificado',
    component: Certificado,
  },
  {
    path: '/mascotas',
    component: Mascotas,
  },
  {
    path: '/requisito',
    component: Requisito,
  },
];

export default routes;