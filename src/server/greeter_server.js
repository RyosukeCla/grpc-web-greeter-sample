const messages = require('./proto/helloworld_pb');
const services = require('./proto/helloworld_grpc_pb');

const grpc = require('grpc');

function sayHello(call, callback) {
  const reply = new messages.HelloReply();
  reply.setMessage('Hello ' + call.request.getName());
  callback(null, reply);
}

function main() {
  const server = new grpc.Server();

  server.addService(services.GreeterService, {
    sayHello
  })

  server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('listen node server on', '0.0.0.0:9090')
}

main();
