import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './searchList.html';
import { Session } from 'meteor/session'
if(Meteor.isClient){
class searchListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
    Session.set("searchResults",'');
      this.helpers({
        // this.getReactively({
        searchResults(){
          var results=Session.get("searchResults");
          console.log(results);
          if(!results){
            return [];
          }else{
            return results;
          }
        }
    // });
  });
  }
  search(topic) {
    console.log(topic);
    const data=new Promise(function(resolve,reject){
      Meteor.call('searchGit',topic,function(er,res){
      console.log("ccv");
      if(!er){
        Session.set("searchResults",res);
        console.log(Session.set("searchResults",res))
      }else{
          console.log(er);
      }
    });
  });
  }
}

export default angular.module('searchList', [
  angularMeteor
])
  .component('searchList', {
    templateUrl: 'imports/components/searchList/searchList.html',
    controller: ['$scope', searchListCtrl]
  });
}
