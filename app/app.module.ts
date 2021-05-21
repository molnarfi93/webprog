import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { LoginComponent } from './components/login/login.component';
import { DvdsComponent } from './components/dvds/dvds.component';
import { EditDvdComponent } from './components/edit-dvd/edit-dvd.component';
import { AddDvdComponent } from './components/add-dvd/add-dvd.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DvdsComponent,
    EditDvdComponent,
    AddDvdComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
