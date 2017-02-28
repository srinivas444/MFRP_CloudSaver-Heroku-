angular
.module('app')
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){

	var useHome = true;
	$urlRouterProvider.otherwise(function(){
	    if(useHome){
	      useHome = false;
	      return  "/login";
	    }
	    return "/notFound";
	});
	$stateProvider
	.state('login',{
		'url': '/login',
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.state('signup',{
		'url': '/signup',
		templateUrl: 'partials/signup.html',
		controller: 'SignupCtrl'
	})
	.state('home',{
		'url' : "/home",
		templateUrl : 'partials/home.html'
	})
	.state('home.start', {
		url: '/start',
		templateUrl: 'partials/home_start.html'
	})
	.state('home.create_app',{
		url : '/create_app',
		templateUrl : 'partials/create_app.html'
	})
	.state('home.dash_nav',{
		url : '/dash_nav',
		templateUrl : 'partials/dash_nav.html'
	})
	.state('home.dash_overview',{
		url : '/dash_overview',
		templateUrl : 'partials/dash_overview.html'
	})
	.state('setpassword',{
		'url' : "/setpassword",
		templateUrl : 'partials/setpassword.html',
		controller : 'SetPasswordCtrl'
	})

	.state('notFound',{
		
		templateUrl: "'<h1>NOT Found</h1>'"
	})
}])
.run(function($rootScope, $state) {

	$rootScope.$on('$stateChangeStart', function(event, fromState, fromParams, toState, toParams){

		if(fromState.name == 'home') {
			event.preventDefault();

			$state.go('home.start');

		}
		
	});

	$rootScope.Background_color = false;
});