"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[143],{6570:function(n,t,e){e.d(t,{o:function(){return a}});var r=e(1933),i=e(8644),a=function(n){var t=(0,r.useQuery)("trending movies",(function(){return(0,i.Df)(n)}));return{trendingMovies:t.data,refetchTrendingMovies:t.refetch,isLoadingTrendingMovies:t.isLoading}}},8644:function(n,t,e){e.d(t,{Be:function(){return g},Df:function(){return u},Hu:function(){return w},IR:function(){return f},Io:function(){return k},M1:function(){return x},Pg:function(){return m},Zb:function(){return Z},_L:function(){return p},cN:function(){return l},k5:function(){return d},n6:function(){return A},pn:function(){return h},sI:function(){return v}});var r=e(5861),i=e(7757),a=e.n(i),c=e(4569),o=e.n(c),s="af82d7be8f57d00f4e04fac446f5a0d5";o().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/all/day",{params:{api_key:s,page:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/popular",{params:{api_key:s,page:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/top_rated",{params:{api_key:s,page:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),A=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/upcoming",{params:{api_key:s,page:t}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t,e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/search/movie",{params:{api_key:s,query:t,page:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(t),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(t,"/videos"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(t,"/similar"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/person/".concat(t),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/person/".concat(t,"/movie_credits"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/person/".concat(t,"/images"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("/movie/".concat(t,"/images"),{params:{api_key:s}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9669:function(n,t,e){e.d(t,{Z:function(){return R}});var r,i,a,c,o,s,u,p,d=e(1413),A=(e(2791),e(3504)),f=e(1333),m=e(6563),l=e(6445),h=e(7047),x=e(3167),k=e(3187),g=e(168),v=e(7939),w=v.ZP.div(r||(r=(0,g.Z)(["\n  padding: 30px 0;\n\n  @media screen and (min-width: 768px) {\n    padding: 40px 0;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 50px 0;\n  }\n"]))),Z=v.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 30px;\n  }\n"]))),y=v.ZP.h1(a||(a=(0,g.Z)(["\n  font-size: 30px;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    font-size: 34px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 36px;\n  }\n"]))),S=v.ZP.span(c||(c=(0,g.Z)(["\n  margin-bottom: 10px;\n  margin-left: 5px;\n\n  display: inline-block;\n\n  font-size: 14px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 15px;\n    margin-left: 10px;\n  }\n"]))),J=v.ZP.ul(o||(o=(0,g.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 30px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 30px;\n  }\n"]))),L=v.ZP.li(s||(s=(0,g.Z)(["\n  @media screen and (max-width: 479px) {\n    &:not(:nth-child(3n)) {\n      margin-right: 5px;\n    }\n\n    &:nth-last-child(n + 3) {\n      margin-bottom: 20px;\n    }\n\n    width: calc((100% - 10px) / 2);\n  }\n\n  @media screen and (min-width: 480px) and (max-width: 767px) {\n    width: calc((100% - 15px) / 3);\n    &:not(:nth-child(3n)) {\n      margin-right: 5px;\n    }\n\n    &:nth-last-child(n + 4) {\n      margin-bottom: 20px;\n    }\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    width: calc((100% - 40px) / 4);\n    &:not(:nth-child(5n)) {\n      margin-right: 10px;\n    }\n\n    &:nth-last-child(n + 5) {\n      margin-bottom: 20px;\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    width: calc((100% - 40px) / 5);\n    &:not(:nth-child(5n)) {\n      margin-right: 10px;\n    }\n\n    &:nth-last-child(n + 6) {\n      margin-bottom: 20px;\n    }\n  }\n"]))),b=v.ZP.div(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n\n  & button {\n    color: #fff;\n  }\n"]))),j=v.ZP.button(p||(p=(0,g.Z)([""]))),T=e(184),R=function(n){var t=n.isLoading,e=n.title,r=n.movies,i=n.handleClick,a=n.page;return(0,T.jsx)(l.Z,{children:(0,T.jsxs)(w,{children:[e&&!t?(0,T.jsx)(Z,{children:(0,T.jsx)(y,{children:e})}):(0,T.jsx)(Z,{children:(0,T.jsx)(h.Z,{variant:"rectangular",width:180,height:50})}),t?(0,T.jsx)(S,{children:(0,T.jsx)(h.Z,{variant:"text",width:95,height:18})}):(0,T.jsxs)(S,{children:["Page ",a," of ",null===r||void 0===r?void 0:r.data.total_pages]}),(0,T.jsx)(J,{children:null===r||void 0===r?void 0:r.data.results.map((function(n){var e=n.id,r=n.original_title,i=n.original_name,a=n.poster_path,c=n.release_date,o=n.first_air_date;return(0,T.jsx)(L,{children:(0,T.jsx)(A.rU,{to:{pathname:"/movies/all/".concat((0,x.C)(r||i),"-").concat(e)},children:(0,T.jsx)(k.Z,{isLoading:t,src:a,date:c||o,name:r||i})})},e)}))}),!t&&(0,T.jsx)(b,{children:(0,T.jsx)(f.Z,{count:null===r||void 0===r?void 0:r.data.total_pages,size:"small",variant:"outlined",shape:"rounded",color:"secondary",renderItem:function(n){return(0,T.jsx)(m.Z,(0,d.Z)((0,d.Z)({component:j},n),{},{onClick:function(){return i(n.page)}}))},page:a})})]})})}},3187:function(n,t,e){e.d(t,{Z:function(){return g}});e(2791);var r,i,a,c,o,s=e(8820),u=e(7047),p=e(168),d=e(7939),A=d.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),f=d.ZP.div(i||(i=(0,p.Z)(["\n  position: relative;\n  width: 120px;\n  height: 180px;\n\n  overflow: hidden;\n\n  border-radius: 10px;\n  background-color: #111;\n\n  @media screen and (min-width: 768px) {\n    width: 160px;\n    height: 240px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 200px;\n    height: 280px;\n  }\n"]))),m=d.ZP.div(a||(a=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: transparent;\n  backdrop-filter: blur(0px);\n  transition: backdrop-filter 250ms, color 250ms;\n\n  &:hover {\n    backdrop-filter: blur(4px);\n    color: #fff;\n  }\n"]))),l=d.ZP.span(c||(c=(0,p.Z)(["\n  margin-top: 10px;\n\n  font-weight: 700;\n\n  color: #9ca3af;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 16px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-top: 18px;\n  }\n"]))),h=d.ZP.span(o||(o=(0,p.Z)(["\n  margin-top: 4px;\n\n  font-weight: 700;\n  font-size: 14px;\n  text-align: center;\n\n  color: #fff;\n  transition: color 250ms;\n\n  &:hover {\n    color: #ff3b5f;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 6px;\n    font-size: 16px;\n  }\n  @media screen and (min-width: 768px) {\n    margin-top: 8px;\n    font-size: 18px;\n  }\n"]))),x=e(3977),k=e(184),g=function(n){var t=n.isLoading,e=n.src,r=n.date,i=n.name;return(0,k.jsxs)(k.Fragment,{children:[!t&&(0,k.jsxs)(A,{children:[(0,k.jsxs)(f,{children:[(0,k.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):x,width:"100%",alt:i}),(0,k.jsx)(m,{children:(0,k.jsx)(s.w8I,{size:"34px"})})]}),(0,k.jsx)(l,{children:r}),(0,k.jsx)(h,{children:i})]}),t&&(0,k.jsxs)(A,{children:[(0,k.jsx)(u.Z,{variant:"rectangular",width:200,height:280}),(0,k.jsx)(u.Z,{variant:"text",width:64,height:15}),(0,k.jsx)(u.Z,{variant:"text",width:112,height:23})]})]})}},6143:function(n,t,e){e.r(t);var r=e(1413),i=e(885),a=e(2791),c=e(6871),o=e(6570),s=e(9669),u=e(184);t.default=function(){var n=(0,c.s0)(),t=(0,c.TH)(),e=new URLSearchParams(t.search).get("page"),p=(0,a.useState)(Number(e)||1),d=(0,i.Z)(p,2),A=d[0],f=d[1],m=(0,o.o)(A),l=m.trendingMovies,h=m.refetchTrendingMovies,x=m.isLoadingTrendingMovies;return(0,a.useEffect)((function(){h(),window.scrollTo(0,0)}),[A,h]),(0,u.jsx)(s.Z,{isLoading:x,title:"Trending",movies:l,handleClick:function(e){f(e),n((0,r.Z)((0,r.Z)({},t),{},{search:"page=".concat(e)}))},page:A})}},3167:function(n,t,e){e.d(t,{C:function(){return a}});var r=e(333),i=e.n(r),a=function(n){return i()(n,{lower:!0})}},3977:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=143.c2f01d87.chunk.js.map