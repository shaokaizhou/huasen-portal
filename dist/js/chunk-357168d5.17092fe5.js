(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-357168d5"],{"1b8b":function(e,t,n){"use strict";n.r(t);var a=n("6f90"),c=n("934a"),i=n("2f62"),r={name:"HomeNav",computed:{...Object(i.d)(["categorySites"])},methods:{changeAnchorPosition(e){let t=document.getElementById("site-anchor-"+encodeURI(e));t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),[...t.parentNode.children].map(e=>{e.classList.remove("active-anchor")}),t.className=t.className+" active-anchor",this.$nextTick(()=>{a.a.pubEv(c.d,t.offsetTop)}))}}},o=(n("9445"),n("2877")),s=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"rightMenu",rawName:"v-rightMenu"}],staticClass:"home-nav"},[n("header"),n("main",{directives:[{name:"rightMenu",rawName:"v-rightMenu"}]},[n("ul",{directives:[{name:"balance",rawName:"v-balance"},{name:"rightMenu",rawName:"v-rightMenu"}]},e._l(e.categorySites,(function(t,a){return n("li",{key:a,staticClass:"record-item pointer text",on:{click:function(t){return e.changeAnchorPosition(a)}}},[e._v(" "+e._s(t.typeName)+" ")])})),0)])])}),[],!1,null,"0a1d1ba4",null);t.default=s.exports},3534:function(e,t,n){},9445:function(e,t,n){"use strict";n("3534")}}]);