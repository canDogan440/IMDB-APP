import { DomSanitizer } from '@angular/platform-browser';
import { ImagesService } from './../../shared/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  images: any = {};

  constructor(private imagesService: ImagesService,private santizer : DomSanitizer) {}

  ngOnInit(): void {
    this.imagesService.getImages().then((data: object) => {
      this.images = data;
      console.log(this.images);
    });
  }
}
