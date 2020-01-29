import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  uri = 'http://localhost:8081/pt';

  constructor(private http: HttpClient) {
  }

  addProject(name, shortName, description) {
    const obj = {
      name,
      shortName,
      description
    };
    console.log(obj);
    return this.http.post(this.uri + '/prj/create', obj);
  }

  getProjects() {
    return this.http.get(this.uri + '/prj/list');
  }
}
