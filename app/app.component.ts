import { Component } from '@angular/core';
import { TabularComponent } from './tabular.component';
import { ListComponent } from './list.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ListComponent,
        TabularComponent
    ]
})
export class AppComponent {
    title: string = 'Takie tam';
    items: Object[] = [
        {
            "id": 132,
            "name": "Sokół Millenium",
            "age": 45
        },
        {
            "id": 324,
            "name": "Sokół Maltański",
            "age": 15
        },
        {
            "id": 544,
            "name": "Barbarella",
            "age": 25
        },
        {
            "id": 421,
            "name": "Aspargun",
            "age": 25
        }
    ];
}
