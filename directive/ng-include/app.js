angular.module("myapps", [])
    .controller('ctrl',ctrl) 
     function ctrl($scope) {
      $scope.count = 0;
      $scope.myfunc=function()
       {
        $scope.count++;
      }
    }s