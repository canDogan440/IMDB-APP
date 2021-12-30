import { queryParameter } from './types';
import { RequestSenderService } from './../request-sender.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FullCastService {
  constructor(
    private route: ActivatedRoute,
    private requester: RequestSenderService
  ) {}
  parameter: queryParameter = {
    id: '',
  };
  getFullCast(): Promise<any> {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.parameter = params;
      console.log('parametre:', this.parameter.id);
    });
    return this.requester
      .path('FullCast', this.parameter.id)
      .cache()
      .get()
      .send(undefined, this.parameter.id);
  }
}
