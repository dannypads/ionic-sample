var theList =   [

					{
						name:'Danny Uribe',
						email:'dannypads1@gmail.com',
						country : 'Ecuador'
					},
					{
						name:'Andres Perez',
						email:'perez@gmail.com',
						country : 'Perú'
					}
				];

angular.module('starter.controllers',[])
.controller('indexCtrl',function($scope,$state){


	$scope.list = theList;

	$scope.new = function(){

		$state.go('new');
	}

	$scope.edit = function(index){

		$state.transitionTo('edit', { id:index }, { reload: true });
	}	

})

.controller('newCtrl',function($scope,$state){


	$scope.submit = function(record){

		temp = {

			name: record.name,
			email: record.email,
			country : record.country

		};

		theList.push(temp);
		$state.go('index');
	}

})

.controller('editCtrl',function($scope,$state,$stateParams){

		var id = $stateParams.id;
		

		$scope.record = { name: theList[id]['name'], email: theList[id]['email'], country: theList[id]['country']};


		$scope.submit = function(record){

			theList[id]['name'] =  record.name;
			theList[id]['email'] =  record.email;
			theList[id]['country'] =  record.country;

			$state.go('index');
		}		

})