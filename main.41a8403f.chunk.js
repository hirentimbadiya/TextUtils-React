(this.webpackJsonphiru=this.webpackJsonphiru||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(4),s=c.n(o),r=(c(9),c(2)),l=(c(10),c(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.tital}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:" Home "})})}),Object(l.jsxs)("div",{class:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(l.jsxs)("strong",{children:[Object(l.jsx)("button",{type:"button",onClick:e.redmode,class:"btn btn-danger mx-1",children:"Red Mode"})," "]}),Object(l.jsx)("strong",{children:Object(l.jsx)("button",{type:"button",onClick:e.yellowmode,class:"btn btn-warning mx-1",children:"Yellow Mode"})}),Object(l.jsx)("strong",{children:Object(l.jsx)("button",{type:"button",onClick:e.greenmode,class:"btn btn-success mx-1",children:"Green Mode"})})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-3"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],o=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container text-".concat("light"===e.mode||"warning"===e.mode?"dark":"light"),children:[Object(l.jsxs)("h1",{children:[e.heading," "]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:a,style:{backgroundColor:"light"===e.mode?"white":"#f8f1f1",color:"light"===e.mode?"#f8f1f1":"white"},onChange:function(e){console.log("on change"),o(e.target.value)},id:"mybox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," mx-2"),onClick:function(){console.log("Uppercase was clicked"+a);var t=a.toUpperCase();o(t),e.ShowAlert("Converted to Uppercase!!","success")},children:"Convert To Uppercase"}),Object(l.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," mx-2"),onClick:function(){console.log("Lowercase was clicked"+a);var t=a.toLowerCase();o(t),e.ShowAlert("Converted to Lowercase!!","success")},children:"Convert To Lowercase"}),Object(l.jsx)("button",{className:"btn btn-".concat("light"===e.mode?"primary":"dark"," mx-2"),onClick:function(){console.log("clear was clicked"+a);o(""),e.ShowAlert("Text is Cleared!!","success")},children:"Clear Text"})]}),Object(l.jsxs)("div",{className:"container my-4 text-".concat("light"===e.mode||"warning"===e.mode?"dark":"light"),children:[Object(l.jsx)("h2",{children:" Your Text Summary"}),Object(l.jsxs)("p",{children:[a.split(" ").length," words and ",a.length," characters"]}),Object(l.jsxs)("p",{children:[.008*a.split(" ").length," Minutes you could take to read!!"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:a.length>0?a:"Enter Something to preview it here!!"})]})]})}var b=function(e){return e.alert&&Object(l.jsx)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(l.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," : ",e.alert.msg," "]})})};var h=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(null),s=Object(r.a)(o,2),h=s[0],u=s[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1250)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{tital:"TextUtils",mode:c,Abouttext:"About",toggleMode:function(){"light"===c||"danger"===c||"warning"===c||"success"===c?(a("dark"),document.body.style.backgroundColor="#060827",j("Dark Mode is Enabled!!","success")):(a("light"),document.body.style.backgroundColor="white",j("Light Mode is Enabled!!","success"))},greenmode:function(){a("success"),document.body.style.backgroundColor="#135b44",j("Green Mode is Enabled!!","success")},redmode:function(){a("danger"),document.body.style.backgroundColor="#310308c7",j("Red Mode is Enabled!!","success")},yellowmode:function(){a("warning"),document.body.style.backgroundColor="#f2f26e9c",j("Yellow Mode is Enabled!!","success")}}),Object(l.jsx)(b,{alert:h}),Object(l.jsx)("div",{className:"container  my-4",children:Object(l.jsx)(d,{heading:"Enter the Text",mode:c,ShowAlert:j})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.41a8403f.chunk.js.map