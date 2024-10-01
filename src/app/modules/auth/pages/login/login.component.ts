import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  submitted = false;
  isLoading = false;
  state = {
    togglePassword: false,
    verifyingCredentials: false,
    emailValid: false,
    passwordValid: false,
    emailFocus: false,
    passwordFocus: false,
    loginError: false
  };

  loginError;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /**
     * Login form control
     */
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    // this.currentLoggedUser();
  }



  login(){
    // this.authService.saveUserToken();
    // this.router.navigateByUrl('/interaction');
  }

  /**
   * @description handles login
   * @returns
   */
   logInSubmit() {
    this.router.navigateByUrl('/builder/resume-builder');
    
    if (this.loginForm.valid) {
      this.state.verifyingCredentials = true;
      this.authService.logIn(this.loginForm.value).subscribe(

        (x: any) => {
          // stop loading
          this.state.verifyingCredentials = false;

          // save user token
          this.authService.saveUserToken(x.token);
          this.router.navigateByUrl('/interaction')
        },

        (err) => {
          this.state.loginError = true;
          this.state.verifyingCredentials = false;
          this.loginError = 'Login failed, check email and password and Try Again';
          // this.stateErrors.login = JSON.stringify(err.error.error);
        });

    } else {
      this.state.loginError = true;
      this.state.verifyingCredentials = false;
      this.loginError = 'Login failed, check email and password and Try Again';
    }
  }



  /**
   * Get form values from controls
   */
  get formField() {
    return this.loginForm.controls;
  }
}
