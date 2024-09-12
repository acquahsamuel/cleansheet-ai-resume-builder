import { NgModule } from "@angular/core";
import { MaterialModule } from "./shared/modules/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { UserAuthModule } from "./modules/auth/user-auth.module";
import { SharedModule } from "./shared/modules/shared.module";
 

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    // {provide : HTTP_INTERCEPTORS, useClass : HttpErrorInterceptor ,multi : true}
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
