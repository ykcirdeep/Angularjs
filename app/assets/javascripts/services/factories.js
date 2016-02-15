app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/:resource', {
    templateUrl: 'templates/tests.html',
    controller: 'firstController',
    routeName: 'test'
    }).
    otherwise('/tests');
}]);

app.config([ "$resourceProvider","$httpProvider", function($resourceProvider, $httpProvider) {

  $resourceProvider.defaults.actions['update'] = { method: 'PUT', params: { id: '@id' }, isArray: false };
  $resourceProvider.defaults.actions['test'] = { url: 'learningmongos/test', method: 'get', isArray: true };
  $resourceProvider.defaults.actions['resetWinner'] = { url: 'learningmongos/resetWinner', method: 'get', isArray: true };
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

}]);

app.factory('Learningmongo', ['$resource', function($resource){
  return $resource("/learningmongos/:id", {id: "@id"});
}]);