import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

    private serviceUrl = 'api/service.php';  // URL to web api

    constructor(private http: Http) { }

    getList(): Promise<Object[]> {

        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json().data.items)
            .catch(this.handleError);
    }

    getItem(id: number) {

        return this.getList()
            .then(items => items.filter(item => item.id === id).pop());
    }

    private create(item: Object): Promise<Object> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http
            .post(this.serviceUrl, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    update(item: Object) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${item.id}`;

        return this.http
            .put(url, JSON.stringify(item), {headers: headers})
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    delete(item: Object) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${item.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
