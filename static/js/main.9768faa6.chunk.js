(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),c=t(2),o=t.n(c),m=t(13),l=t(14),u=t(17),v=t(15),p=t(18),_=t(16),d=t.n(_);t(42);var g=function(e){var a=e.year,t=e.rating,n=e.title,s=e.summary,i=e.genres,c=e.poster;return r.a.createElement("div",{className:"movie"},r.a.createElement("h1",{className:"movie__title"},n),r.a.createElement("img",{className:"movie__poster",src:c,alt:n,title:n}),r.a.createElement("h2",{className:"movie__year"},"Year : ",a),r.a.createElement("h2",{className:"movie__rating"},"Rating : ",t," / 10"),r.a.createElement("h2",{className:"movie__genres"},"Genres : ",i," "),r.a.createElement("p",{className:"movie__summary"}," ",s))},y=(t(43),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovie=function(){var e,a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(d.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,a=e.data.data.movies,t.setState({movies:a,isLoading:!1});case 5:case"end":return n.stop()}}))},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,rating:e.rating,summary:e.summary,genres:e.genres.join(", "),poster:e.medium_cover_image})})),")"))}}]),a}(r.a.Component));i.a.render(r.a.createElement(y,null),document.getElementById("can"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9768faa6.chunk.js.map