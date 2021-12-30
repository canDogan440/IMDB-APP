import { ActivatedRoute } from '@angular/router';
import { RequestSenderService } from './../request-sender.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(
    private requester: RequestSenderService,
    private route: ActivatedRoute
  ) {}

  parameter: any = {};
  getWikipediaContent(): Promise<any> {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.parameter = params.id;
      console.log('parametre:', this.parameter);
    });
    return this.requester
      .path('Wikipedia', this.parameter)
      .cache()
      .get()
      .send(undefined, this.parameter);
  }
}
