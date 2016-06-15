import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {
	FormBuilder,
	Validators,
	ControlGroup,
	FORM_DIRECTIVES
} from '@angular/common';
import { RouteParams } from '@angular/router-deprecated';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
    selector: 'person-form',
    templateUrl: 'app/person-form.component.html',
    styleUrls: ['app/person-form.component.css'],
    directives: [FORM_DIRECTIVES],
    providers: [
        PersonService
    ]
})
export class PersonFormComponent implements OnInit {
    @Input item: Person;
    @Output() close = new EventEmitter();

    gender: string[] = ['unknown', 'male', 'female'];

    error: any;
    form: ControlGroup;

    constructor(
        private fb: FormBuilder,
        private dataService: PersonService,
        private routeParams: RouteParams
    ) {}

    ngOnInit() {

        this.form = this.fb.group({
            firstName:  ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            lastName:  ['', Validators.compose([Validators.required, Validators.minLength(1)])]
        });

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

    onSubmit() {

        this.dataService
            .update(this.item)
            .catch(err => {
                console.log(err);
            })
            ;
        ;
    }

}
