webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(298)},298:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=t(299),r=n(o),a=t(302),u=n(a),i=t(372),l=n(i),s=t(391),c=n(s),f=t(586),d=n(f),p=t(590),v=(n(p),t(591)),h=n(v),g=t(593),m=n(g);t(595),t(597),r.default.module("app",[u.default,l.default,c.default,h.default,m.default]).config(["$locationProvider","$compileProvider",function(e,t){"ngInject";e.html5Mode(!0).hashPrefix("!")}]).component("app",d.default)},372:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(373),u=n(a),i=t(382),l=n(i),s=t(388),c=n(s),f=t(390),d=n(f);window.$=d.default;var p=r.default.module("app.common",[u.default,l.default,c.default]).name;exports.default=p},373:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(302),u=n(a),i=t(374),l=n(i),s=r.default.module("navbar",[u.default]).component("navbar",l.default).name;exports.default=s},374:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(375),r=n(o),a=t(376),u=n(a);t(378);var i={restrict:"E",bindings:{},template:r.default,controller:u.default};exports.default=i},375:function(e,exports){e.exports='<nav class="navbar">\n  <div class="logo">\n    <span>KNN-test</span>\n  </div>\n</nav>\n'},376:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(377),r=n(o),a=function e(){(0,r.default)(this,e),this.name="navbar"};exports.default=a},378:function(e,exports,t){var n=t(379);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},379:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%;font:62.5% Roboto,sans-serif;background-color:#37474f!important}.navbar{height:54px;background-color:#0277bd}.navbar .logo,.navbar .nav-links{color:#f5f5f5;padding:18px;font-weight:700;font-size:16px}.navbar .logo{color:#f5f5f5;margin-right:50%}.navbar .nav-links span{color:#f5f5f5;font-size:1.6rem}",""])},382:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(302),u=n(a),i=t(383),l=n(i),s=r.default.module("hero",[u.default]).component("hero",l.default).name;exports.default=s},383:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(384),r=n(o),a=t(385),u=n(a);t(386);var i={restrict:"E",bindings:{},template:r.default,controller:u.default};exports.default=i},384:function(e,exports){e.exports='<section class="hero"></section>\n'},385:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(377),r=n(o),a=function e(){(0,r.default)(this,e),this.name="hero"};exports.default=a},386:function(e,exports,t){var n=t(387);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},387:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%;font:62.5% Roboto,sans-serif;background-color:#37474f!important}.hero{background-color:#263238;height:20px}.hero *{color:#f5f5f5}",""])},388:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(389),u=n(a),i=r.default.module("user",[]).factory("User",u.default).name;exports.default=i},389:function(e,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){var e={},t=function(){return e},n=function(){return e.isSignedIn};return{getUser:t,isSignedIn:n}};exports.default=t},391:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(392),u=n(a),i=t(399),l=n(i),s=t(405),c=n(s),f=t(568),d=n(f),p=r.default.module("app.components",[u.default,l.default,c.default,d.default]).name;exports.default=p},392:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(302),u=n(a),i=t(393),l=n(i),s=t(398),c=n(s),f=r.default.module("home",[u.default,c.default]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";e.state("home",{url:"/knn/",component:"home"})}]).component("home",l.default).name;exports.default=f},393:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(394),r=n(o),a=t(395),u=n(a);t(396);var i={restrict:"E",bindings:{},template:r.default,controller:u.default};exports.default=i},394:function(e,exports){e.exports='<navbar></navbar>\n<header>\n  <hero></hero>\n</header>\n<div class="row">\n  <div class="col-xs-3">\n    <testing></testing>\n  </div>\n  <div class="col-xs-9">\n    <viewer></viewer>\n  </div>\n</div>'},395:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(377),r=n(o),a=function e(){"ngInject";(0,r.default)(this,e)};exports.default=a},396:function(e,exports,t){var n=t(397);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},397:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,".home{color:red}.homeScrollbarWrapper{color:#000;margin:30px;height:10vh}",""])},398:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e={td:[],qd:[],preparedTD:[],preparedQD:[],neighbors:{}};return e}Object.defineProperty(exports,"__esModule",{value:!0});var r=t(299),a=n(r),u=a.default.module("StorageService",[]).factory("StorageService",o).name;exports.default=u},399:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(302),u=n(a),i=t(400),l=n(i),s=r.default.module("about",[u.default]).config(["$stateProvider",function(e){"ngInject";e.state("about",{url:"/about",component:"about"})}]).component("about",l.default).name;exports.default=s},400:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(401),r=n(o),a=t(402),u=n(a);t(403);var i={restrict:"E",bindings:{},template:r.default,controller:u.default};exports.default=i},401:function(e,exports){e.exports="<navbar></navbar>\n<h1>{{ $ctrl.name }}</h1>\n<section>\n  About us.\n</section>\n"},402:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(377),r=n(o),a=function e(){(0,r.default)(this,e),this.name="about"};exports.default=a},403:function(e,exports,t){var n=t(404);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},404:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,".about{color:red}",""])},405:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(406),u=n(a),i=t(408),l=n(i),s=t(398),c=n(s),f=t(410),d=n(f),p=t(523),v=n(p),h=t(559),g=n(h),m=r.default.module("testing",[u.default,l.default,c.default,d.default,v.default]).component("testing",g.default).name;exports.default=m},410:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){"ngInject";function o(e,t,n,o){function r(){var t=(0,a.default)(e),n=t.length,o=0;setTimeout(function(){u(t,o,n)},0)}function u(r,a,i){for(var l=new Date;Number(new Date-Number(l)<o)&&e.hasOwnProperty([r[a]]);)t.apply(this,[e[r[a]],r[a]]),a++;a<i?setTimeout(function(){u(r,a,i)},0):a>=i&&n.apply(this,[e])}o=o||1,e?(0,a.default)(e).length?r():console.error(e," is empty"):console.error("First parameter must be an array or object.")}function r(){var e=n.defer(),o=void 0;return o=window.location.href.split("github").length?"../dist/testData.txt":"./testData.txt",t({method:"GET",url:"./testData.txt"}).then(function(t){e.resolve(t)},function(e){console.log("failure: ",e)}),e.promise}function u(){var e=n.defer(),o=void 0;return o=window.location.href.split("github").length?"../dist/queryData.txt":"./queryData.txt",t({method:"GET",url:o}).then(function(t){e.resolve(t)},function(e){console.log("failure: ",e)}),e.promise}function i(){for(var t=0;2e5!==t;){var n=Math.ceil(-70),o=Math.floor(40),r=Math.ceil(-60),a=Math.floor(60),u=Math.random()*(o-n)+n,i=Math.random()*(a-r)+r;e.td.push([u,i]),t++}}function l(){for(var t=0;2e5!==t;){var n=Math.ceil(-70),o=Math.floor(40),r=Math.ceil(-60),a=Math.floor(60),u=Math.random()*(o-n)+n,i=Math.random()*(a-r)+r;e.qd.push([u,i]),t++}}var s={generateTestData:i,getTestData:r,generateQueryData:l,getQueryData:u,asyncEach:o};return s}o.$inject=["StorageService","$http","$q"],Object.defineProperty(exports,"__esModule",{value:!0});var r=t(411),a=n(r),u=t(299),i=n(u),l=t(446),s=(n(l),t(520)),c=(n(s),i.default.module("DataService",[]).factory("DataService",o).name);exports.default=c},523:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,o){"ngInject";function r(){var o=e.defer(),r=[];return r.push(n.getTestData()),r.push(n.getQueryData()),e.all(r).then(function(e){t.td=e[0].data,t.qd=e[1].data,o.resolve(),u()}),o.promise}function u(){var n=(e.defer(),[]);n.push(l(t.td,t.preparedTD)),n.push(l(t.qd,t.preparedQD)),e.all(n).then(function(){console.log("Processed: ",t.preparedTD," test locations"),console.log("Processed: ",t.preparedQD," query locations"),s().then(function(){console.log("StorageService.neighbors: ",t.neighbors)})})}function l(t,o){for(var r=e.defer(),a=Math.ceil(t.length/5e4),u=0,i=function(){var e=new Worker("./prepare.worker.js"),i=new Float32Array(t.splice(0,5e4)).buffer;e.postMessage(i,[i]),e.onmessage=function(t){var i=t.data;n.asyncEach(i,function(e){o.push(e)},function(){u++,e.terminate(),u===a&&r.resolve()},100)}};t.length;)i();return r.promise}function s(){function o(){var e=new Worker("./neighbors.worker.js");e.postMessage({testData:t.preparedTD,queryData:t.preparedQD.splice(0,5e4)}),e.onmessage=function(s){var c={},f={};n.asyncEach(s.data,function(e,t){var n=new Float32Array(e);for(c[t]=[].concat((0,a.default)(n)),f[t]=[];c[t].length;)f[t].push(c[t].splice(0,2))},function(n){i.default.merge(t.neighbors,f),l++,e.terminate(),l===u?r.resolve():o()},1)}}console.log("starting findNeighbors");var r=e.defer(),u=Math.ceil(t.preparedQD.length/5e4),l=0;return t.preparedQD.length?o():r.resolve(),r.promise}var c={iterateTestData:u,prepareData:l,findNeighbors:s,getData:r};return c}o.$inject=["$q","StorageService","DataService","ViewerService"],Object.defineProperty(exports,"__esModule",{value:!0});var r=t(524),a=n(r),u=t(299),i=n(u),l=t(547),s=(n(l),t(551)),c=(n(s),t(553)),f=(n(c),t(458)),d=(n(f),t(555)),p=(n(d),i.default.module("TestingService",[]).factory("TestingService",o).name);exports.default=p},559:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(560),r=n(o),a=t(561),u=n(a);t(566);var i={restrict:"E",bindings:{},template:r.default,controller:u.default};exports.default=i},560:function(e,exports){e.exports='<div style="color:white">\r\n    <div align="center">\r\n        <button class="btn btn-default" ng-click="$ctrl.getData()">Generate Data</button>\r\n    </div>\r\n</div>'},561:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(377),r=n(o),a=t(562),u=n(a),i=function(){function e(t,n){"ngInject";(0,r.default)(this,e),this.TestingService=t,this.$q=n}return e.$inject=["TestingService","$q"],(0,u.default)(e,[{key:"getData",value:function(){this.TestingService.getData()}}]),e}();exports.default=i},566:function(e,exports,t){var n=t(567);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},567:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,"",""])},568:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(299),r=n(o),a=t(406),u=n(a),i=t(408),l=n(i),s=t(398),c=n(s),f=t(410),d=(n(f),t(569)),p=n(d),v=t(585),h=n(v),g=r.default.module("viewer",[u.default,l.default,c.default,h.default]).component("viewer",p.default).name;exports.default=g},569:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(570),r=n(o),a=t(571),u=n(a);t(572),t(573),t(578),t(579),t(581),t(583);var i={restrict:"E",bindings:{},template:r.default,controller:u.default};exports.default=i},570:function(e,exports){e.exports='<div id="map" alt="Viewer"></div>'},571:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(377),r=n(o),a=function e(t){"ngInject";(0,r.default)(this,e),L.control.layers(t.baseMaps).addTo(t.map)};a.$inject=["ViewerService"],exports.default=a},583:function(e,exports,t){var n=t(584);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},584:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,"#map{height:80vh}.queryIcon{background-color:red}",""])},585:function(e,exports){"use strict";function t(){"ngInject";function e(e){console.log("adding to map");var t=[],o=L.markerClusterGroup({chunkedLoading:!0,zoomToBoundsOnClick:!1});for(var r in e){var a=r.split(":"),u=L.marker(L.latLng(a[0],a[1]),{icon:L.divIcon({className:"queryIcon"})});t.push(u),e[r].forEach(function(e){var n=L.marker(L.latLng(e[0],e[1]));t.push(n)})}o.addLayers(t),n.map.addLayer(o)}var t=L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}),n={map:L.map("map",{center:[39.73,-104.99],zoom:10,layers:[t]}),baseMaps:{Base:t},populateMap:e};return n}Object.defineProperty(exports,"__esModule",{value:!0});var n=angular.module("ViewerService",[]).factory("ViewerService",t).name;exports.default=n},586:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var o=t(587),r=n(o);t(588);var a={template:r.default,restrict:"E"};exports.default=a},587:function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="app">\n  <div ui-view></div>\n</div>\n'},588:function(e,exports,t){var n=t(589);"string"==typeof n&&(n=[[e.id,n,""]]);t(381)(n,{});n.locals&&(e.exports=n.locals)},589:function(e,exports,t){exports=e.exports=t(380)(),exports.push([e.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([e.id,"body{height:100%;font:62.5% Roboto,sans-serif;background-color:#37474f!important}.app{background-color:#37474f;font-size:16px}",""])}});
//# sourceMappingURL=app.bundle.js.map