import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
})
export class AppComponent {
    title: string = 'Takie tam';
    items: Object[] = [
        {
            "id": 132,
            "name": "Sokół Millenium"
        },
        {
            "id": 324,
            "name": "Sokół Maltański"
        },
        {
            "id": 544,
            "name": "Barbarella"
        }
    ];
}
