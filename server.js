// require('babel-core').transform('code');
'use strict';

require('dotenv').config();

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/api',
  handler: function(request, reply) {
    return reply('yayaya');
  }
})

// http://dev.are.na/oauth/authorize
//    ?client_id=YOUR_CLIENT_ID
//    &redirect_uri=YOUR_CALLBACK_URL
//    &response_type=code

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
