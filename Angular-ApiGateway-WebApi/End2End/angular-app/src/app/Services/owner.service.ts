import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
 private apiUrl = "http://localhost:5064/api/Owner/" //baseUrl...
  constructor(private http: HttpClient) { }
//Observables are external components of Angular under Rxjs which helps in handling async calls from the REST APIs that is used to access the backend services. 
  getAllOwners() : Observable<any[]>{
    const url = this.apiUrl + "allOwners";
    return this.http.get<any[]>(url);
  }

  getOwner(id:number) :Observable<any>{
    const url = `${this.apiUrl}owners/${id}`;
    return this.http.get<any>(url)
  }

   addOwner(owner : any) : Observable<any>{
    return this.http.post(this.apiUrl, owner);
   }
}
