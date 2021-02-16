(this.webpackJsonpmydriveweb=this.webpackJsonpmydriveweb||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n.n(r),a=n(14),s=n.n(a),i=(n(33),n(9)),l=(n(34),n(13)),u=n(6),d=n(15),j=c.a.createContext(),b=n(48),f=n(25),O=n(17),h=n.n(O),x="https://localhost:44332/";function p(e,t,n,o,r){var c=new XMLHttpRequest;c.onload=function(){return o(c.response)},c.onerror=function(){r(c.status)},c.open("POST","".concat(x,"listfolder")),c.setRequestHeader("Authorization","Bearer ".concat(n)),c.send(JSON.stringify({UserId:e,FolderId:t}))}function g(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(i.a)(a,2),d=s[0],O=s[1],p=Object(r.useState)(!1),g=Object(i.a)(p,2),v=g[0],C=g[1],m=Object(u.f)(),w=Object(r.useContext)(j),S=function(e){if(e){var t=Object(f.a)(e);w.updateContext({userId:t.userid,userName:t.username,folderId:t.rootfolderid,token:e}),m.push("/")}else C(!1)},y=function(e){C(!0)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Welcome to MyDrive, or your drive! Please log in"}),Object(o.jsx)("h2",{children:"if you have not registered before, please register first"}),Object(o.jsx)(l.b,{to:"/register",children:"Switch to register"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"User name"}),Object(o.jsx)("input",{className:"username",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("h2",{children:"Password"}),Object(o.jsx)("input",{className:"password",type:"password",onChange:function(e){O(e.target.value)}}),Object(o.jsx)(b.a,{onClick:function(){var e=(new TextEncoder).encode(d);h.a.resolve(crypto.subtle.digest("SHA-256",e)).then((function(e){var t=Array.from(new Uint8Array(e)).map((function(e){return e.toString(16).padStart(2,"0")})).join("");!function(e,t,n,o){var r=new XMLHttpRequest;r.onload=function(){return n(r.response)},r.onerror=function(){return o(r.status)},r.open("POST","".concat(x,"authenticate")),r.send(JSON.stringify({UserName:e,Password:t}))}(n,t,S,y)}))},children:"Login"}),v&&Object(o.jsx)("div",{children:"Authentication failed, please try again"})]})}var v=n(47);function C(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(i.a)(a,2),l=s[0],f=s[1],O=Object(r.useState)(""),h=Object(i.a)(O,2),g=h[0],C=h[1],m=Object(u.f)(),w=function(e){if(e){var t=JSON.parse(e);c(t)}},S=function(){m.push("/login")},y=function(e){p(N.globalContext.userId,N.globalContext.folderId,N.globalContext.token,w,S)},I=function(){},N=Object(r.useContext)(j);if(!n){if(!N.globalContext||!N.globalContext.userId)return Object(o.jsx)(u.a,{to:"/login"});p(N.globalContext.userId,N.globalContext.folderId,N.globalContext.token,w,S)}var k=function(e){!function(e,t,n,o,r,c){var a=new FormData;d.a.each(n,(function(e){return a.append("file",e,e.name)}));var s=new XMLHttpRequest;s.onload=function(){return r(s.response)},s.onerror=function(){return c(s.status)},s.open("POST","".concat(x,"uploadfile?userid=").concat(e,"&folderid=").concat(t)),s.setRequestHeader("Authorization","Bearer ".concat(o)),s.send(a)}(N.globalContext.userId,N.globalContext.folderId,e.target.files,N.globalContext.token,y,I)},P=function(e,t){var n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=t,n.hidden=!0,document.body.appendChild(n),n.click()},R=function(e){"Folder"===e.fileType?(c(null),N.updateContext({folderId:e.fileId})):function(e,t,n,o,r,c){var a=new XMLHttpRequest;a.onload=function(){return r(a.response,n)},a.onerror=function(){return c(a.status)},a.open("POST","".concat(x,"downloadfile?fileid=").concat(t)),a.responseType="blob",a.setRequestHeader("Authorization","Bearer ".concat(o)),a.send(JSON.stringify({UserId:e}))}(N.globalContext.userId,e.fileId,e.fileName,N.globalContext.token,P)},T=function(e){c(null),N.updateContext({folderId:e})};return console.log(n),Object(o.jsxs)("div",{children:[(!n||0===n.length)&&Object(o.jsx)("div",{children:"Seems you don't have anything here..."}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"file",id:"input",multiple:!0,onChange:k})}),Object(o.jsx)("br",{}),Object(o.jsx)(b.a,{onClick:function(){f(!0),C("")},children:"Create folder"}),Object(o.jsx)(b.a,{onClick:function(){!function(e,t,n,o,r){var c=new XMLHttpRequest;c.onload=function(){return o(c.response)},c.onerror=function(){return r(c.status)},c.open("POST","".concat(x,"getparent")),c.setRequestHeader("Authorization","Bearer ".concat(n)),c.send(JSON.stringify({UserId:e,FolderId:t}))}(N.globalContext.userId,N.globalContext.folderId,N.globalContext.token,T)},children:"Go up"}),Object(o.jsxs)(v.a,{show:l,children:[Object(o.jsx)(v.a.Header,{children:Object(o.jsx)(v.a.Title,{children:"Please enter new folder name:"})}),Object(o.jsx)(v.a.Body,{children:Object(o.jsx)("input",{className:"newFolderName",onChange:function(e){C(e.target.value)}})}),Object(o.jsxs)(v.a.Footer,{children:[Object(o.jsx)(b.a,{className:"creatingOK",disabled:0===g.length,onClick:function(){f(!1),function(e,t,n,o,r,c){var a=new XMLHttpRequest;a.onload=function(){return r(a.response)},a.onerror=function(){return c(a.status)},a.open("POST","".concat(x,"createfolder?foldername=").concat(n)),a.setRequestHeader("Authorization","Bearer ".concat(o)),a.send(JSON.stringify({UserId:e,FolderId:t,FileName:n}))}(N.globalContext.userId,N.globalContext.folderId,g,N.globalContext.token,y)},children:"OK"}),Object(o.jsx)(b.a,{className:"creatingCancel",onClick:function(){f(!1),C("")},children:"Cancel"})]})]}),Object(o.jsx)("br",{}),n&&n.length>0&&d.a.map(d.a.sortBy(n,(function(e){return e.fileName.toLowerCase()})),(function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:e.fileType,href:"javascript:void(0)",onClick:function(){return R(e)},children:"".concat("Folder"===e.fileType?"<<<Folder>>> ":"").concat(e.fileName)}),Object(o.jsx)("br",{})]})}))]})}function m(){var e=function(){S(!0)},t=function(e){k(e)},n=Object(r.useState)(null),c=Object(i.a)(n,2),a=c[0],s=c[1],u=Object(r.useState)(null),d=Object(i.a)(u,2),j=d[0],f=d[1],O=Object(r.useState)(null),p=Object(i.a)(O,2),g=p[0],v=p[1],C=Object(r.useState)(!1),m=Object(i.a)(C,2),w=m[0],S=m[1],y=Object(r.useState)(null),I=Object(i.a)(y,2),N=I[0],k=I[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Register MyDrive account here"}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{children:"User name"}),Object(o.jsx)("input",{className:"username",onChange:function(e){s(e.target.value)}}),Object(o.jsx)("h2",{children:"Password"}),Object(o.jsx)("input",{className:"password",type:"password",onChange:function(e){f(e.target.value)}}),Object(o.jsx)("h2",{children:"Repeat password"}),Object(o.jsx)("input",{className:"password2",type:"password",onChange:function(e){v(e.target.value)}}),Object(o.jsx)("br",{}),j!==g&&Object(o.jsx)("div",{className:"passwordunmatch",children:"passwords don't match"}),Object(o.jsx)(b.a,{disabled:!j||!g||j!==g,onClick:function(){var n=(new TextEncoder).encode(j);h.a.resolve(crypto.subtle.digest("SHA-256",n)).then((function(n){var o=Array.from(new Uint8Array(n)).map((function(e){return e.toString(16).padStart(2,"0")})).join("");!function(e,t,n,o){var r=new XMLHttpRequest;r.onload=n,r.onerror=function(){return o(r.status)},r.open("POST","".concat(x,"createuser")),r.send({UserName:e,Password:t})}(a,o,e,t)}))},children:"Create account"}),w&&Object(o.jsx)("div",{children:Object(o.jsxs)("h2",{children:["Your account has been created successfully, please log in",Object(o.jsx)(l.b,{to:"/login",children:"Login"})]})}),null!==N&&void 0!==N&&Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Something went wrong, please try again"})})]})}var w=function(){var e=function(e){var t=document.cookie.split("; ").find((function(t){return t.startsWith(e)}));if(t)return t.split("=")[1]},t=e("userid"),n=e("folderid"),c=e("jwttokencookie"),a=e("username"),s=Object(r.useState)({userId:t,userName:a,folderId:n,token:c}),b=Object(i.a)(s,2),f=b[0],O=b[1];return Object(o.jsx)(j.Provider,{value:{globalContext:f,updateContext:function(e){O(d.a.defaults(e,f))}},children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(u.b,{path:"/",children:Object(o.jsx)(C,{})}),Object(o.jsx)(u.b,{path:"/login",children:Object(o.jsx)(g,{})}),Object(o.jsx)(u.b,{path:"/register",children:Object(o.jsx)(m,{})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),c(e),a(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.8750be72.chunk.js.map