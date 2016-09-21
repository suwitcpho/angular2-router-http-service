"use strict";
var home_component_1 = require('./home.component');
var page1_component_1 = require('./page1.component');
// import {Page1itemComponent} from './page1item.component';
exports.routers = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'page1', component: page1_component_1.Page1Component },
    { path: 'page1/:id', component: page1_component_1.Page1itemComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
//# sourceMappingURL=routingpage.js.map