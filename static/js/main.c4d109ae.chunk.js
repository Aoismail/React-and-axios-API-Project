(this["webpackJsonpanime-list"]=this["webpackJsonpanime-list"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),a=n.n(c),s=n(45),r=n.n(s),l=(n(54),n(11)),o=n(12),j=n(14),d=n(13),h=n(33),b=n(6),m=(n(55),n(24)),u=n(19),O=n(17),x=n(22),p=n(26),f=n(20),v=n(28),g=n(48),C=n(27),A=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isComplete:!1},e.handleClick=function(t){var n=e.state.isComplete;n=!n,e.setState({isComplete:n}),console.log("handling Fave click!")},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"film-row-fave add_to_queue",onClick:this.handleClick,children:!0===this.state.isComplete?Object(i.jsx)("svg",{id:"completeButton",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})}):Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})})})})}}]),n}(c.Component),k=n(21),w=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).divClicked=function(t,n){t.preventDefault(),e.youDidIt(),console.log(t),console.log(n),e.props.allTimeAnime(n)},e.youDidIt=function(e){console.log("Yes I'm here")},e.removeMe=function(t){e.props.delete([t])},e.checkBoxHandler=function(t){e.props.checkbox(t)},e.state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{children:this.props.sAnime.map((function(t,n){return Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsx)("div",{className:"animeList",onClick:function(t){return e.divClicked(t,n)},children:Object(i.jsx)(x.a,{className:"flex-container",children:Object(i.jsxs)(k.a,{horizontal:!0,children:[Object(i.jsx)(k.a.Item,{style:{width:"5%"},children:n+1}),Object(i.jsx)(k.a.Item,{style:{width:"25%"},children:Object(i.jsx)("img",{width:70,height:100,className:"mr-3",src:t.image_url,alt:"Generic placeholder"})}),Object(i.jsx)(k.a.Item,{children:t.title}),Object(i.jsx)(k.a.Item,{children:t.episodes+" ep "}),Object(i.jsx)(k.a.Item,{variant:"dark",children:t.score})]})})}),Object(i.jsxs)(k.a.Item,{style:{padding:"1%"},children:[Object(i.jsx)("div",{onClick:function(t){return e.removeMe(n)},children:Object(i.jsx)("svg",{id:"xButton",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})})}),Object(i.jsx)("input",{type:"checkbox",onChange:function(){return e.checkBoxHandler(n)}}),Object(i.jsx)(A,{})]})]})}))})}}]),n}(c.Component),y=n(46),L=n.n(y),S=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){console.log(this.props.animeList[this.props.bestAnime]);var e=this.props.animeList[this.props.bestAnime];return Object(i.jsx)("div",{children:Object(i.jsxs)(O.a,{children:[Object(i.jsx)(O.a.Img,{variant:"top",src:e.image_url,className:"image"}),Object(i.jsxs)(O.a.Body,{children:[Object(i.jsx)(O.a.Title,{children:e.title}),Object(i.jsx)(O.a.Text,{children:e.synopsis})]}),Object(i.jsx)(O.a.Footer,{children:Object(i.jsxs)("small",{className:"text-muted",children:[" ",e.score]})})]})})}}]),n}(c.Component),N=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({currentAnime:t.target.value})},e.handleSubmet=function(t){console.log(t),e.animeSearch(),e.setState({currentAnime:""})},e.removeAllList=function(t){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{animeList:[],animeNames:[],bestAnime:!1}))},e.deleteHandler=function(t){console.log(t);var n=e.state.animeList.filter((function(e,n){return-1===t.indexOf(n)})),i=e.state.animeNames.filter((function(e,n){return-1===t.indexOf(n)}));e.setState(Object(u.a)(Object(u.a)({},e.state),{},{animeList:Object(m.a)(n),animeNames:Object(m.a)(i),animeSelectedDeleted:[],bestAnime:!1}))},e.handleCheckBox=function(t){var n=[].concat(Object(m.a)(e.state.animeSelectedDeleted),[t]);e.setState(Object(u.a)(Object(u.a)({},e.state),{},{animeSelectedDeleted:Object(m.a)(n)}))},e.animeSearch=function(){console.log("animeSearch"),L.a.get("https://api.jikan.moe/v3/search/anime?q=".concat(e.state.currentAnime)).then((function(t){if(console.log("resoponse",t.data.results[0]),!1===e.state.animeNames.includes(t.data.results[0].title)){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{animeList:[].concat(Object(m.a)(e.state.animeList),[t.data.results[0]])}));var n=e.state.animeNames;n.push(t.data.results[0].title),e.setState({animeNames:n})}}))},e.allTimeAnime=function(t){e.setState({bestAnime:t})},e.state={animeList:[],animeNames:[],currentAnime:"",bestAnime:!1,animeSelectedDeleted:[]},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)(x.a,{children:Object(i.jsxs)(f.a,{children:[Object(i.jsx)("div",{id:"sTier",children:Object(i.jsxs)("p",{children:[this.props.tier," Tier"]})}),Object(i.jsx)("div",{id:"sAllTime",children:!1===this.state.bestAnime?null:Object(i.jsx)(S,{bestAnime:this.state.bestAnime,animeList:this.state.animeList})}),Object(i.jsx)(p.a,{children:Object(i.jsxs)("div",{className:"searchDev",children:[Object(i.jsx)(O.a,{children:Object(i.jsx)(O.a.Body,{children:Object(i.jsxs)(g.a,{inline:!0,children:[Object(i.jsx)(C.a,{type:"text",placeholder:"Search",className:" mr-sm-2",id:"search",onChange:function(t){return e.handleChange(t)},value:this.state.currentAnime}),Object(i.jsx)(v.a,{onClick:function(t){return e.handleSubmet(t)},children:"Add"})]})})}),Object(i.jsx)(w,{sAnime:this.state.animeList,allTimeAnime:this.allTimeAnime,index:this.state.index,delete:this.deleteHandler,checkbox:this.handleCheckBox}),Object(i.jsx)(v.a,{onClick:function(t){return e.removeAllList(t)},children:"Delete All"}),Object(i.jsx)(v.a,{onClick:function(t){return e.deleteHandler(e.state.animeSelectedDeleted)},children:"Delete selected Item"}),Object(i.jsx)("hr",{})]})})]})})}}]),n}(c.Component),B=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)(x.a,{children:Object(i.jsxs)(p.a,{children:[Object(i.jsx)(f.a,{children:Object(i.jsx)(N,{tier:"S"})}),Object(i.jsx)(f.a,{children:Object(i.jsx)(N,{tier:"C"})}),Object(i.jsx)(f.a,{children:Object(i.jsx)(N,{tier:"F"})})]})})}}]),n}(c.Component),D=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:"mainDiv",children:[Object(i.jsx)("h1",{className:"logo",children:"My Anime List"}),Object(i.jsx)(h.b,{to:"/animeList",children:"Anime List"}),Object(i.jsx)("hr",{}),Object(i.jsx)(b.a,{path:"/animeList",component:B})]})})}}]),n}(c.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};n(80);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),I()}},[[81,1,2]]]);
//# sourceMappingURL=main.c4d109ae.chunk.js.map