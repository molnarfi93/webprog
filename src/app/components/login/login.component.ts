import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['app.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
	const data = change?.after?.data();  
	this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern[a-z0-9._-]@[a-z0-9._-].[a-z]],
      passw: ['', [Validators.required]]
    });
  }
  
  get myForm() {
    return this.userForm.controls;
  }

  login(){
	if (!this.userForm.valid) {
      console.log('Invalid data!');
      return false;
    } else {
      this.apiService.getUser(this.userForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl(['/dvds', {email: this.data.email}]));
        }, (error) => {
          console.log(error);
        });
    }
  }
  
}
