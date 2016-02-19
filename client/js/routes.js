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
        controllerAs: 'lgnCtrl',
        css: 'css/login.css'
    })
    .when('/login/tutor', {
        templateUrl: 'partials/tutorLogin.html',
        controller: 'loginController',
        controllerAs: 'lgnCtrl',
        css: 'css/login.css'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        css: 'css/dashboard.css'
    })
    .when('/forum', {
        templateUrl: 'partials/forum.html',
        controller: 'forumController',
        controllerAs: 'forumCtrl',
        css: 'css/forum.css'
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
    .when('/createEvent', {
        templateUrl: 'partials/createEvent.html',
        controller: 'eventController',
        controllerAs: 'eventCtrl' 
    })
    .otherwise({
        redirectTo: '/'
    });
});