var myapp = angular.module("myapp",[]);

function mycont($scope,$http){

$scope.formData = {};

$http.get('/api/todos')
  .success(function(data){
    $scope.students = data;
  })
  .error(function(data){
    console.log("Error:"+data);
  });


$scope.createStudent = function(){

  $http.post('/api/todos',$scope.formData)
    .success(function(data){
      $scope.formData = {};
      $scope.students = data;
      console.log(data);
    })
    .error(function(data){
      console.log("Error:"+data);
    });
};


$scope.deleteStudent = function(sid){
  $http.delete('/api/todos/'+sid)
    .success(function(data){
      $scope.students = data;
      console.log(data);
    })
    .error(function(data){
      console.log("Error:"+data);
    });
};

}
