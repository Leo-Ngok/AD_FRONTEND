import{b as k,w as h,e as w,i as E,f as $,d as C,g as B,j as I,o,c,k as p,r,l as s,m as b,n,p as S,q as i,t as _,s as N,v as R,_ as T,E as V,x as q,y as f,z as g,A as z}from"./index.0bb3dfca.js";const l={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},v={[l.success]:k,[l.warning]:h,[l.error]:w,[l.info]:E},D=$({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),M={name:"ElResult"},P=C({...M,props:D,setup(d){const m=d,t=B("result"),a=I(()=>{const e=m.icon,u=e&&l[e]?l[e]:"icon-info",y=v[u]||v["icon-info"];return{class:u,component:y}});return(e,u)=>(o(),c("div",{class:n(s(t).b())},[p("div",{class:n(s(t).e("icon"))},[r(e.$slots,"icon",{},()=>[s(a).component?(o(),b(S(s(a).component),{key:0,class:n(s(a).class)},null,8,["class"])):i("v-if",!0)])],2),e.title||e.$slots.title?(o(),c("div",{key:0,class:n(s(t).e("title"))},[r(e.$slots,"title",{},()=>[p("p",null,_(e.title),1)])],2)):i("v-if",!0),e.subTitle||e.$slots["sub-title"]?(o(),c("div",{key:1,class:n(s(t).e("subtitle"))},[r(e.$slots,"sub-title",{},()=>[p("p",null,_(e.subTitle),1)])],2)):i("v-if",!0),e.$slots.extra?(o(),c("div",{key:2,class:n(s(t).e("extra"))},[r(e.$slots,"extra")],2)):i("v-if",!0)],2))}});var j=N(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const x=R(j);const A={},F=z("Back");function G(d,m){const t=V,a=q,e=x;return o(),b(e,{title:"404","sub-title":"Sorry, request error"},{icon:f(()=>[g(t,{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"})]),extra:f(()=>[g(a,{type:"primary"},{default:f(()=>[F]),_:1})]),_:1})}const J=T(A,[["render",G]]);export{J as default};