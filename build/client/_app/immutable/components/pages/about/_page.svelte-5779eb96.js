import{S as p,i as v,s as g,k as q,q as m,l as x,m as I,r as d,h as u,b as S,G as c,u as _,B as h}from"../../../chunks/index-7f3551f2.js";function T(l){let t,n,a=l[0].post.title+"",i,f,o=l[0].item+"",r;return{c(){t=q("h1"),n=m("Title: "),i=m(a),f=m("  Item: "),r=m(o)},l(s){t=x(s,"H1",{});var e=I(t);n=d(e,"Title: "),i=d(e,a),f=d(e,"  Item: "),r=d(e,o),e.forEach(u)},m(s,e){S(s,t,e),c(t,n),c(t,i),c(t,f),c(t,r)},p(s,[e]){e&1&&a!==(a=s[0].post.title+"")&&_(i,a),e&1&&o!==(o=s[0].item+"")&&_(r,o)},i:h,o:h,d(s){s&&u(t)}}}function b(l,t,n){let{data:a}=t;return l.$$set=i=>{"data"in i&&n(0,a=i.data)},[a]}class y extends p{constructor(t){super(),v(this,t,b,T,g,{data:0})}}export{y as default};
