import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['style.css']
})
export class AddDvdComponent implements OnInit {
  dvdForm: FormGroup;
  const email = this.actRoute.snapshot.paramMap.get('email');

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
    this.dvdForm = this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2021)]],
	  price: ['', [Validators.required, Validators.min(900), Validators.max(10000)]],
	  pieces: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
	  user: [email]
    });
  }
  
  loadAvailableDVDs(){
    this.ngZone.run(() => this.router.navigateByUrl('/dvds'));
  }
  
  addDVD(){
	if (!this.dvdForm.valid) {
      console.log('Invalid data!');
      return false;
    } else {
      this.apiService.addDVD(this.dvdForm.value).subscribe(
        (res) => {
          console.log('DVD successfully added!');
          this.ngZone.run(() => this.router.navigateByUrl('/dvds'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
