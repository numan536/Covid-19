(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{48:function(e,t,n){e.exports=n(81)},53:function(e,t,n){},54:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},77:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(21),c=n.n(r),o=(n(53),n(11)),i=n(12),s=n(14),u=n(15),h=(n(54),n(9)),d=n(83),m=n(19),v=n.n(m),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={eachData:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e,t=this,n=null===(e=this.props.match)||void 0===e?void 0:e.params.country;console.log("this is couuntry",n),v.a.get("https://www84.fanaticpixel.com/covid/data/get_country_data/"+n).then((function(e){t.setState({eachData:e.data})})).catch((function(){return console.log("error")}))}},{key:"render",value:function(){var e,t,n,a;return console.log("this is this.props in single contry",this.state),l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Country Name"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",background:"black",color:"white"}},null===(e=this.state.eachData[0])||void 0===e?void 0:e.country),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center"}},"Total Infected"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",background:"black",color:"white"}},null===(t=this.state.eachData[0])||void 0===t?void 0:t.total_case),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center"}},"Total Deaths"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",background:"black",color:"white"}},null===(n=this.state.eachData[0])||void 0===n?void 0:n.total_deaths),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center"}},"Total Recovered "),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",background:"black",color:"white"}},null===(a=this.state.eachData[0])||void 0===a?void 0:a.total_recovered))}}]),n}(l.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{container:!0,fluid:!0},l.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Total Cases"),l.a.createElement("th",null,"New Cases"),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null,"New Deaths"),l.a.createElement("th",null,"Total Recovered"),l.a.createElement("th",null,"Active Cases"),l.a.createElement("th",null,"Critical Cases"))),l.a.createElement("tbody",null,this.props.data.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.ID),l.a.createElement(h.b,{to:"/singlecountry/".concat(e.country)},l.a.createElement("td",null,e.country)),l.a.createElement("td",null,e.total_case),l.a.createElement("td",null,e.new_case),l.a.createElement("td",null,e.total_deaths),l.a.createElement("td",{style:{background:e.new_deaths?"red":""}},e.new_deaths),l.a.createElement("td",{style:{background:e.total_recovered?"#28a745":""}},e.total_recovered),l.a.createElement("td",null,e.active_cases),l.a.createElement("td",null,e.critical_cases))})))))}}]),n}(l.a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e,t,n,a;return console.log("this.props",this.props),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{style:{background:"url('/images/corona5.png') no-repeat center",width:"100%",height:"600px",align:"center",backgroundSize:"cover"}},l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},"Total Cases"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",background:"Lightblack",color:"white"}},null===(e=this.props.totalcount[0])||void 0===e?void 0:e.total_case),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},"Total Deaths"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},null===(t=this.props.totalcount[0])||void 0===t?void 0:t.total_deaths),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},"Total Recovered"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},null===(n=this.props.totalcount[0])||void 0===n?void 0:n.total_recovered),l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},"Critical Cases"),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",color:"white"}},null===(a=this.props.totalcount[0])||void 0===a?void 0:a.critical_cases))))}}]),n}(l.a.Component),f=n(16),b=n(84),w=n(85),y=n(86),k=n(87),x=(n(77),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={allcountries:[],totalcount:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://www84.fanaticpixel.com/covid/data/get_totals").then((function(t){e.setState({totalcount:t.data}),v.a.get("https://www84.fanaticpixel.com/covid/data/get_countries_data").then((function(t){e.setState({allcountries:t.data}),console.log("response.data",t.data)}))})).catch((function(){return console.log("error")}))}},{key:"render",value:function(){var e=this;return console.log("this.state",this.state),l.a.createElement("div",null,l.a.createElement(h.a,null,l.a.createElement(b.a,null,l.a.createElement(w.a,null,l.a.createElement(y.a,{bg:"dark",variant:"dark"},l.a.createElement(y.a.Brand,{href:"/"},l.a.createElement("img",{src:"/images/corona-logo-1.png",style:{height:"50px",width:"50px",align:"center",marginRight:10}}),"Covid-19"),l.a.createElement(k.a,{className:"mr-auto"},l.a.createElement(k.a.Link,null,l.a.createElement(h.b,{to:"/"},"Total Cases")),l.a.createElement(k.a.Link,null,l.a.createElement(h.b,{to:"/countries"},"Countries")))))),l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(p,Object.assign({},t,{totalcount:e.state.totalcount}))}}),l.a.createElement(f.a,{path:"/countries",render:function(t){return l.a.createElement(E,Object.assign({},t,{data:e.state.allcountries}))}}),l.a.createElement(f.a,{path:"/singlecountry/:country",render:function(e){return l.a.createElement(g,e)}})),l.a.createElement("div",null)))}}]),n}(l.a.Component)),A=(n(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.5bdaab44.chunk.js.map