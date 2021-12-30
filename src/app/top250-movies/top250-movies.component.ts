import { Top250Movies } from './types';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Top250MoviesService } from './shared/top250-movies.service';

@Component({
  selector: 'app-top250-movies',
  templateUrl: './top250-movies.component.html',
  styleUrls: ['./top250-movies.component.css'],
})
export class Top250MoviesComponent implements OnInit {
  constructor(
    private top250MovieService: Top250MoviesService,
    private sanitizer: DomSanitizer
  ) {}

  data: any = {}

  ngOnInit(): void {
    this.top250MovieService.getTop250Movies().then((movies: any) => {
      this.data = movies;
      console.log(this.data);
    });
  }
}
