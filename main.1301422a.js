parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {function X(a){return a&&a.__esModule?{d:a.default}:{d:a}}var a={};var O=function(){var t={exports:this};return function(t,n,s){function r(t){var n,s=this,r=(n=4022871197,function(t){t=t.toString();for(var s=0;s<t.length;s++){var r=.02519603282416938*(n+=t.charCodeAt(s));r-=n=r>>>0,n=(r*=n)>>>0,n+=4294967296*(r-=n)}return 2.3283064365386963e-10*(n>>>0)});s.next=function(){var t=2091639*s.s0+2.3283064365386963e-10*s.c;return s.s0=s.s1,s.s1=s.s2,s.s2=t-(s.c=0|t)},s.c=1,s.s0=r(" "),s.s1=r(" "),s.s2=r(" "),s.s0-=r(t),s.s0<0&&(s.s0+=1),s.s1-=r(t),s.s1<0&&(s.s1+=1),s.s2-=r(t),s.s2<0&&(s.s2+=1),r=null}function e(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function o(t,n){var s=new r(t),o=n&&n.state,u=s.next;return u.int32=function(){return 4294967296*s.next()|0},u.double=function(){return u()+1.1102230246251565e-16*(2097152*u()|0)},u.quick=u,o&&("object"==typeof o&&e(o,s),u.state=function(){return e(s,{})}),u}n&&n.exports?n.exports=o:s&&s.amd?s(function(){return o}):this.alea=o}(0,"object"==typeof t&&t,!1),t.exports}.call({});var W=function(){var t={exports:this};return function(t,n,r){function e(t){var n=this,r="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:r+=t;for(var e=0;e<r.length+64;e++)n.x^=0|r.charCodeAt(e),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function u(t,n){var r=new e(t),u=n&&n.state,x=function(){return(r.next()>>>0)/4294967296};return x.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},x.int32=r.next,x.quick=x,u&&("object"==typeof u&&o(u,r),x.state=function(){return o(r,{})}),x}n&&n.exports?n.exports=u:r&&r.amd?r(function(){return u}):this.xor128=u}(0,"object"==typeof t&&t,!1),t.exports}.call({});var V=function(){var t={exports:this};return function(t,n,e){function r(t){var n=this,e="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:e+=t;for(var r=0;r<e.length+64;r++)n.x^=0|e.charCodeAt(r),r==e.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function o(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function x(t,n){var e=new r(t),x=n&&n.state,u=function(){return(e.next()>>>0)/4294967296};return u.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},u.int32=e.next,u.quick=u,x&&("object"==typeof x&&o(x,e),u.state=function(){return o(e,{})}),u}n&&n.exports?n.exports=x:e&&e.amd?e(function(){return x}):this.xorwow=x}(0,"object"==typeof t&&t,!1),t.exports}.call({});var U=function(){var t={exports:this};return function(t,n,e){function r(t){var n=this;n.next=function(){var t,e,r=n.x,o=n.i;return t=r[o],e=(t^=t>>>7)^t<<24,e^=(t=r[o+1&7])^t>>>10,e^=(t=r[o+3&7])^t>>>3,e^=(t=r[o+4&7])^t<<7,t=r[o+7&7],e^=(t^=t<<13)^t<<9,r[o]=e,n.i=o+1&7,e},function(t,n){var e,r=[];if(n===(0|n))r[0]=n;else for(n=""+n,e=0;e<n.length;++e)r[7&e]=r[7&e]<<15^n.charCodeAt(e)+r[e+1&7]<<13;for(;r.length<8;)r.push(0);for(e=0;e<8&&0===r[e];++e);for(8==e?r[7]=-1:r[e],t.x=r,t.i=0,e=256;e>0;--e)t.next()}(n,t)}function o(t,n){return n.x=t.x.slice(),n.i=t.i,n}function i(t,n){null==t&&(t=+new Date);var e=new r(t),i=n&&n.state,u=function(){return(e.next()>>>0)/4294967296};return u.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},u.int32=e.next,u.quick=u,i&&(i.x&&o(i,e),u.state=function(){return o(e,{})}),u}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xorshift7=i}(0,"object"==typeof t&&t,!1),t.exports}.call({});var Q=function(){var t={exports:this};return function(t,n,r){function e(t){var n=this;n.next=function(){var t,r,e=n.w,o=n.X,i=n.i;return n.w=e=e+1640531527|0,r=o[i+34&127],t=o[i=i+1&127],r^=r<<13,t^=t<<17,r^=r>>>15,t^=t>>>12,r=o[i]=r^t,n.i=i,r+(e^e>>>16)|0},function(t,n){var r,e,o,i,u,c=[],a=128;for(n===(0|n)?(e=n,n=null):(n+="\0",e=0,a=Math.max(a,n.length)),o=0,i=-32;i<a;++i)n&&(e^=n.charCodeAt((i+32)%n.length)),0===i&&(u=e),e^=e<<10,e^=e>>>15,e^=e<<4,e^=e>>>13,i>=0&&(u=u+1640531527|0,o=0==(r=c[127&i]^=e+u)?o+1:0);for(o>=128&&(c[127&(n&&n.length||0)]=-1),o=127,i=512;i>0;--i)e=c[o+34&127],r=c[o=o+1&127],e^=e<<13,r^=r<<17,e^=e>>>15,r^=r>>>12,c[o]=e^r;t.w=u,t.X=c,t.i=o}(n,t)}function o(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function i(t,n){null==t&&(t=+new Date);var r=new e(t),i=n&&n.state,u=function(){return(r.next()>>>0)/4294967296};return u.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},u.int32=r.next,u.quick=u,i&&(i.X&&o(i,r),u.state=function(){return o(r,{})}),u}n&&n.exports?n.exports=i:r&&r.amd?r(function(){return i}):this.xor4096=i}(0,"object"==typeof t&&t,!1),t.exports}.call({});var P=function(){var t={exports:this};return function(t,n,e){function r(t){var n=this,e="";n.next=function(){var t=n.b,e=n.c,r=n.d,o=n.a;return t=t<<25^t>>>7^e,e=e-r|0,r=r<<24^r>>>8^o,o=o-t|0,n.b=t=t<<20^t>>>12^e,n.c=e=e-r|0,n.d=r<<16^e>>>16^o,n.a=o-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):e+=t;for(var r=0;r<e.length+20;r++)n.b^=0|e.charCodeAt(r),n.next()}function o(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function c(t,n){var e=new r(t),c=n&&n.state,a=function(){return(e.next()>>>0)/4294967296};return a.double=function(){do{var t=((e.next()>>>11)+(e.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},a.int32=e.next,a.quick=a,c&&("object"==typeof c&&o(c,e),a.state=function(){return o(e,{})}),a}n&&n.exports?n.exports=c:e&&e.amd?e(function(){return c}):this.tychei=c}(0,"object"==typeof t&&t,!1),t.exports}.call({});var h,d={},Y=arguments[0];var N=false;function M(){if(N)return;N=true}!function(r,n){var t,e=this,o=256,i=6,a="random",u=n.pow(o,i),f=n.pow(2,52),c=2*f,$=o-1;function s($,s,d){var h=[],y=g(function r(n,t){var e,o=[],i=typeof n;if(t&&"object"==i)for(e in n)try{o.push(r(n[e],t-1))}catch(r){}return o.length?o:"string"==i?n:n+"\0"}((s=1==s?{entropy:!0}:s||{}).entropy?[$,v(r)]:null==$?function(){try{var n;return t&&(n=t.randomBytes)?n=n(o):(n=new Uint8Array(o),(e.crypto||e.msCrypto).getRandomValues(n)),v(n)}catch(n){var i=e.navigator,a=i&&i.plugins;return[+new Date,e,a,e.screen,v(r)]}}():$,3),h),V=new l(h),m=function(){for(var r=V.g(i),n=u,t=0;r<f;)r=(r+t)*o,n*=o,t=V.g(1);for(;r>=c;)r/=2,n/=2,t>>>=1;return(r+t)/n};return m.int32=function(){return 0|V.g(4)},m.quick=function(){return V.g(4)/4294967296},m.double=m,g(v(V.S),r),(s.pass||d||function(r,t,e,o){return o&&(o.S&&p(o,V),r.state=function(){return p(V,{})}),e?(n[a]=r,t):r})(m,y,"global"in s?s.global:this==n,s.state)}function l(r){var n,t=r.length,e=this,i=0,a=e.i=e.j=0,u=e.S=[];for(t||(r=[t++]);i<o;)u[i]=i++;for(i=0;i<o;i++)u[i]=u[a=$&a+r[i%t]+(n=u[i])],u[a]=n;(e.g=function(r){for(var n,t=0,i=e.i,a=e.j,u=e.S;r--;)n=u[i=$&i+1],t=t*o+u[$&(u[i]=u[a=$&a+n])+(u[a]=n)];return e.i=i,e.j=a,t})(o)}function p(r,n){return n.i=r.i,n.j=r.j,n.S=r.S.slice(),n}function g(r,n){for(var t,e=r+"",o=0;o<e.length;)n[$&o]=$&(t^=19*n[$&o])+e.charCodeAt(o++);return v(n)}function v(r){return String.fromCharCode.apply(0,r)}if(n["seed"+a]=s,g(n.random(),r),d){d=s;try{t=(M(),{})}catch(r){}}else"function"==typeof h&&h.amd&&h(function(){return s})}([],Math);var x={};d.alea=O,d.xor128=W,d.xorwow=V,d.xorshift7=U,d.xor4096=Q,d.tychei=P,x=d;var K={};K={name:"@fartts/fartts",version:"1.2.1",description:"\uD835\uDC53(unctional)Art(-making).\u1D1B(ype)\uA731(cript) - an experiment by [Matt Hayes](https://github.com/mysterycommand)",main:"index.js",repository:"git@github.com:fartts/fartts.git",author:"Matt Hayes <matt@mysterycommand.com>",license:"MIT",private:!0,scripts:{build:"parcel build src/app/{index.html,README.md} --public-url / --experimental-scope-hoisting",start:"parcel src/app/{index.html,README.md}",lint:"tslint 'src/**/*.ts'",test:"jest"},engines:{node:"8.11.3",npm:"6.2.0",yarn:"1.9.2"},dependencies:{seedrandom:"2.4.3"},devDependencies:{"@semantic-release/changelog":"2.1.2","@semantic-release/git":"6.0.2","@types/jest":"23.3.1","@types/node":"10.5.6","@types/seedrandom":"2.4.27","babel-core":"6.26.3",commitizen:"2.10.1","cz-conventional-changelog":"2.1.0","glslify-bundle":"5.0.0","glslify-deps":"1.3.1","identity-obj-proxy":"3.0.0",jest:"23.4.2","parcel-bundler":"1.9.7","parcel-plugin-typescript":"1.0.0",prettier:"1.14.0","semantic-release":"15.7.2","semantic-release-github-pr":"5.0.5","ts-jest":"23.1.2",tslint:"5.11.0","tslint-config-prettier":"1.14.0","tslint-plugin-prettier":"1.3.0",typescript:"3.0.1"},config:{commitizen:{path:"cz-conventional-changelog"}}};var J=X(x);var q=J.d(K.name);a.random=q;var I=Math.abs,F=Math.acos,B=Math.atan2,u=Math.cos,A=Math.floor,z=Math.hypot,y=Math.max,L=Math.min,c=Math.PI,v=Math.round,t=Math.sin,C=Math.sqrt;a.sqrt=C,a.sin=t,a.round=v,a.π=c,a.min=L,a.max=y,a.hypot=z,a.floor=A,a.cos=u,a.atan2=B,a.acos=F,a.abs=I;c*=2;function D($,o,r){return $+(o-$)*r}function E(){return 1===v(q())}function s($){return $%c/c-1}function G($){return 1-2*Math.abs(s($))}function H($){return 180*$/c}function i($){return $*c/180}a.ππ=c,a.lerp=D,a.randomBool=E,a.saw=s,a.tri=G,a.toDegrees=H,a.toRadians=i;var g,o="development",e=document.querySelector("canvas"),b=e.getContext("webgl",{antialias:!1}),l=10,k=e.clientWidth/l,r=e.clientHeight/l;function p(a,$,r){var i=a.createShader($);if((a.shaderSource(i,r),a.compileShader(i),"production"===o)&&!a.getShaderParameter(i,a.COMPILE_STATUS))throw new Error("shader ("+i+") failed to compile:\n"+a.getShaderInfoLog(i));return i}function R(a,$,r){var i=a.createProgram();if((a.attachShader(i,$),a.attachShader(i,r),a.linkProgram(i),"production"===o)&&!a.getProgramParameter(i,a.LINK_STATUS))throw new Error("program ("+i+") failed to compile:\n"+a.getShaderInfoLog(i));return i}e.width=k,e.height=r,b.clearColor(1,1,1,1),function(a){a[a.Vertex=b.VERTEX_SHADER]="Vertex",a[a.Fragment=b.FRAGMENT_SHADER]="Fragment"}(g||(g={}));var S=p(b,g.Vertex,"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec4 a_position;\nvarying vec4 v_color;\n\nvoid main() {\n  gl_Position = a_position;\n  v_color = gl_Position * 0.5 + 0.5;\n}\n"),T=p(b,g.Fragment,"#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec4 v_color;\n\nvoid main() {\n\n\tgl_FragColor = vec4(v_color.xy, 1.0, 1.0);\n}\n"),n=R(b,S,T),m=b.getAttribLocation(n,"a_position"),j=b.createBuffer();b.viewport(0,0,k,r),b.useProgram(n);var f=0;function w(a){requestAnimationFrame(w),f=(f+1)%360;var $=t(i(f)),r=u(i(f));b.clear(b.COLOR_BUFFER_BIT),b.bindBuffer(b.ARRAY_BUFFER,j),b.bufferData(b.ARRAY_BUFFER,new Float32Array([.4*$-.4,.3*r-.6,.4+.3*$,.4*r-.4,.2*$-.1,.7+.2*r]),b.DYNAMIC_DRAW),b.enableVertexAttribArray(m),b.bindBuffer(b.ARRAY_BUFFER,j),b.vertexAttribPointer(m,2,b.FLOAT,!1,0,0),b.drawArrays(b.TRIANGLES,0,3)}requestAnimationFrame(w);a.__esModule=true;return{"jFug":a,"jQxi":{}};});