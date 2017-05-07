"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-app',
        template: "\n  <div class=\"header\">\n\t\t<div class=\"col-md-12\">\n\t\t\t\t<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"#\">\n\t\t\t\t\t\t\t<div class=\"logo pull-left\">\n\t\t\t\t\t\t\t\t<a routerLink=\"\"><img src=\"http://imageshack.com/a/img923/2174/NJezLZ.png\" alt=\"logo_team\" height=\"45\" width=\"45\"/></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t   </a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a routerLink=\"videos\">Ph\u00F2ng h\u1ECDc</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a routerLink=\"test\">Ph\u00F2ng thi</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=1664158677218494&ref=ts&fref=ts\">Gi\u1EDBi thi\u1EC7u</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=1664158677218494&ref=ts&fref=ts\">Li\u00EAn H\u1EC7</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t</nav>\n\t\t</div>\n\t</div>\n\t<br>\n    <br>\n\t<div class=\"row\">\n        <div class=\"col-md-2 col-xs-1\"></div>\n\t\t<div class=\"col-md-8 col-xs-10\">\n\t\t\t<marquee onmouseover=\"this.stop()\" onmouseout=\"this.start()\" scrollamount=\"2\"><a href=\"2.html\">B\u00E0i thi \u0111ang di\u1EC5n ra: Ki\u1EC3m tra ch\u01B0\u01A1ng I (30p)</a></marquee>\n\t\t</div>\n\t</div>\n<router-outlet></router-outlet>\n  ",
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map