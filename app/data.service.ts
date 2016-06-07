import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

    private serviceUrl = 'source/data.json';  // URL to web api

    constructor(private http: Http) { }

    getList(): Promise<Object[]> {

        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json().data.items)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
