(function(){var d=window,e=document,f="documentElement",g="scrollTop",k="prototype",l="body",m="getAttribute",n="",p="1",q="data",r="img",s="load",t="number",u="on",v="onload",w="pagespeed_lazy_position",x="pagespeed_lazy_replaced_functions",y="pagespeed_lazy_src",z="position",A="relative",B="resize",C="scroll",D="src",E=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent(u+b,c);else{var h=a[u+b];a[u+b]=function(){c.call(this);h&&h.call(this)}}};d.pagespeed=d.pagespeed||{};var F=d.pagespeed,G=function(a){this.d=[];this.a=0;this.b=!1;this.n=a;this.e=null;this.i=0;this.j=200;this.c=!1};G[k].r=function(){var a=0;typeof d.pageYOffset==t?a=d.pageYOffset:e[l]&&e[l][g]?a=e[l][g]:e[f]&&e[f][g]&&(a=e[f][g]);var b=d.innerHeight||e[f].clientHeight||e[l].clientHeight;return{top:a,bottom:a+b,height:b}};G[k].m=function(a){var b=a[m](w);if(b)return parseInt(b,0);var b=a.offsetTop,c=a.offsetParent;c&&(b+=this.m(c));b=Math.max(b,0);a.setAttribute(w,b);return b};
G[k].q=function(a){var b=this.m(a);return{top:b,bottom:b+a.offsetHeight}};G[k].p=function(a,b){if(a.currentStyle)return a.currentStyle[b];if(e.defaultView&&e.defaultView.getComputedStyle){var c=e.defaultView.getComputedStyle(a,null);if(c)return c.getPropertyValue(b)}return a.style&&a.style[b]?a.style[b]:n};
G[k].o=function(a){if(!this.c&&(0==a.offsetHeight||0==a.offsetWidth))return!1;if(this.p(a,z)==A)return!0;var b=this.r(),c=a.getBoundingClientRect();c?(a=c.top-b.height,b=c.bottom):(c=this.q(a),a=c.top-b.bottom,b=c.bottom-b.top);return a<=this.a&&0<=b+this.a};
G[k].l=function(a){this.k(a);var b=this;d.setTimeout(function(){var c=a[m](y);if(null!=c)if((b.b||b.o(a))&&-1!=a.src.indexOf(b.n)){var h=a.parentNode,H=a.nextSibling;h&&h.removeChild(a);a.g&&(a.getAttribute=a.g);a.removeAttribute(v);a.removeAttribute(y);a.removeAttribute(x);h&&h.insertBefore(a,H);a.src=c}else b.d.push(a)},0)};G[k].loadIfVisible=G[k].l;G[k].t=function(){this.b=!0;this.f()};G[k].loadAllImages=G[k].t;G[k].f=function(){var a=this.d,b=a.length;this.d=[];for(var c=0;c<b;++c)this.l(a[c])};
G[k].h=function(a,b){return a.a?null!=a.a(b):null!=a[m](b)};G[k].u=function(){for(var a=e.getElementsByTagName(r),b=0;b<a.length;++b){var c=a[b];this.h(c,y)&&this.k(c)}};G[k].overrideAttributeFunctions=G[k].u;G[k].k=function(a){var b=this;this.h(a,x)||(a.g=a[m],a.getAttribute=function(a){a.toLowerCase()==D&&b.h(this,y)&&(a=y);return this.g(a)},a.setAttribute(x,p))};
F.s=function(a,b){var c=new G(b);F.lazyLoadImages=c;E(d,s,function(){c.c=!0;c.b=a;c.a=200;c.f()});0!=b.indexOf(q)&&((new Image).src=b);var h=function(){if(!(c.c&&a||c.e)){var b=c.j;(new Date).getTime()-c.i>c.j&&(b=0);c.e=d.setTimeout(function(){c.i=(new Date).getTime();c.f();c.e=null},b)}};E(d,C,h);E(d,B,h)};F.lazyLoadInit=F.s;})();
