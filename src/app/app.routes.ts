import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MoviesComponent } from './movies/movies.component';
import { ActordetailComponent } from './actordetail/actordetail.component';


export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'actordetail/:id', component: ActordetailComponent },
  {path: 'movies', component:MoviesComponent}
];
