obj.controller("Mathcontroller", function($scope,MathService){
	$scope.x="";
	$scope.y="";
	$scope.result="";
	$scope.fn_sum=function(){
		var a = parseInt($scope.x);
		var b = parseInt($scope.y);
		$scope.result=MathService.sum(a,b);
		
	};
	
	
	
	
	
});

