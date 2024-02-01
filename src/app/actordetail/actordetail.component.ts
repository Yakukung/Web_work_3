import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import actorlist from '../../assets/actorslist.json'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-actordetail',
  standalone: true,
  imports: [RouterLink, CommonModule, MatToolbar, MatButton, MatCardModule, MatIconModule],
  templateUrl: './actordetail.component.html',
  styleUrls: ['./actordetail.component.scss']
})
export class ActordetailComponent implements OnInit {
  actorId: number | undefined;
  actor: any;
  actorsList: { name: String, personal: any, url: any, age: String, videoLink?: string, id: any }[] = actorlist;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id) && id !== this.actorId) {
        this.actorId = id;
        this.actor = this.actorsList.find(actor => actor.id === this.actorId);
      } else {
        this.actor = undefined;
      }
    });
  }

  getSafeVideoUrl(videoLink: string): SafeResourceUrl {
    const videoId = this.extractVideoId(videoLink);
    const safeUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }

  private extractVideoId(videoLink: string): string {
    const match = videoLink.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : '';
  }


}