"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7768],{67768:function(n,e,t){t.r(e);var i=t(91309),o=t(85893),r=t(5152),a=t.n(r),l=t(15531),s=t(67294),d=t(75549),c=t(58673),u=t(61935),p=t(25617),f=a()(function(){return Promise.all([t.e(2301),t.e(5400),t.e(1130),t.e(3879),t.e(485)]).then(t.bind(t,51700))},{loadableGenerated:{webpack:function(){return[51700]}}}),h=a()(function(){return Promise.resolve().then(t.bind(t,82502))},{loadableGenerated:{webpack:function(){return[82502]}}});e.default=(0,s.memo)(function(n){var e,t,r,a=n.idPost,s=n.visible,m=n.onCancel,v=n.isUseDefaultStyle,b=(0,i._)((0,c.gU)("state"),1)[0],g=(0,l.$)({idPost:a}),x=g.detailPost,y=g.loading,w=(0,p.v9)(u.Aq);return b.isVisiblePopupIntro&&"post"===w.type&&"fullscreen"===w.mode?(0,o.jsxs)(d.i,{className:"popupIntro type-article mode-fullScreen",children:[(0,o.jsx)("div",{className:"--contentWrapper",children:(0,o.jsx)("div",{ref:function(n){if(n&&x&&b.isVisiblePopupIntro&&"post"===w.type&&"fullscreen"===w.mode){var e=(null==n?void 0:n.querySelector(".btn"))||(null==n?void 0:n.querySelector(".button"));e&&e.addEventListener("click",m)}},className:"ctn__html sun-editor sun-editor-editable --content",dangerouslySetInnerHTML:{__html:(null==x?void 0:x.content)||""}})}),(0,o.jsx)("div",{className:"close",onClick:m,children:(0,o.jsx)("i",{"aria-hidden":!0,className:"fal fa-times"})})]}):(0,o.jsx)(f,{visible:s,onCancel:m,maskClosable:!0,top:0,width:"700px",centered:!0,bodyStyle:{maxWidth:"700px",width:"100%"},children:(0,o.jsx)(d.i,{isUseDefaultStyle:void 0===v||v,isUseDefaultColor:b.isVisiblePopupIntro&&"post"===w.type,children:(0,o.jsxs)(h,{loading:y,children:[(0,o.jsxs)("div",{className:"header",children:[(null==x?void 0:null===(e=x.thumbnail)||void 0===e?void 0:e.src)&&(0,o.jsx)("img",{className:"thumb",src:null==x?void 0:null===(t=x.thumbnail)||void 0===t?void 0:t.src,alt:null==x?void 0:null===(r=x.thumbnail)||void 0===r?void 0:r.name}),(0,o.jsx)("div",{className:"title",children:(null==x?void 0:x.title)||"N/A"})]}),(0,o.jsx)("div",{className:"body hide-scrollbar",children:(null==x?void 0:x.content)&&(0,o.jsx)("div",{className:"content ctn__html sun-editor sun-editor-editable",dangerouslySetInnerHTML:{__html:(null==x?void 0:x.content)||""}})})]})})})})},75549:function(n,e,t){t.d(e,{i:function(){return l}});var i=t(82729),o=t(97616),r=t(72071),a=t(94589);function _templateObject(){var n=(0,i._)([""]);return _templateObject=function(){return n},n}function _templateObject1(){var n=(0,i._)(["\n  ","\n  background: ",";\n  color: ",";\n  height: max-content;\n  max-height: 95vh;\n  overflow: auto;\n  width: 100%;\n  padding: 0;\n  border-radius: 12px;\n  ",";\n  .header {\n    position: relative;\n    border-bottom: 1px solid rgb(255 255 255 / 0.2);\n    padding: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .thumb {\n      width: max-content;\n      max-width: 100%;\n      height: auto;\n    }\n    .title {\n      font-weight: 600;\n      width: 100%;\n      position: relative;\n      font-size: 1rem;\n      text-transform: uppercase;\n      text-align: center;\n      padding: 1.5rem 3rem;\n      background: rgba(0, 0, 0, 0.1);\n    }\n    &:after {\n      content: '';\n      width: 64px;\n      height: 2px;\n      background: ",";\n      display: block;\n      position: absolute;\n      bottom: -1px;\n      left: 0;\n      right: 0;\n      margin: auto;\n    }\n  }\n  .body {\n    width: 100%;\n    height: 100%;\n    padding: 1.5rem 3rem;\n    margin: 0 auto;\n    height: auto;\n    .content {\n      width: 100%;\n      min-height: 200px;\n    }\n  }\n  @media (max-width: 575px) {\n    .header {\n      .title {\n      }\n    }\n    .body {\n      padding: 1.5rem 1rem;\n    }\n  }\n  &.popupIntro {\n    transition: var(--transition-regular);\n    &.type-article {\n      &.mode-fullScreen {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        max-height: 100vh;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 100000;\n        background-color: rgba(0, 0, 0, 0.7);\n      }\n    }\n    .close {\n      width: 2.5rem;\n      height: 2.5rem;\n      position: fixed;\n      opacity: 1;\n      transition: all 0.15s ease-out;\n      z-index: 3;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      /* background: #fff; */\n      border-radius: 50%;\n      font-size: 24px;\n      top: 4px;\n      right: 4px;\n      /* box-shadow: 0 2px 16px rgb(0 0 0 / 50%); */\n      color: #fff;\n      i {\n        line-height: initial;\n      }\n      @media (hover: hover) and (pointer: fine) {\n        &:hover {\n          transform: rotate(90deg);\n        }\n      }\n    }\n    .--contentWrapper {\n      color: #fff;\n      width: 100%;\n      max-width: 840px;\n      padding: 1rem;\n      overflow: auto;\n    }\n    .--title {\n      font-size: 3rem;\n      text-align: center;\n    }\n    .--content {\n    }\n    .btn,\n    .button {\n      cursor: pointer;\n      border-radius: 12px;\n      background-color: rgba(255, 255, 255, 0.35);\n      color: #fff;\n      text-decoration: none;\n      margin: 0 auto;\n      width: max-content;\n      display: block;\n      transition: var(--transition-regular);\n      font-weight: 500;\n      cursor: pointer;\n      outline: none;\n      border: none;\n      /* &.size-l { */\n      padding: 1rem 3rem;\n      font-size: 1.5rem;\n      /* } */\n      &:hover {\n        background-color: var(--color-primary);\n        color: var(--color-text);\n      }\n    }\n  }\n"]);return _templateObject1=function(){return n},n}var l=a.ZP.div.withConfig({displayName:"styled__DialogPostWrapper",componentId:"Panoee__sc-5347a1ce-0"})(_templateObject1(),function(n){return!n.isUseDefaultStyle&&(0,a.iv)(_templateObject())},function(n){return n.isUseDefaultColor?o.zP:"var(--color-popup-bg)"},function(n){return n.isUseDefaultColor?o.Wd:"var(--color-popup-text)"},r.Nv,function(n){return n.isUseDefaultColor?o.Wd:"var(--color-popup-text)"})},15531:function(n,e,t){t.d(e,{$:function(){return useGetDetailPost}});var i=t(11010),o=t(91309),r=t(97582),a=t(82050),l=t(25617),s=t(67294),d=t(61935),useGetDetailPost=function(n){var e=n.idPost,t=void 0===e?"":e,c=(0,l.v9)(d.Yd),u=(0,l.v9)(d.DH),p=(0,o._)((0,s.useState)(!1),2),f=p[0],h=p[1],m=(0,o._)((0,s.useState)(void 0),2),v=m[0],b=m[1],g=(0,s.useCallback)((0,i._)(function(){var n;return(0,r.Jh)(this,function(e){switch(e.label){case 0:h(!0),e.label=1;case 1:if(e.trys.push([1,4,5,6]),n=c.find(function(n){return n.id===t}))return[3,3];return[4,(0,a.r)(t)];case 2:n=e.sent().data.data,e.label=3;case 3:return b(n),[3,6];case 4:return e.sent(),b(void 0),[3,6];case 5:return h(!1),[7];case 6:return[2]}})}),[t,c]);return(0,s.useEffect)(function(){return t?g():b(void 0),function(){h(!1),b(void 0)}},[t,u]),(0,s.useMemo)(function(){return{loading:f,detailPost:v,onGetDetailPost:g}},[f,v,g])}},82050:function(n,e,t){t.d(e,{r:function(){return getDetailPost}});var i=t(62633),getDetailPost=function(n){return i.R.$get("/post/getPublish",{id:n})}}}]);
//# sourceMappingURL=7768.270791e931b7e98a.js.map