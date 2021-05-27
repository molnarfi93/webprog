import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['app.component.css']
})
export class AddDvdComponent implements OnInit {
  dvdForm: FormGroup;

  constructor(
    public fb: FormBuilder,
	private actRoute: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
	const email = this.actRoute.snapshot.paramMap.get('email');
	this.dvdForm = this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2021)]],
	  price: ['', [Validators.required, Validators.min(900), Validators.max(10000)]],
	  pieces: ['', [Validators.required, Validators.min(0), Validators.max(1000)]],
	  user: [email]
    });
  }
  
  get myForm() {
    return this.dvdForm.controls;
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
