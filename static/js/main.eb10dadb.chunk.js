(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,t,a){e.exports={navbar:"navbar_navbar__39yj1",logo:"navbar_logo__10Uby",font_youtube:"navbar_font_youtube__2yYGK",title:"navbar_title__3_U52",searchForm:"navbar_searchForm__1YwgS",searchInput:"navbar_searchInput__2JHqj",inputBtn:"navbar_inputBtn__KnfCa",font_search:"navbar_font_search__2qhrs",logIn:"navbar_logIn__3Pzck",font_login:"navbar_font_login__aAWXb"}},15:function(e,t,a){e.exports={home:"videoCard_home__3yQmI",metaData:"videoCard_metaData__2wanF",searchResult:"videoCard_searchResult__13yNv",thumbSizeMedium:"videoCard_thumbSizeMedium__M_mDP",playVideo:"videoCard_playVideo__1lVnG",thumbSizeSmall:"videoCard_thumbSizeSmall__2R22i"}},19:function(e,t,a){e.exports={searchResult:"searchResult_searchResult__3a69q",container:"searchResult_container__1IVHn",videoList:"searchResult_videoList__1E136"}},22:function(e,t,a){e.exports={home:"home_home__1BMfN",videoList:"home_videoList__1tKl5",videoCard:"home_videoCard__1Y_CM"}},4:function(e,t,a){e.exports={playVideo:"playVideo_playVideo__2dFaQ",container:"playVideo_container__3EGoF",videoList:"playVideo_videoList__2j4tC",videoCard:"playVideo_videoCard__1ngyQ",title_container:"playVideo_title_container__3nSrb",title_metaData:"playVideo_title_metaData__2i32N",thumb_icon:"playVideo_thumb_icon__2XHGY",icons_container:"playVideo_icons_container__2zUtl",icons:"playVideo_icons__gI1vs",viewCount:"playVideo_viewCount__iMjEz",publishedAt:"playVideo_publishedAt__198gu",description_container:"playVideo_description_container__30U1g",description:"playVideo_description__2SOwp",show:"playVideo_show__2CsCl",showMore:"playVideo_showMore__3we5I",underline:"playVideo_underline__1b9Nb"}},50:function(e,t,a){},51:function(e,t,a){},6:function(e,t,a){e.exports={home:"metaData_home__rwPhI",searchResult:"metaData_searchResult__LKO5Y",playVideo:"metaData_playVideo__2zKCv",title:"metaData_title__mKw07",channelTitle:"metaData_channelTitle__WBveH",viewCount:"metaData_viewCount__1TxZO",publishedDate:"metaData_publishedDate__3BRgQ",regular:"metaData_regular__rBAt4",small:"metaData_small__Ww0hl",haveMargin:"metaData_haveMargin__HEiRX",haveNone:"metaData_haveNone__2dqxm",description:"metaData_description__2Lz3U",show:"metaData_show__3NSGo",hidden:"metaData_hidden__39YMW"}},78:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(39),c=a.n(s),o=(a(50),a(12)),r=(a(51),a(3)),l=a(11),u=a.n(l),d=a(13),h=a(0),m=Object(i.memo)((function(e){var t=Object(i.useRef)();return Object(h.jsxs)("nav",{className:u.a.navbar,children:[Object(h.jsxs)("div",{className:u.a.logo,onClick:e.goHome,"data-testid":"logo",children:[Object(h.jsx)(d.a,{icon:["fab","youtube"],color:"red",className:u.a.font_youtube}),Object(h.jsx)("span",{className:u.a.title,children:"Youtube"})]}),Object(h.jsxs)("form",{className:u.a.searchForm,onSubmit:function(a){var i=t.current.value;i&&e.search(i),a.preventDefault()},children:[Object(h.jsx)("input",{className:u.a.searchInput,type:"text",placeholder:"\uac80\uc0c9",ref:t}),Object(h.jsx)("button",{className:u.a.inputBtn,children:Object(h.jsx)(d.a,{icon:["fa","search"],color:"white",className:u.a.font_search})})]}),Object(h.jsxs)("div",{className:u.a.logIn,children:[Object(h.jsx)(d.a,{icon:["fas","user-circle"],color:"white",className:u.a.font_login}),Object(h.jsx)("span",{children:"\ub85c\uadf8\uc778"})]})]})})),b=a(22),p=a.n(b),j=a(6),_=a.n(j),v=function(e){return"".concat(e,"_").concat((new Date).getTime()+Math.random())},O=function(e){return e<1e3?"".concat(e):e<1e4?(e/=1e3,e=Math.floor(e),"".concat(e,"\ucc9c")):(e/=1e4,(e=Math.floor(e))>1e4?(e/=1e4,e=Math.floor(e),"".concat(e,"\uc5b5")):"".concat(e,"\ub9cc"))},f=function(e){var t=new Date(e);return"".concat(t.getFullYear(),"\ub144 ").concat(t.getMonth(),"\uc6d4 ").concat(t.getDate(),"\uc77c")},x=Object(i.memo)((function(e){var t,a=e.snippet,i=e.statistics,n=e.fontSize,s=e.display,c=e.description;switch(e.metaSetting){case"home":t=_.a.home;break;case"searchResult":t=_.a.searchResult;break;case"playVideo":t=_.a.playVideo;break;default:throw new Error("check videoCardSetting!")}var o="regular"===n?_.a.regular:_.a.small,r="margin"===s?_.a.haveMargin:_.a.haveNone,l="show"===c?_.a.show:_.a.hidden;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"".concat(t," ").concat(_.a.title),children:a.title}),Object(h.jsx)("p",{className:"".concat(_.a.channelTitle," ").concat(o," ").concat(r),children:a.channelTitle}),Object(h.jsxs)("p",{className:"".concat(_.a.viewCount," ").concat(o),children:["\uc870\ud68c\uc218 ","".concat(O(i.viewCount),"\ud68c")]}),Object(h.jsx)("p",{className:"".concat(_.a.publishedDate," ").concat(o),children:f(a.publishedAt)}),Object(h.jsx)("pre",{className:"".concat(_.a.description," ").concat(l),children:a.description})]})})),y=a(15),g=a.n(y),w=Object(i.memo)((function(e){var t,a=e.snippet,i=e.statistics,n=e.fontSize,s=e.display,c=e.description,o=e.videoCardSetting,r=e.thumbSize;switch(o){case"home":t=g.a.home;break;case"searchResult":t=g.a.searchResult;break;case"playVideo":t=g.a.playVideo;break;default:throw new Error("check videoCardSetting!")}var l=r&&"small"===r?g.a.thumbSizeSmall:g.a.thumbSizeMedium;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("article",{className:"".concat(t),children:[Object(h.jsx)("img",{className:"".concat(l),src:a.thumbnails.medium.url,alt:"video_thumbnail"}),Object(h.jsx)("div",{className:g.a.metaData,children:Object(h.jsx)(x,{snippet:a,statistics:i,fontSize:n,display:s,description:c,metaSetting:o})})]})})})),N=Object(i.createContext)(),C=function(){return Object(i.useContext)(N).setting},S=Object(i.memo)((function(e){var t=e.videos,a=e.selectVideo,i=C();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{className:p.a.home,children:Object(h.jsx)("ul",{className:p.a.videoList,children:t.map((function(e){return Object(h.jsx)("li",{className:p.a.videoCard,onClick:function(){return a(e)},children:Object(h.jsx)(w,{snippet:e.snippet,statistics:e.statistics,fontSize:i.fontSize.small,display:i.display.none,description:i.description.none,videoCardSetting:i.page.home,thumbSize:i.thumbSize.medium})},v(e.snippet.publishedAt))}))})})})})),V=a(19),k=a.n(V),D=Object(i.memo)((function(e){var t=e.searchResult,a=e.selectVideo,i=C();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{className:k.a.searchResult,children:Object(h.jsx)("div",{className:k.a.container,children:Object(h.jsx)("ul",{className:k.a.videoList,children:t.map((function(e){return Object(h.jsx)("li",{className:k.a.videoCard,onClick:function(){return a(e)},children:Object(h.jsx)(w,{snippet:e.snippet,statistics:e.statistics,fontSize:i.fontSize.small,display:i.display.margin,description:i.description.show,videoCardSetting:i.page.searchResult,thumbSize:i.thumbSize.medium})},v(e.snippet.publishedAt))}))})})})})})),z=a(4),R=a.n(z),M=Object(i.memo)((function(e){var t=e.videos,a=e.video,n=e.selectVideo,s=Object(i.useState)("false"),c=Object(o.a)(s,2),r=c[0],l=c[1];Object(i.useEffect)((function(){l("false")}),[]),Object(i.useEffect)((function(){window.scrollTo(0,0)}));var u,m=C();return a&&Object(h.jsxs)("section",{className:R.a.playVideo,children:[Object(h.jsxs)("div",{className:R.a.container,children:[Object(h.jsx)("iframe",{title:"playVideo",id:"ytplayer",type:"text/html",src:"https://www.youtube.com/embed/".concat(a&&a.id),allowFullScreen:!0}),Object(h.jsxs)("section",{className:R.a.title_container,children:[Object(h.jsx)("h2",{children:a.snippet.title}),Object(h.jsxs)("section",{className:R.a.title_metaData,children:[Object(h.jsxs)("section",{className:R.a.viewAndDate,children:[Object(h.jsx)("span",{className:R.a.viewCount,children:"\uc870\ud68c\uc218 ".concat((u=a.statistics.viewCount,Number(u).toLocaleString("ko-kr")),"\ud68c")}),Object(h.jsx)("span",{className:R.a.publishedAt,children:f(a.snippet.publishedAt)})]}),Object(h.jsxs)("section",{className:R.a.icons_container,children:[Object(h.jsxs)("div",{className:R.a.icons,children:[Object(h.jsx)(d.a,{icon:["far","thumbs-up"],color:"white",className:R.a.thumb_icon}),Object(h.jsx)("span",{children:O(a.statistics.likeCount)})]}),Object(h.jsxs)("div",{className:R.a.icons,children:[Object(h.jsx)(d.a,{icon:["far","thumbs-down"],color:"white",className:R.a.thumb_icon}),Object(h.jsx)("span",{children:O(a.statistics.dislikeCount)})]})]})]})]}),Object(h.jsxs)("section",{className:R.a.description_container,children:[Object(h.jsx)("pre",{className:r?R.a.description:R.a.show,children:a.snippet.description}),Object(h.jsx)("button",{className:R.a.showMore,onClick:function(e){l(!r),"\ub354\ubcf4\uae30"===e.target.innerText?e.target.innerText="\uac04\ub7b5\ud788":e.target.innerText="\ub354\ubcf4\uae30"},children:"\ub354\ubcf4\uae30"})]}),Object(h.jsx)("div",{className:R.a.underline})]}),Object(h.jsx)("div",{className:R.a.videoList,children:Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)("li",{className:R.a.videoCard,onClick:function(){return n(e)},children:Object(h.jsx)(w,{snippet:e.snippet,statistics:e.statistics,fontSize:m.fontSize.small,videoCardSetting:m.page.playVideo,thumbSize:m.thumbSize.small})},v(e.snippet.publishedAt))}))})})]})})),I=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Not Found 404"}),console.log("2\ubc88?")]})};var F=function(e){var t=e.youtube,a=Object(i.useState)([]),n=Object(o.a)(a,2),s=n[0],c=n[1],l=Object(i.useState)([]),u=Object(o.a)(l,2),d=u[0],b=u[1],p=Object(i.useState)([]),j=Object(o.a)(p,2),_=j[0],v=j[1],O=Object(i.useState)(null),f=Object(o.a)(O,2),x=f[0],y=f[1],g=Object(r.f)();Object(i.useEffect)((function(){t.mostPopular(24).then((function(e){return c(e)}))}),[t]);var w=Object(i.useCallback)((function(e){return t.searchID(24,e).then((function(e){t.searchVideos(e).then((function(e){setTimeout((function(){b(e),g.push("/searchResult")}),200)}))}))}),[g,t]),N=Object(i.useCallback)((function(e){setTimeout((function(){y(e),v(d),g.push("/playVideo")}),200)}),[g,d]),C=Object(i.useCallback)((function(){return g.push("/")}),[g]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{search:w,goHome:C}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsx)(S,{videos:s,selectVideo:N})}),Object(h.jsx)(r.a,{path:"/searchResult",children:Object(h.jsx)(D,{searchResult:d,selectVideo:N})}),Object(h.jsx)(r.a,{path:"/playVideo",children:Object(h.jsx)(M,{videos:_.length>0?_:s,video:x,selectVideo:N})}),Object(h.jsx)(r.a,{component:I})]})]})},L=a(26),T=(a(58),a(16)),A=a.n(T),E=a(23),B=a(42),Y=a(43),q=a(44),H=function(){function e(t){Object(B.a)(this,e),this.youtube=t}return Object(Y.a)(e,[{key:"mostPopular",value:function(){var e=Object(E.a)(A.a.mark((function e(t){var a,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"id,snippet,statistics",chart:"mostPopular",maxResults:t,fields:"items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount), id)"}});case 2:return i=e.sent,console.log(i.data.items[0].statistics),e.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.items);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchID",value:function(){var e=Object(E.a)(A.a.mark((function e(t,a){var i,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"id",maxResults:t,q:a,fields:"items(id(videoId))"}});case 2:return n=e.sent,e.abrupt("return",Object(q.map)(null===n||void 0===n||null===(i=n.data)||void 0===i?void 0:i.items,"id.videoId").join());case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"searchVideos",value:function(){var e=Object(E.a)(A.a.mark((function e(t){var a,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"id,snippet,statistics",fields:"items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount),id)",id:t}});case 2:return i=e.sent,e.abrupt("return",null===i||void 0===i||null===(a=i.data)||void 0===a?void 0:a.items);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=H,K=a(45),U=function(e){var t=e.children,a=Object(i.useState)({page:{home:"home",searchResult:"searchResult",playVideo:"playVideo"},thumbSize:{small:"small",medium:"medium"},fontSize:{regular:"regular",small:"small"},display:{margin:"margin",none:"none"},description:{show:"show",none:"none"}}),n=Object(o.a)(a,1)[0];return Object(h.jsx)(N.Provider,{value:{setting:n},children:t})},G=new P(a.n(K).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc"}}));c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(L.a,{basename:"/react-youtube",children:Object(h.jsx)(U,{children:Object(h.jsx)(F,{youtube:G})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.eb10dadb.chunk.js.map