import { Component, OnInit } from '@angular/core';
import { TabularComponent } from './tabular.component';
import { ListComponent } from './list.component';
import { DataService } from './data.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ListComponent,
        TabularComponent
    ],
    providers: [
        DataService
    ]
})
export class AppComponent implements OnInit {
    title: string = 'Takie tam';
    items: Object[];

    ngOnInit() {
        this.items = [];
    }
}
