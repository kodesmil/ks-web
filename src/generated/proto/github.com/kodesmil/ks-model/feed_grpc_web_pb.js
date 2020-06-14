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
proto.model = require('./feed_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.FeedArticlesClient =
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
proto.model.FeedArticlesPromiseClient =
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
 *   !proto.model.ListFeedArticleRequest,
 *   !proto.model.ListFeedArticleResponse>}
 */
const methodDescriptor_FeedArticles_List = new grpc.web.MethodDescriptor(
  '/model.FeedArticles/List',
  grpc.web.MethodType.UNARY,
  proto.model.ListFeedArticleRequest,
  proto.model.ListFeedArticleResponse,
  /**
   * @param {!proto.model.ListFeedArticleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListFeedArticleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ListFeedArticleRequest,
 *   !proto.model.ListFeedArticleResponse>}
 */
const methodInfo_FeedArticles_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ListFeedArticleResponse,
  /**
   * @param {!proto.model.ListFeedArticleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ListFeedArticleResponse.deserializeBinary
);


/**
 * @param {!proto.model.ListFeedArticleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ListFeedArticleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ListFeedArticleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.FeedArticlesClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.FeedArticles/List',
      request,
      metadata || {},
      methodDescriptor_FeedArticles_List,
      callback);
};


/**
 * @param {!proto.model.ListFeedArticleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ListFeedArticleResponse>}
 *     A native promise that resolves to the response
 */
proto.model.FeedArticlesPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.FeedArticles/List',
      request,
      metadata || {},
      methodDescriptor_FeedArticles_List);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.model.FeedArticleDetailsClient =
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
proto.model.FeedArticleDetailsPromiseClient =
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
 *   !proto.model.ReadFeedArticleDetailsRequest,
 *   !proto.model.ReadFeedArticleDetailsResponse>}
 */
const methodDescriptor_FeedArticleDetails_Read = new grpc.web.MethodDescriptor(
  '/model.FeedArticleDetails/Read',
  grpc.web.MethodType.UNARY,
  proto.model.ReadFeedArticleDetailsRequest,
  proto.model.ReadFeedArticleDetailsResponse,
  /**
   * @param {!proto.model.ReadFeedArticleDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadFeedArticleDetailsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.ReadFeedArticleDetailsRequest,
 *   !proto.model.ReadFeedArticleDetailsResponse>}
 */
const methodInfo_FeedArticleDetails_Read = new grpc.web.AbstractClientBase.MethodInfo(
  proto.model.ReadFeedArticleDetailsResponse,
  /**
   * @param {!proto.model.ReadFeedArticleDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.model.ReadFeedArticleDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.model.ReadFeedArticleDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ReadFeedArticleDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ReadFeedArticleDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.model.FeedArticleDetailsClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/model.FeedArticleDetails/Read',
      request,
      metadata || {},
      methodDescriptor_FeedArticleDetails_Read,
      callback);
};


/**
 * @param {!proto.model.ReadFeedArticleDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ReadFeedArticleDetailsResponse>}
 *     A native promise that resolves to the response
 */
proto.model.FeedArticleDetailsPromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/model.FeedArticleDetails/Read',
      request,
      metadata || {},
      methodDescriptor_FeedArticleDetails_Read);
};


module.exports = proto.model;

