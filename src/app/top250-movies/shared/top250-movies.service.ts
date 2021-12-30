import { RequestSenderService } from './../request-sender.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class Top250MoviesService {
  param: string = '';

  constructor(private requester: RequestSenderService) {}

  getTop250Movies(): Promise<any> {
    return this.requester.path('Top250Movies','').cache().get().send();
  }
}
