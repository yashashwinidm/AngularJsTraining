

angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
function ctrl($scope)
{
    $scope.a="yashu";
    $scope.friends=["teju","jayshree","apoorva"];
}
function ctrl1($scope){
    $scope.yashu=[{type:"bmw",model:"2015"},{type:"swift",model:"2010"}];
}
