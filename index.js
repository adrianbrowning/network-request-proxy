/***
 * Created by adrianbrowning on 2018-11-30
 */
"use strict";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const debug           = require('debug')('network-request-proxy'),
      http            = require("http"),
      https           = require("https"),
      HttpProxyAgent  = require('http-proxy-agent'),
      HttpsProxyAgent = require('https-proxy-agent');
var _proxy;

function override(protocol, agent) {

  const ovrd = function(property) {
    protocol[property+"_old"] = protocol[property];
    protocol[property] = function() {
      const [ request, ...args ] = arguments;
      if (!request.agent) {
        request.agent = new agent(_proxy);
        debug("Proxying request to %s %s",request.method, request.protocol + "//" + request.hostname + (request.port ? request.port : "") + request.path);
      }
      return protocol[ property + "_old" ].apply(this, [ request, ...args ]);
    }.bind(protocol);
  };

  ovrd("get");
  ovrd("request");

}


override(http, HttpProxyAgent);
override(https, HttpsProxyAgent);

module.exports = function(proxy) {
  if(!proxy) throw new Error("Proxy details not defined");
  _proxy = proxy;
};


