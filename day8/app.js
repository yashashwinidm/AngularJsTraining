

angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
    $scope.cds=[
            {company:"ibm",  contact:7411741778, country:"india"},
            {company:"tcs",  contact:8892013567, country:"germany"},
            {company:"infoysis", contact:8892013561, country:"srilanka"},
            {company:"hirecraft", contact:9411941447, country:" sidney"},
    ];
}
