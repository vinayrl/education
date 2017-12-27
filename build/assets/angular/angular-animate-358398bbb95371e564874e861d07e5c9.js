//# sourceMappingURL=angular-animate.js.map
/*
 AngularJS v1.5.11
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(K,u){function Da(a,b,c){if(!a)throw Ma("areq","Argument '{0}' is {1}",b||"?",c||"required");return a}function Ea(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=W(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];t(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof z)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return z(ta(a))}if(1===a.nodeType)return z(a)}function ta(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Pa(a,b,c){t(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){t(b,function(b){a.removeClass(b,c)})}function Y(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function qa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
O;a.domOperation=function(){a.$$domOperationFired=!0;b();b=O};a.$$prepared=!0}return a}function ha(a,b){Fa(a,b);Ga(a,b)}function Fa(a,b){b.from&&(a.css(b.from),b.from=null)}function Ga(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==O?d.domOperation:null;ua(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};t(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);t(b,function(a,b){f[b]=1});c=d(c);t(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};t(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function y(a){return a instanceof z?a[0]:a}function Sa(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=Z(d,X(c.addClass,"-add")));c.removeClass&&(d=Z(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ra(a,b){b=b?"-"+b+"s":"";ma(a,[na,b]);return[na,b]}function va(a,b){b=b?"paused":"";var c=aa+"PlayState";ma(a,[c,b]);return[c,b]}function ma(a,
b){a.style[b[0]]=b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Ha(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};t(c,function(a,b){if(a=f[a]){var c=a.charAt(0);if("-"===c||"+"===c||0<=c)a=Ta(a);0===a&&(a=null);d[b]=a}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);t(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function wa(a){return 0===a||null!=a}function Ia(a,b){var c=L;a+="s";b?c+="Duration":
a+=" linear all";return[c,a]}function Ja(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ka(a,b,c){t(c,function(c){a[c]=xa(a[c])?a[c]:b.style.getPropertyValue(c)})}var L,ya,aa,za;void 0===K.ontransitionend&&void 0!==K.onwebkittransitionend?(L="WebkitTransition",ya="webkitTransitionEnd transitionend"):(L="transition",ya=
"transitionend");void 0===K.onanimationend&&void 0!==K.onwebkitanimationend?(aa="WebkitAnimation",za="webkitAnimationEnd animationend"):(aa="animation",za="animationend");var sa=aa+"Delay",Aa=aa+"Duration",na=L+"Delay",La=L+"Duration",Ma=u.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:na,transitionProperty:L+"Property",animationDuration:Aa,animationDelay:sa,animationIterationCount:aa+"IterationCount"},Va={transitionDuration:La,transitionDelay:na,animationDuration:Aa,animationDelay:sa},
Ba,ua,t,W,xa,ea,Ca,ba,G,I,z,O;u.module("ngAnimate",[],function(){O=u.noop;Ba=u.copy;ua=u.extend;z=u.element;t=u.forEach;W=u.isArray;G=u.isString;ba=u.isObject;I=u.isUndefined;xa=u.isDefined;Ca=u.isFunction;ea=u.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,n){var H,A;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){H&&a.leave(H);A&&(A.$destroy(),A=null);if(f||0===f)A=b.$new(),
n(A,function(b){H=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;G(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();f||a(function(){f||c()})}}
var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);t(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return e[a].some(function(a){return a(b,c,d)})}function f(a,b){var c=0<(a.addClass||"").length;a=0<(a.removeClass||"").length;
return b?c&&a:c||a}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b,c){return!b.structural&&f(b)});e.skip.push(function(a,b,c){return!b.structural&&!f(b)});e.skip.push(function(a,b,c){return"leave"===c.event&&b.structural});e.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});e.cancel.push(function(a,b,c){return c.structural&&b.structural});e.cancel.push(function(a,b,c){return 2===c.state&&b.structural});e.cancel.push(function(a,b,d){if(d.structural)return!1;
a=b.addClass;b=b.removeClass;var f=d.addClass;d=d.removeClass;return I(a)&&I(b)||I(f)&&I(d)?!1:c(a,d)||c(b,f)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,e,r,P,Wa,N,w,x,R){function S(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var g=y(b),d=y(a),M=[];(a=h[c])&&t(a,function(a){v.call(a.node,g)?M.push(a.callback):"leave"===c&&v.call(a.node,
d)&&M.push(a.callback)});return M}function k(a,b,c){var g=ta(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function p(a,h,k){function l(c,g,h,k){F(function(){var c=J(pa,a,g);c.length?b(function(){t(c,function(b){b(a,h,k)});"close"!==h||a[0].parentNode||Q.off(a)}):"close"!==h||a[0].parentNode||Q.off(a)});c.progress(g,h,k)}function p(b){var c=a,g=m;g.preparationClasses&&(c.removeClass(g.preparationClasses),g.preparationClasses=null);g.activeClasses&&(c.removeClass(g.activeClasses),
g.activeClasses=null);D(a,m);ha(a,m);m.domOperation();e.complete(!b)}var m=Ba(k),x,pa;if(a=Oa(a))x=y(a),pa=a.parent();var m=qa(m),e=new N,F=S();W(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!G(m.addClass)&&(m.addClass=null);W(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!G(m.removeClass)&&(m.removeClass=null);m.from&&!ba(m.from)&&(m.from=null);m.to&&!ba(m.to)&&(m.to=null);if(!x)return p(),e;k=[x.className,m.addClass,m.removeClass].join(" ");if(!Xa(k))return p(),
e;var A=0<=["enter","move","leave"].indexOf(h),v=r[0].hidden,R=!g||v||M.get(x);k=!R&&E.get(x)||{};var w=!!k.state;R||w&&1===k.state||(R=!V(a,pa,h));if(R)return v&&l(e,h,"start"),p(),v&&l(e,h,"close"),e;A&&ja(a);v={structural:A,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:p,options:m,runner:e};if(w){if(d("skip",a,v,k)){if(2===k.state)return p(),e;T(a,k,v);return k.runner}if(d("cancel",a,v,k))if(2===k.state)k.runner.end();else if(k.structural)k.close();else return T(a,k,v),
k.runner;else if(d("join",a,v,k))if(2===k.state)T(a,v,{});else return Sa(a,A?h:null,m),h=v.event=k.event,m=T(a,k,v),k.runner}else T(a,v,{});(w=v.structural)||(w="animate"===v.event&&0<Object.keys(v.options.to||{}).length||f(v));if(!w)return p(),ka(a),e;var P=(k.counter||0)+1;v.counter=P;B(a,1,v);c.$$postDigest(function(){var b=E.get(x),c=!b,b=b||{},g=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==P||!g){c&&(D(a,m),ha(a,m));if(c||A&&b.event!==h)m.domOperation(),
e.end();g||ka(a)}else h=!b.structural&&f(b,!0)?"setClass":b.event,B(a,2),b=Wa(a,h,b.options),e.setHost(b),l(e,h,"start",{}),b.done(function(b){p(!b);(b=E.get(x))&&b.counter===P&&ka(y(a));l(e,h,"close",{})})});return e}function ja(a){a=y(a).querySelectorAll("[data-ng-animate]");t(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=E.get(a);if(c)switch(b){case 2:c.runner.end();case 1:E.remove(a)}})}function ka(a){a=y(a);a.removeAttribute("data-ng-animate");E.remove(a)}function l(a,
b){return y(a)===y(b)}function V(a,b,c){c=z(r[0].body);var g=l(a,c)||"HTML"===a[0].nodeName,h=l(a,e),k=!1,d,p=M.get(y(a));(a=z.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=y(b);b;){h||(h=l(b,e));if(1!==b.nodeType)break;a=E.get(b)||{};if(!k){var f=M.get(b);if(!0===f&&!1!==p){p=!0;break}else!1===f&&(p=!1);k=a.structural}if(I(d)||!0===d)a=z.data(b,"$$ngAnimateChildren"),xa(a)&&(d=a);if(k&&!1===d)break;g||(g=l(b,c));if(g&&h)break;if(!h&&(a=z.data(b,"$ngAnimatePin"))){b=y(a);continue}b=b.parentNode}return(!k||
d)&&!0!==p&&h&&g}function B(a,b,c){c=c||{};c.state=b;a=y(a);a.setAttribute("data-ng-animate",b);c=(b=E.get(a))?ua(b,c):c;E.put(a,c)}var E=new P,M=new P,g=null,pa=c.$watch(function(){return 0===w.totalPendingRequests},function(a){a&&(pa(),c.$$postDigest(function(){c.$$postDigest(function(){null===g&&(g=!0)})}))}),h=Object.create(null),F=a.classNameFilter(),Xa=F?function(a){return F.test(a)}:function(){return!0},D=Y(x),v=K.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},Q={on:function(a,b,c){var g=ta(b);h[a]=h[a]||[];h[a].push({node:g,callback:c});z(b).on("$destroy",function(){E.get(g)||Q.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var g=h[a];g&&(h[a]=1===arguments.length?null:k(g,b,c))}else for(g in b=arguments[0],h)h[g]=k(h[g],b)},pin:function(a,b){Da(ea(a),"element","not an element");Da(ea(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!g;else if(ea(a)){var h=y(a);1===c?b=!M.get(h):M.put(h,!b)}else b=g=!!a;return b}};return Q}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,f,e,n,H){function A(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;f.put(d,a);for(var e;p;){if(e=f.get(p)){e.processed||(e=b(e));break}p=p.parentNode}(e||
c).children.push(a);return a}var c={children:[]},d,f=new n;for(d=0;d<a.length;d++){var e=a[d];f.put(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var x=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(x.fn);x.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var r=[],P=Y(a);return function(n,N,w){function x(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];t(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function R(a){var b=[],c={};t(a,function(a,d){var h=y(a.element),k=0<=["enter","move"].indexOf(a.event),h=a.structural?x(h):[];if(h.length){var f=k?"to":"from";t(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:d,element:z(a)}})}else b.push(a)});var d={},k={};t(c,function(c,f){f=c.from;c=
c.to;if(f&&c){var e=a[f.animationID],p=a[c.animationID],l=f.animationID.toString();if(!k[l]){var B=k[l]={structural:!0,beforeStart:function(){e.beforeStart();p.beforeStart()},close:function(){e.close();p.close()},classes:S(e.classes,p.classes),from:e,to:p,anchors:[]};B.classes.length?b.push(B):(b.push(e),b.push(p))}k[l].anchors.push({out:f.element,"in":c.element})}else f=f?f.animationID:c.animationID,c=f.toString(),d[c]||(d[c]=!0,b.push(a[f]))});return b}function S(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var k=a[d];if("ng-"!==k.substring(0,3))for(var f=0;f<b.length;f++)if(k===b[f]){c.push(k);break}}return c.join(" ")}function J(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function k(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===N&&w.$$domOperationFired||a.end()}function ja(b){n.off("$destroy",p);n.removeData("$$animationRunner");
P(n,w);ha(n,w);w.domOperation();B&&a.removeClass(n,B);n.removeClass("ng-animate");l.complete(!b)}w=qa(w);var ka=0<=["enter","move","leave"].indexOf(N),l=new e({end:function(){ja()},cancel:function(){ja(!0)}});if(!b.length)return ja(),l;n.data("$$animationRunner",l);var V=Ea(n.attr("class"),Ea(w.addClass,w.removeClass)),B=w.tempClasses;B&&(V+=" "+B,w.tempClasses=null);var E;ka&&(E="ng-"+N+"-prepare",a.addClass(n,E));r.push({element:n,classes:V,event:N,structural:ka,options:w,beforeStart:function(){n.addClass("ng-animate");
B&&a.addClass(n,B);E&&(a.removeClass(n,E),E=null)},close:ja});n.on("$destroy",p);if(1<r.length)return l;d.$$postDigest(function(){var a=[];t(r,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});r.length=0;var b=R(a),c=[];t(b,function(a){c.push({domNode:y(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=J(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),k(a,b)):
c()}})});H(A(c))});return l}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ja(),c=Ja();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,n,H,A,r,P){function u(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++S))+"-"+a.getAttribute("class")+"-"+b}function N(k,e,x,n){var l;0<b.count(x)&&(l=c.get(x),l||(e=X(e,"-stagger"),f.addClass(k,e),l=Ha(a,k,n),l.animationDuration=
Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),f.removeClass(k,e),c.put(x,l)));return l||{}}function w(a){J.push(a);r.waitUntilQuiet(function(){b.flush();c.flush();for(var a=H(),d=0;d<J.length;d++)J[d](a);J.length=0})}function x(c,f,e){f=b.get(e);f||(f=Ha(a,c,Ua),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var R=Y(f),S=0,J=[];return function(a,c){function d(){l()}function r(){l(!0)}function l(b){if(!(v||J&&Q)){v=!0;Q=!1;g.$$skipPreparationClasses||f.removeClass(a,ga);f.removeClass(a,ea);va(h,!1);ra(h,!1);t(F,function(a){h.style[a[0]]=""});R(a,g);ha(a,g);Object.keys(S).length&&t(S,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();fa&&fa.length&&a.off(fa.join(" "),E);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),
a.removeData("$$animateCss"));z&&z.complete(!b)}}function V(a){q.blockTransition&&ra(h,a);q.blockKeyframeAnimation&&va(h,!!a)}function B(){z=new e({end:d,cancel:r});w(O);l();return{$$willAnimate:!1,start:function(){return z},end:d}}function E(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Y,0)>=K&&b>=m&&(J=!0,l())}function M(){function b(){if(!v){V(!1);t(F,function(a){h.style[a[0]]=a[1]});R(a,g);f.addClass(a,ea);if(q.recalculateTimingStyles){oa=
h.className+" "+ga;la=u(h,oa);C=x(h,oa,la);ca=C.maxDelay;I=Math.max(ca,0);m=C.maxDuration;if(0===m){l();return}q.hasTransitions=0<C.transitionDuration;q.hasAnimations=0<C.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof g.delay&&wa(g.delay)?parseFloat(g.delay):ca,I=Math.max(ca,0),C.animationDelay=ca,da=[sa,ca+"s"],F.push(da),h.style[da[0]]=da[1]);K=1E3*I;T=1E3*m;if(g.easing){var d,e=g.easing;q.hasTransitions&&(d=L+"TimingFunction",F.push([d,e]),h.style[d]=e);q.hasAnimations&&(d=aa+
"TimingFunction",F.push([d,e]),h.style[d]=e)}C.transitionDuration&&fa.push(ya);C.animationDuration&&fa.push(za);Y=Date.now();var B=K+1.5*T;d=Y+B;var e=a.data("$$animateCss")||[],M=!0;if(e.length){var p=e[0];(M=d>p.expectedEndTime)?n.cancel(p.timer):e.push(l)}M&&(B=n(c,B,!1),e[0]={timer:B,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(fa.length)a.on(fa.join(" "),E);g.to&&(g.cleanupStyles&&Ka(S,h,Object.keys(g.to)),Ga(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();
a.removeData("$$animateCss")}}if(!v)if(h.parentNode){var d=function(a){if(J)Q&&a&&(Q=!1,l());else if(Q=!a,C.animationDuration)if(a=va(h,Q),Q)F.push(a);else{var b=F,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<ba&&(C.transitionDuration&&0===U.transitionDuration||C.animationDuration&&0===U.animationDuration)&&Math.max(U.animationDelay,U.transitionDelay);e?n(b,Math.floor(e*ba*1E3),!1):b();G.resume=function(){d(!0)};G.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=qa(Ba(g)));var S={},h=y(a);
if(!h||!h.parentNode||!P.enabled())return B();var F=[],H=a.attr("class"),D=Na(g),v,Q,J,z,G,I,K,m,T,Y,fa=[];if(0===g.duration||!A.animations&&!A.transitions)return B();var ia=g.event&&W(g.event)?g.event.join(" "):g.event,Z="";c="";ia&&g.structural?Z=X(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(c+=X(g.addClass,"-add"));g.removeClass&&(c.length&&(c+=" "),c+=X(g.removeClass,"-remove"));g.applyClassesEarly&&c.length&&R(a,g);var ga=[Z,c].join(" ").trim(),oa=H+" "+ga,ea=X(ga,"-active"),H=D.to&&0<Object.keys(D.to).length;
if(!(0<(g.keyframeStyle||"").length||H||ga))return B();var la,U;0<g.stagger?(D=parseFloat(g.stagger),U={transitionDelay:D,animationDelay:D,transitionDuration:0,animationDuration:0}):(la=u(h,oa),U=N(h,ga,la,Va));g.$$skipPreparationClasses||f.addClass(a,ga);g.transitionStyle&&(D=[L,g.transitionStyle],ma(h,D),F.push(D));0<=g.duration&&(D=0<h.style[L].length,D=Ia(g.duration,D),ma(h,D),F.push(D));g.keyframeStyle&&(D=[aa,g.keyframeStyle],ma(h,D),F.push(D));var ba=U?0<=g.staggerIndex?g.staggerIndex:b.count(la):
0;(ia=0===ba)&&!g.skipBlocking&&ra(h,9999);var C=x(h,oa,la),ca=C.maxDelay;I=Math.max(ca,0);m=C.maxDuration;var q={};q.hasTransitions=0<C.transitionDuration;q.hasAnimations=0<C.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"===C.transitionProperty;q.applyTransitionDuration=H&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=g.duration&&q.hasAnimations;q.applyTransitionDelay=wa(g.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=
wa(g.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<c.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=g.duration?parseFloat(g.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,C.transitionDuration=m,D=0<h.style[L+"Property"].length,F.push(Ia(m,D))),q.applyAnimationDuration&&(q.hasAnimations=!0,C.animationDuration=m,F.push([Aa,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return B();if(null!=g.delay){var da;"boolean"!==typeof g.delay&&(da=parseFloat(g.delay),I=Math.max(da,
0));q.applyTransitionDelay&&F.push([na,da+"s"]);q.applyAnimationDelay&&F.push([sa,da+"s"])}null==g.duration&&0<C.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ia);K=1E3*I;T=1E3*m;g.skipBlocking||(q.blockTransition=0<C.transitionDuration,q.blockKeyframeAnimation=0<C.animationDuration&&0<U.animationDelay&&0===U.animationDuration);g.from&&(g.cleanupStyles&&Ka(S,h,Object.keys(g.from)),Fa(a,g));q.blockTransition||q.blockKeyframeAnimation?V(m):g.skipBlocking||ra(h,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!v)return G={end:d,cancel:r,resume:null,pause:null},z=new e(G),w(M),z}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,n,H){function A(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function r(c,f,e){function n(a){var b={},
c=y(a).getBoundingClientRect();t(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=N.scrollTop;break;case "left":d+=N.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function k(){var c=(e.attr("class")||"").replace(/\bng-\S+\b/g,""),d=A(c,H),c=A(H,c),d=a(r,{to:n(e),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function p(){r.remove();f.removeClass("ng-animate-shim");e.removeClass("ng-animate-shim")}var r=z(y(f).cloneNode(!0)),
H=(r.attr("class")||"").replace(/\bng-\S+\b/g,"");f.addClass("ng-animate-shim");e.addClass("ng-animate-shim");r.addClass("ng-anchor");w.append(r);var l;c=function(){var c=a(r,{addClass:"ng-anchor-out",delay:!0,from:n(f)});return c.$$willAnimate?c:null}();if(!c&&(l=k(),!l))return p();var V=c||l;return{start:function(){function a(){c&&c.end()}var b,c=V.start();c.done(function(){c=null;if(!l&&(l=k()))return c=l.start(),c.done(function(){c=null;p();b.complete()}),c;p();b.complete()});return b=new d({end:a,
cancel:a})}}}function P(a,b,c,f){var e=u(a,O),n=u(b,O),A=[];t(f,function(a){(a=r(c,a.out,a["in"]))&&A.push(a)});if(e||n||0!==A.length)return{start:function(){function a(){t(b,function(a){a.end()})}var b=[];e&&b.push(e.start());n&&b.push(n.start());t(A,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function u(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return O;var N=H[0].body;c=y(f);var w=z(c.parentNode&&11===c.parentNode.nodeType||N.contains(c)?c:N);return function(a){return a.from&&a.to?P(a.from,a.to,a.classes,a.anchors):u(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=W(c)?c:c.split(" ");for(var d=
[],e={},f=0;f<c.length;f++){var t=c[f],u=a.$$registeredAnimations[t];u&&!e[t]&&(d.push(b.get(u)),e[t]=!0)}return d}var e=Y(d);return function(a,b,d,r){function u(){r.domOperation();e(a,r)}function z(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,I,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,I,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return O}function y(a,
b,d,e,f){var k=[];t(e,function(e){var l=e[f];l&&k.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||O)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=z(l,a,b,d,function(a){h(!1===a)});return e})});return k}function w(a,b,d,e,f){var k=y(a,b,d,e,f);if(0===k.length){var h,l;"beforeSetClass"===f?(h=y(a,"removeClass",d,e,"beforeRemoveClass"),l=y(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=y(a,"removeClass",d,e,"removeClass"),l=y(a,"addClass",d,e,"addClass"));
h&&(k=k.concat(h));l&&(k=k.concat(l))}if(0!==k.length)return function(a){var b=[];k.length&&t(k,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){t(b,function(b){a?b.cancel():b.end()})}}}var x=!1;3===arguments.length&&ba(d)&&(r=d,d=null);r=qa(r);d||(d=a.attr("class")||"",r.addClass&&(d+=" "+r.addClass),r.removeClass&&(d+=" "+r.removeClass));var G=r.addClass,I=r.removeClass,J=f(d),k,p;if(J.length){var K,L;"leave"===b?(L="leave",K="afterLeave"):(L="before"+b.charAt(0).toUpperCase()+
b.substr(1),K=b);"enter"!==b&&"move"!==b&&(k=w(a,b,r,J,L));p=w(a,b,r,J,K)}if(k||p){var l;return{$$willAnimate:!0,end:function(){l?l.end():(x=!0,u(),ha(a,r),l=new c,l.complete(!0));return l},start:function(){function b(c){x=!0;u();ha(a,r);l.complete(c)}if(l)return l;l=new c;var d,e=[];k&&e.push(function(a){d=k(a)});e.length?e.push(function(a){u();a(!0)}):u();p&&e.push(function(a){d=p(a)});l.setHost({end:function(){x||((d||O)(void 0),b(void 0))},cancel:function(){x||((d||O)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){t(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);