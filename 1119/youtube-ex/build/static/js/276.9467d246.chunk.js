"use strict";(self.webpackChunkyoutube_ex=self.webpackChunkyoutube_ex||[]).push([[276],{8276:(s,e,i)=>{i.r(e),i.d(e,{default:()=>r});var t=i(5043),a=i(3216),c=i(5475),n=i(4649),d=i(1043),l=i.n(d),o=i(5051),p=i(3862),h=i(579);const r=()=>{const{videoId:s}=(0,a.g)(),[e,i]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(0,p.T)(`videos?part=snippet,statistics&id=${s}`).then((s=>{console.log(s),i(s.items[0])}))}),[s]),(0,h.jsx)(n.A,{title:"\uc720\ud29c\ube0c \ube44\ub514\uc624 \uc601\uc0c1",description:"\uc720\ud29c\ube0c \ube44\ub514\uc624 \uc601\uc0c1\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4",children:(0,h.jsx)("section",{id:"videoViewPage",children:e&&(0,h.jsxs)("div",{className:"video__view",children:[(0,h.jsx)("div",{className:"video__play",children:(0,h.jsx)(l(),{playing:!0,url:`https://www.youtube.com/watch?v=${s}`,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}})}),(0,h.jsxs)("div",{className:"video__info",children:[(0,h.jsx)("h2",{className:"video__title",children:e.snippet.title}),(0,h.jsxs)("div",{className:"video__channel",children:[(0,h.jsx)("div",{className:"id",children:(0,h.jsx)(c.N_,{to:`/channel/${e.snippet.channelId}`,children:e.snippet.channelTitle})}),(0,h.jsxs)("div",{className:"count",children:[(0,h.jsxs)("span",{className:"view",children:[(0,h.jsx)(o.$fZ,{}),e.statistics.viewCount]}),(0,h.jsxs)("span",{className:"like",children:[(0,h.jsx)(o.Vis,{}),e.statistics.likeCount]}),(0,h.jsxs)("span",{className:"commint",children:[(0,h.jsx)(o.AEd,{}),e.statistics.commentCount]})]})]}),(0,h.jsx)("div",{className:"video__desc",children:e.snippet.description})]})]})})})}},3862:(s,e,i)=>{i.d(e,{T:()=>c});var t=i(6213);const a={params:{maxResults:"48"},headers:{"x-rapidapi-key":"1965d581d1msh78f3c9a44ea7cd1p15fc94jsnd5aa0eca2b56","x-rapidapi-host":"youtube-v31.p.rapidapi.com"}},c=async s=>{const{data:e}=await t.A.get(`https://youtube-v31.p.rapidapi.com/${s}`,a);return console.log(e),e}}}]);
//# sourceMappingURL=276.9467d246.chunk.js.map