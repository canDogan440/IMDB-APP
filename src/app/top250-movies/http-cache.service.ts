import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCacheService {
  domain: string = '';
  data: any = {};
  minTimeDifference: number = 15 * 60 * 1000;

  constructor() {}

  setDomain(domain: string, id: string) {
    this.domain = domain + id;
    console.log('domain:', this.domain);
    // this.getDataFromLocalStorage();
    return this;
  }

  resetCache() {
    localStorage.removeItem(this.domain);
  }

  getDataFromLocalStorage() {
    console.log(this.domain);
    this.data = JSON.parse(localStorage.getItem(this.domain) || '');
  }

  checkTimeDifference() {
    return Date.now() - this.data.time;
  }

  canUseCache(): boolean {
    return this.checkTimeDifference() <= this.minTimeDifference;
  }

  returnCacheData() {
    return this.data.data;
  }
  
  setCache(data: object) {
    localStorage.setItem(
      this.domain,
      JSON.stringify({
        data,
        time: Date.now(),
      })
    );
  }
}
