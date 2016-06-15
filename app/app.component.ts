import { Component, provide } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// https://angular.io/docs/ts/latest/guide/router-deprecated.html

import { DashboardComponent } from './dashboard.component';
import { PersonComponent } from './person.component';
import { PersonFormComponent } from './person-form.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        provide( LocationStrategy, { useClass: HashLocationStrategy} ) // .../#/person
    ]
})
@RouteConfig([
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/person',
        name: 'Person',
        component: PersonComponent
    },
    {
        path: '/person/:id/edit',
        name: 'PersonEdit',
        component: PersonFormComponent
    }
])
export class AppComponent {

}
