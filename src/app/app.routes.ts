import { PrangersComponent } from './componentes/prangers/prangers.component';
import { RangerComponent } from './componentes/ranger/ranger.component';

import {​​​​​ RouterModule, Routes }​​​​​ from'@angular/router';


const APP_ROUTES:Routes=
 [
    {​​​​​ path:'rangers', component: PrangersComponent}​​​​​,
    // ruta con parametro
    {​​​​​ path:'ranger/:id', component: RangerComponent }​​​​​,

    {​​​​​ path:'**', pathMatch:'full', redirectTo:'rangers' }​​​​​,
];
export const ROUTES= RouterModule.forRoot(APP_ROUTES);
