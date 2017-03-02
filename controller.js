
var app = angular.module('myApp', []);

app.service('Mathservice',function () {
     this.multiply = function (a,b) {
         return a * b
     }

    this.devide = function (a,b) {
        return a / b
    }
})

app.service('Calculateservice',function (Mathservice) {
    this.square = function (a) {
        return Mathservice.multiply(a,a)
    }
    this.cube=function (a) {
        return Mathservice.multiply(a,Mathservice.multiply(a,a))
    }

})

app.controller('myCtrl', function($scope,Calculateservice) {
    $scope.dosquare = function () {
        console.log('square calling')
        $scope.answer = Calculateservice.square($scope.number);
    }

    $scope.docube = function () {
        console.log('cube calling')
        $scope.answer = Calculateservice.cube($scope.number)
    }
});





































