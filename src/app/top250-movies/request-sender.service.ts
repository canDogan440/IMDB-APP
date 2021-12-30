import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpCacheService } from './http-cache.service';

@Injectable({
  providedIn: 'root',
})
export class RequestSenderService {
  apiRoot: string = 'https://imdb-api.com/en/API/';
  apiPath: string = '';
  apiKeys: string[] = ['k_zxe96z0i', 'k_onze4c72', 'k_i0e2i42d'];

  mustUseCache: boolean = false;
  canReturnFromCache: boolean = false;

  httpMethod: string = 'get';
  currentActiveKeyOrder = 0;
  maxKeyCount: Number;

  constructor(
    private http: HttpClient,
    private cacheService: HttpCacheService
  ) {
    this.maxKeyCount = this.apiKeys.length;
  }

  path(path: string, id: string) {
    this.apiPath = path;
    this.cacheService.setDomain(path, id);
    return this;
  }

  cache() {
    this.mustUseCache = true;
    console.log('cache çalıştı');
    return this;
  }

  get() {
    this.httpMethod = 'get';

    if (this.cacheService.canUseCache()) {
      console.log('cache kullanabilir');

      this.canReturnFromCache = true;
    }
    return this;
  }

  async send(params?: { [key: string]: any }, uriParam?: any) {
    return new Promise(
      (
        resolve: (value: any | PromiseLike<any>) => void,
        reject: (reason?: boolean) => void
      ) => {
        if (this.canReturnFromCache) {
          console.log('ilk if ');
          resolve(this.cacheService.returnCacheData());
          return;
        }
        let realPath =
          this.apiRoot +
          this.apiPath +
          '/' +
          this.apiKeys[this.currentActiveKeyOrder] +
          '/';
        if (uriParam) {
          realPath = realPath + uriParam;
          console.log(realPath);
        }
        this.http
          .request(this.httpMethod, realPath, { params })
          .subscribe((data: object) => {
            return this.response(data, resolve, reject, params);
          });
      }
    );
  }

  private response(data: any, resolve: any, reject: any, params: any) {
    if (this.currentActiveKeyOrder >= this.maxKeyCount) {
      reject;
      return;
    }
    if (data.errorMessage) {
      this.currentActiveKeyOrder++;
      this.send(params)
        .then((success: any) => resolve(success))
        .catch((reject: any) => reject(reject));
      return;
    }

    if (this.mustUseCache) {
      this.cacheService.setCache(data);
    }
    resolve(data);
  }
}
