import { Component } from '@angular/core';
import { TabularComponent } from './tabular.component';
import { ListComponent } from './list.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ListComponent,
        TabularComponent
    ]
})
export class AppComponent {
    title: string = 'Dummy';
}
