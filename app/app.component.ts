import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PersonComponent } from './person.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
    { path: '/person',  name: 'Person', component: PersonComponent, useAsDefault: true },
])
export class AppComponent {

}
