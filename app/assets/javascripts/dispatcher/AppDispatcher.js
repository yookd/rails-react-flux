define([
  'flux',
  'object-assign'
], function(Flux) {

  var AppDispatcher = objectAssign(Flux.dispatcher, {
    handleViewAction: function(action) {
      this.dispatch({
        source: 'VIEW_ACTION',
        action: action
      });
    }
  });

  return AppDispatcher;

});