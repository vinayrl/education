//# sourceMappingURL=angular-cookies.js.map
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,c){function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,f,e){var g,h;e=e||{};h=e.expires;g=c.isDefined(e.path)?e.path:d;c.isUndefined(f)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",f="");c.isString(h)&&(h=new Date(h));f=encodeURIComponent(b)+"="+encodeURIComponent(f);f=f+(g?";path="+g:"")+(e.domain?";domain="+e.domain:"");f+=h?";expires="+h.toUTCString():"";f+=e.secure?";secure":"";e=f.length+1;4096<e&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
e+" > 4096 bytes)!");k.cookie=f}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);