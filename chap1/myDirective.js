// JavaScript Document

var app = angular.module("myApp", []);

app.directive("myDirective", function() {
	return {
		restrict: 'A',
		scope: true
	};
});
app.directive("myInheritScopeDirective1", function() {
	return {
		restrict: 'A',
		scope: true,
		template: "<div>Inside myInheritScopeDirective, true: {{myProperty2}}</div>"
	};
});
app.directive("myInheritScopeDirective2", function() {
	return {
		restrict: 'A',
		scope: true,
		template: "<div>Inside myInheritScopeDirective, true: {{myProperty2}}</div>"
	};
});
app.directive("myInheritScopeDirective3", function() {
	return {
		restrict: 'A',
		scope: false,
		template: "<div>Inside myInheritScopeDirective, false: {{myProperty2}}</div>"
	};
});
app.directive("myDirective1", function() {
	return {
		restrict: 'A',
		scope: {},
		priority: 100,
		template: "<div>Inside myDirective, {}: {{myProperty2}}</div>"
	};
});
app.directive("myDirective2", function() {
	return {
		restrict: 'A',
		scope: true,
		priority: 100,
		template: "<div>Inside myDirective2: {{myProperty3}}</div>"
	};
});
app.directive("myDirective3", function() {
	return {
		restrict: 'A',
		scope: {},
		priority: 101,
		template: "<div>Inside myDirective3: {{myProperty3}}</div>"
	};
});

app.controller("myController1", function($scope) {
	
});
app.controller("myController2", function($scope) {
	
});
app.controller("myController3", function($scope) {
	
});
app.controller("myController4", function($scope) {
	
});
app.controller("myController5", function($scope) {
	
});