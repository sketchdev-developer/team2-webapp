import { SpecHelper } from './support/spec.helper';
import { DashboardPage } from './pages/dashboard.po';

describe('dashboard', () => {
  let dashboardPage: DashboardPage;
  let specHelper: SpecHelper;

  beforeEach(() => {
    specHelper = new SpecHelper();
    dashboardPage = new DashboardPage();
  });

  describe('Load Chart', () => {
    beforeEach(() => {
      specHelper.stubApiRequest({
        url: '/coinMarketCap',
        method: 'GET',
        response: {
          code: 200,
          data: []
        }
      });
    });
    it('should do something', () => {
      specHelper.navigateTo(dashboardPage);
      expect(dashboardPage.bitcoinChart).toBeDefined();
    });
  });
});
