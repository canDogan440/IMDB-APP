import { DomSanitizer } from '@angular/platform-browser';
import { TrailerService } from './../../shared/trailer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css'],
})
export class TrailersComponent implements OnInit {
  trailer: any = {};

  constructor(
    private trailerService: TrailerService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.trailerService.getTrailer().then((data: object) => {
      this.trailer = data;
      console.log('trailer datası', this.trailer);
    });
  }
}
