(function () {

  /**
   * Register error handler for ui-router state not found errors
   *
   * This catches situations where the toState is not defined
   */
  function registerErrorHandler($rootScope) {

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

      // ADD CUSTOM LOGIC HERE
      // event.preventDefault();
    });

  }

  // Inject dependencies;
  registerErrorHandler.$inject = ['$rootScope'];

  // Export
  angular.module('app')
    .run(registerErrorHandler);

})();
