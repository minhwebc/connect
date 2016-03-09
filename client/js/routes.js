var app = angular.module('app', ['ngRoute', 'angularMoment', 'ngMaterial']); 
app.config(function ($routeProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('altTheme').primaryPalette('red');
  $routeProvider
    .when('/', {
        templateUrl: 'partials/welcome.html',
        controller: 'welcomeController',
        controllerAs: 'welCtrl',
        css: 'css/welcome.css'
    })
    .when('/login', {
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
    .when('/event/:id', {
        templateUrl: 'partials/eventProfile.html',
        controller: 'eventProfileController',
        controllerAs: 'eventProCtrl'
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
    .when('/profile/', {
        templateUrl: 'partials/profile.html',
        controller: 'profileController',
        controllerAs: 'profileCtrl',
        css: 'css/dashboard.css'
    })
    .when('/post/:id', {
        templateUrl: 'partials/postProfile.html',
        css: 'css/post.css',
        controller: 'postController',
        controllerAs:'postCtrl'
    })
    .when('/message', {
        templateUrl: 'partials/message.html',
        css: 'css/message.css',
        controller: 'messageController',
        controllerAs:'postCtrl'
    })
    .when('/needtoimplement', {
        templateUrl: 'partials/underconstruction.html'
    })
    .when('/resources', {
        templateUrl: 'partials/resource.html',
        css: 'css/resource.css'
    })
    .otherwise({
        redirectTo: '/needtoimplement'
    });
});