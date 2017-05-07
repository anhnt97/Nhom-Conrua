import { Component, OnInit } from '@angular/core';
import { VideoService } from "./services/video.service";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'home-app',
	templateUrl: './home.component.html',
	styles: [`.col-md-4{
		padding: 10px;
	}
	`]
})

export class HomeComponent implements OnInit {
	title = 'Home';
	public _id: number;
	public videos: any;
	public subscription: Subscription;
	constructor(
		private videoService: VideoService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
	}


	ngOnInit(): void {
		this.videoService.GetList().subscribe((response: any) => {
			this.videos = response;
		});

		this.subscription = this.activatedRoute.params.subscribe(params => {
			this._id = params['id'];
		});
/*
		this.videoService.GetSingle(this._id).then(data => {
			this.videos = data;
		});
*/
	}
}
