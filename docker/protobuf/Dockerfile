FROM ubuntu:16.04

ARG MAKEFLAGS=-j8

RUN apt-get update && apt-get install -y \
  autoconf \
  automake \
  build-essential \
  curl \
  git \
  default-jdk \
  default-jre \
  libtool \
  libpcre3-dev \
  libssl-dev \
  make \
  nginx \
  zip

# install node 10.x
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  apt-get install -y nodejs

# install grpc web
RUN git clone https://github.com/grpc/grpc-web /github/grpc-web-base

RUN cd /github/grpc-web-base && \
  ./scripts/init_submodules.sh

RUN cd /github/grpc-web-base/third_party/grpc && \
  make && make install

RUN cd /github/grpc-web-base/third_party/grpc/third_party/protobuf && \
  make install

RUN cd /github/grpc-web-base && \
  make install-plugin

RUN cd /github/grpc-web-base/packages/grpc-web && \
  npm install && \
  npm run build && \
  npm link

# install grpc for node
RUN npm i -g grpc-tools --unsafe-perm
# RUN npm i -g ts-protoc-gen --unsafe-perm
RUN npm i -g grpc_tools_node_protoc_ts --unsafe-perm
