import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DVDsComponent } from './components/dvds/dvds.component';
import { AddDVDComponent } from './components/add-dvd/add-dvd.component';
import { EditDVDComponent } from './components/edit-dvd/edit-dvd.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dvds/:email', component: DVDsComponent },
  { path: 'add-dvd', component: AddDVDComponent },
  { path: 'edit-dvd/:id', component: EditDVDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
