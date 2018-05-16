import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // (1) Imported HttpClient into the service. 
import { identity } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  //  (2) make HttpClient as an attribute in the class. 
  constructor(private _http: HttpClient) {}
 
  getTasks(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/tasks');
  }

  getTaskById(id:string) {
    return this._http.get(`/task/${id}`); // passing the id to the routes.js
  }

  updateTask(editTask){
    return this._http.put(`/task/`, editTask);
  }

  addTask(newTask){
    return this._http.post(`/task/`, newTask)  // passing the newTask obj to the routes.js
  }

  delTask(id:string) {
    return this._http.delete(`/task/${id}`);
  }




}


