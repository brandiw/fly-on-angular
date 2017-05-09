angular.module("FlyApp", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/404");

  $stateProvider.state("home", {
    url: "/",
    templateUrl: "app/views/planes.html",
    controller: "PlanesCtrl"
  })
  .state("plane", {
    url: "/plane/:id",
    templateUrl: "app/views/details.html",
    controller: "DetailCtrl"
  })
  .state("404", {
    url: "/404",
    templateUrl: "app/views/404.html"
  });

  $locationProvider.html5Mode(true);
}]);
