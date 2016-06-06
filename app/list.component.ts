import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'list',
    templateUrl: 'app/list.component.html',
    styleUrls: ['app/list.component.css'],
})
export class ListComponent implements OnInit {
    items: Object[];

    construct(http:Http) {
        this.items = http.get('source/data.json');
    }

    ngOnInit() {
        this.items = [];
    }
}
