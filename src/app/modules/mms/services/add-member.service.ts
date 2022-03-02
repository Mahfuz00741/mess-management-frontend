import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class AddMemberService {

   BASE_API_URL = "http://localhost:3033/member/";

  constructor(
    private http: HttpClient,
  ) { }

  getMemberList(): Observable<Person> {
    const memberList = this.BASE_API_URL + "get/all";
    return this.http.get<Person>(memberList);
  }
}
