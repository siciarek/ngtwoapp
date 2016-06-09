import { Component } from '@angular/core';
import { TabularComponent } from './tabular.component';
import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';
import { PersonComponent } from './person.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        PersonComponent,
        DetailsComponent,
        ListComponent,
        TabularComponent
    ]
})
export class AppComponent {
    title: string = 'Dummy';
}
