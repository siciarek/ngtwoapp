import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdSpinner, MdProgressCircle} from '@angular2-material/progress-circle';

import { Person } from './person';
import { PersonService } from './person.service';
import { CustomValidators } from './custom-validators';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    properties: [

    ],
    directives: [
        MATERIAL_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        FORM_DIRECTIVES,
        MdSpinner,
        MdProgressCircle,
        MdCheckbox,
        MdRadioButton,
        MdRadioGroup,
        MdToolbar
    ],
    providers: [
        PersonService,
        MdRadioDispatcher
    ]
})
export class AppComponent implements OnInit {
    form: ControlGroup;
    title: string = 'App';
    item: Object = {};
    items: Array<Person> = [];

    constructor(
        private fb: FormBuilder,
        private dataService: PersonService
    ) {
    }

    ngOnInit() {

        var id = 947;

        this.dataService
            .getItem(id)
            .then(item => {
                this.item = item;
            });

        this.dataService
            .getList()
            .then(items => {this.items = items})

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
    }
}