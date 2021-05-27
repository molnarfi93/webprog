import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-edit-dvd',
  templateUrl: './edit-dvd.component.html',
  styleUrls: ['app.component.css']
})
export class EditDvdComponent implements OnInit {
  dvdForm: FormGroup; 

  constructor(
    public fb: FormBuilder,
	private actRoute: activatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
	  this.getDVD(id);  
  }

  ngOnInit(){
	const email = this.actRoute.snapshot.paramMap.get('email');
	this.dvdForm = this.fb.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2021)]],
	  price: ['', [Validators.required, Validators.min(900), Validators.max(10000)]],
	  pieces: ['', [Validators.required]],
	  user: [email]
    });  
  }
  
  get myForm() {
    return this.dvdForm.controls;
  }
  
  loadAvailableDVDs(){
    this.ngZone.run(() => this.router.navigateByUrl('/dvds'));
  }
  
  getDVD(id){
	this.apiService.getDVD(id).subscribe(data => {
      this.initForm.setValue({
        title: data.title,
        year: data.year,
        price: data.price,
        pieces: data.pieces
      });
    });  
  }
  
  editDVD(){
	if (!this.dvdForm.valid) {
      console.log('Invalid data!');
      return false;
    } else {
      this.apiService.editDVD(this.dvdForm.value, id).subscribe(
        (res) => {
          console.log('DVD successfully edited!');
          this.ngZone.run(() => this.router.navigateByUrl('/dvds'));
        }, (error) => {
          console.log(error);
        });
	}
  }
  
}
