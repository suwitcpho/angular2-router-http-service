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
var router_1 = require('@angular/router');
var Page1Component = (function () {
    function Page1Component() {
    }
    Page1Component.prototype.ngOnInit = function () {
        this.datapage1 = ['A', 'B', 'C'];
    };
    Page1Component = __decorate([
        core_1.Component({
            selector: 'my-page1',
            templateUrl: 'viewcomponent/page1.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Page1Component);
    return Page1Component;
}());
exports.Page1Component = Page1Component;
var Page1itemComponent = (function () {
    function Page1itemComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    Page1itemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = +params['id']; });
    };
    Page1itemComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    Page1itemComponent = __decorate([
        core_1.Component({
            selector: 'my-page1item',
            templateUrl: 'viewcomponent/page1item.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], Page1itemComponent);
    return Page1itemComponent;
}());
exports.Page1itemComponent = Page1itemComponent;
//# sourceMappingURL=page1.component.js.map