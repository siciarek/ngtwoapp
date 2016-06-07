import { Component } from '@angular/core';
import { TabularComponent } from './tabular.component';
import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        DetailsComponent,
        ListComponent,
        TabularComponent
    ]
})
export class AppComponent {
    title: string = 'Dummy';
}
