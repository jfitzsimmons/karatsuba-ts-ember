import EmberRouter from '@ember/routing/router';
import config from 'karatsuba-ts-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.routerRootURL;
}

Router.map(function () {});
