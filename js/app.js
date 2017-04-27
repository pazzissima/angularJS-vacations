angular.module('destination', [])
  .config(locationRouter);

function locationRouter ($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'partials/destination.html'})
    .when('/countries', {template: '<h3>Countries</h3>'});
}