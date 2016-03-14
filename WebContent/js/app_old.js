
var ABCBank=angular.module('ABCBank', []).config(
		function($routeProvider//, $locationProvider
				) {
			//$locationProvider.html5Mode(true);
			$routeProvider.when('/home', {
				controller : 'homeCtrl',
				templateUrl : 'html/home.html'
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

ABCBank.controller('AppCtrl',function($scope,$window,$route) {
	
	/*$scope.checkEdit=function(){
		 return true;
		};*/
	$scope.checkNextBack=function(){
			 return false;
			};
	$scope.checkSave=function(){
				return true;
			}

$scope.customer={};
$scope.countries = [ {
	'name' : 'India'
		/*}, {
			'name' : 'US'
		}, {
			'name' : 'Australia'
		*/} ];
		$scope.States = [ {
			'name' : 'Telangana'
		/*}, {
			'name' : 'Andhrapradesh'
		}, {
			'name' : 'Tamilnade'
		*/} ];
		$scope.cities = [ {
			'name' : 'Hyderabad'
		/*}, {
			'name' : 'Vizag'*/
		}, {
			'name' : 'Khammam'
		} ];

$scope.edit = function() {
	$window.alert("Edit  details");
	//$location.path('/home');
	document.getElementById("reviewFieldSet").disabled = false;
	//document.getElementById("personalFields").enabled = true;
	
}
$scope.save = function() {
	document.getElementById("reviewFieldSet").disabled = true;
	$window.alert("Save  details");
}
});
/*function EditCtrl($scope, $location,$routeParams) {
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
}*/
ABCBank.controller('homeCtrl',function($scope,$location)
{
$scope.next=function()
{
	$location.path('/personalDetails');
}
/*$scope.back = function() {
	$location.path('/');
}*/

$('#home').addClass('btn btn-info active');
$('#personalDetails').removeClass('btn btn-info active');
$('#contactDetails').removeClass('btn btn-info active');
$('#employmentDetails').removeClass('btn btn-info active');
$('#financialDetails').removeClass('btn btn-info active');
$('#review').removeClass('btn btn-info active');

});

ABCBank.controller('personalCtrl',function($scope, $location,$window) {
	
	$scope.next = function() {
		
		$location.path('/contactDetails');
	}
	$scope.back = function() {
		$location.path('/home');
	}
	$scope.checkEdit=function(){
		 return true;
		};
		
		
		$('#home').removeClass('btn btn-info active');
		$('#personalDetails').addClass('btn btn-info active');
		$('#contactDetails').removeClass('btn btn-info active');
		$('#employmentDetails').removeClass('btn btn-info active');
		$('#financialDetails').removeClass('btn btn-info active');
		$('#review').removeClass('btn btn-info active');
		
			
});
ABCBank.controller('contactsCtrl',function($scope, $location,$window) {
	//$window.alert(' Inside contactsCtrl !!');
	$scope.next = function() {
		$location.path('/empDetails');
	}
	$scope.back = function() {
		$location.path('/personalDetails');
	}
	$scope.checkEdit=function(){
		 return true;
		};
		
		
		$('#home').removeClass('btn btn-info active');
		$('#personalDetails').removeClass('btn btn-info active');
		$('#contactDetails').addClass('btn btn-info active');
		$('#employmentDetails').removeClass('btn btn-info active');
		$('#financialDetails').removeClass('btn btn-info active');
		$('#review').removeClass('btn btn-info active');
		
});
ABCBank.controller('employmentCtrl',function($scope, $location) {
	
	$scope.next = function() {
		$location.path('/financialDetails');
	}
	$scope.back = function() {
		$location.path('/contactDetails');
	}
	$scope.checkEdit=function(){
		 return true;
		};
		
		$('#home').removeClass('btn btn-info active');
		$('#personalDetails').removeClass('btn btn-info active');
		$('#contactDetails').removeClass('btn btn-info active');
		$('#employmentDetails').addClass('btn btn-info active');
		$('#financialDetails').removeClass('btn btn-info active');
		$('#review').removeClass('btn btn-info active');
	
});

ABCBank.controller('financialCtrl',function($scope,$location)
{
	$scope.next=function()
	{
		$location.path('/reviewSubmit');
	}
	$scope.back=function()
	{
		$location.path('/empDetails');
	}
	$scope.checkEdit=function(){
		 return true;
		};
		
		
		$('#home').removeClass('btn btn-info active');
		$('#personalDetails').removeClass('btn btn-info active');
		$('#contactDetails').removeClass('btn btn-info active');
		$('#employmentDetails').removeClass('btn btn-info active');
		$('#financialDetails').addClass('btn btn-info active');
		$('#review').removeClass('btn btn-info active');

});

ABCBank.controller('reviewSubmitCtrl',function($scope, $location,$window,$http) {
	/*$window.alert(' Inside reviewSubmitCtrl !!');*/
	/*$scope.edit = function() {
		$location.path('/');
	}*/
	$scope.submit = function() {
		$window.alert('form has submitted');
		//var res=$http.post('/AngularjsPoc/rest/getCustomerPersonal',$scope.customer);
		var res=$http.get('/AngularjsPoc/rest/test');
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
		//style="display:none";
		//this.Label1.Style.Add("display", "none ");
		//document.getElementsByClassName("mandatory").Style.Add("display", "none");
		 return true;
		};
	$scope.checkSave=function(){
		return false;
	}
		/*$scope.edit = function() {
			$window.alert("Edit  details");
			//$location.path('/home');
			//document.getElementById("reviewFieldSet").disabled = false;
			//document.getElementById("personalFields").enabled = true;
			
		}*/
	
	$('#home').removeClass('btn btn-info active');
	$('#personalDetails').removeClass('btn btn-info active');
	$('#contactDetails').removeClass('btn btn-info active');
	$('#employmentDetails').removeClass('btn btn-info active');
	$('#financialDetails').removeClass('btn btn-info active');
	$('#review').addClass('btn btn-info active');
	
});





