import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from './form.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'dashboard',
        terminal: true
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'form/:id',
        component: FormComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];


