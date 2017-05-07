import { Component, OnInit } from '@angular/core';
import { VideoService } from "./services/video.service";
import { HeaderComponent } from './header.component';
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'home-app',
	template:
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>{{title}} | Rùa đi học</title>

		<meta name="description" content="Source code generated using layoutit.com">
		<meta name="author" content="LayoutIt!">

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	</head>
	<body>
		<div class="row">
			<div class="col-md-12">
				<div class="carousel slide" id="my_carousel" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-slide-to="0" data-target="#my_carousel"></li>
						<li data-slide-to="1" data-target="#my_carousel"></li>
						<li data-slide-to="2" data-target="#my_carousel" class="active"></li>
					</ol>
					<div class="carousel-inner" role="listbox">
						<div class="item">
							<img alt="Carousel Bootstrap First" src="http://imageshack.com/a/img924/7744/APLbuu.png">
						</div>
						<div class="item">
							<img alt="Carousel Bootstrap Second" src="http://imageshack.com/a/img924/7744/APLbuu.png">
						</div>
						<div class="item active">
							<img alt="Carousel Bootstrap Third" src="http://imageshack.com/a/img922/5218/LudOTI.png">
						</div>
						<!-- Left and right controls -->
						<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span class="sr-only">Previous</span>
						</a>
						<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span class="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<hr />
				<h2 class="text-center">
					<strong>Bài giảng nổi bật</strong>
				</h2>
				
				<div class="col-md-4 col-xs-12" *ngFor = "let video of videos">
					<div class="thumbnail">
						<img alt="{{video.name}}" src="{{video.srcimg}}"
							width="300" height="320">
						<div class="caption">
							<h3>{{video.name}}</h3>
							<p>Giáo viên: {{video.teacher}}</p>
							<p><a class="btn btn-primary pull-right" routerLink="videos/{{video.id}}" role="button">Xem Ngay</a></p>
							<p><br></p>
						</div>
					</div>
				</div>
				<h2 class="text-center">
					<strong>Đề thi mới</strong>
				</h2>
				<div class="col-md-8 col-xs-12">
					<div class="panel panel-primary">
						<div class="panel-heading">Lớp 12</div>
						<div class="panel-body">
							<a routerLink="test" class="list-group-item"><span class="glyphicon glyphicon-time"></span> 30p <strong>Kiểm tra chương I</strong></a>  
						</div>
					</div>
				</div>
				<div class="row">
					<div class="text-center">
						<div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
							data-numposts="2"></div>
					</div>
				</div>
				<hr />
	</body>
	<router-outlet></router-outlet>
	`,
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
