angular.module('usersControllers',[])
.controller('addController',function($http){
	this.enter=function(addData){
		console.log('Submitted');
		console.log(this.addData);
		$http.post('/api/sports',this.addData);
	};
})
.controller('displayController',function($scope,$http){
			$scope.Sport = function(){
		$http.get('/api/home').then(function(response){
			$scope.sports = response.data;
		});			
}

})
.controller('sportController',function($scope,$http){
	$scope.Sport=function(){
		$http.get('/api/sports').then(function(response){
			$scope.sports =response.data;
		});
	}
})


.controller('idController',function($scope,$http,$routeParams){
	console.log('idController is running');
	$scope.Single = function(){
		var id = $routeParams.id;
		$http.get('/api/details/'+id).then(function(response){
			$scope.sport =response.data;
		});
	}
	console.log('idController is running');
})
.controller('editController',function($scope,$http,$routeParams){
	console.log("edit controller is running");
	$scope.Edit = function(){
		var id = $routeParams.id;
		$http.put('/api/edit/'+id,$scope.sport)
	}
})
.controller('worldController',function($scope,$http){
	console.log("worldController")
	$scope.Sport=function(){
		$http.get('/api/world').then(function(response){
			$scope.sports =response.data;
		})
	}
})
.controller('lifestyleController',function($scope,$http){
	console.log("lifestyleController");
	
	$scope.Sport=function(){
		$http.get('/api/lifestyle').then(function(response){
			$scope.sports =response.data;
		})
	}
});
/*.controller('deleteController',function($scope,$http,$routeParams){
	console.log("deleteController is running");
	$scope.Destroy=function(id){
		$http.delete('/api/delete/'+id).then(function(response){
			window.location.href="/";
		});
	}
});*/

