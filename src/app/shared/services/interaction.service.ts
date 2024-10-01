import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private BASE_URL = `${environment.BASE_URL}/interaction`;

  constructor(
    private httpClient: HttpClient,
  ) { }



  getAllPromptTitle(){
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + token,
      })
    }
    return this.httpClient.get(`${this.BASE_URL}/all-prompt-titles`, httpOptions);
 
  }



  initiateInteraction(prompt : string){
    console.log(prompt, "first here");
    const token = localStorage.getItem('currentUser');
    // const payload = JSON.stringify(prompt);

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + token,
      })
    }
    return this.httpClient.post(`${this.BASE_URL}`, {prompt : prompt}, httpOptions);
 
  }


  getAllInteraction(){
    console.log(prompt, "first here");
    const token = localStorage.getItem('currentUser');
    // const payload = JSON.stringify(prompt);

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + token,
      })
    }
    return this.httpClient.get(`${this.BASE_URL}`, httpOptions);
 
  }
}
