import { Injectable } from '@angular/core';
import  {HttpClient}  from '@angular/common/http' 
import  Observable from 'rxjs'  
@Injectable({
  providedIn:'root'
})
export class IplService {
   baseurl="https://ipl-2020.herokuapp.com/ipl/";
  constructor(private http:HttpClient) { }
  teamLabels():Observable<any>{
    let url=`${this.baseurl}labels`;
    return this.http.get(url)  
  }
  getPlayersByName(teamname):Observable<any>{
     let url=`${this.baseurl}team/${teamname}`;
     return this.http.get(url)
  }
}