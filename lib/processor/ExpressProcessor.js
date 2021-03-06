// Generated by CoffeeScript 1.6.3
var ExpressProcessor, _;

_ = require('underscore');

ExpressProcessor = (function() {
  /*
  		@param  {Express} express 
  		@return {Function}
  */

  function ExpressProcessor(express) {
    /*
    			processor
    			@param {monolog.Record} record 
    		 	@return {monolog.Record} [description]
    */

    var F;
    F = function(record) {
      if (record.extra == null) {
        record.extra = {};
      }
      record.extra.request = F.request;
      return record;
    };
    F.request = {};
    F.express = express;
    express.use(function(req, res, next) {
      F.request = {
        method: req.method,
        params: req.params,
        query: req.query,
        body: req.body,
        files: req.files,
        route: req.route,
        cookies: req.cookies,
        signedCookies: req.signedCookies,
        ip: req.id,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        xhr: req.xhr,
        protocole: req.protocol,
        secure: req.secure
      };
      return next();
    });
    return F;
  }

  return ExpressProcessor;

})();

module.exports = ExpressProcessor;

/*
//@ sourceMappingURL=ExpressProcessor.map
*/
