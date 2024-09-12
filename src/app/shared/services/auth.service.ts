import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { IUser, User } from "../dto/user.dto";
import decode from "jwt-decode";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private BASE_URL = environment.BASE_URL;
  // public jwtHelper : JwtHelperService = new JwtHelperService();


  public signedin$ = new BehaviorSubject(false);

  constructor(
    private jwtHelper: JwtHelperService,
    private httpClient: HttpClient,
    // private cookieService: CookieService
  ) {}


  public hasRole(expectedRole: string) {
    const token = localStorage.getItem('currentUser');
    // decode the token to get its payload
    const tokenPayload: any = decode(token);

    const roles = tokenPayload.roles.filter((role) => role.toLowerCase() === expectedRole.toLowerCase());

    if (roles.length >= 1) {
      return true;
    }

    return false;
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
  public isAuthenticated()  : boolean {
    const token = localStorage.getItem('currentUser');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  /**
   * Saves a User token to the LocalStorage
   * @param token - the users token
   */
  saveUserToken(token?: string) {
    const tokenX = token || this.jwtHelper.decodeToken(token);
    localStorage.setItem("currentUser", tokenX);
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
    const user = this.jwtHelper.decodeToken(token);
  
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
    const user = this.jwtHelper.decodeToken(token as string);

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

  /**
   * Returns the User Id Stored in the Token
   * @returns the user_id as a string
   */
  getUserId(): string {
    const token = localStorage.getItem("currentUser");
    const tokenPayload: any = decode(token);
    return tokenPayload.sub;
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
