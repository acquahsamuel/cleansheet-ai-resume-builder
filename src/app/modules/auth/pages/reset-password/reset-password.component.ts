import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
// import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  // @ts-ignore
  resetPasswordForm: UntypedFormGroup;

  constructor(
    private authSerive: AuthService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  getEmailValue() {
    return this.resetPasswordForm.controls;
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) {
      // throw new Error('')
      return;
    }

    this.authSerive
      .forgotPassword(this.resetPasswordForm.value)
      .subscribe((email) => {
        // console.log()
        alert('Email sent to ' + email);
      });
  }
}
