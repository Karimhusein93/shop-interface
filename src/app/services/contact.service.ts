import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  answerUrl = environment.url + 'Answer/GetAnswerTypes';
  inquireUrl = environment.url + 'Inquire/GetInquireTypes';
  
  constructor(private http:HttpClient) { 

  }
  getAnswerTypes(){
    return this.http.get(this.answerUrl);
  }
  getInquireTypes(){
    return this.http.get(this.inquireUrl);
  }
}
