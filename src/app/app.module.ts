import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './index-components/footer/footer.component';
import { HeaderComponent } from './index-components/header/header.component';
import { AuthModule } from './auth/auth.module';
// import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
   // SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
