import { RequestSenderService } from './../request-sender.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { queryParameter } from './types';

@Injectable({
  providedIn: 'root',
})
export class PostersService {
  constructor(
    private route: ActivatedRoute,
    private requester: RequestSenderService
  ) {}
  parameter: queryParameter = {
    id: '',
  };
  getPosters(): Promise<any> {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.parameter = params;
      console.log('parametre:', this.parameter.id);
    });
    return this.requester
      .path('Posters', this.parameter.id)
      .cache()
      .get()
      .send(undefined, this.parameter.id);
  }
}
