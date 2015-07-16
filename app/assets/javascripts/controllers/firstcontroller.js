app.controller('firstController', ['$scope', '$injector', '$routeParams',  function( $scope, $injector, $routeParams ){
 
  var Factory = $injector.get('Learningmongo');
  Factory.query({}, function(response){
    $scope.entries = response;
    alert(jQuery.isEmptyObject(response));
    if (response)
    $scope.columns = $( Object.keys(response[0]) ).not( ['_id', 'created_at', 'updated_at'] ).get();
  });


  $scope.addEntry = function(){
    Factory.save({entry: {name: $scope.name, winner: false}}, function(response){
      $scope.entries.push(response);
      $scope.name = '';
    });
  }
  $scope.deleteEntry = function(entry,index){
    Factory.delete({id: entry._id}, function(response){
      $scope.entries.splice(index,1);   
      
    });
  }
  $scope.test = function(){
    Factory.test(function(response){
      alert(response);
    });
  }
  $scope.pickWinner = function(){
    
      var pool=[];
      angular.forEach($scope.entries, function(entry,key) {

                      if(!entry.winner)
                      { pool.push(entry);}
                          });


      if (pool.length >0)
      {
      entry = pool[Math.floor(Math.random() * pool.length)];
      Factory.update({id: entry._id,entry:{name: entry.name,winner: true}},function(response){
        entry.winner=response.entry.winner;
        $scope.lastWinner=entry;
      
      });
      
      }
    }
}]);