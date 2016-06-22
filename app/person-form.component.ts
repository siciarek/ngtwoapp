import { Component, EventEmitter, OnInit, Output, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES } from '@angular/common';
import { RouteParams } from '@angular/router-deprecated';

import { Person } from './person';
import { PersonService } from './person.service';
import { CustomValidators } from './custom-validators';

declare var jQuery:any;

@Component({
    selector: 'person-form',
    templateUrl: 'app/person-form.component.html',
    styleUrls: ['app/person-form.component.css'],
    directives: [
        FORM_DIRECTIVES
    ],
    providers: [
        PersonService
    ]
})
export class PersonFormComponent implements OnInit {

    @Input item: Person;
    @Output() close = new EventEmitter();
    form: ControlGroup;
    gender: string[] = ['unknown', 'male', 'female'];
    error: any;

    constructor(
        private fb: FormBuilder,
        private dataService: PersonService,
        private routeParams: RouteParams,
        private _elRef: ElementRef
    ) {
    }

    ngOnInit():any {
        var el = jQuery(this._elRef.nativeElement);

        console.log(jQuery(this._elRef.nativeElement).find('input').length);
        //
        // elfind('button.x').on('click', function(e){
        //     alert('xxx');
        // }); // .bootstrapSwitch();

        this.form = this.fb.group({
            firstName:  ['', Validators.compose([
                Validators.required,
                Validators.minLength(2)
            ])],
            lastName:  ['', Validators.compose([
                Validators.required,
                Validators.minLength(1)
            ])],
            gender:  ['', CustomValidators.gender],
            pesel:  ['', CustomValidators.pesel]
        });

        if (this.routeParams.get('id') !== null && !isNaN(this.routeParams.get('id'))) {
            let id = parseInt(this.routeParams.get('id'));
            this.dataService
                .getItem(id)
                .then(item => {
                    this.item = item;
                });
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
