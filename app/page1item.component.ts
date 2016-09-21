import {Component} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
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