import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class JobService {
  private BASE_URL = `${environment.BASE_URL}/jobs`;
  // https://workport-api.herokuapp.com/api/v1/jobs

  constructor(
    private httpClient: HttpClient,
    private userService : UserService,
    private authService : AuthService
    
    ) {}

    /**
     * 
     * @returns 
     */
  getAllJobs() {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpClient.get(this.BASE_URL , httpOptions);
  }

  

  /**
   * 
   * @param jobId 
   * @returns 
   */
  findJobById(jobId : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.get(`${this.BASE_URL}/${jobId}`, httpOptions);
  }

  /**
   * 
   * @param slug
   */
  getJobBySlug(slug: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient.get(this.BASE_URL + slug , httpOptions);
  }

  /**
   * 
   * @param job 
   * @returns 
   */
  createJob(job: any) {
    let payload = job;
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }),
    };
    return this.httpClient.post(this.BASE_URL, payload, httpOptions);
  }


  /**
   * 
   * @param job 
   * @param id 
   * @returns 
   */
  updateJob(job : any, jobId : string) {
    const payload = job;
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }),
    };

    return this.httpClient.put(this.BASE_URL + jobId , payload , httpOptions)
  }


  /**
   * 
   * @param jobId 
   * @returns 
   */
  deleteJob(jobId : string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.delete(this.BASE_URL + jobId, {
      ...httpOptions,
      withCredentials : true
    })
  }
}
