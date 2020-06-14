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


var github_com_kodesmil_ks$model_group_pb = require('../../../github.com/kodesmil/ks-model/group_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var protoc$gen$validate_validate_validate_pb = require('../../../protoc-gen-validate/validate/validate_pb.js')

var github_com_infobloxopen_protoc$gen$gorm_options_gorm_pb = require('../../../github.com/infobloxopen/protoc-gen-gorm/options/gorm_pb.js')

var github_com_infobloxopen_protoc$gen$gorm_types_types_pb = require('../../../github.com/infobloxopen/protoc-gen-gorm/types/types_pb.js')

var github_com_infobloxopen_atlas$app$toolkit_query_collection_operators_pb = require('../../../github.com/infobloxopen/atlas-app-toolkit/query/collection_operators_pb.js')

var github_com_infobloxopen_atlas$app$toolkit_rpc_resource_resource_pb = require('../../../github.com/infobloxopen/atlas-app-toolkit/rpc/resource/resource_pb.js')
const proto = {};
proto.model = require('./profile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.ProfilesClient =
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
proto.model.ProfilesPromiseClient =
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
 *   !proto.model.CreateProfileRequest,
 *   !proto.model.CreateProfileResponse>}
 */
const methodDescriptor_Profiles_Create = new grpc.web.MethodDescriptor(
  '/model.Profiles/Create',
  grpc.web.MethodType.UNARY,
  proto.model.CreateProfileRequest,
  proto.model.CreateProfileResponse,
  /**
   * @param {!proto.model.CreateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreateProfileRequest,
 *   !proto.model.CreateProfileResponse>}
 */
const methodInfo_Profiles_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreateProfileResponse,
  /**
   * @param {!proto.model.CreateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateProfileResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreateProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreateProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.ProfilesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Profiles/Create',
      request,
      metadata || {},
      methodDescriptor_Profiles_Create,
      callback);
};


/**
 * @param {!proto.model.CreateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreateProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.model.ProfilesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Profiles/Create',
      request,
      metadata || {},
      methodDescriptor_Profiles_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ReadProfileRequest,
 *   !proto.model.ReadProfileResponse>}
 */
const methodDescriptor_Profiles_Read = new grpc.web.MethodDescriptor(
  '/model.Profiles/Read',
  grpc.web.MethodType.UNARY,
  proto.model.ReadProfileRequest,
  proto.model.ReadProfileResponse,
  /**
   * @param {!proto.model.ReadProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadProfileRequest,
 *   !proto.model.ReadProfileResponse>}
 */
const methodInfo_Profiles_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadProfileResponse,
  /**
   * @param {!proto.model.ReadProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadProfileResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.ProfilesClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Profiles/Read',
      request,
      metadata || {},
      methodDescriptor_Profiles_Read,
      callback);
};


/**
 * @param {!proto.model.ReadProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.model.ProfilesPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Profiles/Read',
      request,
      metadata || {},
      methodDescriptor_Profiles_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.UpdateProfileRequest,
 *   !proto.model.UpdateProfileResponse>}
 */
const methodDescriptor_Profiles_Update = new grpc.web.MethodDescriptor(
  '/model.Profiles/Update',
  grpc.web.MethodType.UNARY,
  proto.model.UpdateProfileRequest,
  proto.model.UpdateProfileResponse,
  /**
   * @param {!proto.model.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.UpdateProfileRequest,
 *   !proto.model.UpdateProfileResponse>}
 */
const methodInfo_Profiles_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.UpdateProfileResponse,
  /**
   * @param {!proto.model.UpdateProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateProfileResponse.deserializeBinary
);


/**
 * @param {!proto.model.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.UpdateProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.UpdateProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.ProfilesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Profiles/Update',
      request,
      metadata || {},
      methodDescriptor_Profiles_Update,
      callback);
};


/**
 * @param {!proto.model.UpdateProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.UpdateProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.model.ProfilesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Profiles/Update',
      request,
      metadata || {},
      methodDescriptor_Profiles_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.DeleteProfileRequest,
 *   !proto.model.DeleteProfileResponse>}
 */
const methodDescriptor_Profiles_Delete = new grpc.web.MethodDescriptor(
  '/model.Profiles/Delete',
  grpc.web.MethodType.UNARY,
  proto.model.DeleteProfileRequest,
  proto.model.DeleteProfileResponse,
  /**
   * @param {!proto.model.DeleteProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.DeleteProfileRequest,
 *   !proto.model.DeleteProfileResponse>}
 */
const methodInfo_Profiles_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.DeleteProfileResponse,
  /**
   * @param {!proto.model.DeleteProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteProfileResponse.deserializeBinary
);


/**
 * @param {!proto.model.DeleteProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.DeleteProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.DeleteProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.ProfilesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Profiles/Delete',
      request,
      metadata || {},
      methodDescriptor_Profiles_Delete,
      callback);
};


/**
 * @param {!proto.model.DeleteProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.DeleteProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.model.ProfilesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Profiles/Delete',
      request,
      metadata || {},
      methodDescriptor_Profiles_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ListProfileRequest,
 *   !proto.model.ListProfileResponse>}
 */
const methodDescriptor_Profiles_List = new grpc.web.MethodDescriptor(
  '/model.Profiles/List',
  grpc.web.MethodType.UNARY,
  proto.model.ListProfileRequest,
  proto.model.ListProfileResponse,
  /**
   * @param {!proto.model.ListProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListProfileResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListProfileRequest,
 *   !proto.model.ListProfileResponse>}
 */
const methodInfo_Profiles_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListProfileResponse,
  /**
   * @param {!proto.model.ListProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListProfileResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListProfileResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListProfileResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.ProfilesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Profiles/List',
      request,
      metadata || {},
      methodDescriptor_Profiles_List,
      callback);
};


/**
 * @param {!proto.model.ListProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListProfileResponse>}
 *     A native promise that resolves to the response
 */
proto.model.ProfilesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Profiles/List',
      request,
      metadata || {},
      methodDescriptor_Profiles_List);
};


module.exports = proto.model;

