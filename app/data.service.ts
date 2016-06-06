import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class DataService {

    constructor (private http: Http) {}

    private srvUrl = 'source/data.json';  // URL to web API

    getData (): Observable<Object[]> {
        let resp = this.http.get(this.srvUrl)
        //   .toPromise()
        //   .then(response => response.json().data)
        //   .catch(this.handleError
           ;

           console.log(resp);
           return resp.map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {

        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message)
            ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }
}