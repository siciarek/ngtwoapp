
import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [MATERIAL_DIRECTIVES]
})
export class AppComponent {
    title: string = 'App';
    googleUrl: string = 'https://www.google.com';
    title1: string = 'Button';
    title4: string = 'Warn';
    isDisabled: boolean = true;
}