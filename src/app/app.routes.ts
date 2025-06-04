// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';

export const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'devoluciones', component: DevolucionesComponent },
  { path: '**', redirectTo: '' }
];
