import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CvContentService {
  private apiUrl =  `${environment.BASE_URL}/cv/2`;

  dataSignal = signal<any | null>(null);

  constructor(private http: HttpClient) {}


  fetchProfileData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
