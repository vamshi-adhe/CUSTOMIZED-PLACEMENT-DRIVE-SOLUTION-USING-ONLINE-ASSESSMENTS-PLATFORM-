(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ba;function pa(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ua=b.prototype}var k=this;function q(a){return"string"==typeof a}var qa=/^[\w+/_-]+[=]{0,2}$/,ra=null;function sa(){}function ta(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ua(a){return"function"==ta(a)}function va(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function wa(a,b,c){return a.call.apply(a.bind,arguments)}function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=wa:r=xa;return r.apply(null,arguments)}var ya=Date.now||function(){return+new Date};function Ba(a,b){function c(){}c.prototype=b.prototype;a.ua=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.va=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function Ca(){this.g=null;this.h=[];Da(this)}Ca.prototype.height=function(){return this.j};Ca.prototype.width=function(){return this.l};function Ea(a){null===a.g&&(a.g=new Fa);return a.g}function Da(a){a.j=0;a.l=0;a.g=null;a.h.length=0}function v(){this.j=this.h="";this.g=!0}v.prototype.label=function(){return this.h};v.prototype.S=function(){return this.j};v.prototype.ea=function(){return this.g};function Ga(a,b){for(var c in b){var d=b[c],e=c.toLowerCase();"label"==e&&(a.h=d);"label_instance"==e&&(a.j=d);"include_close_button_token"==e&&(a.g=d)}}function Ha(){this.g="";this.j=this.l=this.h=null}Ha.prototype.text=function(){return this.g};function Ia(){this.g=[];this.g.length=0}function Ja(){this.g="";this.h=null}Ja.prototype.text=function(){return this.g};function Ka(){this.o=[];this.h=null;this.w=!1;this.l="";this.v=!1;this.m="";this.A=!1;this.j="";this.u=!1;this.g=null;this.o.length=0;this.h=null}Ka.prototype.is_mutable_impression=function(){return this.w};function La(){}function Fa(){this.g=null}function Ma(a){null===a.g&&(a.g=new Ka);return a.g}function Na(){this.h=this.g=""}Na.prototype.name=function(){return this.g};Na.prototype.value=function(){return this.h};function Oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}Ba(Oa,Error);Oa.prototype.name="CustomError";var Pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var w;a:{var Ra=k.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){w=Sa;break a}}w=""};function Ta(a){Ta[" "](a);return a}Ta[" "]=sa;var $a=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE");function ab(){this.g="";this.h=bb}var bb={};function y(a){var b=document;return q(a)?b.getElementById(a):a}function cb(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):db(b,a)[0]||null);return a||null}function db(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=Pa(g.split(/\s+/),b);h&&(f[d++]=a)}f.length=d;return f}return e}function eb(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function fb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ta(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function gb(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var hb=/^true$/.test("false"),ib=/^true$/.test("true");var jb=document,A=window;function B(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function kb(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};function lb(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;a.google_image_requests||(a.google_image_requests=[]);var e=a.document.createElement("img");if(c){var f=function(){if(c){var b=a.google_image_requests,d=Pa(b,e);0<=d&&Array.prototype.splice.call(b,d,1)}kb(e,"load",f);kb(e,"error",f)};B(e,"load",f);B(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=b;a.google_image_requests.push(e)};function mb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var nb=!!window.google_async_iframe_id,C=nb&&window.parent||window;function ob(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function pb(a){try{var b=A;a=a||A;for(var c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(d){}return!1}function qb(a,b){a&&mb(b,function(b,d){a.style[d]=b})}function D(a,b){for(var c=document.createDocumentFragment(),d=b.length,e=0;e<d;++e)c.appendChild(b[e]);a.appendChild(c)};function rb(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var sb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function tb(a,b){this.g=a;this.h=b}function ub(a,b){this.url=a;this.fa=!!b;this.depth=null};function vb(){this.j="&";this.l=!1;this.h={};this.m=0;this.g=[]}function wb(a,b){var c={};c[a]=b;return[c]}function xb(a,b,c,d,e){var f=[];gb(a,function(a,h){(a=yb(a,b,c,d,e))&&f.push(h+"="+a)});return f.join(b)}function yb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(yb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(xb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function F(a,b,c,d){a.g.push(b);a.h[b]=wb(c,d)}function zb(a,b,c,d){b=b+"//"+c+d;var e=Ab(a)-d.length;if(0>e)return"";a.g.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],m=0;m<h.length;m++){if(!e){d=null==d?g:d;break}var l=xb(h[m],a.j,",$");if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.j;break}else a.l&&(c=e,l[c-1]==a.j&&--c,b+=l.substr(0,c),c=a.j,e=0);d=null==d?g:d}}a="";null!=d&&(a=c+"trn="+d);return b+a}function Ab(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.j.length-1};function Bb(a,b,c,d){if(Math.random()<(d||a.g))try{if(c instanceof vb)var e=c;else e=new vb,gb(c,function(a,b){var c=e,d=c.m++;a=wb(b,a);c.g.push(d);c.h[d]=a});var f=zb(e,a.l,a.h,a.j+b+"&");f&&lb(k,f)}catch(g){}};var Cb=null;function Db(){var a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ya()}function Eb(){var a=void 0===a?k:a;return(a=a.performance)&&a.now?a.now():null};function Fb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var I=k.performance,Gb=!!(I&&I.mark&&I.measure&&I.clearMarks),Hb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Gb){var b;if(null===Cb){Cb="";try{a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}a&&(Cb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Cb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ib(){var a=Jb;this.h=[];this.j=a||k;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=Hb()||(null!=b?b:1>Math.random())}function Kb(a){a&&I&&Hb()&&(I.clearMarks("goog_"+a.uniqueId+"_start"),I.clearMarks("goog_"+a.uniqueId+"_end"))}Ib.prototype.start=function(a,b){if(!this.g)return null;var c=Eb()||Db();a=new Fb(a,b,c);b="goog_"+a.uniqueId+"_start";I&&Hb()&&I.mark(b);return a};function Lb(){var a=Mb;this.j=Nb;this.l=this.h;this.g=void 0===a?null:a}function Ob(a,b,c,d){try{if(a.g&&a.g.g){var e=a.g.start(b.toString(),3);var f=c();var g=a.g;c=e;if(g.g&&"number"==typeof c.value){var h=Eb()||Db();c.duration=h-c.value;var m="goog_"+c.uniqueId+"_end";I&&Hb()&&I.mark(m);g.g&&g.h.push(c)}}else f=c()}catch(l){g=!0;try{Kb(e),g=(d||a.l).call(a,b,new Pb(Qb(l),l.fileName,l.lineNumber),void 0,void 0)}catch(x){a.h(217,x)}if(!g)throw l;}return f}function Sb(a,b,c){var d=Tb;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return Ob(d,a,function(){return b.apply(c,f)},void 0)}}Lb.prototype.h=function(a,b,c,d,e){e=e||"jserror";try{var f=new vb;f.l=!0;F(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Pb(Qb(b),b.fileName,b.lineNumber));b.msg&&F(f,2,"msg",b.msg.substring(0,512));b.file&&F(f,3,"file",b.file);0<b.line&&F(f,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(E){}b=[g];f.g.push(5);f.h[5]=b;d=k;b=[];g=null;do{var h=d;if(fb(h)){var m=h.location.href;g=h.document&&h.document.referrer||null}else m=g,g=null;b.push(new ub(m||""));try{d=h.parent}catch(E){d=null}}while(d&&h!=d);m=0;for(var l=b.length-1;m<=l;++m)b[m].depth=l-m;h=k;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var x=b[l];x.url||(x.url=h.location.ancestorOrigins[l-1]||"",x.fa=!0)}var fa=new ub(k.location.href,!1);h=null;var ia=b.length-1;for(x=ia;0<=x;--x){var p=b[x];!h&&sb.test(p.url)&&(h=p);if(p.url&&!p.fa){fa=p;break}}p=null;var z=b.length&&b[ia].url;0!=fa.depth&&z&&(p=b[ia]);var n=new tb(fa,p);n.h&&F(f,6,"top",n.h.url||"");F(f,7,"url",n.g.url||"");Bb(this.j,e,f,c)}catch(E){try{Bb(this.j,e,{context:"ecmserr",rctx:a,msg:Qb(E),url:n&&n.g.url},c)}catch(Rb){}}return!0};function Qb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b}function Pb(a,b,c){rb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})}pa(Pb,rb);var Nb,Tb;if(nb&&!fb(C)){var Ub="."+jb.domain;try{for(;2<Ub.split(".").length&&!fb(C);)jb.domain=Ub=Ub.substr(Ub.indexOf(".")+1),C=window.parent}catch(a){}fb(C)||(C=window)}var Jb=C,Mb=new Ib;function Vb(){if(!Jb.google_measure_js_timing){var a=Mb;a.g=!1;a.h!=a.j.google_js_reporting_queue&&(Hb()&&Qa(a.h,Kb),a.h.length=0)}}Nb=new function(){var a=void 0===a?A:a;this.l="http:"===a.location.protocol?"http:":"https:";this.h="pagead2.googlesyndication.com";this.j="/pagead/gen_204?id=";this.g=.01};Tb=new Lb;"complete"==Jb.document.readyState?Vb():Mb.g&&B(Jb,"load",function(){Vb()});function J(a,b){return Sb(a,b,void 0)}var cc=Tb.h;function dc(a,b,c,d){this.xOffset=a;this.yOffset=b;this.height=d;this.width=c;this.g=null}function ec(){this.referenceFrameArray=[]}function fc(a){return{referenceFrameArray:a.referenceFrameArray.map(function(a){return{xOffset:a.xOffset,yOffset:a.yOffset,height:a.height,width:a.width}})}}function gc(a){var b=void 0===b?new ec:b;for(var c=0,d=0,e=0;20>e;++e){var f=a.document.body;var g=f.parentElement;var h=a===k.top?f.scrollHeight||g.scrollHeight:a.innerHeight;g=a===k.top?f.scrollWidth||g.scrollWidth:a.innerWidth;f=b;c=new dc(c,d,g,h);c.g=f;f.referenceFrameArray.push(c);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(m){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b};function hc(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}function K(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=Pa(hc(a),b))||(a.className+=0<a.className.length?" "+b:b)};function ic(a,b,c,d,e,f,g,h,m,l,x,fa,ia,p,z,n,E,Rb,ad,bd,za,cd,dd,M,ed,fd,V,Ua,Aa,ja,ka,gd,Wb,hd,id,jd){this.isMutableImpression=a;this.ra=!!M;this.O=!!za;this.u=null;if(this.O){a=new Ca;Da(a);for(var Xb in za){M=za[Xb];var G=Xb.toLowerCase();"height"==G&&(a.j=M);"width"==G&&(a.l=M);if("attribution"==G){var N=void 0,la=Ea(a),ma=M;for(N in ma){var Yb=ma[N];if("user_feedback_data"==N.toLowerCase()){var W=void 0,t=Ma(la);for(W in Yb){var O=Yb[W],P=W.toLowerCase();"is_mutable_impression"==P&&(t.w=O);"conversion_url"==P&&(t.l=O,t.v=!0);"encoded_cookie"==P&&(t.m=O,t.A=!0);"close_button_token"==P&&(t.j=O,t.u=!0);if("interaction_conversion"==P){var Q=t;null===Q.g&&(Q.g=new v);Ga(Q.g,O)}if("feedback_options"==P)for(Q=0;Q<O.length;++Q){var na=new Ha;t.o.push(na);var Va=void 0,Zb=O[Q];for(Va in Zb){var oa=Zb[Va],H=Va.toLowerCase();"text"==H&&(na.g=oa);if("conversion"==H){var u=na;null===u.h&&(u.h=new v);Ga(u.h,oa)}"undo_conversion"==H&&(u=na,null===u.l&&(u.l=new v),Ga(u.l,oa));if("survey"==H)for(H in u=na,null===u.j&&(u.j=new Ia),H=void 0,u=u.j,oa){var $b=oa[H];if("options"==H.toLowerCase())for(var Wa=0;Wa<$b.length;++Wa){var Xa=new Ja;u.g.push(Xa);var Ya=void 0,ac=$b[Wa];for(Ya in ac){var bc=ac[Ya],X=Ya.toLowerCase();"text"==X&&(Xa.g=bc);"conversion"==X&&(X=Xa,null===X.h&&(X.h=new v),Ga(X.h,bc))}}}}}"mute_panel_data"==P&&null===t.h&&(t.h=new La)}}}}if("flags"==G)for(G=0;G<M.length;++G)for(N in la=new Na,a.h.push(la),N=void 0,ma=M[G],ma)W=ma[N],t=N.toLowerCase(),"name"==t&&(la.g=W),"value"==t&&(la.h=W)}this.u=Ma(Ea(a))}this.ka=!!E;this.X=!!fd;this.enableNativeSurveyLoadIndicator=!!hd;this.M=p;this.la=n;this.T=null;this.creativeIndexSuffix=bd||"";try{var Za=jb.querySelector("[data-slide]")}catch(Md){Za=null}this.oa=Za?"true"===Za.getAttribute("data-slide"):!1;(this.$=""!==this.creativeIndexSuffix)&&void 0===A.goog_multislot_cache&&(A.goog_multislot_cache={});this.$&&!this.oa?(p=A.goog_multislot_cache.hd,void 0===p&&(p=!1,(n=jb.querySelector("[data-dim]"))?(n=n.getBoundingClientRect(),150<=n.right-n.left&&150<=n.bottom-n.top?p=!1:(E=document.body.getBoundingClientRect(),150>(1>=Math.abs(E.left-n.left)&&1>=Math.abs(E.right-n.right)?n.bottom-n.top:n.right-n.left)&&(p=!0))):p=!1,window.goog_multislot_cache.hd=p)):p=!1;this.Z=p;this.H=y("abgcp"+this.creativeIndexSuffix);this.v=y("abgc"+this.creativeIndexSuffix);this.g=y("abgs"+this.creativeIndexSuffix);this.L=y("abgl"+this.creativeIndexSuffix);this.l=y("abgb"+this.creativeIndexSuffix);this.V=y("abgac"+this.creativeIndexSuffix);y("mute_panel"+this.creativeIndexSuffix);this.N=cb("goog_delegate_attribution"+this.creativeIndexSuffix);this.Y=!!Ua;this.isDelegateAttributionActive=!!this.N&&!!V&&!cb("goog_delegate_disabled")&&!this.Y;this.I=!!Aa;this.sa=!!ja;this.qa=!!ka;if(this.g)a:for(V=this.g,Ua="A",Aa=V.childNodes,ja=0;ja<Aa.length;ja++){if(ka=Aa.item(ja),"undefined"!=typeof ka.tagName&&ka.tagName.toUpperCase()==Ua){V=ka;break a}}else V=null;this.h=V;this.pa=!0===cd;this.openAttributionInline=!0===dd;this.B="left"==z;this.w=this.isDelegateAttributionActive?this.N:y("cbb"+this.creativeIndexSuffix);this.ma=this.Z?"0"===this.creativeIndexSuffix:!0;(z=!!this.w)&&!(z=!!Wb)&&(z=this.w,z=z.classList?z.classList.contains("goog_dismissable_menu"):0<=Pa(hc(z),"goog_dismissable_menu"));this.enableDismissableMenu=z;this.na=!0===Rb;this.ta=za||null;this.m=b;this.j=c;this.W=d;this.D=e;this.ia=f;this.ja=g;this.U=h;this.ba=m;this.P=l;this.ca=x;this.K=fa;this.R=ia;this.C=this.F=this.A=null;this.aa=0;this.o=this.isDelegateAttributionActive?this.N:ad&&this.H?this.H:this.v;this.J=null;this.G=A;this.isMobileDevice=ed;this.ha=!!gd;this.ga=!!Wb;this.enableAltNativeJakeUI=(this.enableNativeJakeUI=!!id)&&!!jd};function jc(a,b){this.j=a;this.l=b;this.h=0;this.g=null}jc.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};function kc(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};function lc(a){k.setTimeout(function(){throw a;},0)}var mc;function nc(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==w.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==w.indexOf("Trident")&&-1==w.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.da;c.da=null;a()}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function oc(){this.h=this.g=null}var qc=new jc(function(){return new pc},function(a){a.reset()});oc.prototype.add=function(a,b){var c=qc.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function rc(){var a=sc,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function pc(){this.next=this.h=this.g=null}pc.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};pc.prototype.reset=function(){this.next=this.h=this.g=null};function tc(a,b){uc||vc();wc||(uc(),wc=!0);sc.add(a,b)}var uc;function vc(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);uc=function(){a.then(xc)}}else uc=function(){var a=xc,c;!(c=!ua(k.setImmediate))&&(c=k.Window&&k.Window.prototype)&&(c=-1==w.indexOf("Edge")&&k.Window.prototype.setImmediate==k.setImmediate);c?(mc||(mc=nc()),mc(a)):k.setImmediate(a)}}var wc=!1,sc=new oc;function xc(){for(var a;a=rc();){try{a.g.call(a.h)}catch(b){lc(b)}kc(qc,a)}wc=!1};function L(a){this.g=0;this.u=void 0;this.l=this.h=this.j=null;this.m=this.o=!1;if(a!=sa)try{var b=this;a.call(void 0,function(a){R(b,2,a)},function(a){R(b,3,a)})}catch(c){R(this,3,c)}}function yc(){this.next=this.context=this.h=this.j=this.g=null;this.l=!1}yc.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.l=!1};var zc=new jc(function(){return new yc},function(a){a.reset()});function Ac(a,b,c){var d=zc.get();d.j=a;d.h=b;d.context=c;return d}function Bc(){var a,b=new L(function(b){a=b});return new Cc(b,a)}L.prototype.then=function(a,b,c){return Dc(this,ua(a)?a:null,ua(b)?b:null,c)};L.prototype.then=L.prototype.then;L.prototype.$goog_Thenable=!0;L.prototype.cancel=function(a){0==this.g&&tc(function(){var b=new Ec(a);Fc(this,b)},this)};function Fc(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Fc(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Gc(c),Hc(c,e,3,b)))}a.j=null}else R(a,3,b)}function Ic(a,b){a.h||2!=a.g&&3!=a.g||Jc(a);a.l?a.l.next=b:a.h=b;a.l=b}function Dc(a,b,c,d){var e=Ac(null,null,null);e.g=new L(function(a,g){e.j=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.h=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof Ec?g(b):a(e)}catch(l){g(l)}}:g});e.g.j=a;Ic(a,e);return e.g}L.prototype.A=function(a){this.g=0;R(this,2,a)};L.prototype.w=function(a){this.g=0;R(this,3,a)};function R(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.A,f=a.w;if(d instanceof L){Ic(d,Ac(e||sa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(va(d))try{var m=d.then;if(ua(m)){Kc(d,m,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.j=null,Jc(a),3!=b||c instanceof Ec||Lc(a,c))}}function Kc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function Jc(a){a.o||(a.o=!0,tc(a.v,a))}function Gc(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}L.prototype.v=function(){for(var a;a=Gc(this);)Hc(this,a,this.g,this.u);this.o=!1};function Hc(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.g)b.g.j=null,Mc(b,c,d);else try{b.l?b.j.call(b.context):Mc(b,c,d)}catch(e){Nc.call(null,e)}kc(zc,b)}function Mc(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)}function Lc(a,b){a.m=!0;tc(function(){a.m&&Nc.call(null,b)})}var Nc=lc;function Ec(a){Oa.call(this,a)}Ba(Ec,Oa);Ec.prototype.name="cancel";function Cc(a,b){this.h=a;this.g=b};function S(){this.h=this.h;this.A=this.A}S.prototype.h=!1;S.prototype.g=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Oc(a){var b=[];Pc(new Qc,a,b);return b.join("")}function Qc(){}function Pc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ta(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Rc(d,c),c.push(":"),Pc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Sc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Tc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Rc(a,b){b.push('"',a.replace(Tc,function(a){var b=Sc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Sc[a]=b);return b}),'"')};function T(a,b,c,d,e,f){S.call(this);this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.w=r(this.H,this);this.F=f}pa(T,S);T.prototype.H=function(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(va(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,Uc(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if(q(a)&&(q(b)||va(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}};function Uc(a){var b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(Oc(b),a.m)}T.prototype.D=function(){if(1===this.status){try{this.j.postMessage&&Uc(this)}catch(a){}window.setTimeout(r(this.D,this),50)}};T.prototype.connect=function(a){a&&(this.u=a);B(window,"message",this.w);this.I&&this.D()};function Vc(a,b,c){a.B[b]=c}T.prototype.l=function(a,b){var c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(Oc(c),this.m)}catch(d){}};T.prototype.g=function(){this.status=3;kb(window,"message",this.w);S.prototype.g.call(this)};function Wc(a,b,c,d,e){T.call(this,a,b,c,d);this.C=e}pa(Wc,T);Wc.prototype.l=function(a,b){Xc(this,a,b)};function Yc(a,b){var c=new L(function(b,c){k.setTimeout(function(){return c(Error("apmc:nocon"))},4E3);$a?k.setTimeout(function(){return a.connect(b)},0):a.connect(b)});c.then(function(){return a.w(b)},function(){});return c}function Xc(a,b,c){c=void 0===c?{}:c;var d={};d.c=a.o;d.i=a.v;d.s=b;d.p=c;a.C&&(d.msg_type=a.C);$a?k.setTimeout(function(){a.j.postMessage(JSON.stringify(d),a.m)},0):a.j.postMessage(JSON.stringify(d),a.m)}function Zc(a,b){return new L(function(c,d){k.setTimeout(function(){return d(Error("apmc:timeout"))},4E3);try{var e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){var g=new Wc(f,a.source,a.origin,!0);Yc(g,a).then(function(){return c(g)},function(){g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(h){d(Error("apmc:error"))}})};function $c(a,b){S.call(this);this.w=a;this.o=null;this.m=Bc();this.l=!1;this.v=b;this.j=Sb(276,this.u,this)}pa($c,S);function kd(a){var b={};b=(b.msg_type=a.w,b);B(A,"message",a.j);a=A.top;b.googMsgType="sth";a.postMessage(Oc(b),"*")}$c.prototype.u=function(a){var b=this;pb(a.source)&&!this.l&&(this.l=!0,Zc(a,this.v).then(function(a){kb(A,"message",b.j);b.o=a;b.m.g&&b.m.g(a)},function(){b.l=!1}))};$c.prototype.g=function(){kb(A,"message",this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}S.prototype.g.call(this)};function ld(a,b,c){this.j=a;this.h=b;this.g=c};function md(a,b){var c=this;this.g=a;if(!this.g.sa){a="undefined"!=typeof SVGElement&&"undefined"!=typeof document.createElementNS;"img"==this.g.la&&(a=!1);if(!this.g.Z||this.g.ga||this.g.ma)this.g.isDelegateAttributionActive||this.g.I||(a?"cn"==this.g.M?nd(this):"adchoices"==this.g.M?od(this):"adsbygoogle"==this.g.M?pd(this):qd(this):qd(this)),this.o=!1,this.h=null,this.g.h&&this.g.qa&&(this.g.u&&this.g.u.v&&this.g.u.u&&this.g.u.A&&(this.h=new ld(this.g.u.l,this.g.u.j,this.g.u.m)),B(this.g.h,"click",J(452,function(){if(!c.o){c.o=!0;var a=new v;Ga(a,{label:"closebutton_whythisad_click",S:"1",ea:!1});if(c.h){var b=c.h,d=b.j+"&label="+a.label();a.S()&&(d+="&label_instance="+a.S());a.ea()&&(d+="&cbt="+b.h);b.g&&(d+="&cid="+b.g);lb(window,d)}}}))),this.A=J(367,function(){return rd(c)}),this.w=J(368,function(){return rd(c)}),this.v=J(369,function(){sd(c,500)}),this.j=J(370,function(){sd(c,4E3)}),this.u=J(371,function(a){return c.preventDefault(a)});else{a={display:"none"};var d={width:"15px",height:"15px"};this.g.isMobileDevice?(qb(this.g.l,a),qb(this.g.g,a),qb(this.g.H,d),qb(this.g.v,d)):qb(this.g.v,a)}if(this.g.ra){var e=J(365,function(a){var b=A.goog_interstitial_display;b&&(b(a),a&&(a.stopPropagation(),a.preventDefault()))});B(this.g.o,"click",function(a){return e(a)})}else this.g.O&&this.g.isMobileDevice?B(this.g.o,"click",b):(this.g.O&&!this.g.isMobileDevice&&this.g.w&&B(this.g.w,"click",b),this.g.ka?rd(this):(B(this.g.o,"mouseover",this.A),B(this.g.o,"mouseout",this.v),B(this.g.o,"mouseup",this.j),B(this.g.o,"touchstart",this.w),B(this.g.o,"touchend",this.j),B(this.g.o,"touchcancel",this.j),this.g.h&&B(this.g.h,"click",function(a){return c.u(a)})));this.m=new $c("xcat","xca-ch");this.g.X&&td(this)}this.g.enableNativeJakeUI&&this.g.enableNativeSurveyLoadIndicator&&K(this.g.V,"abgnac");this.l=null;this.g.isDelegateAttributionActive?(K(document.body,"goog_delegate_active"),K(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.w&&eb(this.g.w),this.l=setTimeout(function(){K(document.body,"jar")},this.g.X?750:100));this.g.Y&&K(document.body,"goog_delegate_disabled");this.g.ha&&A.addEventListener("load",b)}function td(a){a.m.m.h.then(function(b){Vc(b,"xca-rdy",function(){a.g.J=gc(a.g.G);var c={abgp:a.g.G.abgp,name:a.g.G.name,abg_href:a.g.L.getAttribute("href"),abg_target:a.g.L.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.H,is_rtl:a.g.B,has_aria_hidden:"true"===a.g.L.getAttribute("aria-hidden"),serializable_reference_frame_set:fc(a.g.J)};b.l("render-xca",c)});Vc(b,"req-pos-xca",function(){a.g.J=gc(a.g.G);var c={serializable_reference_frame_set:fc(a.g.J)};b.l("pos-xca",c)});Vc(b,"xca-dis",function(){clearTimeout(a.l);a.l=null;K(document.body,"jaa")});Vc(b,"xca-clk",function(){a.g.T.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})});kd(a.m)}function ud(a){var b=a.g.V;b.style.display="block";a.g.enableNativeJakeUI&&a.g.enableNativeSurveyLoadIndicator&&window.requestAnimationFrame(function(){K(b,"abgacfo")})}function nd(a){var b=U("\u5e7f\u544a",2,0,24),c=b.childNodes.item(0);vd(c,{"class":"abgi","font-size":"11px","font-weight":"bold"});D(a.g.l,[Y(wd(),b)]);b=a.g.B?U("\u5e7f\u544a Google",2,0,60):U("Google \u5e7f\u544a",3.5,0,60);c=b.childNodes.item(0);vd(c,{"font-size":"11px"});D(a.g.h,[Y(xd(a,a.g.j,a.g.D),b)])}function od(a){var b=yd;D(a.g.l,[Y(wd(),b("0px"))]);if(a.g.B){var c=a.g.m+2;var d=0}else c=5,d=a.g.j-a.g.m;a.g.A=U(a.g.ba,c,a.g.R,a.g.P);D(a.g.h,[Y(xd(a,a.g.j,a.g.D),b(d+"px"),a.g.A)])}function wd(){return Z("rect",{"class":"abgbg",width:"100%",height:"100%"})}function xd(a,b,c){var d="M";a.g.na?(d+="0,"+c+"L"+b+","+c,d=a.g.B?d+("L"+b+",4s0,-4,-4,-4L0,0"):d+("L"+b+",0L4,0s-4,0,-4,4")):(d+="0,0L"+b+",0",d=a.g.B?d+("L"+b+","+(c-4)+"s0,4,-4,4L0,"+c):d+("L"+b+","+c+"L4,"+c+"s-4,0,-4,-4"));return Z("path",{"class":"abgbg",d:d+"z"})}function U(a,b,c,d){b=Z("svg",{"class":"abgtxt",x:b+"px",y:11+c+"px",width:d+"px"});c=Z("text");a=document.createTextNode(a);D(b,[c]);D(c,[a]);return b}function zd(a,b){a=a.childNodes.item(0);var c=a.getComputedTextLength();0!=c&&a.setAttribute("transform","scale("+b/c+")")}function qd(a){var b=Ad(a.g.ia,a.g.U,a.g.m,a.g.W);D(a.g.l,[b]);b=Ad(a.g.ja,a.g.U,a.g.j,a.g.D);a.g.h.appendChild(b);b.width=a.g.j}function Ad(a,b,c,d){var e=document.createElement("IMG");e.src=a;e.alt=b;e.setAttribute("border","0");e.width=c;e.height=d;return e}function pd(a){var b=Bd,c=wd(),d=b("0px");D(a.g.l,[Y(c,d)]);if(a.g.B){var e=0;d=a.g.m+2;var f=a.g.j-a.g.K-5}else d=5,f=a.g.j-a.g.K-2-a.g.m,e=a.g.j-a.g.m;c=xd(a,a.g.j,a.g.D);a.g.A=U(a.g.ba,d,a.g.R,a.g.P);""!=a.g.ca&&(a.g.F=U(a.g.ca,f,a.g.R,a.g.K));b=b(e+"px");null!=a.g.h&&(b=a.g.F?Y(c,a.g.A,a.g.F,b):Y(c,a.g.A,b),D(a.g.h,[b]))}function rd(a){window.clearTimeout(a.g.C);a.g.C=null;a.g.g&&"block"==a.g.g.style.display||(a.g.aa=ya(),!a.g.I&&a.g.j&&(a.g.v.style.width=a.g.j+"px",a.g.v.style.height=a.g.D+"px"),a.g.l&&a.g.g&&(a.g.l.style.display="none",a.g.g.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")),a.g.I||(a.g.A&&zd(a.g.A,a.g.P),a.g.F&&zd(a.g.F,a.g.K)))}function sd(a,b){window.clearTimeout(a.g.C);a.g.C=window.setTimeout(function(){return Cd(a)},b)}function Cd(a){window.clearTimeout(a.g.C);a.g.C=null;!a.g.I&&a.g.m&&(a.g.v.style.width=a.g.m+"px",a.g.v.style.height=a.g.W+"px");a.g.l&&a.g.g&&(a.g.l.style.display="block",a.g.g.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")}md.prototype.preventDefault=function(a){if(this.g.g&&"block"==this.g.g.style.display&&500>ya()-this.g.aa)ob(a);else if(this.g.openAttributionInline){var b=this.g.h.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&ob(a):window.openAttribution&&(window.openAttribution(b),ob(a))}else this.g.pa&&(b=this.g.h.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&ob(a):window.openSystemBrowser&&(window.openSystemBrowser(b),ob(a)))};function Y(a){for(var b=Z("svg",{width:"100%",height:"100%"}),c=0;c<arguments.length;c++)b.appendChild(arguments[c]);return b}function Z(a,b){a=document.createElementNS("http://www.w3.org/2000/svg",a);vd(a,b);return a}function vd(a,b){for(var c in b)a.setAttribute(c,b[c])}function yd(a){a=Z("svg",{"class":"abgi",x:a});var b=Z("circle",{cx:"6",cy:"6",r:"0.67"}),c=Z("path",{d:"M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"});D(a,[b,c]);return a}function Dd(a,b){return"a"+a+","+a+",0,1,"+b+",0,"+2*a+"a"+a+","+a+",0,1,"+b+",0,"+-2*a}function Bd(a){a=Z("svg",{"class":"abgi",x:a});var b=Z("path",{d:"M7.5,1.5"+Dd(6,0)+"m0,1"+Dd(5,1)+"ZM6.625,11l1.75,0l0,-4.5l-1.75,0ZM7.5,3.75"+Dd(1,0)+"Z"});D(a,[b]);return a};function Ed(){var a=Fd,b=window.abgp,c=this;if(!a)throw Error("bad ctor");this.h=a;this.j=b;this.g=!1;cb("goog_delegate_deferred")?void 0!==A.goog_delegate_deferred_token?Gd(this):(a=function(){Gd(c)},A.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Gd(this)}function Gd(a){if(!a.g){a.g=!0;A.goog_delegate_deferred_token=void 0;var b=a.h;a=a.j;a=new ic(a.imi,a.hw,a.sw,a.hh,a.sh,a.himg,a.simg,a.alt,a.t,a.tw,a.t2,a.t2w,a.tbo,a.att,a.halign,a.ff,a.fe,a.iba,a.lttp,a.ci,a.ufdj,a.opi,a.opai,a.ti,a.mob,a.eaca,a.eda,a.fdda,a.eisa,a.ulf,a.swc,a.aeol,a.abe,a.nsli,a.nju,a.anju);new b(a)}};function Hd(){a:{if(hb)try{var a=A.google_cafe_host||A.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=ib?"https":"http";k.location&&"https:"==k.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20181003/r20110914/abg_survey.js"].join("")};function Id(){var a=Bc();this.promise=a.h;this.resolve=a.g}function Jd(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Id,b&&b());return a[5]}function Kd(){var a=window,b=Hd();return Jd(a,function(){var c=a.document,d=c.createElement("script"),e=new ab;e.g=b;e instanceof ab&&e.constructor===ab&&e.h===bb?e=e.g:(ta(e),e="type_error:TrustedResourceUrl");d.src=e;if(null===ra){b:{e=k.document;if((e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&qa.test(e))break b;e=null}ra=e||""}(e=ra)&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Fd(a){var b=this;this.g=a;this.j=J(359,function(){return Ld(b)});this.h=new md(this.g,this.j)}function Ld(a){Ob(Tb,373,function(){Cd(a.h);ud(a.h)},cc);window.goog_extracreative_attribution||Kd().then(function(b){b.createAttributionCard(a.g.ta,a.g);a.g.T=b;b.expandAttributionCard()})}"undefined"!=typeof window.abgp&&new Ed;}).call(this);
