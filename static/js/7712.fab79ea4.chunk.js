"use strict";(self.webpackChunknewsapp=self.webpackChunknewsapp||[]).push([[7712],{7712:(e,i,t)=>{t.d(i,{LifeUpdater:()=>r});var n=t(4864);class a extends n.S4{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class o extends n.S4{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class s{constructor(){this.count=0,this.delay=new a,this.duration=new o}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class r{constructor(e){this.container=e}init(e){const i=this.container,t=e.options.life;t&&(e.life={delay:i.retina.reduceFactor?(0,n.qS)(t.delay.value)*(t.delay.sync?1:(0,n.CE)())/i.retina.reduceFactor*n.Ub:0,delayTime:0,duration:i.retina.reduceFactor?(0,n.qS)(t.duration.value)*(t.duration.sync?1:(0,n.CE)())/i.retina.reduceFactor*n.Ub:0,time:0,count:t.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0))}isEnabled(e){return!e.destroyed}loadOptions(e){e.life||(e.life=new s);for(var i=arguments.length,t=new Array(i>1?i-1:0),n=1;n<i;n++)t[n-1]=arguments[n];for(const a of t)e.life.load(null===a||void 0===a?void 0:a.life)}update(e,i){this.isEnabled(e)&&e.life&&function(e,i,t){if(!e.life)return;const a=e.life;let o=!1;if(e.spawning){if(a.delayTime+=i.value,!(a.delayTime>=e.life.delay))return;o=!0,e.spawning=!1,a.delayTime=0,a.time=0}if(-1===a.duration)return;if(e.spawning)return;if(o?a.time=0:a.time+=i.value,a.time<a.duration)return;if(a.time=0,e.life.count>0&&e.life.count--,0===e.life.count)return void e.destroy();const s=(0,n.Ws)(0,t.width),r=(0,n.Ws)(0,t.width);e.position.x=(0,n.jy)(s),e.position.y=(0,n.jy)(r),e.spawning=!0,a.delayTime=0,a.time=0,e.reset();const l=e.options.life;l&&(a.delay=(0,n.qS)(l.delay.value)*n.Ub,a.duration=(0,n.qS)(l.duration.value)*n.Ub)}(e,i,this.container.canvas.size)}}}}]);
//# sourceMappingURL=7712.fab79ea4.chunk.js.map