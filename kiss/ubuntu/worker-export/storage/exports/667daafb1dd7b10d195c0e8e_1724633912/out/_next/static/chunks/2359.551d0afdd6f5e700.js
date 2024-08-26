"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2359],{55998:function(n,i,e){e.d(i,{B:function(){return o}});var t=e(82729);function _templateObject(){var n=(0,t._)(["\n  position: absolute;\n  top: calc(50% - 27px) !important;\n  background: #fff !important;\n  opacity: 0.5 !important;\n  z-index: 2000;\n  width: 32px;\n  height: 32px;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  cursor: pointer;\n  &.control-prev {\n    left: 10px !important;\n    &:before {\n      border-right-color: #212121 !important;\n    }\n  }\n  &.control-next {\n    right: 10px !important;\n    &:before {\n      border-left-color: #212121 !important;\n    }\n  }\n"]);return _templateObject=function(){return n},n}var o=e(94589).ZP.div.withConfig({displayName:"styled__ArrowSlideWrapper",componentId:"Panoee__sc-aac30e82-0"})(_templateObject())},72359:function(n,i,e){e.r(i),e.d(i,{Preview:function(){return g},PreviewContent:function(){return h},default:function(){return m}});var t=e(11010),o=e(91309),r=e(97582),l=e(85893),a=e(82604),c=e(15924),d=e(82050),s=e(67294),u=e(79612),p=e(82729),v=e(55998);function _templateObject(){var n=(0,p._)(["\n  z-index: 10;\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid rgb(255 255 255 / 0.2);\n  width: max-content;\n  > div {\n    width: 100%;\n    height: 100%;\n  }\n  .video {\n    width: 320px;\n    height: 180px;\n    iframe {\n      width: 100% !important;\n      height: 100%;\n    }\n  }\n  .article {\n    width: 320px;\n    height: auto;\n    max-height: 70vh;\n    overflow: auto;\n    background: #fff;\n    padding: 0.75rem;\n    .ctn {\n      height: 100%;\n    }\n  }\n  .link {\n    width: 320px;\n    height: 180px;\n    iframe {\n      width: 320px;\n      height: 100%;\n    }\n  }\n  .images {\n    width: 320px;\n    height: auto;\n    background: #000;\n    position: relative;\n    "," {\n      top: calc(50% - 16px) !important;\n    }\n    .gallery-item {\n      width: 100%;\n      height: 200px;\n      background-position: center;\n      background-size: contain;\n      background-repeat: no-repeat;\n    }\n    .quick-play {\n      top: 50%;\n      left: 50%;\n      z-index: 10;\n      cursor: pointer;\n      position: absolute;\n      transform: translate(-50%, -50%);\n      i {\n        color: #fff;\n        font-size: 32px;\n      }\n    }\n  }\n  .point {\n    img {\n      width: 200px;\n      height: auto;\n    }\n  }\n"]);return _templateObject=function(){return n},n}var f=e(94589).ZP.div.withConfig({displayName:"Preview.styled__PreviewWrapper",componentId:"Panoee__sc-d240630c-0"})(_templateObject(),v.B),h=(0,s.memo)(function(n){var i,e,p,v,h,g,m,x,_=n.hotspot,b=n.listPost,w=n.listScene,y=n.onClick,j=(0,o._)((0,s.useState)(void 0),2),P=j[0],k=j[1],N=(0,s.useCallback)((i=(0,t._)(function(n){var i;return(0,r.Jh)(this,function(e){switch(e.label){case 0:if(e.trys.push([0,3,,4]),i=b.find(function(i){return i.id===n}))return[3,2];return[4,(0,d.r)(n)];case 1:i=e.sent().data.data,e.label=2;case 2:return k(i),[3,4];case 3:return e.sent(),k(void 0),[3,4];case 4:return[2]}})}),function(n){return i.apply(this,arguments)}),[b]);(0,s.useEffect)(function(){var n,i;"article"===_.type&&(null==_?void 0:null===(i=_.config)||void 0===i?void 0:null===(n=i.article)||void 0===n?void 0:n.post_id)&&N(_.config.article.post_id)},[_]);var C=(0,s.useMemo)(function(){var n,i;return"point"===_.type&&(null===(i=_.config)||void 0===i?void 0:null===(n=i.point)||void 0===n?void 0:n.target_scene_id)&&w.filter(function(n){var i,e;return n.id===(null===(e=_.config)||void 0===e?void 0:null===(i=e.point)||void 0===i?void 0:i.target_scene_id)})[0]||void 0},[_,w]),S=(0,s.useMemo)(function(){if("point"===_.type){var n,i,e,t,o,r,l,a,c,d;return(null===(i=_.config)||void 0===i?void 0:null===(n=i.point)||void 0===n?void 0:n.preview_box_img_type)==="thumbnail"?(null==C?void 0:C.screenshot)||(null==C?void 0:null===(e=C.media)||void 0===e?void 0:e.src_thumb):(null===(o=_.config)||void 0===o?void 0:null===(t=o.point)||void 0===t?void 0:t.preview_box_img_type)==="upload"&&(null===(l=_.config)||void 0===l?void 0:null===(r=l.point)||void 0===r?void 0:r.preview_box_img_src)?null==_?void 0:null===(c=_.config)||void 0===c?void 0:null===(a=c.point)||void 0===a?void 0:a.preview_box_img_src:null==C?void 0:null===(d=C.media)||void 0===d?void 0:d.src_thumb}return""},[C,_]);return(0,l.jsxs)(f,{children:["video"===_.type&&(null===(p=_.config)||void 0===p?void 0:null===(e=p.video)||void 0===e?void 0:e.url)&&(0,l.jsx)("div",{className:"video",children:(0,l.jsx)("iframe",{title:"title",width:"100%",height:"100%",src:"".concat((0,c.RH)(null===(h=_.config)||void 0===h?void 0:null===(v=h.video)||void 0===v?void 0:v.url)),allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})}),"article"===_.type&&(null==P?void 0:P.id)&&(0,l.jsx)("div",{className:"article",children:(0,l.jsx)("div",{className:"ctn ctn__html sun-editor sun-editor-editable",dangerouslySetInnerHTML:{__html:null==P?void 0:P.content}})}),"image"===_.type&&(null===(x=_.config)||void 0===x?void 0:null===(m=x.image)||void 0===m?void 0:null===(g=m.galleries)||void 0===g?void 0:g.length)&&(0,l.jsxs)("div",{className:"images",children:[(0,l.jsx)("div",{className:"quick-play",onClick:y,children:(0,l.jsx)("i",{"aria-hidden":!0,className:"fas fa-search-plus"})}),(0,l.jsx)(u.Z,{elementType:"div",className:"carousel",options:{contain:!0,prevNextButtons:!0,pageDots:!1,lazyLoad:!0,cellAlign:"left"},children:_.config.image.galleries.map(function(n){return(0,l.jsx)("div",{className:"gallery-item",style:{backgroundImage:"url(".concat(n.src,")")}},n.id)})}),(0,l.jsx)(a.H,{})]}),"point"===_.type&&C&&(0,l.jsx)("div",{className:"point",children:(0,l.jsx)("img",{src:S,alt:"123"})})]})}),g=(0,s.memo)(function(n){var i=n.hotspot,e=n.onClick,t=n.listPost,o=n.listScene,r=n.onVisibleFlagPopover,a=n.onUnvisibleFlagPopover,c=n.isHideTitleGlobal,d=n.isHidePreviewGlobal,s=n.onUnvisiblePopover,u=n.isHidePreview;return(0,l.jsx)("div",{onFocus:function(){return r()},onMouseOver:function(){return r()},onMouseLeave:function(){return a()},onClick:function(n){n.stopPropagation(),r()},onTouchStart:function(n){n.stopPropagation(),r()},children:i.title&&!c?(0,l.jsxs)("span",{className:"hotspotTitle",children:[d||u?(0,l.jsx)("div",{}):(0,l.jsx)(h,{hotspot:i,listPost:t,listScene:o,onClick:function(){s(),e({})}}),(0,l.jsx)("em",{children:i.title})]}):d||u?(0,l.jsx)("div",{}):(0,l.jsx)(h,{hotspot:i,listPost:t,listScene:o,onClick:function(){s(),e({})}})})}),m=g},82050:function(n,i,e){e.d(i,{r:function(){return getDetailPost}});var t=e(62633),getDetailPost=function(n){return t.R.$get("/post/getPublish",{id:n})}}}]);
//# sourceMappingURL=2359.551d0afdd6f5e700.js.map