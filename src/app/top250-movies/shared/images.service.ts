import { RequestSenderService } from './../request-sender.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { queryParameter } from './types';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(
    private route: ActivatedRoute,
    private requester: RequestSenderService
  ) {}
  parameter: queryParameter = {
    id: '',
  };
  getImages(): Promise<any> {
    this.route.queryParams.subscribe((param: any) => {
      this.parameter = param;
    });
    return this.requester
      .path('Images', this.parameter.id)
      .cache()
      .get()
      .send(undefined, this.parameter.id);
  }
}
