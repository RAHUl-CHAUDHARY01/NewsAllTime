"use strict";(self.webpackChunknewsapp=self.webpackChunknewsapp||[]).push([[8628],{8628:(i,t,e)=>{e.d(t,{TiltUpdater:()=>l});var n=e(4864);class s{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(i){i&&(void 0!==i.enable&&(this.enable=i.enable),void 0!==i.speed&&(this.speed=(0,n.Ws)(i.speed)),void 0!==i.decay&&(this.decay=(0,n.Ws)(i.decay)),void 0!==i.sync&&(this.sync=i.sync))}}class o extends n.S4{constructor(){super(),this.animation=new s,this.direction="clockwise",this.enable=!1,this.value=0}load(i){super.load(i),i&&(this.animation.load(i.animation),void 0!==i.direction&&(this.direction=i.direction),void 0!==i.enable&&(this.enable=i.enable))}}const a=2*Math.PI;class l{constructor(i){this.container=i}getTransformValues(i){var t;const e=(null===(t=i.tilt)||void 0===t?void 0:t.enable)&&i.tilt;return{b:e?Math.cos(e.value)*e.cosDirection:void 0,c:e?Math.sin(e.value)*e.sinDirection:void 0}}init(i){var t;const e=i.options.tilt;if(!e)return;i.tilt={enable:e.enable,value:(0,n.qy)((0,n.qS)(e.value)),sinDirection:(0,n.CE)()>=n.oz?1:-1,cosDirection:(0,n.CE)()>=n.oz?1:-1,min:0,max:a};let s=e.direction;if("random"===s){s=Math.floor(2*(0,n.CE)())>0?"counter-clockwise":"clockwise"}switch(s){case"counter-clockwise":case"counterClockwise":i.tilt.status="decreasing";break;case"clockwise":i.tilt.status="increasing"}const o=null===(t=i.options.tilt)||void 0===t?void 0:t.animation;null!==o&&void 0!==o&&o.enable&&(i.tilt.decay=1-(0,n.qS)(o.decay),i.tilt.velocity=(0,n.qS)(o.speed)/360*this.container.retina.reduceFactor,o.sync||(i.tilt.velocity*=(0,n.CE)()))}isEnabled(i){var t;const e=null===(t=i.options.tilt)||void 0===t?void 0:t.animation;return!i.destroyed&&!i.spawning&&!(null===e||void 0===e||!e.enable)}loadOptions(i){i.tilt||(i.tilt=new o);for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];for(const s of e)i.tilt.load(null===s||void 0===s?void 0:s.tilt)}async update(i,t){this.isEnabled(i)&&i.tilt&&((0,n.C2)(i,i.tilt,!1,"none",t),await Promise.resolve())}}}}]);
//# sourceMappingURL=8628.7c11d293.chunk.js.map