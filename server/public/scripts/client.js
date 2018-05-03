var app = angular.module('ShoeApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider.when('/shoe', {
    templateUrl: 'views/shoes.html',
    controller: 'ShoeController as vm'
  }).otherwise({
    template: '<h2>404</h4>'
  })
})