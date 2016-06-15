import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
    selector: 'person-form',
    templateUrl: 'app/person-form.component.html',
    styleUrls: ['app/person-form.component.css'],
    providers: [
        PersonService
    ]
})
export class PersonFormComponent implements OnInit {
    @Input item: Person;
    @Output() close = new EventEmitter();

    gender: string[] = ['unknown', 'male', 'female'];

    error: any;

    constructor(private dataService: PersonService, private routeParams: RouteParams) {}

    onSubmit() {
        // item.enabled = ((item.enabled == 'true') || (item.enabled == true));

        this.dataService
            .update(this.item)
            .catch(err => {
                console.log(err);
            })
            ;
        ;
    }

    ngOnInit() {

        if (this.routeParams.get('id') !== null && !isNaN(this.routeParams.get('id'))) {
            let id = parseInt(this.routeParams.get('id'));
            this.dataService
                .getItem(id)
                .then(item => {
                    this.item = item;
                });
        } else {
            this.router.navigate(['Person', {}]);
        }
    }
}
