"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925],{50925:function(n,o,u){u.r(o);var l=u(91309),e=u(85893),i=u(67294),d=u(5152),r=u.n(d),t=u(25617),c=u(61935),v=u(1214),s=u(226),a=u(86111),f=u(58673),m=void 0,p=r()(function(){return u.e(2913).then(u.bind(u,92913))},{loadableGenerated:{webpack:function(){return[92913]}}});o.default=(0,i.memo)(function(n){var o=n.krpanoRef,u=(0,t.I0)(),d=(0,i.useRef)(null),r=(0,i.useRef)(null),_=(0,s.Q)({krpanoRef:o}),b=_.onSetSoundOnScene,g=_.onStartHotspotSound,k=(0,l._)((0,f.gU)("state"),1)[0],y=(0,l._)((0,i.useState)(!1),2),S=y[0],h=y[1],C=(0,t.v9)(c.CO),j=(0,t.v9)(c.M9),E=(0,t.v9)(c.Y2),x=(0,t.v9)(c.us),N=(0,t.v9)(c.DH),P=(null==j?void 0:j.multiLangEnabled)?null==j?void 0:j.background_sound_multi_lang:null==j?void 0:j.background_sound,w=(null==j?void 0:j.multiLangEnabled)?null==E?void 0:E.background_sound_multi_lang:null==E?void 0:E.background_sound,O=(0,i.useMemo)(function(){var n;return!!P||!!w||(null==E?void 0:null===(n=E.hotspots)||void 0===n?void 0:n.some(function(n){var o,u,l,e,i,d,r,t,c,v,s;return"sound"===n.type&&((null===(u=n.config)||void 0===u?void 0:null===(o=u.sound)||void 0===o?void 0:o.file)||(null===(e=n.config)||void 0===e?void 0:null===(l=e.sound)||void 0===l?void 0:l.url))||"instructor"===n.type&&(null===(d=n.config)||void 0===d?void 0:null===(i=d.instructor)||void 0===i?void 0:i.media)||"media"===n.type&&(null===(t=n.config)||void 0===t?void 0:null===(r=t.media)||void 0===r?void 0:r.type)==="media-video"&&(null===(s=n.config)||void 0===s?void 0:null===(v=s.media)||void 0===v?void 0:null===(c=v.media)||void 0===c?void 0:c.src)}))},[P,w,E]),R=(0,i.useCallback)(function(){var n,o;(null==d?void 0:d.current)&&(k.isSoundOnScene?null===(o=d.current)||void 0===o||o.play():null===(n=d.current)||void 0===n||n.pause())},[k]),I=(0,i.useCallback)(function(){if(x){var n,o;r.current&&(r.current.volume=x.on?(null==j?void 0:j.background_sound_volume)||.4:0,r.current.muted=!x.on,x.on&&(null===(n=r.current)||void 0===n||n.play())),d.current&&(d.current.muted=!x.on,d.current.volume=x.on?(null==E?void 0:E.background_sound_volume)||.8:0,x.on&&(null===(o=d.current)||void 0===o||o.play()))}},[x,null==j?void 0:j.background_sound_volume,null==E?void 0:E.background_sound_volume]);(0,i.useEffect)(function(){!1===k.isVisiblePopupIntro&&O&&((null==x?void 0:x.on)===void 0||(null==x?void 0:x.on)===null?C?h(!0):H():(I(),R()))},[C,O,k.isVisiblePopupIntro]),(0,i.useEffect)(function(){!1===C&&x.on&&w&&d.current&&(d.current.src=null==w?void 0:w.src,d.current.currentTime=0,d.current.volume=x.on?(null==E?void 0:E.background_sound_volume)||.8:0,d.current.muted=!x.on,R())},[null==E?void 0:E._id,x]);var M=(0,i.useCallback)(function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h(!1),n||(b(!1),u(v.Nw.setConfigSoundProject({on:!1})))},[u,b]),H=(0,i.useCallback)(function(){var n,o;b(!0),u(v.Nw.setConfigSoundProject({on:!0})),E&&g(),null===(n=r.current)||void 0===n||n.play(),null===(o=d.current)||void 0===o||o.play(),M(!0)},[u,E,b,g,M]);return(0,i.useEffect)(function(){I(),x.on&&S&&M(!0)},[null==x?void 0:x.on,N]),(0,i.useEffect)(function(){R()},[k.isSoundOnScene,N]),(0,e.jsxs)(a.Md,{children:[P&&(0,e.jsx)("audio",{className:"el-hide",loop:!0,autoPlay:!1,ref:r,children:(0,e.jsx)("source",{src:null==P?void 0:P.src,type:null==P?void 0:P.mimetype})},null==P?void 0:P.src),w&&(0,e.jsx)("audio",{className:"el-hide",loop:!0,autoPlay:!1,ref:d,children:(0,e.jsx)("source",{src:null==w?void 0:w.src,type:null==w?void 0:w.mimetype})},null==w?void 0:w.src),S&&(0,e.jsx)(p,{visible:S,onOK:H,onCancel:M.bind(m,!1)})]})})}}]);
//# sourceMappingURL=925.d14763dea755cc63.js.map