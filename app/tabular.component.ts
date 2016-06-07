import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
    selector: 'tabular',
    templateUrl: 'app/tabular.component.html',
    styleUrls: ['app/tabular.component.css'],
    providers: [
        DataService
    ]
})
export class TabularComponent implements OnInit {
    items: Object[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService
            .getList()
            .then(items => this.items = items);
    }
}
