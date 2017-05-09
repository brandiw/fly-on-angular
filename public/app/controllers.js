angular.module("FlyApp")
.controller("PlanesCtrl", ["$scope", "PlanesAPI", function($scope, PlanesAPI){
  $scope.title = "Look at all my planes!";
  $scope.planes = [];

  PlanesAPI.getPlanes().then(function success(response){
    $scope.planes = response.data;
  }, function error(err){
    console.log("Oh no", err);
  });

  $scope.makePlane = function(){
    var plane = {manufacturer: $scope.mft, model: $scope.model, engines: $scope.eng, image: $scope.img};
    var result = PlanesAPI.addPlane(plane);
    console.log("added plane");
  }
}])
.controller("DetailCtrl", ["$scope", "$stateParams", "PlanesAPI", function($scope, $stateParams, PlanesAPI){
  $scope.plane = {};

  PlanesAPI.getPlane($stateParams.id).then(function success(response){
    console.log("success", response);
    $scope.plane = response.data;
  }, function error(err){
    console.log("error", err);
  })
}])
.filter("fixgrammar", function() {
  return function(input){
    if(input == 1){
      return "1 engine";
    }
    else{
      return input + " engines";
    }
  }
})
