(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{102:function(e,t,c){},114:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),r=c(22),j=c.n(r),o=(c(82),c(29)),d=c(5),l=(c(83),c(50)),b=c(123),h=c(121),O=c(124),x=c(122),u=(c(84),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),p=c(57),m=c(55),v=c.n(m),f=c(8),g=c(58),N=(c(102),c(1)),y=g.a.div(n||(n=Object(p.a)(["\n  padding : 20px;\n"]))),k=g.a.h1(i||(i=Object(p.a)(["\n  font-size : 25px;\n  color : ","\n"])),(function(e){return e.col}));function S(e){return Object(N.jsxs)("p",{children:["\ub0a8\uc740 \uc7ac\uace0 : ",e.inventory[0]," "]})}var w=function(e){var t=Object(f.g)().id,c=e.shoes.find((function(e){return e.id==t})),n=Object(s.useState)(!0),i=Object(d.a)(n,2),a=i[0],r=i[1],j=Object(s.useState)(""),o=Object(d.a)(j,2),l=(o[0],o[1]);Object(s.useEffect)((function(){var e=setTimeout((function(){r(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var b=Object(f.f)();return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(y,{children:Object(N.jsx)(k,{className:"red",children:"Detail"})}),Object(N.jsx)("input",{onChange:function(e){l(e.target.value)}}),!0===a?Object(N.jsx)("div",{className:"my-alert2",children:Object(N.jsx)("p",{children:"\uc7ac\uace0\uac00 \ubcc4\ub85c \uc548\ub0a8\uc74c"})}):null,Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%"})}),Object(N.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(N.jsx)("h4",{className:"pt-5",children:c.title}),Object(N.jsx)("p",{children:c.content}),Object(N.jsx)("p",{children:c.price}),Object(N.jsx)(S,{inventory:e.inventory}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){e.inventory_edit([9,11,12])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){b.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},B=c(35);function C(e){return Object(N.jsxs)("div",{className:"col-md-4",children:[Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(N.jsx)("h4",{children:e.shoes.title}),Object(N.jsx)("p",{children:e.shoes.content}),Object(N.jsx)("p",{children:e.shoes.price})]})}var I=function(){var e=Object(s.useState)(u),t=Object(d.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(d.a)(i,2),r=a[0],j=a[1];return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(b.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(b.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(N.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(O.a,{className:"me-auto",children:[Object(N.jsx)(O.a.Link,{as:B.b,to:"/",children:"Home"}),Object(N.jsx)(O.a.Link,{as:B.b,to:"/detail",children:"Detail"}),Object(N.jsxs)(x.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(N.jsx)(x.a.Item,{href:"#action/3.1",children:"Action"}),Object(N.jsx)(x.a.Item,{href:"#action/3.2",children:"Another action"}),Object(N.jsx)(x.a.Item,{href:"#action/3.3",children:"Something"}),Object(N.jsx)(x.a.Divider,{}),Object(N.jsx)(x.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(N.jsxs)(f.c,{children:[Object(N.jsxs)(f.a,{exact:!0,path:"/",children:[Object(N.jsxs)("div",{className:"background",children:[Object(N.jsx)("h1",{children:"\ucd08\ud2b9\uac00 \ud560\uc778 50%"}),Object(N.jsx)("p",{children:"\ub2e8 2\uc2dc\uac04\ub9cc!"}),Object(N.jsx)("p",{children:Object(N.jsx)(l.a,{variant:"primary",children:"Learn more"})})]}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(N.jsx)(C,{shoes:c[t],i:t},t)}))}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){v.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){n([].concat(Object(o.a)(c),Object(o.a)(e.data)))})).catch((function(){}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(N.jsx)(f.a,{path:"/detail/:id",children:Object(N.jsx)(w,{shoes:c,inventory:r,inventory_edit:j})}),Object(N.jsx)(f.a,{path:"/:id",children:Object(N.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc37c\uc74c"})})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,125)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};j.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(B.a,{children:Object(N.jsx)(I,{})})}),document.getElementById("root")),D()},82:function(e,t,c){},83:function(e,t,c){}},[[114,1,2]]]);
//# sourceMappingURL=main.ce555352.chunk.js.map