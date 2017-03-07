import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';
import { DashboardComponent } from './dashboard/index';


import { LoginComponent } from './login/index';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login-cmp',
        pathMatch: 'full'
    },
    {
    	path: 'login-cmp',
    	component: LoginComponent
  	},
    ...LoginRoutes,
    ...DashboardRoutes,
    
];