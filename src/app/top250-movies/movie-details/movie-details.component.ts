import { WikipediaService } from './../shared/wikipedia.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  content: any;

  constructor(private wikipediaService: WikipediaService) {}

  ngOnInit(): void {
    this.wikipediaService.getWikipediaContent().then((data: object) => {
      this.content = data;
      console.log(this.content)
    });
  }
}
