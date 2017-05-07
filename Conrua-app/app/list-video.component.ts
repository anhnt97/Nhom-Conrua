import { Component, OnInit } from '@angular/core';
import { VideoService } from "./services/video.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'list-video-app',
    templateUrl: './list-video.component.html'
})

export class ListVideoComponent implements OnInit {
    title = 'Phòng học';

    public videos: any[];
    constructor(private videoService: VideoService) {
    }

    ngOnInit(): void {
        this.videoService.GetList().subscribe((response: any) => {
			this.videos = response;
		});
    }



}
