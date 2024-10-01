import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  UntypedFormGroup,
  Validators,
  UntypedFormBuilder,
  FormGroupDirective,
  UntypedFormControl,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  state = {
    togglePassword: false,
    toggleConfirmPassword: false,
    verifyingCredentials: false,
    passwordsValid: false,
    lastnameFocus: false,
    firstnameFocus: false,
    emailFocus: false,
    phoneFocus: false,
    passwordFocus: false,
    confirmPasswordFocus: false,
    signupError: false,
  };

  submitted = false;
  isLoading = false;
  signupError;
  signUpForm: UntypedFormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtService: JwtHelperService,
    private formBuilder: UntypedFormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    /**
     * Signup form control
     */
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get formField() {
    return this.signUpForm.controls;
  }


  /**
   * @description handles signup
   * @returns
   */
  register() {
    this.router.navigateByUrl('/builder/resume-builder');
    console.log(this.signUpForm.value);


    if (this.signUpForm.valid) {
      this.state.verifyingCredentials = true;

      this.authService.signUp(this.signUpForm.value).subscribe(
        (account) => {
          this.signIn(account);
        },

        (err: any) => {
          this.state.signupError = true;
          this.state.verifyingCredentials = false;
          this.signupError =
            'Login failed , check email and password and try again';

          this.signupError = 'Sign up error,' + err.error.error;
          this.snackBar.open('Create account failed', err.error.error + '', {
            duration: 3000,
          });
        }
      );
    } else {
      this.state.signupError = true;
      this.state.verifyingCredentials = false;
      this.signupError = 'Correct all field and try again';
      this.snackBar.open('Creating account faild', '', { duration: 3000 });
    }
  }




  signIn(account: any) {
    this.authService.logIn(this.signUpForm.value).subscribe(
      (x: any) => {
        this.state.verifyingCredentials = false;
        this.authService.saveUserToken(x?.token);
        this.router.navigateByUrl('/builder/resume-builder');
      },

      (err: any) => {
        this.state.signupError = true;
        this.state.verifyingCredentials = false;
        this.signupError = 'Login failed' + err.error.error;
        this.snackBar.open('Creating account failed', err.error.error + '', {
          duration: 3000,
        });
      }
    );
  }

  onReset() {
    this.signUpForm.reset();
  }
}
