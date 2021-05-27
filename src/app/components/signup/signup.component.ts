import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['app.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    public userForm: FormGroup,
	public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
	this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern[a-z0-9._-]@[a-z0-9._-].[a-z]],
      passw: ['', [Validators.required]]
    });
  }

  get myForm() {
    return this.userForm.controls;
  }
  
  signup(){
	if (!this.userForm.valid) {
      console.log('Invalid data!');
      return false;
    } else {
      this.apiService.signup(this.userForm.value).subscribe(
        (res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/login'));
        }, (error) => {
          console.log(error);
        });
    }
  }
  
  loadLogin(){
	this.ngZone.run(() => this.router.navigateByUrl('/login'));
  }
  
}
