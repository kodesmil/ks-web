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
proto.model = require('./period_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.PeriodClient =
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
proto.model.PeriodPromiseClient =
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
 *   !proto.model.CreatePeriodDailyEntryRequest,
 *   !proto.model.CreatePeriodDailyEntryResponse>}
 */
const methodDescriptor_Period_CreatePeriodDailyEntry = new grpc.web.MethodDescriptor(
  '/model.Period/CreatePeriodDailyEntry',
  grpc.web.MethodType.UNARY,
  proto.model.CreatePeriodDailyEntryRequest,
  proto.model.CreatePeriodDailyEntryResponse,
  /**
   * @param {!proto.model.CreatePeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreatePeriodDailyEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreatePeriodDailyEntryRequest,
 *   !proto.model.CreatePeriodDailyEntryResponse>}
 */
const methodInfo_Period_CreatePeriodDailyEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreatePeriodDailyEntryResponse,
  /**
   * @param {!proto.model.CreatePeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreatePeriodDailyEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreatePeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreatePeriodDailyEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreatePeriodDailyEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.createPeriodDailyEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/CreatePeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_CreatePeriodDailyEntry,
      callback);
};


/**
 * @param {!proto.model.CreatePeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreatePeriodDailyEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.createPeriodDailyEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/CreatePeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_CreatePeriodDailyEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ReadPeriodDailyEntryRequest,
 *   !proto.model.ReadPeriodDailyEntryResponse>}
 */
const methodDescriptor_Period_ReadPeriodDailyEntry = new grpc.web.MethodDescriptor(
  '/model.Period/ReadPeriodDailyEntry',
  grpc.web.MethodType.UNARY,
  proto.model.ReadPeriodDailyEntryRequest,
  proto.model.ReadPeriodDailyEntryResponse,
  /**
   * @param {!proto.model.ReadPeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadPeriodDailyEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadPeriodDailyEntryRequest,
 *   !proto.model.ReadPeriodDailyEntryResponse>}
 */
const methodInfo_Period_ReadPeriodDailyEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadPeriodDailyEntryResponse,
  /**
   * @param {!proto.model.ReadPeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadPeriodDailyEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadPeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadPeriodDailyEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadPeriodDailyEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.readPeriodDailyEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/ReadPeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_ReadPeriodDailyEntry,
      callback);
};


/**
 * @param {!proto.model.ReadPeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadPeriodDailyEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.readPeriodDailyEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/ReadPeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_ReadPeriodDailyEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.UpdatePeriodDailyEntryRequest,
 *   !proto.model.UpdatePeriodDailyEntryResponse>}
 */
const methodDescriptor_Period_UpdatePeriodDailyEntry = new grpc.web.MethodDescriptor(
  '/model.Period/UpdatePeriodDailyEntry',
  grpc.web.MethodType.UNARY,
  proto.model.UpdatePeriodDailyEntryRequest,
  proto.model.UpdatePeriodDailyEntryResponse,
  /**
   * @param {!proto.model.UpdatePeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdatePeriodDailyEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.UpdatePeriodDailyEntryRequest,
 *   !proto.model.UpdatePeriodDailyEntryResponse>}
 */
const methodInfo_Period_UpdatePeriodDailyEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.UpdatePeriodDailyEntryResponse,
  /**
   * @param {!proto.model.UpdatePeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdatePeriodDailyEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.UpdatePeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.UpdatePeriodDailyEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.UpdatePeriodDailyEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.updatePeriodDailyEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/UpdatePeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_UpdatePeriodDailyEntry,
      callback);
};


/**
 * @param {!proto.model.UpdatePeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.UpdatePeriodDailyEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.updatePeriodDailyEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/UpdatePeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_UpdatePeriodDailyEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.DeletePeriodDailyEntryRequest,
 *   !proto.model.DeletePeriodDailyEntryResponse>}
 */
const methodDescriptor_Period_DeletePeriodDailyEntry = new grpc.web.MethodDescriptor(
  '/model.Period/DeletePeriodDailyEntry',
  grpc.web.MethodType.UNARY,
  proto.model.DeletePeriodDailyEntryRequest,
  proto.model.DeletePeriodDailyEntryResponse,
  /**
   * @param {!proto.model.DeletePeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeletePeriodDailyEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.DeletePeriodDailyEntryRequest,
 *   !proto.model.DeletePeriodDailyEntryResponse>}
 */
const methodInfo_Period_DeletePeriodDailyEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.DeletePeriodDailyEntryResponse,
  /**
   * @param {!proto.model.DeletePeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeletePeriodDailyEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.DeletePeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.DeletePeriodDailyEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.DeletePeriodDailyEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.deletePeriodDailyEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/DeletePeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_DeletePeriodDailyEntry,
      callback);
};


/**
 * @param {!proto.model.DeletePeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.DeletePeriodDailyEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.deletePeriodDailyEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/DeletePeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_DeletePeriodDailyEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ListPeriodDailyEntryRequest,
 *   !proto.model.ListPeriodDailyEntryResponse>}
 */
const methodDescriptor_Period_ListPeriodDailyEntry = new grpc.web.MethodDescriptor(
  '/model.Period/ListPeriodDailyEntry',
  grpc.web.MethodType.UNARY,
  proto.model.ListPeriodDailyEntryRequest,
  proto.model.ListPeriodDailyEntryResponse,
  /**
   * @param {!proto.model.ListPeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListPeriodDailyEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListPeriodDailyEntryRequest,
 *   !proto.model.ListPeriodDailyEntryResponse>}
 */
const methodInfo_Period_ListPeriodDailyEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListPeriodDailyEntryResponse,
  /**
   * @param {!proto.model.ListPeriodDailyEntryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListPeriodDailyEntryResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListPeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListPeriodDailyEntryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListPeriodDailyEntryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.listPeriodDailyEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/ListPeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_ListPeriodDailyEntry,
      callback);
};


/**
 * @param {!proto.model.ListPeriodDailyEntryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListPeriodDailyEntryResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.listPeriodDailyEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/ListPeriodDailyEntry',
      request,
      metadata || {},
      methodDescriptor_Period_ListPeriodDailyEntry);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.CreatePeriodInfoRequest,
 *   !proto.model.CreatePeriodInfoResponse>}
 */
const methodDescriptor_Period_CreatePeriodInfo = new grpc.web.MethodDescriptor(
  '/model.Period/CreatePeriodInfo',
  grpc.web.MethodType.UNARY,
  proto.model.CreatePeriodInfoRequest,
  proto.model.CreatePeriodInfoResponse,
  /**
   * @param {!proto.model.CreatePeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreatePeriodInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreatePeriodInfoRequest,
 *   !proto.model.CreatePeriodInfoResponse>}
 */
const methodInfo_Period_CreatePeriodInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreatePeriodInfoResponse,
  /**
   * @param {!proto.model.CreatePeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreatePeriodInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreatePeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreatePeriodInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreatePeriodInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.createPeriodInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/CreatePeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_CreatePeriodInfo,
      callback);
};


/**
 * @param {!proto.model.CreatePeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreatePeriodInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.createPeriodInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/CreatePeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_CreatePeriodInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ReadPeriodInfoRequest,
 *   !proto.model.ReadPeriodInfoResponse>}
 */
const methodDescriptor_Period_ReadPeriodInfo = new grpc.web.MethodDescriptor(
  '/model.Period/ReadPeriodInfo',
  grpc.web.MethodType.UNARY,
  proto.model.ReadPeriodInfoRequest,
  proto.model.ReadPeriodInfoResponse,
  /**
   * @param {!proto.model.ReadPeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadPeriodInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadPeriodInfoRequest,
 *   !proto.model.ReadPeriodInfoResponse>}
 */
const methodInfo_Period_ReadPeriodInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadPeriodInfoResponse,
  /**
   * @param {!proto.model.ReadPeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadPeriodInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadPeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadPeriodInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadPeriodInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.readPeriodInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/ReadPeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_ReadPeriodInfo,
      callback);
};


/**
 * @param {!proto.model.ReadPeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadPeriodInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.readPeriodInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/ReadPeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_ReadPeriodInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.UpdatePeriodInfoRequest,
 *   !proto.model.UpdatePeriodInfoResponse>}
 */
const methodDescriptor_Period_UpdatePeriodInfo = new grpc.web.MethodDescriptor(
  '/model.Period/UpdatePeriodInfo',
  grpc.web.MethodType.UNARY,
  proto.model.UpdatePeriodInfoRequest,
  proto.model.UpdatePeriodInfoResponse,
  /**
   * @param {!proto.model.UpdatePeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdatePeriodInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.UpdatePeriodInfoRequest,
 *   !proto.model.UpdatePeriodInfoResponse>}
 */
const methodInfo_Period_UpdatePeriodInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.UpdatePeriodInfoResponse,
  /**
   * @param {!proto.model.UpdatePeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdatePeriodInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.UpdatePeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.UpdatePeriodInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.UpdatePeriodInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.updatePeriodInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/UpdatePeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_UpdatePeriodInfo,
      callback);
};


/**
 * @param {!proto.model.UpdatePeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.UpdatePeriodInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.updatePeriodInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/UpdatePeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_UpdatePeriodInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.DeletePeriodInfoRequest,
 *   !proto.model.DeletePeriodInfoResponse>}
 */
const methodDescriptor_Period_DeletePeriodInfo = new grpc.web.MethodDescriptor(
  '/model.Period/DeletePeriodInfo',
  grpc.web.MethodType.UNARY,
  proto.model.DeletePeriodInfoRequest,
  proto.model.DeletePeriodInfoResponse,
  /**
   * @param {!proto.model.DeletePeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeletePeriodInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.DeletePeriodInfoRequest,
 *   !proto.model.DeletePeriodInfoResponse>}
 */
const methodInfo_Period_DeletePeriodInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.DeletePeriodInfoResponse,
  /**
   * @param {!proto.model.DeletePeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeletePeriodInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.DeletePeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.DeletePeriodInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.DeletePeriodInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.deletePeriodInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/DeletePeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_DeletePeriodInfo,
      callback);
};


/**
 * @param {!proto.model.DeletePeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.DeletePeriodInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.deletePeriodInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/DeletePeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_DeletePeriodInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ListPeriodInfoRequest,
 *   !proto.model.ListPeriodInfoResponse>}
 */
const methodDescriptor_Period_ListPeriodInfo = new grpc.web.MethodDescriptor(
  '/model.Period/ListPeriodInfo',
  grpc.web.MethodType.UNARY,
  proto.model.ListPeriodInfoRequest,
  proto.model.ListPeriodInfoResponse,
  /**
   * @param {!proto.model.ListPeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListPeriodInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListPeriodInfoRequest,
 *   !proto.model.ListPeriodInfoResponse>}
 */
const methodInfo_Period_ListPeriodInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListPeriodInfoResponse,
  /**
   * @param {!proto.model.ListPeriodInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListPeriodInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListPeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListPeriodInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListPeriodInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.PeriodClient.prototype.listPeriodInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.Period/ListPeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_ListPeriodInfo,
      callback);
};


/**
 * @param {!proto.model.ListPeriodInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListPeriodInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.model.PeriodPromiseClient.prototype.listPeriodInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.Period/ListPeriodInfo',
      request,
      metadata || {},
      methodDescriptor_Period_ListPeriodInfo);
};


module.exports = proto.model;

