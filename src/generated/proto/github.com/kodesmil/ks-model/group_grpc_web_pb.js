/**
 * @fileoverview gRPC-Web generated client stub for model
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var protoc$gen$validate_validate_validate_pb = require('../../../protoc-gen-validate/validate/validate_pb.js')

var github_com_infobloxopen_protoc$gen$gorm_options_gorm_pb = require('../../../github.com/infobloxopen/protoc-gen-gorm/options/gorm_pb.js')

var github_com_infobloxopen_protoc$gen$gorm_types_types_pb = require('../../../github.com/infobloxopen/protoc-gen-gorm/types/types_pb.js')

var github_com_infobloxopen_atlas$app$toolkit_query_collection_operators_pb = require('../../../github.com/infobloxopen/atlas-app-toolkit/query/collection_operators_pb.js')

var github_com_infobloxopen_atlas$app$toolkit_rpc_resource_resource_pb = require('../../../github.com/infobloxopen/atlas-app-toolkit/rpc/resource/resource_pb.js')
const proto = {};
proto.model = require('./group_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.GroupsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.GroupsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.CreateGroupRequest,
 *   !proto.model.CreateGroupResponse>}
 */
const methodDescriptor_Groups_Create = new grpc.web.MethodDescriptor(
  '/model.Groups/Create',
  grpc.web.MethodType.UNARY,
  proto.model.CreateGroupRequest,
  proto.model.CreateGroupResponse,
  /**
   * @param {!proto.model.CreateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreateGroupRequest,
 *   !proto.model.CreateGroupResponse>}
 */
const methodInfo_Groups_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreateGroupResponse,
  /**
   * @param {!proto.model.CreateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateGroupResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreateGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreateGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.GroupsClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Groups/Create',
      request,
      metadata || {},
      methodDescriptor_Groups_Create,
      callback);
};


/**
 * @param {!proto.model.CreateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreateGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.model.GroupsPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Groups/Create',
      request,
      metadata || {},
      methodDescriptor_Groups_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ReadGroupRequest,
 *   !proto.model.ReadGroupResponse>}
 */
const methodDescriptor_Groups_Read = new grpc.web.MethodDescriptor(
  '/model.Groups/Read',
  grpc.web.MethodType.UNARY,
  proto.model.ReadGroupRequest,
  proto.model.ReadGroupResponse,
  /**
   * @param {!proto.model.ReadGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadGroupRequest,
 *   !proto.model.ReadGroupResponse>}
 */
const methodInfo_Groups_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadGroupResponse,
  /**
   * @param {!proto.model.ReadGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadGroupResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.GroupsClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Groups/Read',
      request,
      metadata || {},
      methodDescriptor_Groups_Read,
      callback);
};


/**
 * @param {!proto.model.ReadGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.model.GroupsPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Groups/Read',
      request,
      metadata || {},
      methodDescriptor_Groups_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.UpdateGroupRequest,
 *   !proto.model.UpdateGroupResponse>}
 */
const methodDescriptor_Groups_Update = new grpc.web.MethodDescriptor(
  '/model.Groups/Update',
  grpc.web.MethodType.UNARY,
  proto.model.UpdateGroupRequest,
  proto.model.UpdateGroupResponse,
  /**
   * @param {!proto.model.UpdateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.UpdateGroupRequest,
 *   !proto.model.UpdateGroupResponse>}
 */
const methodInfo_Groups_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.UpdateGroupResponse,
  /**
   * @param {!proto.model.UpdateGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateGroupResponse.deserializeBinary
);


/**
 * @param {!proto.model.UpdateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.UpdateGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.UpdateGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.GroupsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Groups/Update',
      request,
      metadata || {},
      methodDescriptor_Groups_Update,
      callback);
};


/**
 * @param {!proto.model.UpdateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.UpdateGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.model.GroupsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Groups/Update',
      request,
      metadata || {},
      methodDescriptor_Groups_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.DeleteGroupRequest,
 *   !proto.model.DeleteGroupResponse>}
 */
const methodDescriptor_Groups_Delete = new grpc.web.MethodDescriptor(
  '/model.Groups/Delete',
  grpc.web.MethodType.UNARY,
  proto.model.DeleteGroupRequest,
  proto.model.DeleteGroupResponse,
  /**
   * @param {!proto.model.DeleteGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.DeleteGroupRequest,
 *   !proto.model.DeleteGroupResponse>}
 */
const methodInfo_Groups_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.DeleteGroupResponse,
  /**
   * @param {!proto.model.DeleteGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteGroupResponse.deserializeBinary
);


/**
 * @param {!proto.model.DeleteGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.DeleteGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.DeleteGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.GroupsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Groups/Delete',
      request,
      metadata || {},
      methodDescriptor_Groups_Delete,
      callback);
};


/**
 * @param {!proto.model.DeleteGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.DeleteGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.model.GroupsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Groups/Delete',
      request,
      metadata || {},
      methodDescriptor_Groups_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ListGroupRequest,
 *   !proto.model.ListGroupResponse>}
 */
const methodDescriptor_Groups_List = new grpc.web.MethodDescriptor(
  '/model.Groups/List',
  grpc.web.MethodType.UNARY,
  proto.model.ListGroupRequest,
  proto.model.ListGroupResponse,
  /**
   * @param {!proto.model.ListGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListGroupRequest,
 *   !proto.model.ListGroupResponse>}
 */
const methodInfo_Groups_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListGroupResponse,
  /**
   * @param {!proto.model.ListGroupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListGroupResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.GroupsClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Groups/List',
      request,
      metadata || {},
      methodDescriptor_Groups_List,
      callback);
};


/**
 * @param {!proto.model.ListGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.model.GroupsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Groups/List',
      request,
      metadata || {},
      methodDescriptor_Groups_List);
};


module.exports = proto.model;

