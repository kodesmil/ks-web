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
proto.model = require('./notification_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.NotificationSettingsClient =
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
proto.model.NotificationSettingsPromiseClient =
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
 *   !proto.model.CreateNotificationSettingRequest,
 *   !proto.model.CreateNotificationSettingResponse>}
 */
const methodDescriptor_NotificationSettings_Create = new grpc.web.MethodDescriptor(
  '/model.NotificationSettings/Create',
  grpc.web.MethodType.UNARY,
  proto.model.CreateNotificationSettingRequest,
  proto.model.CreateNotificationSettingResponse,
  /**
   * @param {!proto.model.CreateNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateNotificationSettingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreateNotificationSettingRequest,
 *   !proto.model.CreateNotificationSettingResponse>}
 */
const methodInfo_NotificationSettings_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreateNotificationSettingResponse,
  /**
   * @param {!proto.model.CreateNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateNotificationSettingResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreateNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreateNotificationSettingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreateNotificationSettingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.NotificationSettingsClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.NotificationSettings/Create',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Create,
      callback);
};


/**
 * @param {!proto.model.CreateNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreateNotificationSettingResponse>}
 *     A native promise that resolves to the response
 */
proto.model.NotificationSettingsPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.NotificationSettings/Create',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ReadNotificationSettingRequest,
 *   !proto.model.ReadNotificationSettingResponse>}
 */
const methodDescriptor_NotificationSettings_Read = new grpc.web.MethodDescriptor(
  '/model.NotificationSettings/Read',
  grpc.web.MethodType.UNARY,
  proto.model.ReadNotificationSettingRequest,
  proto.model.ReadNotificationSettingResponse,
  /**
   * @param {!proto.model.ReadNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadNotificationSettingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadNotificationSettingRequest,
 *   !proto.model.ReadNotificationSettingResponse>}
 */
const methodInfo_NotificationSettings_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadNotificationSettingResponse,
  /**
   * @param {!proto.model.ReadNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadNotificationSettingResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadNotificationSettingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadNotificationSettingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.NotificationSettingsClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.NotificationSettings/Read',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Read,
      callback);
};


/**
 * @param {!proto.model.ReadNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadNotificationSettingResponse>}
 *     A native promise that resolves to the response
 */
proto.model.NotificationSettingsPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.NotificationSettings/Read',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.UpdateNotificationSettingRequest,
 *   !proto.model.UpdateNotificationSettingResponse>}
 */
const methodDescriptor_NotificationSettings_Update = new grpc.web.MethodDescriptor(
  '/model.NotificationSettings/Update',
  grpc.web.MethodType.UNARY,
  proto.model.UpdateNotificationSettingRequest,
  proto.model.UpdateNotificationSettingResponse,
  /**
   * @param {!proto.model.UpdateNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateNotificationSettingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.UpdateNotificationSettingRequest,
 *   !proto.model.UpdateNotificationSettingResponse>}
 */
const methodInfo_NotificationSettings_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.UpdateNotificationSettingResponse,
  /**
   * @param {!proto.model.UpdateNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.UpdateNotificationSettingResponse.deserializeBinary
);


/**
 * @param {!proto.model.UpdateNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.UpdateNotificationSettingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.UpdateNotificationSettingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.NotificationSettingsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.NotificationSettings/Update',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Update,
      callback);
};


/**
 * @param {!proto.model.UpdateNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.UpdateNotificationSettingResponse>}
 *     A native promise that resolves to the response
 */
proto.model.NotificationSettingsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.NotificationSettings/Update',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.DeleteNotificationSettingRequest,
 *   !proto.model.DeleteNotificationSettingResponse>}
 */
const methodDescriptor_NotificationSettings_Delete = new grpc.web.MethodDescriptor(
  '/model.NotificationSettings/Delete',
  grpc.web.MethodType.UNARY,
  proto.model.DeleteNotificationSettingRequest,
  proto.model.DeleteNotificationSettingResponse,
  /**
   * @param {!proto.model.DeleteNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteNotificationSettingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.DeleteNotificationSettingRequest,
 *   !proto.model.DeleteNotificationSettingResponse>}
 */
const methodInfo_NotificationSettings_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.DeleteNotificationSettingResponse,
  /**
   * @param {!proto.model.DeleteNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.DeleteNotificationSettingResponse.deserializeBinary
);


/**
 * @param {!proto.model.DeleteNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.DeleteNotificationSettingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.DeleteNotificationSettingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.NotificationSettingsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.NotificationSettings/Delete',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Delete,
      callback);
};


/**
 * @param {!proto.model.DeleteNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.DeleteNotificationSettingResponse>}
 *     A native promise that resolves to the response
 */
proto.model.NotificationSettingsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.NotificationSettings/Delete',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.ListNotificationSettingRequest,
 *   !proto.model.ListNotificationSettingResponse>}
 */
const methodDescriptor_NotificationSettings_List = new grpc.web.MethodDescriptor(
  '/model.NotificationSettings/List',
  grpc.web.MethodType.UNARY,
  proto.model.ListNotificationSettingRequest,
  proto.model.ListNotificationSettingResponse,
  /**
   * @param {!proto.model.ListNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListNotificationSettingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListNotificationSettingRequest,
 *   !proto.model.ListNotificationSettingResponse>}
 */
const methodInfo_NotificationSettings_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListNotificationSettingResponse,
  /**
   * @param {!proto.model.ListNotificationSettingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListNotificationSettingResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListNotificationSettingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListNotificationSettingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.NotificationSettingsClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.NotificationSettings/List',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_List,
      callback);
};


/**
 * @param {!proto.model.ListNotificationSettingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListNotificationSettingResponse>}
 *     A native promise that resolves to the response
 */
proto.model.NotificationSettingsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.NotificationSettings/List',
      request,
      metadata || {},
      methodDescriptor_NotificationSettings_List);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.NotificationDevicesClient =
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
proto.model.NotificationDevicesPromiseClient =
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
 *   !proto.model.CreateNotificationDeviceRequest,
 *   !proto.model.CreateNotificationDeviceResponse>}
 */
const methodDescriptor_NotificationDevices_Create = new grpc.web.MethodDescriptor(
  '/model.NotificationDevices/Create',
  grpc.web.MethodType.UNARY,
  proto.model.CreateNotificationDeviceRequest,
  proto.model.CreateNotificationDeviceResponse,
  /**
   * @param {!proto.model.CreateNotificationDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateNotificationDeviceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.CreateNotificationDeviceRequest,
 *   !proto.model.CreateNotificationDeviceResponse>}
 */
const methodInfo_NotificationDevices_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.CreateNotificationDeviceResponse,
  /**
   * @param {!proto.model.CreateNotificationDeviceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.CreateNotificationDeviceResponse.deserializeBinary
);


/**
 * @param {!proto.model.CreateNotificationDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.CreateNotificationDeviceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.CreateNotificationDeviceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.NotificationDevicesClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.NotificationDevices/Create',
      request,
      metadata || {},
      methodDescriptor_NotificationDevices_Create,
      callback);
};


/**
 * @param {!proto.model.CreateNotificationDeviceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.CreateNotificationDeviceResponse>}
 *     A native promise that resolves to the response
 */
proto.model.NotificationDevicesPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.NotificationDevices/Create',
      request,
      metadata || {},
      methodDescriptor_NotificationDevices_Create);
};


module.exports = proto.model;

