import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['style.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}
  
  initForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern[a-z0-9._-]@[a-z0-9._-].[a-z]],
      passw: ['', [Validators.required]]
    });
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
