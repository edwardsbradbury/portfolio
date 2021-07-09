(function(e){function t(t){for(var a,c,i=t[0],b=t[1],d=t[2],l=0,u=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);s&&s(t);while(u.length)u.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var b=r[i];0!==o[b]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},o={app:0},n=[];function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],b=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=b;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a0e":function(e,t,r){"use strict";r("82bd")},1745:function(e,t,r){"use strict";r("8559")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23");function o(e,t){var r=Object(a["u"])("router-view");return Object(a["o"])(),Object(a["c"])(r)}r("0a0e");const n={};n.render=o;var c=n,i=r("6c02"),b={class:"home"},d=Object(a["f"])("div",{id:"bio"},[Object(a["e"])(" Passionate software developer with intermediate level skills in Java SE, Java Swing and intermediate to advanced level skills in JavaScript (Node, Express, Passport, Vue, EJS and vanilla JS. Currently learning React through Codecademy too)."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" Recently finished my second year of undergraduate studies and am seeking a work placement year in software engineering, either for desktop or for the web. During the 2020-21 academic year, I developed Java desktop applications with Swing GUIs and a full-stack JavaScript web application, which can be found "),Object(a["f"])("a",{href:"https://lessonup.herokuapp.com/",target:"_blank"},"here"),Object(a["e"])(" (opens in new window). I'm eager to undertake a work placement to hone my skills through applying them to real world problems; also hoping to experience the practicalities of test-driven development and applying Agile methodologies."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" Hobbies include motorcycles, cross-country cycling and kayaking."),Object(a["f"])("br"),Object(a["f"])("br")],-1);function s(e,t,r,o,n,c){var i=Object(a["u"])("Header"),s=Object(a["u"])("Projects");return Object(a["o"])(),Object(a["c"])("div",b,[Object(a["f"])(i,{mode:n.mode,onUpdateMode:c.changeMode},null,8,["mode","onUpdateMode"]),d,Object(a["f"])(s)])}var l=Object(a["y"])("data-v-fb9cd7b6");Object(a["r"])("data-v-fb9cd7b6");var u={id:"header"},f=Object(a["d"])('<div id="bio" data-v-fb9cd7b6><h1 data-v-fb9cd7b6>Ed Bradbury</h1></div><div id="nav" data-v-fb9cd7b6><a href="./CV.pdf" target="_blank" data-v-fb9cd7b6>CV</a> | <a href="mailto:edwardsbrdbury@gmail.com" target="_blank" data-v-fb9cd7b6>Email me</a> | <a href="https://www.linkedin.com/in/edwardsbradbury" target="_blank" data-v-fb9cd7b6>LinkedIn</a> | <a href="https://github.com/edwardsbradbury" target="_blank" data-v-fb9cd7b6>GitHub</a></div>',2);Object(a["p"])();var p=l((function(e,t,r,o,n,c){return Object(a["o"])(),Object(a["c"])("div",u,[f])})),h={name:"Header",props:["mode"],computed:{linkText:function(){return"projects"===this.mode?"CV":"Projects"}}};h.render=p,h.__scopeId="data-v-fb9cd7b6";var j=h,O=Object(a["y"])("data-v-67a8f07e");Object(a["r"])("data-v-67a8f07e");var m={id:"projects"},v=Object(a["f"])("h2",null,"My projects",-1),y=Object(a["f"])("div",{class:"project"},[Object(a["f"])("h3",null,"Java Swing todo organiser"),Object(a["f"])("table",null,[Object(a["f"])("tr",null,[Object(a["f"])("td",null,[Object(a["e"])(" A todo task organiser for desktop, written in Java JDK 15, using the Swing library for the user interface."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" Developed for university coursework, for my second year programming module. Working with a file chooser component and also writing output to an external file were new things I learned to complete this."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" This coursework scored me 98%; the marker's feedback is in the GitHub repo."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["f"])("a",{href:"https://github.com/edwardsbradbury/java-todo-application",target:"_blank"},"GitHub repo")]),Object(a["f"])("td",null,[Object(a["f"])("iframe",{id:"ytplayer",type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/AlrN15X_juI?autoplay=0&origin=https://edbradbury.co.uk",frameborder:"0",allowfullscreen:""})])])])],-1),g=Object(a["f"])("div",{class:"project"},[Object(a["f"])("h3",null,"Lesson Up"),Object(a["f"])("table",null,[Object(a["f"])("tr",null,[Object(a["f"])("td",null,[Object(a["e"])(" A web-application to enable parents in the UK whose first language isn't English to help their children with their homework."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" Vue.js user interface, served by a Node/Express server, hosted on a Heroku dyno. Calls a separate Node/Express REST API with MySQL database, hosted on Heroku. Also depends heavily on Google Cloud Translate API."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" Developed for a university assignment in my second year, project managed and almost entirely coded by myself. It scored 86% (marker's feedback is in the GitHub repo)."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["e"])(" I taught myself Vue.js (+ Vuex state management), Passport.js (which necessitated my learning CORS configuration and secure cookies) and learned to use Axios http client to complete this project."),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["f"])("a",{href:"https://lessonup.herokuapp.com"},"Lesson Up"),Object(a["e"])(" (live on the web)"),Object(a["f"])("br"),Object(a["f"])("br"),Object(a["f"])("a",{href:"https://github.com/edwardsbradbury/lessonup",target:"_blank"},"GitHub repo"),Object(a["f"])("br")]),Object(a["f"])("td",null,[Object(a["f"])("iframe",{id:"ytplayer",type:"text/html",width:"640",height:"360",src:"https://www.youtube.com/embed/vefsyGOkEsY?autoplay=0&origin=https://edbradbury.co.uk",frameborder:"0",allowfullscreen:""})])])])],-1);Object(a["p"])();var w=O((function(e,t,r,o,n,c){return Object(a["o"])(),Object(a["c"])("div",m,[v,y,g])})),k={name:"Projects"};r("1745");k.render=w,k.__scopeId="data-v-67a8f07e";var _=k,S={name:"Home",components:{Header:j,Projects:_},data:function(){return{mode:"projects"}},methods:{changeMode:function(){this.mode="projects"===this.mode?"CV":"projects"}}};S.render=s;var x=S,P=[{path:"/",name:"Home",component:x}],H=Object(i["a"])({history:Object(i["b"])(),routes:P}),I=H;Object(a["b"])(c).use(I).mount("#app")},"82bd":function(e,t,r){},8559:function(e,t,r){}});
//# sourceMappingURL=app.d810dc44.js.map