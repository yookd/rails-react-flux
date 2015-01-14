require([
  'react-with-addons',
  'react-router'
], function(React, ReactRouter) {

  'use strict';

  window.React = React;
  var Route           = ReactRouter.Route,
      HistoryLocation = ReactRouter.HistoryLocation,
      DefaultRoute    = ReactRouter.DefaultRoute;

  // var routes = (
  //   <Route name="" path="/" handler={  }>
  //     <Route name="" path="" handler={  } />
  //   </Route>
  // );

  // ReactRouter.run(routes, HistoryLocation, function(Handler) {
  //   React.render( <Handler />, document.getElementById('') );
  // });

});