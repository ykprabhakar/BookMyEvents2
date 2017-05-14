var bookingApp = angular.module("eventBookingApp", ["ngRoute"]);
	bookingApp.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "templates/home.html"
		})
		.when("/home", {
			templateUrl : "templates/home.html"
		})
		.when("/venues", {
			templateUrl : "templates/venues.html"
		})
		.when("/decorators", {
			templateUrl : "templates/decorators.html"
		})
		.when("/aboutus", {
			templateUrl : "templates/about-us.html"
		})
		.when("/contactus", {
			templateUrl : "templates/contact-us.html"
		})
		.when("/eventideas", {
			templateUrl : "templates/event-ideas.html"
		})
		.when("/venuesdetails", {
			templateUrl : "templates/venues-details.html"
		})
		.when("/decoratordetails", {
			templateUrl : "templates/decorator-details.html"
		})
    
});

        bookingApp.controller("venueResults", function ($scope) {
            $scope.addCustomClass = function () {
                angular.element(document.querySelector("#venue-search-items")).addClass("venue-search-items");
            };
            $scope.removeCustomClass = function () {
                angular.element(document.querySelector("#venue-search-items")).removeClass("venue-search-items");
            };

        });