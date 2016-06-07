import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
    selector: 'details',
    templateUrl: 'app/details.component.html',
    styleUrls: ['app/details.component.css'],
    providers: [
        DataService
    ]
})
export class DetailsComponent implements OnInit {
    id: number = 622;
    item: Object = {};

    constructor(private dataService: DataService) {}

    ngOnInit() {

        var obj: Object = {
            id: null,
            name: 'Kazzanka',
            age: 99
        }

        this.dataService.create(obj);

        this.dataService
            .getItem(this.id)
            .then(item => this.item = item);
    }
}
