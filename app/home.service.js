"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var Homeservice = (function () {
    function Homeservice(http) {
        this.http = http;
        this.Url = 'http://localhost:99/apiyii/site/ampall/36';
    }
    Homeservice.prototype.getampall = function () {
        return this.http.get(this.Url).map(function (res) { return res.json(); }).catch(this.error);
    };
    Homeservice.prototype.error = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'server error');
    };
    Homeservice = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Homeservice);
    return Homeservice;
}());
exports.Homeservice = Homeservice;
//# sourceMappingURL=home.service.js.map