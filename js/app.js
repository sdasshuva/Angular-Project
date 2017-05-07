/**
 * Created by Shaibal on 5/6/2017.
 */
var App = angular.module('App', ['ngRoute', 'ui.router']);


// var App = angular.module('App', ['ngRoute', 'ui.router', 'ngAnimate']);

App.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'StudentController'
        })
        .when('/viewStudents', {
            templateUrl: 'viewStudents.html',
            controller: 'StudentController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

App.controller('StudentController', function($scope) {
    $scope.students = [
        {id: 3, name:'rahman'},
        {id: 1, name:'bashar'},
        {id: 2, name:'anwar'}
    ];

    $scope.message = "Click on the hyper link to view the students list.";
});

App.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }   
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});
//var mainApp = angular.module('mainApp', ['ngRoute']);







