import { FullCastService } from './../../shared/full-cast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullcast',
  templateUrl: './fullcast.component.html',
  styleUrls: ['./fullcast.component.css']
})
export class FullcastComponent implements OnInit {

  cast: any = {}

  constructor(private fullcastService : FullCastService) { }

  ngOnInit(): void {
    this.fullcastService.getFullCast().then((data: object) =>{
      this.cast = data
    })
  }

}
