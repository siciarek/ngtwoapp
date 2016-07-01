import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdSpinner, MdProgressCircle} from '@angular2-material/progress-circle';
import {MdProgressBar} from '@angular2-material/progress-bar';
import {Observable} from 'rxjs/Rx';
import { MD_SELECT_DIRECTIVES } from 'wtf-select/select';

import { Person } from './person';
import { PersonService } from './person.service';
import { CustomValidators } from './custom-validators';

import { DashboardComponent } from './dashboard.component';
import { FormComponent } from './form.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None,
    properties: [

    ],
    directives: [
        MD_SELECT_DIRECTIVES,
        ROUTER_DIRECTIVES,
        MATERIAL_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        // MD_TABS_DIRECTIVES, // does not work
        FORM_DIRECTIVES,
        MdProgressBar,
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
    progressValue: number = 0;
    form: ControlGroup;
    title: string = 'App';
    item: Object = {};
    items: Array<Person> = [];

    gender: Array<Object> = [
        {
            name: 'Male', value: 'male'
        },
        {
            name: 'Female', value: 'female'
        }
    ];

    constructor(
        private fb: FormBuilder,
        private dataService: PersonService
    ) {
    }

    public log(logMsg:string) {
        console.log(logMsg);
    }

    ngOnInit() {

        var id = 947;

        let timer = Observable.timer(2000,1000);
        timer.subscribe(() => {this.progressValue = (this.progressValue + 10) % 99});

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