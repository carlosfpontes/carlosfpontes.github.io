"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3553],{13553:function(t,e,a){a.r(e);var o=a(91309),r=a(85893),n=a(67294),c=a(58673),s=a(15924),i=(0,n.memo)(function(t){var e=t.north,a=void 0===e?0:e,i=t.borderWidth,l=t.borderColor,u=t.bgColor,h=t.width,f=(0,n.useRef)(null),d=(0,o._)((0,n.useState)(),2),v=d[0],p=d[1],b=(0,o._)((0,c.EB)("hlookat"),1)[0],w=(0,o._)((0,c.FN)("zoom"),1)[0],M=(0,n.useCallback)(function(t){var e="http://www.w3.org/2000/svg",a=document.createElementNS(e,"svg");a.setAttribute("width",t),a.setAttribute("height",t),a.style.position="absolute",a.style.left="".concat(50,"%"),a.style.top="".concat(50,"%"),a.style.transform="translate(-50%, -50%)",a.style.zIndex="1";var o=document.createElementNS(e,"path");a.appendChild(o);var r={};return r.svg=a,r.path=o,r.setstyle=function(t,e,a,r,n){o.setAttribute("stroke",t),o.setAttribute("stroke-width",e),o.setAttribute("stroke-opacity",a),o.setAttribute("fill",r),o.setAttribute("fill-opacity",n)},r.drawpie=function(t,e,a,r,n){var c,s,i="";r>n&&(c=n,n=r,r=c),r=r*Math.PI/180,s=(n=n*Math.PI/180)-r,c=(r+n)/2;var l=s>Math.PI?1:0;s>=2*Math.PI&&(s=2*Math.PI-.01);var u=t+a*Math.sin(r=c-s/2),h=e-a*Math.cos(r),f=t+a*Math.sin(n=c+s/2),d=e-a*Math.cos(n);i="M ".concat(t,",").concat(e," L ").concat(u,",").concat(h," A ").concat(a,",").concat(a," 0 ").concat(l," 1 ").concat(f,",").concat(d," Z"),o.setAttribute("d",i)},r},[]),k=(0,n.useCallback)(function(){var t=(h-2)/2*1;t>2e3&&(t=2e3);var e=2+Math.ceil(2*t),o=-a+0-0+(b||0),r=w||0;v.drawpie(e/2-.5,e/2-.5,t,o-.5*r,o+.5*r),f.current&&f.current.appendChild(v.svg)},[a,h,b,w,v]);return(0,n.useEffect)(function(){if(void 0!==b&&void 0!==w){if(v)k();else{var t=M(h),e=(0,s.JF)(u),a=(0,s.JF)(l);t.setstyle(a.color,i,a.alpha,e.color,e.alpha),p(t)}}},[v,w,b]),(0,n.useEffect)(function(){return function(){p(null),f.current=null}},[]),(0,r.jsx)("div",{ref:f})});e.default=i}}]);
//# sourceMappingURL=3553.07242e37f200117d.js.map