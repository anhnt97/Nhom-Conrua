"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var video_component_1 = require("./video.component");
var home_component_1 = require("./home.component");
var video_service_1 = require("./services/video.service");
var app_routes_1 = require("./app.routes");
var list_video_component_1 = require("./list-video.component");
var test_component_1 = require("./test.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routes_1.appRoutes, http_1.HttpModule],
        declarations: [
            app_component_1.AppComponent,
            video_component_1.VideoComponent,
            home_component_1.HomeComponent,
            list_video_component_1.ListVideoComponent,
            test_component_1.TestComponent,
            video_component_1.SafePipe
        ],
        providers: [video_service_1.VideoService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map