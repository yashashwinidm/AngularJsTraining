
angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
function ctrl($scope)
{
    $scope.a = "yashashwini";
}
function ctrl1($scope){
    $scope.b = "computer science";
}