'use strict';

// Requires meanio
var mean = require('meanio');

// Creates and serves mean application
mean.serve({ /*options placeholder*/ }, function(app, config) {
  console.log('MEAN app started on port ' + config.http.port + ' (' + process.env.NODE_ENV + ')');
  if(config.https && config.https.port){
    console.log('MEAN secure app started on port ' + config.https.port + ' (' + process.env.NODE_ENV + ')');
  }
});
