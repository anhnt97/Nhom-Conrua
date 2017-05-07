"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var list_video_component_1 = require("./list-video.component");
var video_component_1 = require("./video.component");
var test_component_1 = require("./test.component");
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'videos', component: list_video_component_1.ListVideoComponent },
    { path: 'videos/:id', component: video_component_1.VideoComponent },
    { path: 'test', component: test_component_1.TestComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map