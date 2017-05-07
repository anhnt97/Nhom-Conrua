import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListVideoComponent } from './list-video.component';
import { VideoComponent } from "./video.component";
import { TestComponent } from "./test.component";

const routing: Routes = [
    { path: '', component: HomeComponent},
    { path: 'videos', component: ListVideoComponent },
    { path: 'videos/:id', component: VideoComponent},
    { path: 'test', component: TestComponent}

]

export const appRoutes = RouterModule.forRoot(routing);