(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{242:function(t,e,c){var content=c(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(13).default)("15851167",content,!0,{sourceMap:!1})},260:function(t,e,c){"use strict";c(242)},261:function(t,e,c){var o=c(12)(!1);o.push([t.i,'.switch-control[data-v-484b87a1]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.switch-control.flex-end[data-v-484b87a1]{justify-content:flex-end}.switch-control.space-around[data-v-484b87a1]{justify-content:space-around}.switch-control.space-evenly[data-v-484b87a1]{justify-content:space-evenly}.switch-control.center[data-v-484b87a1]{justify-content:center}.switch-control .switch[data-v-484b87a1]{position:relative;display:inline-block;width:3.5em;min-width:3.5em;height:2em;margin:0 .4em}.switch-control .switch input[data-v-484b87a1]{opacity:0;width:0;height:0}.switch-control .switch .slider[data-v-484b87a1]{position:absolute;display:inline-block;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#dfdfdf;transition:.4s;border-radius:34px}.switch-control .switch .slider[data-v-484b87a1]:hover{background-color:#dfdfdf}.switch-control .switch .slider[data-v-484b87a1]:before{position:absolute;content:"";height:1.4em;width:1.4em;left:4px;bottom:4px;background-color:#000;transition:.2s;border-radius:50%}.switch-control .switch input:checked+.slider[data-v-484b87a1]{background-color:#dfdfdf}.switch-control .switch input:focus+.slider[data-v-484b87a1]{box-shadow:0 0 1px #dfdfdf}.switch-control .switch input:checked+.slider[data-v-484b87a1]:before{transform:translateX(calc(2.1em - 8px));background-color:#000}.switch-control .text[data-v-484b87a1]{font-size:18px;line-height:25px;font-weight:700;opacity:.6;transition:opacity .2s ease-in-out}.switch-control .text.off[data-v-484b87a1]{margin-right:1.5em}.switch-control .text.on[data-v-484b87a1]{margin-left:1.5em}.switch-control .text.current[data-v-484b87a1]{opacity:1}',""]),t.exports=o},275:function(t,e,c){"use strict";c.r(e);var o={data:function(){return{checked:!1}},props:{off:{type:String,required:!0},on:{type:String,required:!0},alignment:{type:String,default:"flex-start"}},methods:{onChange:function(){this.$emit("change",this.checked)}}},n=(c(260),c(6)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",t._b({staticClass:"switch-control"},"div",t.$attrs,!1),[c("div",{staticClass:"text off",class:{current:!t.checked}},[t._v(t._s(t.off))]),t._v(" "),c("label",{staticClass:"switch"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"1")>-1:t.checked},on:{change:[function(e){var c=t.checked,o=e.target,n=!!o.checked;if(Array.isArray(c)){var r=t._i(c,"1");o.checked?r<0&&(t.checked=c.concat(["1"])):r>-1&&(t.checked=c.slice(0,r).concat(c.slice(r+1)))}else t.checked=n},t.onChange]}}),t._v(" "),c("span",{staticClass:"slider"})]),t._v(" "),c("div",{staticClass:"text on",class:{current:t.checked}},[t._v(t._s(t.on))])])}),[],!1,null,"484b87a1",null);e.default=component.exports}}]);