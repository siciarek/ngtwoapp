import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
    selector: 'person',
    templateUrl: 'app/person.component.html',
    styleUrls: ['app/person.component.css'],
    providers: [
        PersonService
    ]
})
export class PersonComponent implements OnInit {
    enabled: boolean[] = [true, false];
    gender: string[] = ['unknown', 'male', 'female'];

    items: Person[] = [];

    constructor(private dataService: PersonService) {}

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

        var item: Person = new Person();

        this.dataService
            .create(item)
            .then(this.reset())
        ;
    }

    updateRow(item:Person) {

        item.enabled = ((item.enabled == 'true') || (item.enabled == true));

        this.dataService
            .update(item)
            .catch(err => {
                console.log(err);
                this.reset();
            })
            ;
        ;
    }

    removeRow(item:Person) {

        this.dataService
            .delete(item)
            .then(this.reset())
            ;
    }

}
