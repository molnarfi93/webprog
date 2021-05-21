import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-dvds',
  templateUrl: './dvds.component.html',
  styleUrls: ['style.css']
})
export class DvdsComponent implements OnInit {
  dvds: DVD[];
  const email = this.actRoute.snapshot.paramMap.get('email'); 

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
	this.getAllDVDs();
  }	

  ngOnInit(): void {}

  loadAddDVD(){
    this.ngZone.run(() => this.router.navigateByUrl(['/add-dvd', {email: email}]));
  }
  
  loadEditDVD(dvd){
	this.ngZone.run(() => this.router.navigateByUrl(['/edit-dvd', {id: dvd._id}]));
  }
  
  logout(){
	this.ngZone.run(() => this.router.navigateByUrl('/login')); 
  }
  
  getAllDVDs(email){
    this.apiService.getAllDVDs(email).subscribe((data) => {
      this.dvds = data;
    });
  }
  
  deleteDVD(dvd, index){
	if (window.confirm('Are you sure?')) {
      this.apiService.deleteDVD(dvd._id).subscribe((data) => {
          this.dvds.splice(index, 1);
      });
	}  
  }
  
}
