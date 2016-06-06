import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'list',
    templateUrl: 'app/list.component.html',
    styleUrls: ['app/list.component.css'],
})
export class ListComponent implements OnInit {
    items: Object[];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}
