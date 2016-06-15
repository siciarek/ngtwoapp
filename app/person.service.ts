import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Person } from './person';

@Injectable()
export class PersonService {

    private serviceUrl = 'api/person.php';  // URL to web api

    constructor(private http: Http) { }

    getList(): Promise<Person[]> {

        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json().data.items)
            .catch(this.handleError);
    }

    getItem(id: number) {
        let url = `${this.serviceUrl}/${id}`;

        return this.getList()
            .then(items => items.filter(item => item.id === id).pop());
    }

    private create(item: Person): Promise<Person> {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http
            .post(this.serviceUrl, JSON.stringify(item), { headers: headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    update(item: Person) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${item.id}`;

        return this.http
            .put(url, JSON.stringify(item), {headers: headers})
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    delete(item: Person) {
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
