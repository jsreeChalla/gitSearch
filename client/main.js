import angular from 'angular';
import angularMeteor from 'angular-meteor';
import searchList from '../imports/components/searchList/searchList';
//import '../imports/startup/accounts-config.js';

angular.module('simple-search', [
  angularMeteor,
  searchList.name,
  // 'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['simple-search']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
