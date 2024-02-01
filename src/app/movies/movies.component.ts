import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import movielist from '../../assets/movielist.json';
import { CommonModule } from '@angular/common';
import actorslist from '../../assets/actorslist.json';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    RouterLink
  ],
  providers: [], // ไม่ต้องใส่ RouterModule ใน providers
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  actor: any;
  actorsList: { name: String, personal: any, url: any, age: String, id:any }[] = actorslist;

  list: any;
  movieList: { idx: any, name: String, rate: any, url: any }[] = movielist;

  constructor(private router: Router) {
    console.log(this.movieList);
  }

  addToTrailer(idx: any) {
    console.log('Adding to Watchlist:', idx);
    this.router.navigate(['/detail', idx]);
  }
}

