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
proto.model = require('./journal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.JournalClient =
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
proto.model.JournalPromiseClient =
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
 *   !proto.model.CreateJournalEntryRequest,
 *   !proto.model.CreateJournalEntryResponse>}
 */
const methodDescriptor_Journal_CreateJournalEntry = new grpc.web.MethodDescriptor(
  '/model.Journal/CreateJournalEntry',
  grpc.web.MethodType.UNARY,
  proto.model.CreateJournalEntryRequest,
  proto.model.CreateJournalEntryResponse,
  /**
   * @param {!proto.model.CreateJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateJournalEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreateJournalEntryRequest,
 *   !proto.model.CreateJournalEntryResponse>}
 */
const methodInfo_Journal_CreateJournalEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreateJournalEntryResponse,
  /**
   * @param {!proto.model.CreateJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateJournalEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreateJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreateJournalEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreateJournalEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.JournalClient.prototype.createJournalEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Journal/CreateJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_CreateJournalEntry,
      callback);
};


/**
 * @param {!proto.model.CreateJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreateJournalEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.JournalPromiseClient.prototype.createJournalEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Journal/CreateJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_CreateJournalEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ReadJournalEntryRequest,
 *   !proto.model.ReadJournalEntryResponse>}
 */
const methodDescriptor_Journal_ReadJournalEntry = new grpc.web.MethodDescriptor(
  '/model.Journal/ReadJournalEntry',
  grpc.web.MethodType.UNARY,
  proto.model.ReadJournalEntryRequest,
  proto.model.ReadJournalEntryResponse,
  /**
   * @param {!proto.model.ReadJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadJournalEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadJournalEntryRequest,
 *   !proto.model.ReadJournalEntryResponse>}
 */
const methodInfo_Journal_ReadJournalEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadJournalEntryResponse,
  /**
   * @param {!proto.model.ReadJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadJournalEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadJournalEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadJournalEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.JournalClient.prototype.readJournalEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Journal/ReadJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_ReadJournalEntry,
      callback);
};


/**
 * @param {!proto.model.ReadJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadJournalEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.JournalPromiseClient.prototype.readJournalEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Journal/ReadJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_ReadJournalEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.UpdateJournalEntryRequest,
 *   !proto.model.UpdateJournalEntryResponse>}
 */
const methodDescriptor_Journal_UpdateJournalEntry = new grpc.web.MethodDescriptor(
  '/model.Journal/UpdateJournalEntry',
  grpc.web.MethodType.UNARY,
  proto.model.UpdateJournalEntryRequest,
  proto.model.UpdateJournalEntryResponse,
  /**
   * @param {!proto.model.UpdateJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateJournalEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.UpdateJournalEntryRequest,
 *   !proto.model.UpdateJournalEntryResponse>}
 */
const methodInfo_Journal_UpdateJournalEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.UpdateJournalEntryResponse,
  /**
   * @param {!proto.model.UpdateJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateJournalEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.UpdateJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.UpdateJournalEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.UpdateJournalEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.JournalClient.prototype.updateJournalEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Journal/UpdateJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_UpdateJournalEntry,
      callback);
};


/**
 * @param {!proto.model.UpdateJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.UpdateJournalEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.JournalPromiseClient.prototype.updateJournalEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Journal/UpdateJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_UpdateJournalEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.DeleteJournalEntryRequest,
 *   !proto.model.DeleteJournalEntryResponse>}
 */
const methodDescriptor_Journal_DeleteJournalEntry = new grpc.web.MethodDescriptor(
  '/model.Journal/DeleteJournalEntry',
  grpc.web.MethodType.UNARY,
  proto.model.DeleteJournalEntryRequest,
  proto.model.DeleteJournalEntryResponse,
  /**
   * @param {!proto.model.DeleteJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteJournalEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.DeleteJournalEntryRequest,
 *   !proto.model.DeleteJournalEntryResponse>}
 */
const methodInfo_Journal_DeleteJournalEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.DeleteJournalEntryResponse,
  /**
   * @param {!proto.model.DeleteJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteJournalEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.DeleteJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.DeleteJournalEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.DeleteJournalEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.JournalClient.prototype.deleteJournalEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Journal/DeleteJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_DeleteJournalEntry,
      callback);
};


/**
 * @param {!proto.model.DeleteJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.DeleteJournalEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.JournalPromiseClient.prototype.deleteJournalEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Journal/DeleteJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_DeleteJournalEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ListJournalEntryRequest,
 *   !proto.model.ListJournalEntryResponse>}
 */
const methodDescriptor_Journal_ListJournalEntry = new grpc.web.MethodDescriptor(
  '/model.Journal/ListJournalEntry',
  grpc.web.MethodType.UNARY,
  proto.model.ListJournalEntryRequest,
  proto.model.ListJournalEntryResponse,
  /**
   * @param {!proto.model.ListJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListJournalEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListJournalEntryRequest,
 *   !proto.model.ListJournalEntryResponse>}
 */
const methodInfo_Journal_ListJournalEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListJournalEntryResponse,
  /**
   * @param {!proto.model.ListJournalEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListJournalEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListJournalEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListJournalEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.JournalClient.prototype.listJournalEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Journal/ListJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_ListJournalEntry,
      callback);
};


/**
 * @param {!proto.model.ListJournalEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListJournalEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.JournalPromiseClient.prototype.listJournalEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Journal/ListJournalEntry',
      request,
      metadata || {},
      methodDescriptor_Journal_ListJournalEntry);
};


module.exports = proto.model;

