import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import movielist from '../../assets/movielist.json';


@Component({
  selector: 'app-detail',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, CommonModule,
    RouterLink],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  moviesID: number | undefined;
  movies: any;
  movieList: { idx: any; name: String; rate: String; detail: String; url: String; year: any; trailerLink?: string }[] = movielist;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id) && id !== this.moviesID) {
        this.moviesID = id;
        this.movies = this.movieList.find(movies => movies.idx === this.moviesID);
      } else {
        this.movies = undefined;
      }
    });
  }

  getTrailerUrl(trailerLink:string): SafeResourceUrl | undefined {
    const tailerID = this.extractVideoId(trailerLink);
    const safeUrl = `https://www.youtube.com/embed/${tailerID};
    if (this.movies && this.movies.trailerLink) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.movies.trailerLink)`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }
  private extractVideoId(videoLink: string): string {
    const match = videoLink.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : '';
  }
}
