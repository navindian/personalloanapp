angular.module('ABCBank', []).config(
		function($routeProvider//, $locationProvider
				) {
			//$locationProvider.html5Mode(true);
			$routeProvider.when('/home', {
				controller : 'homeCtrl',
				templateUrl : 'html/home.html'
			}).when('/edit/:id', {
				controller : 'EditCtrl',
				templateUrl : 'partials/edit.html'
			}).when('/add', {
				controller : 'AddCtrl',
				templateUrl : 'partials/edit.html'
			}).when('/personalDetails', {
				controller : 'personalCtrl',
				templateUrl : 'html/personalDetails.html'
			}).when('/contactDetails', {
				controller : 'contactsCtrl',
				templateUrl : 'html/contactsDetails.html'
			}).when('/empDetails', {
				controller : 'employmentCtrl',
				templateUrl : 'html/employmentDetails.html'
			}).when('/financialDetails', {
				controller : 'financialCtrl',
				templateUrl : 'html/financialDetails.html'
			}).when('/reviewSubmit', {
				controller : 'reviewSubmitCtrl',
				templateUrl : 'html/reviewAndSubmit.html'
			}).when('/', {
				controller : 'homeCtrl',
				templateUrl : 'html/home.html'
			}).otherwise( {
				redirectTo : '/'			})
		})

function AppCtrl($scope) {
	/*$scope.persons = [ {
		name : "abc",
		description : 'TA'
	}, {
		name : "hyddd",
		description : 'TA'
	}, {
		name : "jjsdjs",
		description : 'TA'
	},
	{
		name : "asdds",
		description : 'sh'
	}]
	*/
	$scope.checkEdit=function(){
		 return true;
		};
	$scope.checkNextBack=function(){
			 return false;
			};

$scope.customer={};
}
function EditCtrl($scope, $location,$routeParams) {
	// $scope.person={name:" ",description:" "}
	$scope.person=$scope.persons[$routeParams.id];
	$scope.save = function() {
				$location.path('/');
	}
}

function AddCtrl($scope, $location) {
	//$scope.person={name:" ",description:" "}

	$scope.save = function() {
		$scope.persons.push($scope.person);
		$location.path('/');
	}
}
function homeCtrl($scope,$location)
{
$scope.next=function()
{
	$location.path('/personalDetails');
}
$scope.back = function() {
	$location.path('/');
}

}

function personalCtrl($scope, $location) {
	
	$scope.next = function() {
		
		$location.path('/contactDetails');
	}
	$scope.back = function() {
		$location.path('/home');
	}
	
}
function contactsCtrl($scope, $location,$window) {
	//$window.alert(' Inside contactsCtrl !!');
	$scope.next = function() {
		$location.path('/empDetails');
	}
	$scope.back = function() {
		$location.path('/personalDetails');
	}
	
	
	
}
function employmentCtrl($scope, $location) {
	
	$scope.next = function() {
		$location.path('/financialDetails');
	}
	$scope.back = function() {
		$location.path('/contactDetails');
	}
	
}

function financialCtrl($scope,$location)
{
	$scope.next=function()
	{
		$location.path('/reviewSubmit');
	}
	$scope.back=function()
	{
		$location.path('/empDetails');
	}

}

function reviewSubmitCtrl($scope, $location,$window,$http) {
	/*$window.alert(' Inside reviewSubmitCtrl !!');*/
	$scope.edit = function() {
		$location.path('/');
	}
	$scope.submit = function() {
		$window.alert('form has submitted'+$scope.customer);
		var res=$http.post('/AngularjsPoc/rest/customer/saveCustomerPersonal',$scope.customer);
		res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
		$location.path('/');
	}
	$scope.checkEdit=function(){
		 return false;
		}
	$scope.checkNextBack=function(){
		 return true;
		};
		$scope.edit = function() {
			$window.alert("Edit Personal details");
			//$location.path('/home');
			document.getElementById("reviewFieldSet").disabled = false;
			//document.getElementById("personalFields").enabled = true;
			
		}
}



