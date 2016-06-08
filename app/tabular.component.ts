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

        this.reset();
    }

    reset() {

        this.dataService
            .getList()
            .then(items => this.items = items)
            ;
    }

    createRow() {
        var obj: Object = {
            id: null,
            name: 'Hola ' + Math.random(),
            age: 99
        }

        this.dataService
            .create(obj)
            .then(this.reset())
        ;
    }

    removeRow(item:Object) {

        this.dataService
            .delete(item)
            .then(this.reset());
    }

}
