import { Component } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

// import { MdToolbar } from '@angular2-material/toolbar';
// import { MdButton } from '@angular2-material/button';
// import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
// import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
// import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
// import { MdInput } from '@angular2-material/input';
// import { MdCheckbox } from '@angular2-material/checkbox';
// import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
// import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    directives: [
        MATERIAL_DIRECTIVES,
        // MD_SIDENAV_DIRECTIVES,
        // MD_LIST_DIRECTIVES,
        // MD_CARD_DIRECTIVES,
        // MdToolbar,
        // MdButton,
        // MdInput,
        // MdCheckbox,
        // MdRadioButton,
        // MdRadioGroup,
        // MdIcon
    ],
    providers: [
        // MdRadioDispatcher,
        // MdIconRegistry
    ]
})
export class DashboardComponent {
    person: Object = {
        firstName: 'Jacek',
        lastName: 'Siciarek',
        gender: 'male',
        enabled: true
    };
}
