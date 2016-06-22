import { Component, provide } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

// https://angular.io/docs/ts/latest/guide/router-deprecated.html

import { DashboardComponent } from './dashboard.component';
import { FormComponent } from './form.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [
        DashboardComponent,

        ROUTER_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MdToolbar,
        MdButton,
        MdInput,
        MdCheckbox,
        MdRadioButton,
        MdRadioGroup,
        MdIcon
    ],
    providers: [
        MdRadioDispatcher,
        MdIconRegistry
    ]
})
// @Routes([
//     {
//         path: '/',
//         component: DashboardComponent
//     },
//     {
//         path: '/form',
//         component: FormComponent
//     }
// ])
export class AppComponent {
    title = 'Funny App';
    views: Object[] = [

    ];
}   