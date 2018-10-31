import * as grpcWeb from 'grpc-web';
import {
  HelloReply,
  HelloRequest} from './helloworld_pb';

export class GreeterClient {
  constructor (hostname: string,
               credentials: {},
               options: { [s: string]: {}; });

  sayHello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: HelloReply) => void
  ): grpcWeb.ClientReadableStream;

}

