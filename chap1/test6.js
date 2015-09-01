// JavaScript Document


var app = angular.module("myApp", []);

app.controller("myController", function($scope, $timeout, $parse, $interpolate) {
	$scope.clock = {
		now: new Date()
	};
    var updateClock = function() {
		$scope.clock.now = new Date();
	};
	setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();
	
	$scope.$watch("expr", function(newValue, oldValue, scope) {
		if (newValue !== oldValue) {
			var parseFun = $parse(newValue);
			$scope.parseValue = parseFun(scope);
		}
	});
	
	$scope.$watch("emailBody", function(body) {
		if (body) {
			var template = $interpolate(body);
			$scope.previewText = template({to: $scope.to});
		}
	});
});