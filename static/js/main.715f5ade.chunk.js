(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,t,a){e.exports={navbar:"navbar_navbar__39yj1",logo:"navbar_logo__10Uby",font_youtube:"navbar_font_youtube__2yYGK",title:"navbar_title__3_U52",searchForm:"navbar_searchForm__1YwgS",searchInput:"navbar_searchInput__2JHqj",inputBtn:"navbar_inputBtn__KnfCa",font_search:"navbar_font_search__2qhrs",logIn:"navbar_logIn__3Pzck",font_login:"navbar_font_login__aAWXb"}},14:function(e,t,a){e.exports={home:"videoCard_home__3yQmI",metaData:"videoCard_metaData__2wanF",searchResult:"videoCard_searchResult__13yNv",thumbSizeMedium:"videoCard_thumbSizeMedium__M_mDP",playVideo:"videoCard_playVideo__1lVnG",thumbSizeSmall:"videoCard_thumbSizeSmall__2R22i"}},19:function(e,t,a){e.exports={searchResult:"searchResult_searchResult__3a69q",container:"searchResult_container__1IVHn",videoList:"searchResult_videoList__1E136"}},22:function(e,t,a){e.exports={home:"home_home__1BMfN",videoList:"home_videoList__1tKl5",videoCard:"home_videoCard__1Y_CM"}},4:function(e,t,a){e.exports={playVideo:"playVideo_playVideo__2dFaQ",container:"playVideo_container__3EGoF",videoList:"playVideo_videoList__2j4tC",videoCard:"playVideo_videoCard__1ngyQ",title_container:"playVideo_title_container__3nSrb",title_metaData:"playVideo_title_metaData__2i32N",thumb_icon:"playVideo_thumb_icon__2XHGY",icons_container:"playVideo_icons_container__2zUtl",icons:"playVideo_icons__gI1vs",viewCount:"playVideo_viewCount__iMjEz",publishedAt:"playVideo_publishedAt__198gu",description_container:"playVideo_description_container__30U1g",description:"playVideo_description__2SOwp",show:"playVideo_show__2CsCl",showMore:"playVideo_showMore__3we5I",underline:"playVideo_underline__1b9Nb"}},50:function(e,t,a){},51:function(e,t,a){},6:function(e,t,a){e.exports={home:"metaData_home__rwPhI",searchResult:"metaData_searchResult__LKO5Y",playVideo:"metaData_playVideo__2zKCv",title:"metaData_title__mKw07",channelTitle:"metaData_channelTitle__WBveH",viewCount:"metaData_viewCount__1TxZO",publishedDate:"metaData_publishedDate__3BRgQ",regular:"metaData_regular__rBAt4",small:"metaData_small__Ww0hl",haveMargin:"metaData_haveMargin__HEiRX",haveNone:"metaData_haveNone__2dqxm",description:"metaData_description__2Lz3U",show:"metaData_show__3NSGo",hidden:"metaData_hidden__39YMW"}},78:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(39),c=a.n(s),o=(a(50),a(17)),r=(a(51),a(3)),l=a(11),d=a.n(l),u=a(12),h=a(0),m=Object(n.memo)((function(e){var t=Object(n.createRef)();return Object(h.jsxs)("nav",{className:d.a.navbar,children:[Object(h.jsxs)("div",{className:d.a.logo,onClick:e.goHome,children:[Object(h.jsx)(u.a,{icon:["fab","youtube"],color:"red",className:d.a.font_youtube}),Object(h.jsx)("span",{className:d.a.title,children:"Youtube"})]}),Object(h.jsxs)("form",{className:d.a.searchForm,onSubmit:function(a){var n=t.current.value;n&&e.search(n),a.preventDefault()},children:[Object(h.jsx)("input",{className:d.a.searchInput,type:"text",placeholder:"\uac80\uc0c9",ref:t}),Object(h.jsx)("button",{className:d.a.inputBtn,children:Object(h.jsx)(u.a,{icon:["fa","search"],color:"white",className:d.a.font_search})})]}),Object(h.jsxs)("div",{className:d.a.logIn,children:[Object(h.jsx)(u.a,{icon:["fas","user-circle"],color:"white",className:d.a.font_login}),Object(h.jsx)("span",{children:"\ub85c\uadf8\uc778"})]})]})})),b=a(22),p=a.n(b),_=a(6),j=a.n(_),v=Object(n.memo)((function(e){var t,a=e.snippet,n=e.statistics,i=e.handleCount,s=e.fontSize,c=e.display,o=e.description,r=e.handleDate;switch(e.metaSetting){case"home":t=j.a.home;break;case"searchResult":t=j.a.searchResult;break;case"playVideo":t=j.a.playVideo;break;default:throw new Error("check videoCardSetting!")}var l="regular"===s?j.a.regular:j.a.small,d="margin"===c?j.a.haveMargin:j.a.haveNone,u="show"===o?j.a.show:j.a.hidden;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"".concat(t," ").concat(j.a.title),children:a.title}),Object(h.jsx)("p",{className:"".concat(j.a.channelTitle," ").concat(l," ").concat(d),children:a.channelTitle}),Object(h.jsxs)("p",{className:"".concat(j.a.viewCount," ").concat(l),children:["\uc870\ud68c\uc218 ","".concat(i(n.viewCount),"\ud68c")]}),Object(h.jsx)("p",{className:"".concat(j.a.publishedDate," ").concat(l),children:r(a.publishedAt)}),Object(h.jsx)("pre",{className:"".concat(j.a.description," ").concat(u),children:a.description})]})})),f=a(14),O=a.n(f),x=Object(n.memo)((function(e){var t,a=e.snippet,n=e.statistics,i=e.handleCount,s=e.fontSize,c=e.display,o=e.description,r=e.handleDate,l=e.videoCardSetting,d=e.thumbSize;switch(l){case"home":t=O.a.home;break;case"searchResult":t=O.a.searchResult;break;case"playVideo":t=O.a.playVideo;break;default:throw new Error("check videoCardSetting!")}var u=d&&"small"===d?O.a.thumbSizeSmall:O.a.thumbSizeMedium;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("article",{className:"".concat(t),children:[Object(h.jsx)("img",{className:"".concat(u),src:a.thumbnails.medium.url,alt:"video_thumbnail"}),Object(h.jsx)("div",{className:O.a.metaData,children:Object(h.jsx)(v,{snippet:a,statistics:n,handleCount:i,fontSize:s,display:c,description:o,handleDate:r,metaSetting:l})})]})})})),y=Object(n.memo)((function(e){var t=e.videos,a=e.generateKey,n=e.handleCount,i=e.selectVideo,s=e.handleDate,c=e.videoCardSetting,o=e.fontSize;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{className:p.a.home,children:Object(h.jsx)("ul",{className:p.a.videoList,children:t.map((function(e){return Object(h.jsx)("li",{className:p.a.videoCard,onClick:function(){return i(e)},children:Object(h.jsx)(x,{snippet:e.snippet,statistics:e.statistics,handleCount:n,fontSize:o,handleDate:s,videoCardSetting:c})},a(e.snippet.publishedAt))}))})})})})),g=a(19),C=a.n(g),w=function(e){var t=e.searchResult,a=e.generateKey,n=e.handleCount,i=e.selectVideo,s=e.handleDate,c=e.videoCardSetting,o=e.thumbSize,r=e.fontSize;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("section",{className:C.a.searchResult,children:Object(h.jsx)("div",{className:C.a.container,children:Object(h.jsx)("ul",{className:C.a.videoList,children:t.map((function(e){return Object(h.jsx)("li",{className:C.a.videoCard,onClick:function(){return i(e)},children:Object(h.jsx)(x,{snippet:e.snippet,statistics:e.statistics,handleCount:n,fontSize:r,display:"margin",description:"show",handleDate:s,videoCardSetting:c,thumbSize:o})},a(e.snippet.publishedAt))}))})})})})},S=a(4),N=a.n(S),V=function(e){var t=e.videos,a=e.video,i=e.generateKey,s=e.handleCount,c=e.handleViewCountForm,r=e.selectVideo,l=e.handleDate,d=e.videoCardSetting,m=e.thumbSize,b=e.fontSize,p=Object(n.useState)("false"),_=Object(o.a)(p,2),j=_[0],v=_[1];return Object(n.useEffect)((function(){v("false")}),[]),Object(h.jsxs)("section",{className:N.a.playVideo,children:[Object(h.jsxs)("div",{className:N.a.container,children:[Object(h.jsx)("iframe",{title:"playVideo",id:"ytplayer",type:"text/html",src:"https://www.youtube.com/embed/".concat(a&&a.id),allowFullScreen:!0}),Object(h.jsxs)("section",{className:N.a.title_container,children:[Object(h.jsx)("h2",{children:a.snippet.title}),Object(h.jsxs)("section",{className:N.a.title_metaData,children:[Object(h.jsxs)("section",{className:N.a.viewAndDate,children:[Object(h.jsx)("span",{className:N.a.viewCount,children:"\uc870\ud68c\uc218 ".concat(c(a.statistics.viewCount),"\ud68c")}),Object(h.jsx)("span",{className:N.a.publishedAt,children:l(a.snippet.publishedAt)})]}),Object(h.jsxs)("section",{className:N.a.icons_container,children:[Object(h.jsxs)("div",{className:N.a.icons,children:[Object(h.jsx)(u.a,{icon:["far","thumbs-up"],color:"white",className:N.a.thumb_icon}),Object(h.jsx)("span",{children:s(a.statistics.likeCount)})]}),Object(h.jsxs)("div",{className:N.a.icons,children:[Object(h.jsx)(u.a,{icon:["far","thumbs-down"],color:"white",className:N.a.thumb_icon}),Object(h.jsx)("span",{children:s(a.statistics.dislikeCount)})]})]})]})]}),Object(h.jsxs)("section",{className:N.a.description_container,children:[Object(h.jsx)("pre",{className:j?N.a.description:N.a.show,children:a.snippet.description}),Object(h.jsx)("button",{className:N.a.showMore,onClick:function(e){v(!j),"\ub354\ubcf4\uae30"===e.target.innerText?e.target.innerText="\uac04\ub7b5\ud788":e.target.innerText="\ub354\ubcf4\uae30"},children:"\ub354\ubcf4\uae30"})]}),Object(h.jsx)("div",{className:N.a.underline})]}),Object(h.jsx)("div",{className:N.a.videoList,children:Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)("li",{className:N.a.videoCard,onClick:function(){return r(e)},children:Object(h.jsx)(x,{snippet:e.snippet,statistics:e.statistics,handleCount:s,fontSize:b,handleDate:l,videoCardSetting:d,thumbSize:m})},i(e.snippet.publishedAt))}))})})]})},D=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Not Found 404"}),console.log("2\ubc88?")]})},z=function(e){return"".concat(e,"_").concat((new Date).getTime()+Math.random())},k=function(e){return e<1e3?"".concat(e):e<1e4?(e/=1e3,e=Math.floor(e),"".concat(e,"\ucc9c")):(e/=1e4,(e=Math.floor(e))>1e4?(e/=1e4,e=Math.floor(e),"".concat(e,"\uc5b5")):"".concat(e,"\ub9cc"))},R=function(e){var t=new Date(e);return"".concat(t.getFullYear(),"\ub144 ").concat(t.getMonth(),"\uc6d4 ").concat(t.getDate(),"\uc77c")},M=function(e){return Number(e).toLocaleString("ko-kr")},F=Object.freeze({home:"home",searchResult:"searchResult",playVideo:"playVideo"}),I=Object.freeze({small:"small",medium:"medium"}),L=Object.freeze({regular:"regular",small:"small"});var A=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(o.a)(a,2),s=i[0],c=i[1],l=Object(n.useState)([]),d=Object(o.a)(l,2),u=d[0],b=d[1],p=Object(n.useState)(null),_=Object(o.a)(p,2),j=_[0],v=_[1],f=Object(r.f)();Object(n.useEffect)((function(){t.mostPopular(24).then((function(e){return c(e)}))}),[t]);var O=Object(n.useCallback)((function(e){t.searchID(24,e).then((function(e){t.searchVideos(e).then((function(e){b(e),console.log(e.length)})).then(f.push("/searchResult"))}))}),[f,t]),x=function(e){v(e),f.push("/playVideo")},g=Object(n.useCallback)((function(){return f.push("/")}),[f]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{search:O,goHome:g}),Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsx)(y,{videos:s,generateKey:z,handleCount:k,selectVideo:x,handleDate:R,videoCardSetting:F.home,thumbSize:I.medium,fontSize:L.small})}),Object(h.jsx)(r.a,{path:"/searchResult",children:Object(h.jsx)(w,{searchResult:u,generateKey:z,handleCount:k,selectVideo:x,handleDate:R,videoCardSetting:F.searchResult,thumbSize:I.medium,fontSize:L.small})}),Object(h.jsx)(r.a,{path:"/playVideo",children:Object(h.jsx)(V,{videos:u.length>0?u:s,video:j,generateKey:z,selectVideo:x,handleCount:k,handleViewCountForm:M,handleDate:R,videoCardSetting:F.playVideo,thumbSize:I.small,fontSize:L.small})}),Object(h.jsx)(r.a,{component:D})]})]})},K=a(26),T=(a(58),a(15)),E=a.n(T),B=a(23),Y=a(42),q=a(43),H=a(44),P=function(){function e(t){Object(Y.a)(this,e),this.youtube=t}return Object(q.a)(e,[{key:"mostPopular",value:function(){var e=Object(B.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"id,snippet,statistics",chart:"mostPopular",maxResults:t,fields:"items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount), id)"}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchID",value:function(){var e=Object(B.a)(E.a.mark((function e(t,a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"id",maxResults:t,q:a,fields:"items(id(videoId))"}});case 2:return n=e.sent,e.abrupt("return",Object(H.map)(n.data.items,"id.videoId").join());case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"searchVideos",value:function(){var e=Object(B.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"id,snippet,statistics",fields:"items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount),id)",id:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=P,G=a(45),Q=new U(a.n(G).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc"}}));c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(K.a,{basename:"/react-youtube",children:Object(h.jsx)(A,{youtube:Q})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.715f5ade.chunk.js.map