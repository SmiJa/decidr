(this.webpackJsonpdecidr=this.webpackJsonpdecidr||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(6),a=n.n(i),r=(n(12),n(2)),l=(n(13),n(14),n(0));function d(){return Object(l.jsx)("footer",{id:"footer",children:Object(l.jsx)("div",{className:"texture",children:Object(l.jsx)("div",{className:"texture-2",children:Object(l.jsxs)("div",{className:"text-wrap",children:["Built with ",Object(l.jsx)("span",{className:"heart",children:"\u2665"})," by Jason Smith"]})})})})}function j(){return Object(l.jsx)("header",{id:"header",children:Object(l.jsx)("div",{className:"texture",children:Object(l.jsx)("div",{className:"texture-2",children:Object(l.jsx)("h1",{children:"Decidr"})})})})}var o=n(7);function b(e){var t=e.listContainer,n=e.setListContainer,c=e.setShowWarning,i=e.setMessage,a=e.displayModal,d=Object(s.useState)(""),j=Object(r.a)(d,2),b=j[0],u=j[1];return Object(l.jsx)("div",{id:"input",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"input-wrap",children:Object(l.jsx)("input",{className:"text-input",type:"text",value:b,onChange:function(e){return u(e.target.value)},placeholder:"Add an Item"})}),Object(l.jsx)("button",{disabled:a,type:"submit",className:"add-btn btn",onClick:function(e){if(e.preventDefault(),""===b)return c(!0),i("Your input is empty"),!1;var s=b.toLowerCase().trim();t.every((function(e){return e.toLowerCase()!==s}))?(n([].concat(Object(o.a)(t),[b.trim()])),u("")):(i("Item is already on the list."),c(!0),u("")),console.log(b)},children:"Add Item"}),Object(l.jsx)("button",{disabled:a,type:"submit",className:"clear-btn btn",onClick:function(){n([]),u("")},children:"Clear List"})]})})}function u(e){var t=e.listContainer,n=e.setListContainer,s=t.map((function(e,s){return Object(l.jsxs)("li",{className:"list-item",children:[e," ",Object(l.jsx)("span",{onClick:function(){return e=s,void n(t.filter((function(t,n){return n!==e})));var e},children:Object(l.jsx)("i",{className:"bi bi-trash-fill trash"})})]},s)}));return Object(l.jsx)("div",{id:"list-wrap",children:Object(l.jsx)("ul",{className:"list",children:s})})}function h(e){return Object(l.jsx)("div",{className:"empty-message",children:Object(l.jsx)("div",{className:"message",children:"The list is empty. Please add at least 2 items to the list above."})})}var m=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(!1),a=Object(r.a)(i,2),o=a[0],m=a[1],O=Object(s.useState)(""),x=Object(r.a)(O,2),v=x[0],f=x[1],p=Object(s.useState)(!1),N=Object(r.a)(p,2),g=N[0],C=N[1],w=Object(s.useState)(""),y=Object(r.a)(w,2),S=y[0],L=y[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(b,{listContainer:n,setListContainer:c,setShowWarning:C,setMessage:L,displayModal:o}),Object(l.jsxs)("div",{className:"main-section",children:[0===n.length&&Object(l.jsx)(h,{}),n.length>0&&Object(l.jsx)(u,{listContainer:n,setListContainer:c})]}),Object(l.jsx)("div",{id:"choose-item",children:Object(l.jsx)("button",{disabled:!(n.length>=2)||o,className:"choose-btn btn",onClick:function(){m(!0),function(){var e=Math.floor(Math.random()*n.length);f(n[e])}()},children:"Decide"})}),Object(l.jsx)(d,{}),o&&Object(l.jsx)("div",{className:"modal-wrap",children:Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"banner default",children:Object(l.jsx)("div",{className:"banner-inner",children:"Decision"})}),Object(l.jsx)("p",{className:"modal-text",children:v}),Object(l.jsx)("button",{onClick:function(){m(!1)},className:"try-again-btn btn",children:"Close and Decide Again"})]})}),g&&Object(l.jsx)("div",{className:"modal-wrap",children:Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"banner warning",children:Object(l.jsx)("div",{className:"banner-inner",children:"Warning"})}),Object(l.jsx)("p",{className:"modal-text",children:S}),Object(l.jsx)("button",{onClick:function(){C(!1),L("")},className:"close-btn btn",children:"Close"})]})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.0433a18c.chunk.js.map