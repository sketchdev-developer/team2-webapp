import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../coin-market-cap.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartData: Array<any>;
  chartLabels: Array<any>;
  chartType: string;

  data: string;

  constructor( private coinService: CoinMarketCapService) {}

  ngOnInit() {
    this.chartData = [];
    this.chartLabels = [];
    this.chartType = 'pie';

    this.coinService.getCoins().subscribe(
      result => this.loadLineCharData(result),
      errorResponse => {
        console.log('error!!!', errorResponse.error.errors);
      });
  }

  loadLineCharData(coins) {
    for (let i = 0; i < coins.length; i++) {
      this.chartData.push(Number(coins[i].price_usd));
      this.chartLabels.push(coins[i].name );
    }

    console.log(this.chartData);
    console.log(this.chartLabels);

    this.data = JSON.stringify(coins);
    this.chartType = 'pie';
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
