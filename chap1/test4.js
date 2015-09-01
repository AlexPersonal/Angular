angular
		.module('myApp', [])
		.controller(
				'userCtrl',
				function($scope) {
					$scope.fName = '';
					$scope.lName = '';
					$scope.passw1 = '';
					$scope.passw2 = '';
					$scope.users = [ {
						id : 1,
						fName : 'Hege',
						lName : "Pege"
					}, {
						id : 2,
						fName : 'Kim',
						lName : "Pim"
					}, {
						id : 3,
						fName : 'Sal',
						lName : "Smith"
					}, {
						id : 4,
						fName : 'Jack',
						lName : "Jones"
					}, {
						id : 5,
						fName : 'John',
						lName : "Doe"
					}, {
						id : 6,
						fName : 'Peter',
						lName : "Pan"
					} ];
					$scope.edit = true;
					$scope.error = false;
					$scope.incomplete = false;
					$scope.seq = $scope.users.length;
					$scope.curId = 0;

					$scope.editUser = function(id) {
						if (id == 'new') {
							$scope.edit = true;
							$scope.incomplete = true;
							$scope.fName = '';
							$scope.lName = '';
							$scope.curId = 0;
						} else {
							$scope.edit = false;
							$scope.fName = $scope.users[id - 1].fName;
							$scope.lName = $scope.users[id - 1].lName;
							$scope.curId = id;
						}
					};

					$scope.$watch('passw1', function() {
						$scope.test();
					});
					$scope.$watch('passw2', function() {
						$scope.test();
					});
					$scope.$watch('fName', function() {
						$scope.test();
					});
					$scope.$watch('lName', function() {
						$scope.test();
					});

					$scope.test = function() {
						if ($scope.passw1 !== $scope.passw2) {
							$scope.error = true;
						} else {
							$scope.error = false;
						}
						$scope.incomplete = false;
						if ($scope.edit
								&& (!$scope.fName.length
										|| !$scope.lName.length
										|| !$scope.passw1.length || !$scope.passw2.length)) {
							$scope.incomplete = true;
						}
					};

					$scope.saveUser = function() {
						if ($scope.edit) {
							$scope.seq += 1;
							$scope.users.push({
								id : $scope.seq,
								fName : $scope.fName,
								lName : $scope.lName
							});
							$scope.fName = '';
							$scope.lName = '';
							$scope.passw1 = '';
							$scope.passw2 = '';
						} else {
							$scope.users[$scope.curId - 1].fName = $scope.fName;
							$scope.users[$scope.curId - 1].lName = $scope.lName;
						}
					}

				});
