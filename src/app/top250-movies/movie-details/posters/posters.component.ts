import { PostersService } from './../../shared/posters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css'],
})
export class PostersComponent implements OnInit {
  postersData: any = {};

  constructor(private postService: PostersService) {}

  ngOnInit(): void {
    this.postService.getPosters().then((data: object) => {
      this.postersData = data;
      console.log("poster datası",this.postersData)
    });
  }
}
