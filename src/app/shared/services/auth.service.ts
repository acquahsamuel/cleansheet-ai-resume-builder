import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import { CookieService } from "ngx-cookie-service";
import { IUser, User } from "../dto/user.dto";
// import decode from "jwt-decode";

import { environment } from "../../../environments/environment.prod";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  private BASE_URL = environment.BASE_URL;
  // public jwtHelper : JwtHelperService = new JwtHelperService();


  public signedin$ = new BehaviorSubject(false);

  constructor(
    // private jwtHelper: JwtHelperService,
    private httpClient: HttpClient,
    // private cookieService: CookieService
  ) {}


  public hasRole(expectedRole: string) {
   
  }





  /**
   *
   * @param user
   * @returns
   * @description user signup **
   */
  signUp(user: any) {
    return this.httpClient.post(`${this.BASE_URL}/auth/register`, user);
  }

  /**
   *
   * @param user
   * @returns
   */
  logIn(data : any) {
    const body = JSON.stringify(data);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        
      })
    };
    return this.httpClient.post(`${this.BASE_URL}/auth/login`, body, httpOptions)
  }
  /**
   *
   * @returns
   * Get authenticated state
   */
  public isAuthenticated()   {
    const token = localStorage.getItem('currentUser');
    // Check whether the token is expired and return
  
  }

  /**
   * Saves a User token to the LocalStorage
   * @param token - the users token
   */
  saveUserToken(token?: string) {
  
  }



  /**
   * @description get current user
   * @param
   * @returns
   */
  getCurrentUser() {
    // const token = localStorage.getItem('currentUser');
    const token = localStorage.getItem('currentUser');
    console.log(token);
    
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      })
    };

    return this.httpClient.get(`${this.BASE_URL}/auth/me`, httpOptions)
  }

  /**
   *
   * @param email
   * @returns
   */
  forgotPassword(email: string) {
    return this.httpClient.post(`${this.BASE_URL}/auth/forgotpassword`, email);
  }

  /**
   *
   * @param id
   * @param data
   * @returns
   */
  updateUserDetails(id: string, data: string) {
    const token = localStorage.getItem("currentUser");
     
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer" + token
      })
    };

    return this.httpClient.put(
      `${this.BASE_URL}/updatedetails/${id}`,
      httpOptions
    );
  }

 

   
  removeUserToken() {
    localStorage.removeItem("currentUser");
  }

  /**
   * Logout
   */
  logout() {
    localStorage.removeItem('currentUser');
  }
}
