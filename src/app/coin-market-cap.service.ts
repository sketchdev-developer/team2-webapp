import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

class CoinBag {
  coins: Array<any>;
}

@Injectable()
export class CoinMarketCapService {
  constructor(private http: HttpClient) {}

  getCoins(): Observable<CoinBag> {
    return this.http.get<CoinBag>('/api/coinMarketCap');
  }
}

