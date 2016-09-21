import { Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {HomeComponent} from './home.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class Homeservice {
    constructor(private http:Http) {
        
    }
    private Url='http://localhost:99/apiyii/site/ampall/36';
getampall(){
    return this.http.get(this.Url).map(res=>res.json()).catch(this.error);
}
private error(error:Response){
    console.log(error);
    return Observable.throw(error.json().error|| 'server error');
    
}
}