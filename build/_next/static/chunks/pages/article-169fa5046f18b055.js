(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{1666:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article",function(){return l(1127)}])},7497:function(e,a,l){"use strict";l.d(a,{g:function(){return c}});var s=l(5893),i=l(7294);let c=()=>{let[e,a]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{setTimeout(()=>{a(!1)},5e3)},[]),(0,s.jsx)("div",{className:"preloader ".concat(e?"":"is-hide"),children:(0,s.jsx)("svg",{className:"preloader--svg",children:(0,s.jsx)("text",{x:"50%",y:"50%",dy:".35em",textAnchor:"middle",children:"Mangrove Digital"})})})}},5937:function(e,a,l){"use strict";l.d(a,{a:function(){return n}});var s=l(5893),i=l(1664),c=l.n(i);let n=e=>{let{title:a,links:l,...i}=e;return(0,s.jsx)("div",{className:"breadcrumb",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{children:a}),(0,s.jsx)("ul",{children:l.map((e,a)=>(0,s.jsx)("li",{className:"".concat(a===l.length-1&&"active"),children:(0,s.jsx)(c(),{href:e.url,children:e.name})},a))})]})})}},3340:function(e,a,l){"use strict";l.d(a,{h:function(){return r}});var s=l(5893),i=l(1664),c=l.n(i),n=l(7294),t=l(1163);let r=e=>{let{isHomePage:a,...l}=e,[i,r]=(0,n.useState)(!1),d=(0,t.useRouter)();return(0,n.useEffect)(()=>{let e=()=>{window.scrollY>20?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)("header",{onClick:()=>{let e=document.querySelector("body");null==e||e.classList.toggle("toggle-nav-mobile")},className:"header ".concat(i?"scrolled":""," ").concat(a?"":"solid"),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(c(),{className:"header--logo",href:"/",children:(0,s.jsx)("img",{src:"/img/logo.webp",alt:""})}),(0,s.jsxs)("nav",{className:"header--nav",children:[(0,s.jsx)(c(),{href:"#",children:(0,s.jsx)("img",{src:"/img/logo.webp",alt:""})}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"/"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{className:"/about"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/about",children:"About Us"})}),(0,s.jsx)("li",{className:"/plantation"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/plantation",children:"Plantation"})}),(0,s.jsx)("li",{className:"/mapping"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/mapping",children:"Mapping"})}),(0,s.jsx)("li",{className:"/article"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/article",children:"Article"})}),(0,s.jsx)("li",{className:"/album"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/album",children:"Gallery"})}),(0,s.jsx)("li",{className:"/contact"==d.pathname?"active":"",children:(0,s.jsx)(c(),{href:"/contact",children:"Contact"})}),(0,s.jsx)("li",{className:"nav-main",children:(0,s.jsx)(c(),{href:"/donation",children:"Donation"})})]})]}),(0,s.jsxs)("div",{className:"header--toggle-nav-mobile",children:[(0,s.jsx)("span",{}),(0,s.jsx)("span",{}),(0,s.jsx)("span",{})]})]})})}},1127:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return o}});var s=l(5893),i=l(1758),c=l(3340),n=l(7497),t=l(5937),r=l(9417),d=l(2489);let h=e=>{let{id_article:a,article_title:l,article_image:i,created_at:c,...n}=e;return(0,s.jsxs)("div",{className:"card-article",children:[(0,s.jsx)("div",{className:"card-article--frame-img",children:(0,s.jsx)("img",{src:i,alt:""})}),(0,s.jsxs)("div",{className:"card-article--text",children:[(0,s.jsx)("a",{className:"text-title",href:"article/detail/"+a,children:l}),(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(d.G,{icon:r.fT7}),(0,s.jsx)("span",{children:c.split("T")[0]})]})})]})]})};function o(){let e=async e=>await fetch(e).then(e=>e.json()),{data:a,error:l,isLoading:r}=(0,i.ZP)("".concat("http://localhost:3032","/api/articles"),e);return r?(0,s.jsx)(n.g,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h,{isHomePage:!1}),(0,s.jsx)(t.a,{title:"Articles",links:[{name:"Home",url:"/home"},{name:"Articles",url:"/mapping"}]}),(0,s.jsx)("main",{className:"main-wrapper",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:a&&a.map((e,a)=>(0,s.jsx)("div",{className:"mb-4 col-sm-6 col-lg-4",children:(0,s.jsx)(h,{id_article:e.id_article,article_title:e.article_title,article_image:e.article_image,created_at:e.created_at})},a))})})})]})}}},function(e){e.O(0,[976,172,774,888,179],function(){return e(e.s=1666)}),_N_E=e.O()}]);