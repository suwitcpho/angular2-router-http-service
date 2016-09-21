import {Component,OnInit} from '@angular/core';
import {Homeservice} from './home.service';
@Component({
    selector:'my-home',    
    templateUrl:'viewcomponent/home.html',
   providers:[Homeservice]
})

export class HomeComponent   {
  ampall:any;
  errormsg:string;
  constructor(private homeservice:Homeservice){  }
  ngOnInit(){
    this.listamp();
  }
  alertcode(y:any){
    alert('รหัสอำเภอคือ '+y);
  }
   alertname(y:any){
    alert('ชื่ออำเภอคือ '+y);
  }
 listamp(){
   this.homeservice.getampall()
   .subscribe(
     ampall=>this.ampall=ampall,
     error=>this.errormsg=<any> error

   );
 }
}