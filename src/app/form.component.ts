import { Component } from '@angular/core';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
    selector: 'sample-form',
    templateUrl: 'app/form.component.html',
    styleUrls: ['app/form.component.css'],
    directives: [
        MD_GRID_LIST_DIRECTIVES
    ]
})
export class FormComponent {

}
