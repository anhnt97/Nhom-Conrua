import { Component } from '@angular/core';
import { HomeComponent} from './home.component';
import { ListVideoComponent} from './list-video.component';

@Component({
  selector: 'header-app',
  template: `
  <div class="header">
		<div class="col-md-12">
				<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
					<div class="navbar-header">
						<a class="navbar-brand" href="#">
							<div class="logo pull-left">
								<a routerLink=""><img src="http://imageshack.com/a/img923/2174/NJezLZ.png" alt="logo_team" height="45" width="45"/></a>
							</div>
					   </a>
					</div>

					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li>
								<a routerLink="videos">Phòng học</a>
							</li>
							<li>
								<a routerLink="test">Phòng thi</a>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							
							<li>
								<a href="https://www.facebook.com/profile.php?id=1664158677218494&ref=ts&fref=ts">Giới thiệu</a>
							</li>
							<li>
								<a href="https://www.facebook.com/profile.php?id=1664158677218494&ref=ts&fref=ts">Liên Hệ</a>
							</li>
						</ul>
					</div>

				</nav>
		</div>
	</div>
	<br>
    <br>
	<div class="row">
        <div class="col-md-2 col-xs-1"></div>
		<div class="col-md-8 col-xs-10">
			<marquee onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2"><a href="2.html">Bài thi đang diễn ra: Kiểm tra chương I (30p)</a></marquee>
		</div>
	</div>
<router-outlet></router-outlet>
  `,
})
export class HeaderComponent  { }
