import { RouteProps } from '@solidjs/router';
import {Component} from 'solid-js'
import Inicio from './inicio/Inicio'
import Trayecto from './trayecto/trayecto';
import Certificado from './certificacion/Certificacion';
import Mascotas from './mascotas/mascotas';
import Requisito from './requisitos/requisitos';
import Layaout from '../routes/layaout/layaout';
import GestionNoti from '../components/dashboard/noticias/gestionnoti';
import Mision from './layaout/mision/mision';
import GestionCertificado from './layaout/certificado/certificado';


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
  {
    path: '/layaout',
    component: Layaout,
  },
  {
    path: '/gestionnoti',
    component: GestionNoti,
  },
  {
    path: '/mision',
    component: Mision,
  },
  {
    path: '/gestioncertificado',
    component: GestionCertificado,
  },

];

export default routes;