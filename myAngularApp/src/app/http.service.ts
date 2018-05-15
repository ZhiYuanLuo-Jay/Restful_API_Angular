import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // (1) Imported HttpClient into the service. 
import { identity } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  //  (2) make HttpClient as an attribute in the class. 
  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getTaskById('5af5dd6b6084c00514924093');
   }
 
  getTasks(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getTaskById(detail:string) {
    return this._http.get(`/task/${detail}`);
    // showObservable.subscribe(data => console.log("Got out task by Id", data))
  }

  

}


