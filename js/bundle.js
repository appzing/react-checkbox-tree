!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){!function(e,t){n(7);var a=function(){var e=n(8),a=n(3),r=n(4);e.render(e.createElement(a,{data:r}),t.getElementById("react-root"))};e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame}(),e.requestAnimationFrame?e.requestAnimationFrame(a):"loaded"===t.readyState?a():e.onload=a}(window,document)},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".collapsed ul{display:none}",""])},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}},function(e,t,n){var a=n(5),r=React.createClass({displayName:"Tree",getInitialState:function(){return{data:this.props.data}},handleChange:function(e){var t=e.target.checked,n=e.target.getAttribute("data-key"),a=function(e){e.id===n&&(e.checked=t,e.children&&e.children.forEach(r)),e.children&&e.children.forEach(a)},r=function(e){e.checked=t,e.children&&e.children.forEach(r)},i=Object.create(this.state.data);i.forEach(a),this.setState({data:i})},render:function(){return React.createElement("ul",{className:"checkbox-tree"},this.state.data.map(function(e){return React.createElement(a,{key:e.id,node:e,handleChange:this.handleChange})},this))}});e.exports=r},function(e){e.exports=[{id:"A",label:"A",checked:!0},{id:"B",label:"B"},{id:"C",label:"C",children:[{id:"C-A",label:"C-A"},{id:"C-B",label:"C-B",checked:!0},{id:"C-C",label:"C-C",children:[{id:"C-C-A",label:"C-C-A"},{id:"C-C-B",label:"C-C-B"},{id:"C-C-C",label:"C-C-C",checked:!0}]}]},{id:"D",label:"D"}]},function(e){var t=React.createClass({displayName:"TreeNode",getInitialState:function(){return{collapsed:!1}},handleClick:function(){this.setState({collapsed:!this.state.collapsed})},render:function(){var e,n=this.state.collapsed?"collapsed":"",a=this.props.node;return a.children&&(e=a.children.map(function(e,n){return React.createElement("ul",{key:[a.id,n].join("/")},React.createElement(t,{key:a.id,node:e,handleChange:this.props.handleChange}))},this)),React.createElement("li",{className:n},React.createElement("span",{onClick:this.handleClick,onTouchEnd:this.handleClick},void 0===a.children?"":String.fromCharCode(this.state.collapsed?43:8722)),React.createElement("input",{type:"checkbox",checked:a.checked||!1,onChange:this.props.handleChange,"data-key":a.id}),React.createElement("span",{onClick:this.handleClick,onTouchEnd:this.handleClick},a.label),e)}});e.exports=t},function(e){function t(e,t){for(var n=0;n<e.length;n++){var a=e[n],i=c[a.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](a.parts[s]);for(;s<a.parts.length;s++)i.parts.push(r(a.parts[s],t))}else{for(var o=[],s=0;s<a.parts.length;s++)o.push(r(a.parts[s],t));c[a.id]={id:a.id,refs:1,parts:o}}}}function n(e){for(var t=[],n={},a=0;a<e.length;a++){var r=e[a],i=r[0],s=r[1],o=r[2],c=r[3],l={css:s,media:o,sourceMap:c};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function a(){var e=document.createElement("style"),t=u();return e.type="text/css",t.appendChild(e),e}function r(e,t){var n,r,i;if(t.singleton){var c=f++;n=h||(h=a()),r=s.bind(null,n,c,!1),i=s.bind(null,n,c,!0)}else n=a(),r=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function i(e,t,n){var a=["/** >>"+t+" **/","/** "+t+"<< **/"],r=e.lastIndexOf(a[0]),i=n?a[0]+n+a[1]:"";if(e.lastIndexOf(a[0])>=0){var s=e.lastIndexOf(a[1])+a[1].length;return e.slice(0,r)+i+e.slice(s)}return e+i}function s(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=i(e.styleSheet.cssText,t,r);else{var s=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function o(e,t){var n=t.css,a=t.media,r=t.sourceMap;if(r&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(i){}if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c={},l=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=l(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),u=l(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,f=0;e.exports=function(e,a){a=a||{},"undefined"==typeof a.singleton&&(a.singleton=d());var r=n(e);return t(r,a),function(e){for(var i=[],s=0;s<r.length;s++){var o=r[s],l=c[o.id];l.refs--,i.push(l)}if(e){var d=n(e);t(d,a)}for(var s=0;s<i.length;s++){var l=i[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete c[l.id]}}}}},function(e,t,n){var a=n(1);"string"==typeof a&&(a=[[e.id,a,""]]);n(6)(a,{})},function(e){e.exports=React}]);