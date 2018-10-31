PROTO_DIR=./src/proto
SHARED_DIR=./src/shared/proto
SERVER_DIR=./src/server/proto
WEB_DIR=./src/web/proto

# PROTOC_GEN_TS_PATH=/usr/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts
PROTOC_GEN_TS_PATH=/usr/bin/protoc-gen-ts

PROTOS="helloworld.proto"

grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:$SERVER_DIR \
    --grpc_out=$SERVER_DIR \
    --plugin=protoc-gen-grpc=/usr/bin/grpc_tools_node_protoc_plugin \
    -I=$PROTO_DIR $PROTOS

protoc \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
    --ts_out=$SERVER_DIR \
    -I=$PROTO_DIR $PROTOS

# protoc \
#     --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#     --js_out="import_style=commonjs,binary:${SHARED_DIR}" \
#     --ts_out="${SHARED_DIR}" \
#     -I=$PROTO_DIR echo.proto

# protoc -I=$PROTO_DIR echo.proto \
#   --js_out=import_style=commonjs:$GEN_DIR \
#   --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$GEN_DIR \

grpc_tools_node_protoc -I=$PROTO_DIR $PROTOS \
  --js_out=import_style=commonjs,binary:$WEB_DIR \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$WEB_DIR \
  --grpc_out==import_style=commonjs+dts:$WEB_DIR \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
