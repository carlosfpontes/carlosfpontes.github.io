"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1767],{1767:function(e,t,n){n.r(t);var i=n(72253),o=n(14932),l=n(91309),u=n(85893),d=n(61935),a=n(1214),r=n(24781),c=n(5152),s=n.n(c),v=n(67294),f=n(25617),p=n(15531),_=n(58673),h=n(86111),b=n(15924),g=s()(function(){return n.e(5411).then(n.bind(n,15411))},{loadableGenerated:{webpack:function(){return[15411]}}}),w=s()(function(){return Promise.all([n.e(4047),n.e(9779)]).then(n.bind(n,49779))},{loadableGenerated:{webpack:function(){return[49779]}}}),S=s()(function(){return Promise.all([n.e(9206),n.e(7482)]).then(n.bind(n,3529))},{loadableGenerated:{webpack:function(){return[3529]}}});t.default=(0,v.memo)(function(){var e,t,n,c,s,m,y=(0,f.I0)(),P=(0,f.v9)(d.U9),k=(0,f.v9)(d.Y2),E=(0,f.v9)(d.aS),N=(0,f.v9)(d.FT),D=(0,f.v9)(d.Bi),C=(0,f.v9)(d.DH),H=(0,f.v9)(d.Xy),x=(0,l._)((0,v.useState)(void 0),2),j=x[0],G=x[1],T=(0,l._)((0,v.useState)(!1),2),z=T[0],L=T[1],M=(0,l._)((0,v.useState)(!1),2),B=M[0],U=M[1],$=(0,r.o)().onPushEventClickedHotspot,A=(0,p.$)({idPost:j}).detailPost,F=(0,l._)((0,_.gU)("state"),1)[0],I=(0,v.useMemo)(function(){var e;return(null==E?void 0:null===(e=E.config)||void 0===e?void 0:e.link)||void 0},[E]),O=(0,v.useMemo)(function(){var e,t;return((null==E?void 0:E.type)==="point"?null==E?void 0:null===(e=E.config)||void 0===e?void 0:e.point:null==E?void 0:null===(t=E.config)||void 0===t?void 0:t.chevron)||void 0},[E]),Y=(0,v.useCallback)(function(){y(a.Nw.setHotspotSelected(null)),U(!1),L(!1),G(void 0)},[y]);return(0,v.useEffect)(function(){if(E&&$(),E&&(null==E?void 0:E.type)==="article"){var e,t,n,i;L(!0),(null==E?void 0:null===(t=E.config)||void 0===t?void 0:null===(e=t.article)||void 0===e?void 0:e.post_id)&&G(null==E?void 0:null===(i=E.config)||void 0===i?void 0:null===(n=i.article)||void 0===n?void 0:n.post_id)}E&&(null==E?void 0:E.type)==="product"&&U(!0)},[E]),(0,v.useEffect)(function(){(null==I?void 0:I.url)&&(null==I?void 0:I.action)!=="iframe"&&(window.open(null==I?void 0:I.url,(null==I?void 0:I.action)==="same-tab"?"_self":"_blank",(null==I?void 0:I.action)==="new-window"?"location=yes,height=570,width=520,scrollbars=yes,status=yes":void 0),Y())},[I]),(0,v.useEffect)(function(){if(null==O?void 0:O.target_scene_id){var e,t=O.hlookat_default,n=O.vlookat_default,l=O.zoom_default,u=O.isTransition,d=O.typeTransition,r=P.filter(function(e){return e.id===(null==O?void 0:O.target_scene_id)})[0];(null==(r=(0,i._)({},r,{config:(0,o._)((0,i._)({},null==r?void 0:r.config),{default_view:(0,i._)({},null==r?void 0:null===(e=r.config)||void 0===e?void 0:e.default_view,{x:t||0,y:n||0,zoom_lv:l||90}),isTransition:u,typeTransition:u?void 0===d?"NOBLEND":d:"NOBLEND"})}))?void 0:r.id)&&(y(a.Nw.setSceneSelected(r)),y(a.Nw.setprevSceneSelected(k||null)),Y())}},[null==k?void 0:k.id,y,O,P,Y]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(g,{visible:z,onCancel:Y,post:A,width:null==E?void 0:null===(t=E.config)||void 0===t?void 0:null===(e=t.article)||void 0===e?void 0:e.popup_width,size:(null==E?void 0:null===(c=E.config)||void 0===c?void 0:null===(n=c.article)||void 0===n?void 0:n.appearance_size)||(null==N?void 0:N.hotspotArticleSize),layout:(null==E?void 0:null===(m=E.config)||void 0===m?void 0:null===(s=m.article)||void 0===s?void 0:s.appearance_layout)||(null==N?void 0:N.hotspotArticleLayout)}),(null==E?void 0:E.itemPrd)&&B&&(0,u.jsx)(w,{onCancel:Y,visible:B,product:null==E?void 0:E.itemPrd}),E&&(0,u.jsx)(S,{hotspotSelected:E,onClose:Y}),(0,u.jsx)(h.EU,{className:"".concat(F.descriptionHotspotSelected?"active":""),children:F.descriptionHotspotSelected&&(0,u.jsx)("article",{dangerouslySetInnerHTML:{__html:(0,b.uq)(F.descriptionHotspotSelected,D,C,H)||""}})})]})})},15531:function(e,t,n){n.d(t,{$:function(){return useGetDetailPost}});var i=n(11010),o=n(91309),l=n(97582),u=n(82050),d=n(25617),a=n(67294),r=n(61935),useGetDetailPost=function(e){var t=e.idPost,n=void 0===t?"":t,c=(0,d.v9)(r.Yd),s=(0,d.v9)(r.DH),v=(0,o._)((0,a.useState)(!1),2),f=v[0],p=v[1],_=(0,o._)((0,a.useState)(void 0),2),h=_[0],b=_[1],g=(0,a.useCallback)((0,i._)(function(){var e;return(0,l.Jh)(this,function(t){switch(t.label){case 0:p(!0),t.label=1;case 1:if(t.trys.push([1,4,5,6]),e=c.find(function(e){return e.id===n}))return[3,3];return[4,(0,u.r)(n)];case 2:e=t.sent().data.data,t.label=3;case 3:return b(e),[3,6];case 4:return t.sent(),b(void 0),[3,6];case 5:return p(!1),[7];case 6:return[2]}})}),[n,c]);return(0,a.useEffect)(function(){return n?g():b(void 0),function(){p(!1),b(void 0)}},[n,s]),(0,a.useMemo)(function(){return{loading:f,detailPost:h,onGetDetailPost:g}},[f,h,g])}},82050:function(e,t,n){n.d(t,{r:function(){return getDetailPost}});var i=n(62633),getDetailPost=function(e){return i.R.$get("/post/getPublish",{id:e})}}}]);
//# sourceMappingURL=1767.b3d294398325647c.js.map