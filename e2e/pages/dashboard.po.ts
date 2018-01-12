import { $, $$ } from 'protractor';

export class DashboardPage {
  url = '/dashboard';

  header = $('h1');

  bitcoinChart = $('.bitcoin-chart');
}
