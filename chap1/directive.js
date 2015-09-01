

var app = angular.module("directiveApp", []);

app.controller("controller1", function($scope, $timeout) {
	//ng-disabled
	$scope.isDisabled = true;
	$timeout(function() {
		$scope.isDisabled = false;
	}, 5000);
	
	//ng-href
	$timeout(function() {
		$scope.testHref="http://www.baidu.com";
	}, 2000);
	
	//ng-src
	$timeout(function() {
		$scope.testSrc="https://www.baidu.com/img/bd_logo1.png";
	}, 2000);
	
	//ng-controller
	$scope.model1 = {
		property1: "Hello computer"
	};
	$scope.action1 = function() {
		$scope.model1.property1 = "Hello human";
	};
	
	//child controller
	$scope.someValue = "Hello computer";
	$scope.someAction1 = function() {
		$scope.someValue = "Hello human, from parent";
	};
	$scope.someModel = {
		someValue: "Hello computer"
	};
	$scope.someAction2 = function() {
		$scope.someModel.someValue = "Hello human, from parent";
	};
	
	//ng-repeat
	$scope.people = [
		{name: "White", city: "HangZhou"},
		{name: "Alex", city: "BeiJing"},
	];
	
	//ng-model、ng-change
	//$scope.model2 = {};
	$scope.change = function() {
		$scope.model2.output = parseInt($scope.model2.x) + 2;
	};
	
	//ng-select
	$scope.cities1 = [
		{name: "HangZhou", id: 1, group: "East"},
		{name: "BeiJing", id: 2, group: "North"},
		{name: "ShangHai", id: 3, group: "East"},
		{name: "GuangZhou", id: 4, group: "South"},
		{name: "ShenZhen", id: 5, group: "South"}
	];
	$scope.change2 = function() {
		console.log($scope.city1);
	};
});

//child controller
app.controller("childController1", function($scope) {
	$scope.childAction1 = function() {
		$scope.someValue = "Hello human, from child";
	};
});
app.controller("childController2", function($scope) {
	$scope.childAction2 = function() {
		$scope.someModel.someValue = "Hello human, from child";
	};
});

//ng-submit
app.controller("formController", function($scope){
	$scope.person = { name: null };
	$scope.people = [];
	$scope.submit = function() {
		if ($scope.person.name) {
			$scope.people.push({name: $scope.person.name});
			$scope.person.name = "";
		}
	};
	
	$scope.testClass = 1;
	$scope.addOne = function() {
		$scope.testClass += 1;
	};
	$scope.deleteOne = function() {
		$scope.testClass -= 1;
	};
});