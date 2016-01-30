var express = require('express');
var router = express.Router();

function ApiRouter(resource) {
  this.resource = resource;
  this.router = router;
}

ApiRouter.prototype.mountUrl = function(url) {
  return this.resource + url;
}

ApiRouter.prototype.get = function(url, callback) {
  router.get(this.mountUrl(url), callback);
}

ApiRouter.prototype.post = function(url, callback) {
  router.post(this.mountUrl(url), callback);
}

ApiRouter.prototype.put = function(url, callback) {
  router.put(this.mountUrl(url), callback);
}

ApiRouter.prototype.delete = function(url, callback) {
  router.delete(this.mountUrl(url), callback);
}

module.exports = ApiRouter;
