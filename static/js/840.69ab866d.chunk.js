"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[840],{8840:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,c,s,o,i,u,p,l=t(5861),d=t(9439),h=t(4687),x=t.n(h),f=t(2791),v=t(7689),g=t(1087),m=t(299),w=t(168),j=t(5706),Z=j.Z.div(r||(r=(0,w.Z)(["\n  padding: 20px;\n"]))),b=j.Z.div(a||(a=(0,w.Z)(["\ntext-align:center;"]))),k=j.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),y=j.Z.div(s||(s=(0,w.Z)(["\n  padding-right: 20px;\n"]))),_=j.Z.div(o||(o=(0,w.Z)(["\n  width: 100%;\n  height: 2px;\n  background-color: 0px 4px 4px rgba(0, 0, 0, 0.15), #333c4e;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]))),S=j.Z.button(i||(i=(0,w.Z)(["\n  width: 150px;\n  padding: 5px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  background-color: teal;\n  font-size: 16px;\n  color: white;\n"]))),U=j.Z.li(u||(u=(0,w.Z)(["\n  margin-bottom: 10px;\n  list-style: none;\n"]))),E=(0,j.Z)(g.rU)(p||(p=(0,w.Z)(["\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: teal;\n    color: white;\n    border-radius: 4px;\n  }\n"]))),F=t(7596),N=(t(5462),t(6036)),C=t(7692),G=t(3959),T=t(184),q=function(){var n,e,t=(0,v.UO)().id,r=(0,v.TH)(),a=null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",c=(0,f.useState)([]),s=(0,d.Z)(c,2),o=s[0],i=s[1],u=(0,f.useState)(""),p=(0,d.Z)(u,2),h=p[0],w=p[1],j=(0,f.useState)(null),q=(0,d.Z)(j,2),z=q[0],B=q[1];return(0,f.useEffect)((function(){function n(){return(n=(0,l.Z)(x().mark((function n(){return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{(0,m.vq)(t).then((function(n){n?(B(n),i(n.genres),w(n.poster_path)):F.Am.warn("There is no movie with such name. Please Go Back and try another one.",{theme:"dark"})}))}catch(e){console.log(e)}case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,T.jsxs)(Z,{children:[(0,T.jsx)(g.rU,{to:a,children:(0,T.jsx)(S,{children:"Go Back \ud83d\udd19 "})}),z?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(k,{children:[(0,T.jsx)("img",{src:h?"https://image.tmdb.org/t/p/w500/".concat(h):"".concat("https://cdn.pixabay.com/photo/2021/12/29/17/34/girl-6902365_1280.png"),alt:z.title,width:"350"}),(0,T.jsxs)(y,{children:[(0,T.jsxs)("h1",{children:[z.title,"(",z.release_date&&z.release_date.slice(0,4),")"]}),(0,T.jsxs)("p",{children:["User Score: ",Math.round(Number(z.popularity)),"% "]}),(0,T.jsx)("h2",{children:"Overview"}),(0,T.jsx)("p",{children:z.overview}),(0,T.jsx)("h2",{children:"Genres"}),0!==o.length&&o.map((function(n){return(0,T.jsxs)("span",{children:[" ",(0,T.jsx)("span",{children:n.name})]},n.id)}))]})]}),(0,T.jsx)(_,{}),(0,T.jsxs)(b,{children:[(0,T.jsx)("h3",{children:"Additional Information"}),(0,T.jsxs)("ul",{children:[(0,T.jsx)(U,{children:(0,T.jsxs)(E,{to:"cast",state:r.state,children:[(0,T.jsx)(C.kGm,{size:"16px"})," Cast"," "]})}),(0,T.jsx)(U,{children:(0,T.jsxs)(E,{to:"reviews",state:r.state,children:[" ",(0,T.jsx)(N.DQk,{size:"16px"})," Reviews"," "]})})]}),(0,T.jsx)(_,{})]})]}):(0,T.jsxs)("div",{children:["There is no movie with such name. Please Go Back and try another one."," "]}),(0,T.jsx)(F.Ix,{autoClose:3e3,closeOnClick:!0}),(0,T.jsx)(f.Suspense,{fallback:(0,T.jsx)(G.a,{}),children:(0,T.jsx)(v.j3,{})})]})}},299:function(n,e,t){t.d(e,{Tg:function(){return i},W0:function(){return x},ad:function(){return p},pI:function(){return v},vq:function(){return d}});var r=t(5861),a=t(4687),c=t.n(a),s=t(1243),o="b6886ee9a6485554c1f623cee5612031";function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("trending/movie/day?api_key=".concat(o));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),new Error("Not Found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=840.69ab866d.chunk.js.map