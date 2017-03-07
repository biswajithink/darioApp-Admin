import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './chart/index';
import { FormRoutes } from './form/index';
import { UserAdminRoutes } from './userAdmin/index';


import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
			...ChartRoutes,
			...FormRoutes,
			...UserAdminRoutes
    	]
  	}
];