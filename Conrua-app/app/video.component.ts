import { Component, OnInit } from '@angular/core';
import { VideoService } from "./services/video.service"
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url : any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
@Component({
	selector: 'video-app',
	templateUrl: './video.component.html',
	providers: [
		VideoService,
		
		]
})
export class VideoComponent implements OnInit {
	videoUrl: SafeResourceUrl;
	dangerousVideoUrl: string;

	title = '';
	public _id: number;
	public videos: any;
	//src = this.videos.src;
	public subscription: Subscription;

	constructor(
		private videoService: VideoService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		public sanitizer: DomSanitizer
	) {

	}
	updateVideoUrl(src: string) {
		// Appending an ID to a YouTube URL is safe.
		// Always make sure to construct SafeValue objects as
		// close as possible to the input data so
		// that it's easier to check if the value is safe.
		this.dangerousVideoUrl = this.videos.src;
		this.videoUrl =
			this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
	}


	ngOnInit() {
		this.subscription = this.activatedRoute.params.subscribe(params => {
			this._id = params['id'];
		});

		this.videoService.GetSingle(this._id).subscribe((data) => {
			this.videos = data;
		});

	}

	GotoVideo() {
		this.router.navigate(['videos']);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}


}