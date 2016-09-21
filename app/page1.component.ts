import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector:'my-page1',
    templateUrl:'viewcomponent/page1.html'
})
export /**
 * name
 */
class Page1Component {
datapage1:string[];
    constructor() {
        
    }
    ngOnInit(){
  this.datapage1=['A','B','C'];
    }
}

@Component({
    selector:'my-page1item',
    templateUrl:'viewcomponent/page1item.html'
})
export /**
 * Page1itemComponent
 */
class Page1itemComponent {
    id:any;
     paramsSub: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = +params['id']);
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}