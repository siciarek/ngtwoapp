import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdCheckbox} from '@angular2-material/checkbox';

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
        MdCheckbox,
        MdRadioButton,
        MdRadioGroup,
        MdToolbar
    ],
    providers: [
        MdRadioDispatcher
    ]
})
export class AppComponent {
    title: string = 'App';
    item: Object =  {
        "id": 912,
        "enabled": true,
        "gender": "male",
        "firstName": "Jacek",
        "lastName": "Siciarek",
        "dateOfBirth": "1966-10-21",
        "pesel": null,
        "email": "siciarek@gmail.com",
        "info": "Bim bam bom.",
        "createdAt": "2016-06-10 10:18:27",
        "updatedAt": "2016-06-15 22:47:09"
    };
}