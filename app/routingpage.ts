import {provideRouter,RouterConfig} from '@angular/router';
import {HomeComponent} from './home.component';
import {Page1Component,Page1itemComponent} from './page1.component';
// import {Page1itemComponent} from './page1item.component';

export const routers:RouterConfig=[
 { path: '', component: HomeComponent },
  {  path: 'page1', component: Page1Component},
   { path: 'page1/:id', component: Page1itemComponent },
    {path:'home',component:HomeComponent},
    {path:'**',component:HomeComponent}

];