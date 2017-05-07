import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { VideoComponent, SafePipe } from './video.component';
import { HomeComponent } from './home.component';
import { VideoService } from "./services/video.service";
import { appRoutes } from "./app.routes";
import { ListVideoComponent } from "./list-video.component";
import { Routes } from "@angular/router/router";
import { TestComponent } from './test.component';




@NgModule({
  imports: [BrowserModule, appRoutes, HttpModule],
  declarations: [
    AppComponent,
    VideoComponent,
    HomeComponent,
    ListVideoComponent,
    TestComponent,
    SafePipe
    ],

  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
