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
var core_1 = require("@angular/core");
var video_service_1 = require("./services/video.service");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(videoService, router, activatedRoute) {
        this.videoService = videoService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'Home';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.GetList().subscribe(function (response) {
            _this.videos = response;
        });
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        /*
                this.videoService.GetSingle(this._id).then(data => {
                    this.videos = data;
                });
        */
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-app',
        template: "<!DOCTYPE html>\n\t<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n\t\t<title>{{title}} | R\u00F9a \u0111i h\u1ECDc</title>\n\n\t\t<meta name=\"description\" content=\"Source code generated using layoutit.com\">\n\t\t<meta name=\"author\" content=\"LayoutIt!\">\n\n\t\t<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js\"></script>\n\t\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\t\t<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\t\t<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n\t</head>\n\t<body>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"carousel slide\" id=\"my_carousel\" data-ride=\"carousel\">\n\t\t\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t\t\t<li data-slide-to=\"0\" data-target=\"#my_carousel\"></li>\n\t\t\t\t\t\t<li data-slide-to=\"1\" data-target=\"#my_carousel\"></li>\n\t\t\t\t\t\t<li data-slide-to=\"2\" data-target=\"#my_carousel\" class=\"active\"></li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t<img alt=\"Carousel Bootstrap First\" src=\"http://imageshack.com/a/img924/7744/APLbuu.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t<img alt=\"Carousel Bootstrap Second\" src=\"http://imageshack.com/a/img924/7744/APLbuu.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"item active\">\n\t\t\t\t\t\t\t<img alt=\"Carousel Bootstrap Third\" src=\"http://imageshack.com/a/img922/5218/LudOTI.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- Left and right controls -->\n\t\t\t\t\t\t<a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Previous</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t<span class=\"sr-only\">Next</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr />\n\t\t\t\t<h2 class=\"text-center\">\n\t\t\t\t\t<strong>B\u00E0i gi\u1EA3ng n\u1ED5i b\u1EADt</strong>\n\t\t\t\t</h2>\n\t\t\t\t\n\t\t\t\t<div class=\"col-md-4 col-xs-12\" *ngFor = \"let video of videos\">\n\t\t\t\t\t<div class=\"thumbnail\">\n\t\t\t\t\t\t<img alt=\"{{video.name}}\" src=\"{{video.srcimg}}\"\n\t\t\t\t\t\t\twidth=\"300\" height=\"320\">\n\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t<h3>{{video.name}}</h3>\n\t\t\t\t\t\t\t<p>Gi\u00E1o vi\u00EAn: {{video.teacher}}</p>\n\t\t\t\t\t\t\t<p><a class=\"btn btn-primary pull-right\" routerLink=\"videos/{{video.id}}\" role=\"button\">Xem Ngay</a></p>\n\t\t\t\t\t\t\t<p><br></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h2 class=\"text-center\">\n\t\t\t\t\t<strong>\u0110\u1EC1 thi m\u1EDBi</strong>\n\t\t\t\t</h2>\n\t\t\t\t<div class=\"col-md-8 col-xs-12\">\n\t\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t\t\t<div class=\"panel-heading\">L\u1EDBp 12</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<a routerLink=\"test\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-time\"></span> 30p <strong>Ki\u1EC3m tra ch\u01B0\u01A1ng I</strong></a>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<div class=\"fb-comments\" data-href=\"https://developers.facebook.com/docs/plugins/comments#configurator\"\n\t\t\t\t\t\t\tdata-numposts=\"2\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr />\n\t</body>\n\t<router-outlet></router-outlet>\n\t",
        styles: [".col-md-4{\n\t\tpadding: 10px;\n\t}\n\t"]
    }),
    __metadata("design:paramtypes", [video_service_1.VideoService,
        router_1.Router,
        router_1.ActivatedRoute])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map