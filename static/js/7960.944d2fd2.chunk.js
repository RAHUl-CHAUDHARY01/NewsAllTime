"use strict";(self.webpackChunknewsapp=self.webpackChunknewsapp||[]).push([[7960],{7960:(o,t,s)=>{s.d(t,{DestroyUpdater:()=>v});var e=s(4864);class i{load(o){o&&(void 0!==o.bottom&&(this.bottom=(0,e.Ws)(o.bottom)),void 0!==o.left&&(this.left=(0,e.Ws)(o.left)),void 0!==o.right&&(this.right=(0,e.Ws)(o.right)),void 0!==o.top&&(this.top=(0,e.Ws)(o.top)))}}class l extends e.S4{constructor(){super(),this.value=3}}class r extends e.S4{constructor(){super(),this.value={min:4,max:9}}}class n{constructor(){this.count=1,this.factor=new l,this.rate=new r,this.sizeOffset=!0}load(o){var t;o&&(void 0!==o.color&&(this.color=e.wD.create(this.color,o.color)),void 0!==o.count&&(this.count=o.count),this.factor.load(o.factor),this.rate.load(o.rate),this.particles=(0,e.yW)(o.particles,(o=>(0,e.Ww)({},o))),void 0!==o.sizeOffset&&(this.sizeOffset=o.sizeOffset),o.colorOffset&&(this.colorOffset=null!==(t=this.colorOffset)&&void 0!==t?t:{},void 0!==o.colorOffset.h&&(this.colorOffset.h=o.colorOffset.h),void 0!==o.colorOffset.s&&(this.colorOffset.s=o.colorOffset.s),void 0!==o.colorOffset.l&&(this.colorOffset.l=o.colorOffset.l)))}}class c{constructor(){this.bounds=new i,this.mode="none",this.split=new n}load(o){o&&(o.mode&&(this.mode=o.mode),o.bounds&&this.bounds.load(o.bounds),this.split.load(o.split))}}const d=0,a=.5,f=0,u=1,h=500;function p(o,t,s,i){const l=s.options.destroy;if(!l)return;const r=l.split,n=(0,e.o3)(o,t,s.options),c=(0,e.qS)(r.factor.value),p=s.getFillColor();if(r.color)n.color.load(r.color);else if(r.colorOffset&&p){var v,y,O;n.color.load({value:{hsl:{h:p.h+(0,e.qS)(null!==(v=r.colorOffset.h)&&void 0!==v?v:d),s:p.s+(0,e.qS)(null!==(y=r.colorOffset.s)&&void 0!==y?y:d),l:p.l+(0,e.qS)(null!==(O=r.colorOffset.l)&&void 0!==O?O:d)}}})}else n.color.load({value:{hsl:s.getFillColor()}});n.move.load({center:{x:s.position.x,y:s.position.y,mode:"precise"}}),(0,e.Ib)(n.size.value)?n.size.value/=c:(n.size.value.min/=c,n.size.value.max/=c),n.load(i);const b=r.sizeOffset?(0,e.Ws)(-s.size.value,s.size.value):d,g={x:s.position.x+(0,e.jy)(b),y:s.position.y+(0,e.jy)(b)};return t.particles.addParticle(g,n,s.group,(o=>{var t;return!(o.size.value<a)&&(o.velocity.length=(0,e.jy)((0,e.Ws)(s.velocity.length,o.velocity.length)),o.splitCount=(null!==(t=s.splitCount)&&void 0!==t?t:f)+u,o.unbreakable=!0,setTimeout((()=>{o.unbreakable=!1}),h),!0)}))}class v{constructor(o,t){this.container=t,this.engine=o}init(o){const t=this.container,s=o.options.destroy;if(!s)return;o.splitCount=0;const i=s.bounds;o.destroyBounds||(o.destroyBounds={});const{bottom:l,left:r,right:n,top:c}=i,{destroyBounds:d}=o,a=t.canvas.size;l&&(d.bottom=(0,e.qS)(l)*a.height/e.sc),r&&(d.left=(0,e.qS)(r)*a.width/e.sc),n&&(d.right=(0,e.qS)(n)*a.width/e.sc),c&&(d.top=(0,e.qS)(c)*a.height/e.sc)}isEnabled(o){return!o.destroyed}loadOptions(o){o.destroy||(o.destroy=new c);for(var t=arguments.length,s=new Array(t>1?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];for(const i of s)o.destroy.load(null===i||void 0===i?void 0:i.destroy)}particleDestroyed(o,t){if(t)return;const s=o.options.destroy;s&&"split"===s.mode&&function(o,t,s){const i=s.options.destroy;if(!i)return;const l=i.split;if(l.count>=0&&(void 0===s.splitCount||s.splitCount++>l.count))return;const r=(0,e.qS)(l.rate.value),n=(0,e.pd)(l.particles);for(let e=0;e<r;e++)p(o,t,s,n)}(this.engine,this.container,o)}update(o){if(!this.isEnabled(o))return;const t=o.getPosition(),s=o.destroyBounds;s&&(void 0!==s.bottom&&t.y>=s.bottom||void 0!==s.left&&t.x<=s.left||void 0!==s.right&&t.x>=s.right||void 0!==s.top&&t.y<=s.top)&&o.destroy()}}}}]);
//# sourceMappingURL=7960.944d2fd2.chunk.js.map