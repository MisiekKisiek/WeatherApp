(this.webpackJsonp1=this.webpackJsonp1||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5964c2da.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),s=n.n(r),l=(n(14),n(3)),o=n(4),i=n(7),u=n(5),m=n(8),h=(n(15),n(16),function(e){var t=e.change,n=e.city,a=e.submit;return c.a.createElement("div",{className:"input"},c.a.createElement("form",{action:""},c.a.createElement("label",null,c.a.createElement("input",{type:"text",onChange:t,value:n,placeholder:"Enter city..."}),c.a.createElement("button",{onClick:a},"Check"))))}),d=n(6),p=(n(17),function(e){var t=e.conditions,n=t.city,a=t.date,r=t.time,s=t.temp,l=t.pressure,o=t.wind,i=t.sunrise,u=t.sunset,m=t.clouds,h=Object(d.a)(n);return h.splice(0,1),c.a.createElement("div",{className:"coolResult ".concat(e.conditions.active)},c.a.createElement("h1",null,n.length>12?c.a.createElement("span",{class:"last"},"This city"):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,n[0]),c.a.createElement("span",{class:"last"},h)),"  ",m>85?c.a.createElement("i",{className:"fas fa-cloud"}):m>25?c.a.createElement("i",{className:"fas fa-cloud-sun"}):c.a.createElement("i",{className:"fas fa-sun"})),c.a.createElement("span",null,"Date: ",c.a.createElement("strong",null,a)),c.a.createElement("span",null,"Time: ",c.a.createElement("strong",null,r)),c.a.createElement("span",null,"Temperature:"," ",c.a.createElement("strong",null,Math.round(s-273.15)," ",c.a.createElement("i",{class:"fas fa-genderless"}),"C")),c.a.createElement("span",null,"Pressure: ",c.a.createElement("strong",null,l," hPa")),c.a.createElement("span",null,"Wind speed: ",c.a.createElement("strong",null,o," m/s")),c.a.createElement("span",null,"Sunrise:"," ",c.a.createElement("strong",null,new Date(1e3*i).toLocaleTimeString())),c.a.createElement("span",null,"Sunset: ",c.a.createElement("strong",null,new Date(1e3*u).toLocaleTimeString())))}),g=(n(18),function(){return c.a.createElement("h1",null,"Sorry, we dont have that city")}),E=function(e){return c.a.createElement("div",{className:"result"},e.conditions.city?e.err?c.a.createElement(g,null):c.a.createElement(p,{conditions:e.conditions}):"")},f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={choosenCity:"",city:"",date:"",time:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",clouds:"",active:"",err:""},n.handleInputChange=function(e){n.setState({choosenCity:e.target.value})},n.handleSubmit=function(e){n.setState({active:""}),e.preventDefault();var t="http://api.openweathermap.org/data/2.5/weather?q=".concat(n.state.choosenCity,"&appid=c017826bad2cbbc375546e21b208d605");fetch(t).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(e){console.log(e);var t=new Date,a="".concat(t.getDay()<10?"0"+t.getDay():t.getDay(),".").concat(t.getMonth()<10?"0"+t.getMonth():t.getMonth(),".").concat(t.getFullYear()),c="".concat(t.getHours()<10?"0"+t.getHours():t.getHours(),":").concat(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes());n.setState((function(t){return{active:"active",choosenCity:"",err:!1,city:t.choosenCity,date:a,time:c,temp:e.main.temp,pressure:e.main.pressure,wind:e.wind.speed,sunrise:e.sys.sunrise,sunset:e.sys.sunset,clouds:e.clouds.all}}))})).catch((function(e){console.log(e),n.setState({err:!0})}))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:n(19),alt:""})),c.a.createElement(h,{change:this.handleInputChange,city:this.state.choosenCity,submit:this.handleSubmit}),c.a.createElement(E,{err:this.state.err,conditions:this.state})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7ee0a97f.chunk.js.map