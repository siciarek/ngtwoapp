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

    updateRow(id:number) {

        var obj: Object = {
            id: id,
            name: document.getElementById('name-' + id).value,
            age: document.getElementById('age-' + id).value
        }

        this.dataService
            .update(obj)
            .then(this.reset())
        ;
    }

    createRow() {

        var obj: Object = {
            id: null,
            name: 'Hola ' + Math.random(),
            age: Math.floor(Math.random() * 100) % 100
        }

        this.dataService
            .create(obj)
            .then(this.reset())
        ;
    }

    removeRow(item:Object, event:any) {

        event.stopPropagation();

        this.dataService
            .delete(item)
            .then(this.reset());
    }

}
