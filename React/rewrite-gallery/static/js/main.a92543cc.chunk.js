(this["webpackJsonpproject-practice"]=this["webpackJsonpproject-practice"]||[]).push([[0],{77:function(n,t,e){},79:function(n,t,e){},80:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(0),i=e.n(c),a=e(24),o=e.n(a),u=e(17),s=e(11),l=(e(59),e(49)),d=e(8),p="SET_CURRENT_USER",b={currentUser:null},f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},n),{},{currentUser:t.payload});default:return n}},j=e(33),h="UPLOAD_IMAGE_START",g="UPLOAD_IMAGE_SUCCESS",x="UPLOAD_IMAGE_FAILURE",O="DELETE_IMAGE_START",v="DELETE_IMAGE_SUCCESS",m="DELETE_IMAGE_FAILURE",y={images:[{account_id:0,account_url:null,ad_type:0,ad_url:"",animated:!1,bandwidth:0,datetime:1606793218,deletehash:"b8aoUDO8eZbEmga",description:null,edited:"0",favorite:!1,has_sound:!1,height:1228,id:"RAvKZrJ",in_gallery:!1,in_most_viral:!1,is_ad:!1,link:"https://i.imgur.com/RAvKZrJ.jpg",name:"",nsfw:null,section:null,size:701215,tags:[],title:null,type:"image/jpeg",views:0,vote:null,width:1818},{account_id:0,account_url:null,ad_type:0,ad_url:"",animated:!1,bandwidth:0,datetime:1606793190,deletehash:"lnaySVFUz0gOpuc",description:null,edited:"0",favorite:!1,has_sound:!1,height:1228,id:"M60mTZd",in_gallery:!1,in_most_viral:!1,is_ad:!1,link:"https://i.imgur.com/M60mTZd.jpg",name:"",nsfw:null,section:null,size:656437,tags:[],title:null,type:"image/jpeg",views:0,vote:null,width:1818}],isUploading:!1,errorMessage:void 0,pendingIds:[]},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,e=Object(j.a)(n.images),r=Object(j.a)(n.pendingIds);switch(t.type){case h:return Object(d.a)(Object(d.a)({},n),{},{isUploading:!0});case g:return e.push(t.payload.data),Object(d.a)(Object(d.a)({},n),{},{isUploading:!1,images:e});case x:return Object(d.a)(Object(d.a)({},n),{},{isUploading:!1,errorMessage:t.payload});case O:return r.push(t.payload.id),Object(d.a)(Object(d.a)({},n),{},{pendingIds:r});case v:var c=r.findIndex((function(n){return n===t.payload.id}));r.splice(c,1);var i=e.findIndex((function(n){return n.id===t.payload.id}));return e.splice(i,1),Object(d.a)(Object(d.a)({},n),{},{pendingIds:r,images:e});case m:var a=r.findIndex((function(n){return n===t.payload.id}));return r.splice(a,1),Object(d.a)(Object(d.a)({},n),{},{pendingIds:r,errorMessage:t.payload.errorMessage});default:return n}},k=Object(s.c)({user:f,image:w}),U=e(10),C=e.n(U),I=e(13),_=function(n){return{type:h,payload:n}},E=function(n){return{type:g,payload:n}},A=function(n,t){return{type:O,payload:{id:n,deletehash:t}}},L=function(n){return{type:v,payload:{id:n}}},D=function(n,t){return{type:m,payload:{id:n,errorMessage:t}}},S=e(30),M=e(45),z=e.n(M).a.create({baseURL:"https://api.imgur.com/3/image",timeout:3e4});z.interceptors.request.use((function(n){return n.headers["Content-Type"]="application/x-www-form-urlencoded",n.headers.Accept="application/json",n.headers.Authorization="Client-ID 329e78071fa9118",n}),(function(n){return Promise.reject(n)})),z.interceptors.response.use((function(n){return Promise.resolve(n.data)}),(function(n){return Promise.reject(n)}));var G=z;function T(n){return F.apply(this,arguments)}function F(){return(F=Object(S.a)(C.a.mark((function n(t){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",G.post("/",t));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(n){return P.apply(this,arguments)}function P(){return(P=Object(S.a)(C.a.mark((function n(t){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",G.delete(t));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var J=C.a.mark(q),N=C.a.mark(H),Z=C.a.mark(V),B=C.a.mark(Y),K=C.a.mark(Q);function q(n){var t,e;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.payload,r.prev=1,r.next=4,Object(I.b)(T,t);case 4:return e=r.sent,r.next=7,Object(I.c)(E(e));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(I.c)((c=r.t0.message,{type:x,payload:c}));case 13:case 14:case"end":return r.stop()}var c}),J,null,[[1,9]])}function H(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(I.d)(h,q);case 2:case"end":return n.stop()}}),N)}function V(n){var t,e,r;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=n.payload,e=t.id,r=t.deletehash,c.prev=1,c.next=4,Object(I.b)(R,r);case 4:return c.next=6,Object(I.c)(L(e));case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(1),c.next=12,Object(I.c)(D(e,c.t0.message));case 12:case 13:case"end":return c.stop()}}),Z,null,[[1,8]])}function Y(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(I.d)(O,V);case 2:case"end":return n.stop()}}),B)}function Q(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(I.a)([Object(I.b)(H),Object(I.b)(Y)]);case 2:case"end":return n.stop()}}),K)}var W=C.a.mark(X);function X(){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(I.a)([Object(I.b)(Q)]);case 2:case"end":return n.stop()}}),W)}var $=Object(l.a)(),nn=[$];var tn=Object(s.e)(k,s.a.apply(void 0,nn));$.run(X);var en=tn,rn=e(4),cn={colors:{main:"#CC543A",bg:"#F5D1C9",shallowGrey:"#E5E7EB",middleGrey:"#A1A6AD",darkGrey:"#333333",textColor:"#212121",warning:"#FAAD14"}},an=e(22),on=(e(77),function(n){return{type:p,payload:n}}),un=function(){return{type:p,payload:void 0}},sn=e(9),ln=e(5);function dn(){var n=Object(ln.a)(["\n\theight: calc(100vh - 60px);\n\toverflow: scroll;\n\tbackground-color: ",";\n\tcolor: ",";\n\tpadding: 40px 40px 0 40px;\n"]);return dn=function(){return n},n}function pn(){var n=Object(ln.a)(["\n\twidth: 100%;\n\theight: 100vh;\n"]);return pn=function(){return n},n}var bn=rn.c.div(pn()),fn=rn.c.div(dn(),(function(n){return n.theme.colors.bg}),(function(n){return n.theme.colors.textColor}));function jn(){var n=Object(ln.a)(["\n\tcursor: pointer;\n"]);return jn=function(){return n},n}function hn(){var n=Object(ln.a)(["\n\tfont-weight: 800;\n\tfont-size: 1.1em;\n"]);return hn=function(){return n},n}function gn(){var n=Object(ln.a)(["\n\tposition: absolute;\n\tleft: 20px;\n\tfont-weight: 250;\n\tfont-size: 1.5em;\n\tletter-spacing: 2px;\n\tcursor: pointer;\n\ttransition: all 0.2s;\n\n\t&:hover {\n\t\ttransform: scale(1.1);\n\t\ttext-shadow: 0px 0px 1px ",";\n\t}\n"]);return gn=function(){return n},n}function xn(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 60px;\n\tbackground-color: ",";\n\tcolor: white;\n\tposition: relative;\n"]);return xn=function(){return n},n}var On=rn.c.div(xn(),(function(n){return n.theme.colors.main})),vn=rn.c.span(gn(),(function(n){return n.theme.colors.shallowGrey})),mn=rn.c.span(hn()),yn=rn.c.span(jn()),wn=e(19);function kn(){var n=Object(ln.a)(["\n\t","\n\n\t","\n"]);return kn=function(){return n},n}function Un(){var n=Object(ln.a)(["\n\twidth: ",";\n\theight: ",";\n\tfont-size: ",";\n\tfont-weight: 500;\n\tcolor: ",";\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-bottom: 5px solid transparent;\n\n\t&:hover {\n\t\topacity: 0.6;\n\t\tborder-bottom: 5px solid ",";\n\t\tcursor: pointer;\n\t}\n"]);return Un=function(){return n},n}var Cn=Object(rn.b)(Un(),(function(n){return n.wd?"".concat(n.wd,"px"):"100px"}),(function(n){return n.hg?"".concat(n.hg,"px"):"40px"}),(function(n){return n.fs?n.fs:"1em"}),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.main})),In=rn.c.button(kn(),Cn,(function(n){return n.reverse?"\n\t\t\tcolor: white;\n\t\t\t&:hover {\n\t\t\t\tborder-bottom: 5px solid white;\n\t\t\t}\n\t\t":null})),_n=function(n){var t=n.children,e=Object(wn.a)(n,["children"]);return Object(r.jsx)(In,Object(d.a)(Object(d.a)({},e),{},{children:t}))};var En=Object(u.b)((function(n){return{currentUser:n.user.currentUser}}),(function(n){return Object(s.b)({logout:un,setCurrentUser:on},n)}))((function(n){var t=n.currentUser,e=n.logout,c=n.setCurrentUser,i=Object(sn.g)();return Object(r.jsxs)(On,{children:[Object(r.jsxs)(vn,{onClick:function(){return i.push("/")},children:[Object(r.jsx)(mn,{children:"G"}),"allery."]}),t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(yn,{onClick:function(){return i.push("/hello")},children:["Hi, ",t.name,"!"]}),Object(r.jsx)(_n,{reverse:!0,wd:50,fs:"0.8em",onClick:e,children:"\u767b\u51fa"})]}):Object(r.jsx)(_n,{reverse:!0,wd:50,fs:"0.8em",onClick:function(){return c({name:"Jenn"})},children:"\u767b\u5165"})]})})),An=function(n){var t=n.children;return Object(r.jsxs)(bn,{children:[Object(r.jsx)(En,{}),Object(r.jsx)(fn,{children:t})]})};function Ln(){var n=Object(ln.a)(["\n\tbackground-color: ",";\n\tcolor: white;\n\tfont-size: 80px;\n\tz-index: 99;\n\tletter-spacing: 8px;\n"]);return Ln=function(){return n},n}function Dn(){var n=Object(ln.a)(["\n\tbackground-image: url('./bg.jpg');\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tposition: absolute;\n\ttop: 10%;\n\tleft: 0;\n\twidth: 60%;\n\theight: 50%;\n"]);return Dn=function(){return n},n}function Sn(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100vh;\n\tposition: relative;\n"]);return Sn=function(){return n},n}var Mn=rn.c.div(Sn()),zn=rn.c.div(Dn()),Gn=rn.c.h1(Ln(),(function(n){return n.theme.colors.main}));var Tn=Object(u.b)((function(n){return{currentUser:n.user.currentUser}}),(function(n){return Object(s.b)({setCurrentUser:on},n)}))((function(n){var t=n.currentUser,e=n.setCurrentUser,c=Object(sn.g)(),i={isLoggedIn:{handleClick:function(){return c.push("/profile")},text:"My profile"},isNotLoggedIn:{handleClick:function(){return e({name:"Jenn"})},text:"Login as Jenn"}};return Object(r.jsxs)(Mn,{children:[Object(r.jsx)(zn,{}),Object(r.jsx)(Gn,{children:"Gallery"}),Object(r.jsx)(_n,{wd:180,hg:60,fs:"1.5em",onClick:t?i.isLoggedIn.handleClick:i.isNotLoggedIn.handleClick,style:{position:"relative",top:"50px"},children:t?i.isLoggedIn.text:i.isNotLoggedIn.text})]})}));function Fn(){var n=Object(ln.a)(["\n\twidth: 400px;\n\theight: 300px;\n\tbackground-image: url(",");\n\tbackground-position: center;\n\tbackground-size: cover;\n"]);return Fn=function(){return n},n}function Rn(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tmargin-top: 50px;\n\tpadding: 30px 0;\n\toverflow-x: scroll;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n\t\n\t& > div {\n\t\tmargin: 10px 20px;\n\t\tflex: 0 0 400px;\n\t}\n"]);return Rn=function(){return n},n}function Pn(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tposition: relative;\n"]);return Pn=function(){return n},n}var Jn=rn.c.div(Pn()),Nn=rn.c.div(Rn());rn.c.div(Fn(),(function(n){return n.src}));function Zn(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t","\n"]);return Zn=function(){return n},n}function Bn(){var n=Object(ln.a)(["\n\t& input {\n\t\tdisplay: none;\n\t}\n"]);return Bn=function(){return n},n}var Kn=rn.c.div(Bn()),qn=rn.c.label(Zn(),Cn),Hn=function(n){var t=n.onChange,e=Object(wn.a)(n,["onChange"]);return Object(r.jsxs)(Kn,Object(d.a)(Object(d.a)({},e),{},{children:[Object(r.jsx)("input",{id:"uploader",type:"file",accept:"image/jpeg",onChange:function(n){t(n.target.files[0]),n.target.value=""}}),Object(r.jsx)(qn,{htmlFor:"uploader",children:"\u4e0a\u50b3\u5716\u7247"})]}))},Vn=(e(79),function(){return Object(r.jsx)("div",{className:"loaderContainer",children:Object(r.jsxs)("div",{className:"loader",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})});function Yn(){var n=Object(ln.a)(["\n\tpadding: 20px;\n\t\n\t& div {\n\t\tcolor: white;\n\t}\n"]);return Yn=function(){return n},n}function Qn(){var n=Object(ln.a)(["\n\tbackground-image: url(",");\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position-x: center;\n\tpadding-bottom: calc(1/ 1.41451612903 * 100%);\n"]);return Qn=function(){return n},n}function Wn(){var n=Object(ln.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 8px;\n\tbackground: linear-gradient(to bottom, rgba(51, 51, 51, 0.15) -45%, rgba(51, 51, 51, 0.9) 89%);\n\topacity: 0;\n\ttransition: opacity 0.2s;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n\n\t&:hover "," {\n\t\tcursor: pointer;\n\t}\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(ln.a)(["\n\theight: 26px;\n\twidth: 26px;\n\tborder-radius: 50%;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tcolor: white;\n\tfont-size: 18px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n"]);return Xn=function(){return n},n}function $n(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"]);return $n=function(){return n},n}var nt=rn.c.div($n()),tt=rn.c.div(Xn()),et=rn.c.div(Wn(),tt),rt=rn.c.div(Qn(),(function(n){return n.url})),ct=rn.c.div(Yn());function it(){var n=Object(ln.a)(["\n  width: 100%;\n  padding: 24px 35px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n\n  background-color: white;\n  border: ",";\n  box-shadow: ",";\n  position: relative;\n"]);return it=function(){return n},n}var at=rn.c.div(it(),(function(n){return n.dashed?"1px dashed ".concat(n.theme.colors.shallowGrey):null}),(function(n){return n.noShadow?"none":"2px 2px 8px 0 rgba(0, 0, 0, 0.1)"})),ot=function(n){var t=n.children,e=Object(wn.a)(n,["children"]);return Object(r.jsx)(at,Object(d.a)(Object(d.a)({},e),{},{children:t}))},ut=function(n){var t=n.imageUrl,e=n.title,c=n.time,i=(n.spinning,n.onDelete),a=n.onCopy,o=n.onEdit,u=Object(wn.a)(n,["imageUrl","title","time","spinning","onDelete","onCopy","onEdit"]),s=c?new Date(c):void 0;return Object(r.jsxs)(ot,Object(d.a)(Object(d.a)({},u),{},{children:[Object(r.jsx)(rt,{url:t}),Object(r.jsxs)(et,{children:[Object(r.jsxs)(nt,{children:[i?Object(r.jsx)(tt,{onClick:i,children:"\ud835\uddeb"}):null,a?Object(r.jsx)(tt,{onClick:a,children:"\ud83d\udcd1"}):null,o?Object(r.jsx)(tt,{onClick:o,children:"\u270f"}):null]}),s?Object(r.jsxs)(ct,{children:[Object(r.jsx)("div",{children:e}),Object(r.jsx)("div",{children:"\u7de8\u8f2f\u6642\u9593\uff1a".concat(s.getFullYear(),".").concat(s.getMonth()+1,".").concat(s.getDate())})]}):null]})]}))};function st(){var n=Object(ln.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid ",";\n  border-radius: 50%;\n  border-top-color: ",";\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return st=function(){return n},n}function lt(){var n=Object(ln.a)(["\n  height: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return lt=function(){return n},n}var dt=rn.c.div(lt()),pt=rn.c.div(st(),(function(n){return n.theme.colors.middleGrey}),(function(n){return n.theme.colors.main})),bt=function(n){return function(t){var e=t.isLoading,c=Object(wn.a)(t,["isLoading"]);return e?Object(r.jsx)(dt,{children:Object(r.jsx)(pt,{})}):Object(r.jsx)(n,Object(d.a)({},c))}}(ut);var ft=Object(u.b)((function(n){return{currentUser:n.user.currentUser,images:n.image.images,isUploading:n.image.isUploading,pendingIds:n.image.pendingIds}}),(function(n){return Object(s.b)({uploadImageStart:_,deleteImageStart:A},n)}))((function(n){var t=n.currentUser,e=n.images,c=n.isUploading,i=n.uploadImageStart,a=n.deleteImageStart,o=n.pendingIds;return Object(r.jsxs)(Jn,{children:[t?Object(r.jsx)(Hn,{onChange:function(n){var t=new FormData;t.append("image",n),i(t)}}):null,c?Object(r.jsx)(Vn,{}):null,Object(r.jsx)(Nn,{children:e.map((function(n){return Object(r.jsx)(bt,{imageUrl:n.link,title:n.id,time:n.datetime,onDelete:function(){return a(n.id,n.deletehash)},isLoading:o.includes(n.id)},n.id)}))})]})}));function jt(){var n=Object(ln.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\tfont-size: 5em;\n"]);return jt=function(){return n},n}var ht=rn.c.div(jt());var gt=Object(u.b)((function(n){return{currentUser:n.user.currentUser}}))((function(n){var t=n.currentUser,e=Object(sn.g)();return Object(c.useEffect)((function(){t||e.push("/")}),[t]),Object(r.jsxs)(ht,{children:["\ud83d\udc4b\ud83c\udffb",Object(r.jsx)(_n,{wd:180,fs:"16px",onClick:function(){return e.push("/profile")},children:"\u56de\u5230 Profile"})]})})),xt=[{path:"/profile",component:Object(r.jsx)(ft,{})},{path:"/hello",component:Object(r.jsx)(gt,{})}];var Ot=Object(u.b)((function(n){return{currentUser:n.user.currentUser}}),(function(n){return Object(s.b)({setCurrentUser:on},n)}))((function(n){var t=n.setCurrentUser;return Object(c.useEffect)((function(){t({name:"Jenn"})}),[]),Object(r.jsxs)(sn.d,{children:[Object(r.jsx)(sn.b,{exact:!0,path:"/",children:Object(r.jsx)(Tn,{})}),Object(r.jsx)(sn.b,{path:"*",children:Object(r.jsx)(An,{children:Object(r.jsxs)(sn.d,{children:[xt.map((function(n){return Object(r.jsx)(sn.b,{exact:!0,path:n.path,children:n.component},n.path)})),Object(r.jsx)(sn.b,{path:"*",children:Object(r.jsx)(sn.a,{to:"/"})})]})})})]})})),vt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,81)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;e(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.a,{store:en,children:Object(r.jsx)(rn.a,{theme:cn,children:Object(r.jsx)(an.a,{children:Object(r.jsx)(Ot,{})})})})}),document.getElementById("root")),vt()}},[[80,1,2]]]);
//# sourceMappingURL=main.a92543cc.chunk.js.map