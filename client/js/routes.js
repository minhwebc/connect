var app = angular.module('app', ['ngRoute']); 

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/welcome.html',
        controller: 'welcomeController',
        controllerAs: 'welCtrl',
        css: 'css/welcome.css'
    })
    .when('/login/student', {
        templateUrl: 'partials/studentLogin.html',
        controller: 'loginController',
        controllerAs: 'lgnCtrl'
    })
    .when('/login/tutor', {
        templateUrl: 'partials/tutorLogin.html',
        controller: 'tutorController',
        controllerAs: 'tutorCtrl'
    })
    .when('/forum', {
        templateUrl: 'partials/forum.html'
    })
    .when('/register/student', {
        templateUrl: 'partials/studentRegistration.html',
        controller: 'stuRegisController',
        controllerAs: 'stuReg'
    })
    .when('/register/tutor', {
        templateUrl: 'partials/tutorRegistration.html',
        controller: 'tuRegisController',
        controllerAs: 'tuReg'
    })
    .when('/student', {
        templateUrl: 'partials/studentProfile.html',
        controller: 'studentController',
        controllerAs: 'stuCtrl'
    })
    .when('/tutor', {
        templateUrl: 'partials/tutorProfile.html',
        controller: 'tutorController',
        controllerAs: 'tuCtrl' 
    })
    .otherwise({
        redirectTo: '/'
    });
});