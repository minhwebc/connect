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
    .when('/forum', {
        templateUrl: 'partials/forum.html',
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
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'scheduleController',
        controllerAs: 'schCtrl',
        css: 'css/dashboard.css'
    })
    .when('/admin', {
        templateUrl: 'partials/admin-login.html', 
        controller:'adminLoginController',
        controllerAs: 'adlogCtrl',
        css: 'css/admin.css'
    })
    .when('/availability/:id', {
        templateUrl: 'partials/availability.html', 
        controller: 'addEmployeeController',
        controllerAs: 'addCtrl',
        css: 'css/addemployee.css'
    })
    .when('/addlocation', {
        templateUrl: 'partials/addlocation.html', 
        controller: 'addLocationController',
        controllerAs: 'addLocationCtrl'
    })
    .otherwise({
        redirectTo: '/dashboard'
    });
});