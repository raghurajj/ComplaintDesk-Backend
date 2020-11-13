(this.webpackJsonpcomplaintdesk=this.webpackJsonpcomplaintdesk||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),o=a.n(r),s=(a(68),a(69),a(45),a(8)),l=a(13),i=a(14),u=a(10),m=a(24),p=a(23),d=a(11),h=a(2),f=a.n(h),v=a(106),b=a(107),E=a(108),g=a(111),y=a(109),O=a(110),_=a(29),w=a(30),j=a(19),N=a(5),C=a.n(N),S=a(15),k=a(12),x=a.n(k),D=a(27),I=a(61),A=a(62),L=a(6),T={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:!1,user:null},U=Object(D.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"AUTHENTICATED_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{isAuthenticated:!0});case"LOGIN_SUCCESS":return localStorage.setItem("access",n.access),Object(L.a)(Object(L.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case"USER_LOADED_SUCCESS":return Object(L.a)(Object(L.a)({},e),{},{user:n});case"SIGNUP_SUCCESS":case"AUTHENTICATED_FAIL":return Object(L.a)(Object(L.a)({},e),{},{isAuthenticated:!1});case"USER_LOADED_FAIL":return Object(L.a)(Object(L.a)({},e),{},{user:null});case"SIGNUP_FAIL":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(L.a)(Object(L.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});default:return e}}}),P=[A.a],R=Object(D.createStore)(U,{},Object(I.composeWithDevTools)(D.applyMiddleware.apply(void 0,P))),G=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1},n.toggleNav=n.toggleNav.bind(Object(u.a)(n)),n.handlelogout=n.handlelogout.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"handlelogout",value:function(){R.dispatch({type:"LOGOUT"})}},{key:"render",value:function(){return c.a.createElement(v.a,{dark:!0,className:"sticky-top ".concat(f.a.nvbr),expand:"md"},c.a.createElement("div",{className:"container"},c.a.createElement(b.a,{onClick:this.toggleNav,className:f.a.abslt}),c.a.createElement(E.a,{className:"mr-auto "},c.a.createElement(d.c,{to:"/",className:f.a.navlink},c.a.createElement(_.a,{icon:w.b}),"\xa0ComplaintDesk")),c.a.createElement(g.a,{isOpen:this.state.isNavOpen,navbar:!0},c.a.createElement(y.a,{navbar:!0,className:"ml-auto"},c.a.createElement(O.a,null,c.a.createElement(d.c,{className:"".concat(f.a.navlink),to:"/newcomplaint"},c.a.createElement(_.a,{icon:w.c}),"\xa0New Complaint\xa0\xa0")),c.a.createElement(O.a,null,c.a.createElement(d.c,{className:"".concat(f.a.navlink),to:"/pastcomplaints"},c.a.createElement(_.a,{icon:w.a}),"\xa0Past Complaints\xa0\xa0")),this.props.isAuthenticated?c.a.createElement(O.a,null,c.a.createElement(d.c,{className:"".concat(f.a.navlink),to:"#!",onClick:this.handlelogout},c.a.createElement(_.a,{icon:w.e}),"\xa0Logout")):c.a.createElement(O.a,null,c.a.createElement(d.c,{className:"".concat(f.a.navlink),to:"/login"},c.a.createElement(_.a,{icon:w.d}),"\xa0Login"))))))}}]),a}(n.Component),J=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:"LOGOUT"})}}})(G),W=a(18),q=a(28),F=(a(59),Object(q.c)({accessToken:"pk.eyJ1IjoicmFnaHVyYWpqIiwiYSI6ImNrMnJpYzhzZjA2MGIzZXBkb2oxYnV2MWQifQ.1PinwGk6Y3P0q-l7SXkfWg"})),M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={topic:"",description:"",lattitude:"",longitude:""},n.getLocation=n.getLocation.bind(Object(u.a)(n)),n.getCoordinates=n.getCoordinates.bind(Object(u.a)(n)),n.onChangeInput=n.onChangeInput.bind(Object(u.a)(n)),n.onClickMap=n.onClickMap.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"getLocation",value:function(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.getCoordinates):alert("Geolocation is not supported by this browser."),e.preventDefault()}},{key:"getCoordinates",value:function(e){this.setState({lattitude:e.coords.latitude,longitude:e.coords.longitude})}},{key:"onChangeInput",value:function(e){this.setState(Object(W.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(S.a)(C.a.mark((function e(t){var a,n,c,r,o,s,l,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!localStorage.getItem("access")){e.next=23;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.next=5,x.a.get("/auth/users/me/",a);case 5:return n=e.sent,c=n.data.id,r=this.state.topic,o=this.state.description,s=this.state.lattitude,l=this.state.longitude,i=JSON.stringify({author:c,Category:r,description:o,latitude:s,longitude:l}),console.log(i),e.prev=13,e.next=16,x.a.post("/complaint/api/",i,a);case 16:e.sent,console.log("compliant post success"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.log("compliant post failed");case 23:case"end":return e.stop()}}),e,this,[[13,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onClickMap",value:function(e,t){this.setState({lattitude:t.lngLat.lat,longitude:t.lngLat.lng})}},{key:"render",value:function(){return c.a.createElement("div",{className:f.a.fitpage},c.a.createElement("div",{className:"row"},c.a.createElement("h1",null,"Add a New Complaint")),c.a.createElement("div",{className:"row my-5 mx-5"},c.a.createElement("div",{className:"col"},c.a.createElement("form",null,c.a.createElement("div",{className:f.a.C_input},c.a.createElement("input",{onChange:this.onChangeInput,type:"text",name:"topic",placeholder:"Topic"}),c.a.createElement("br",null)),c.a.createElement("div",{className:f.a.C_input},c.a.createElement("textarea",{onChange:this.onChangeInput,type:"text",name:"description",placeholder:"Description"}),c.a.createElement("br",null)),c.a.createElement("div",{className:f.a.C_input},c.a.createElement("input",{onChange:this.onChangeInput,type:"number",name:"lattitude",placeholder:"Lattitude",value:this.state.lattitude}),c.a.createElement("br",null)),c.a.createElement("div",{className:f.a.C_input},c.a.createElement("input",{onChange:this.onChangeInput,type:"number",name:"longitude",placeholder:"Longitude",value:this.state.longitude}),c.a.createElement("br",null)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 mx-auto"},c.a.createElement("button",{onClick:this.getLocation,className:"".concat(f.a.btn," ").concat(f.a.fill_button)},"getlocation")),c.a.createElement("div",{className:"col-md-5 mx-auto"},c.a.createElement("button",{onClick:this.handleSubmit,className:"".concat(f.a.btn," ").concat(f.a.fill_button)}," Submit Complaint"))))),c.a.createElement("div",{className:"col"},c.a.createElement("div",null,c.a.createElement(F,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"60vh",width:"45vw"},center:[80.94615925,26.8467088],zoom:[9],onClick:this.onClickMap})))))}}]),a}(n.Component),Y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={complaintData:[]},n.LoadData=n.LoadData.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"LoadData",value:function(){var e=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=13;break}return t={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,x.a.get("/complaint/api/pastcomplaint/",t);case 5:a=e.sent,console.log(a.data),this.setState({complaintData:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.LoadData()}},{key:"componentDidUpdate",value:function(e){this.props.id!==e.id&&this.LoadData()}},{key:"render",value:function(){return c.a.createElement("div",{className:f.a.container},this.state.complaintData&&this.state.complaintData.map((function(e){return console.log(e.pk),c.a.createElement(d.b,{className:f.a.linkk,to:"complaintdetail/".concat(e.pk)},c.a.createElement("div",{className:f.a.complaint},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",null,e.Category)),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},e.description)))))})))}}]),a}(n.Component),z=a(16),V=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(S.a)(C.a.mark((function a(n){var c,r,o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,x.a.post("/auth/jwt/create/",r,c);case 5:o=a.sent,n({type:"LOGIN_SUCCESS",payload:o.data}),n(function(){var e=Object(S.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,x.a.get("/auth/users/me/",a);case 5:n=e.sent,t({type:"USER_LOADED_SUCCESS",payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:"USER_LOADED_FAIL"});case 12:e.next=15;break;case 14:t({type:"USER_LOADED_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:"LOGIN_FAIL"});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,r=Object(n.useState)({email:"",password:""}),o=Object(z.a)(r,2),l=o[0],i=o[1],u=l.email,m=l.password,p=function(e){return i(Object(L.a)(Object(L.a)({},l),{},Object(W.a)({},e.target.name,e.target.value)))};return a?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:f.a.fitpage},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 mx-auto my-auto"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("p",null,"Sign into your Account"),c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(u,m)}(e)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:u,onChange:function(e){return p(e)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:m,onChange:function(e){return p(e)},minLength:"6",required:!0})),c.a.createElement("button",{className:"".concat(f.a.btn," ").concat(f.a.fill_button),type:"submit"},"Login")),c.a.createElement("p",{className:"mt-3"},"Don't have an account? ",c.a.createElement(d.b,{to:"/signup"},"Sign Up")),c.a.createElement("p",{className:"mt-3"},"Forgot your Password? ",c.a.createElement(d.b,{to:"/reset_password"},"Reset Password")))))})),B=Object(j.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e){var t=e.name,a=e.email,n=e.password,c=e.re_password;return function(){var e=Object(S.a)(C.a.mark((function e(r){var o,s,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={headers:{"Content-Type":"application/json"}},s=JSON.stringify({name:t,email:a,password:n,re_password:c}),e.prev=2,e.next=5,x.a.post("/auth/users/",s,o);case 5:l=e.sent,r({type:"SIGNUP_SUCCESS",payload:l.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),r({type:"SIGNUP_FAIL"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,r=Object(n.useState)({name:"",email:"",password:"",re_password:""}),o=Object(z.a)(r,2),l=o[0],i=o[1],u=Object(n.useState)(!1),m=Object(z.a)(u,2),p=m[0],h=m[1],v=l.name,b=l.email,E=l.password,g=l.re_password,y=function(e){return i(Object(L.a)(Object(L.a)({},l),{},Object(W.a)({},e.target.name,e.target.value)))};return a?c.a.createElement(s.a,{to:"/"}):p?c.a.createElement(s.a,{to:"login"}):c.a.createElement("div",{className:f.a.fitpage},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-5 mx-auto my-auto"},c.a.createElement("h1",null,"Sign Up"),c.a.createElement("p",null,"Create your Account"),c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),E===g&&(t({name:v,email:b,password:E,re_password:g}),h(!0))}(e)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"text",placeholder:"Name*",name:"name",value:v,onChange:function(e){return y(e)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:b,onChange:function(e){return y(e)},required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:E,onChange:function(e){return y(e)},minLength:"6",required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:g,onChange:function(e){return y(e)},minLength:"6",required:!0})),c.a.createElement("button",{className:"".concat(f.a.btn," ").concat(f.a.fill_button),type:"submit"},"Register")),c.a.createElement("p",{className:"mt-3"},"Already have an account? ",c.a.createElement(d.b,{to:"/login"},"Sign In")))))})),H=(n.Component,function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={complaintData:[]},n.LoadData=n.LoadData.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"LoadData",value:function(){var e=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=13;break}return t={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.prev=2,e.next=5,x.a.get("/complaint/api/",t);case 5:a=e.sent,console.log(a.data),this.setState({complaintData:a.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.LoadData()}},{key:"componentDidUpdate",value:function(e){this.props.id!==e.id&&this.LoadData()}},{key:"render",value:function(){return c.a.createElement("div",{className:f.a.container},this.state.complaintData&&this.state.complaintData.map((function(e){return c.a.createElement("div",{className:f.a.complaint},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},e.Category),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},e.description))))})))}}]),a}(n.Component)),Z=Object(j.b)(null,{reset_password:function(e){return function(){var t=Object(S.a)(C.a.mark((function t(a){var n,c,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},c=JSON.stringify({email:e}),t.prev=2,t.next=5,x.a.post("/auth/users/reset_password/",c,n);case 5:r=t.sent,a({type:"RESET_PASSWORD_SUCCESS",payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a({type:"RESET_PASSWORD_FAIL"});case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)(!1),a=Object(z.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)({email:""}),i=Object(z.a)(l,2),u=i[0],m=i[1],p=u.email;return r?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:f.a.container},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Request Password Reset:"),c.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.reset_password(p),o(!0)}(t)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"email",placeholder:"Your Email",name:"email",value:p,onChange:function(e){return function(e){return m(Object(L.a)(Object(L.a)({},u),{},Object(W.a)({},e.target.name,e.target.value)))}(e)},required:!0})),c.a.createElement("button",{className:"".concat(f.a.btn," ").concat(f.a.fill_button),type:"submit"},"Reset Password"))))})),Q=Object(j.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var c=Object(S.a)(C.a.mark((function c(r){var o,s,l;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o={headers:{"Content-Type":"application/json"}},s=JSON.stringify({uid:e,token:t,new_password:a,re_new_password:n}),c.prev=2,c.next=5,x.a.post("/auth/users/reset_password_confirm/",s,o);case 5:l=c.sent,r({type:"RESET_PASSWORD_CONFIRM_SUCCESS",payload:l.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),r({type:"RESET_PASSWORD_CONFIRM_FAIL"});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)(!1),a=Object(z.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)({new_password:"",re_new_password:""}),i=Object(z.a)(l,2),u=i[0],m=i[1],p=u.new_password,d=u.re_new_password,h=function(e){return m(Object(L.a)(Object(L.a)({},u),{},Object(W.a)({},e.target.name,e.target.value)))};return r?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:f.a.container},c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();var a=e.match.params.uid,n=e.match.params.token;e.reset_password_confirm(a,n,p,d),o(!0)}(t)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:p,onChange:function(e){return h(e)},minLength:"6",required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:d,onChange:function(e){return h(e)},minLength:"6",required:!0})),c.a.createElement("button",{className:"".concat(f.a.btn," ").concat(f.a.fill_button),type:"submit"},"Reset Password"))))})),X=Object(j.b)(null,{verify:function(e,t){return function(){var a=Object(S.a)(C.a.mark((function a(n){var c,r,o;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{"Content-Type":"application/json"}},r=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,x.a.post("/auth/users/activation/",r,c);case 5:o=a.sent,n({type:"ACTIVATION_SUCCESS",payload:o.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:"ACTIVATION_FAIL"});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)(!1),a=Object(z.a)(t,2),r=a[0],o=a[1];return r?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:f.a.container},c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"200px"}},c.a.createElement("h1",null,"Verify your Account:"),c.a.createElement("button",{onClick:function(t){var a=e.match.params.uid,n=e.match.params.token;e.verify(a,n),o(!0)},style:{marginTop:"50px"},type:"button",className:"".concat(f.a.btn," ").concat(f.a.fill_button)},"Verify"))))})),K=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Opps! wrong page!!"))},$=Object(q.c)({accessToken:"pk.eyJ1IjoicmFnaHVyYWpqIiwiYSI6ImNrMnJpYzhzZjA2MGIzZXBkb2oxYnV2MWQifQ.1PinwGk6Y3P0q-l7SXkfWg"}),ee=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={complaintData:""},n.LoadData=n.LoadData.bind(Object(u.a)(n)),n}return Object(i.a)(a,[{key:"LoadData",value:function(){var e=Object(S.a)(C.a.mark((function e(){var t,a,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return t={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,a=window.location.pathname.slice(-1),n="/complaint/api/pastcomplaint/"+a+"/",e.next=7,x.a.get(n,t);case 7:c=e.sent,console.log(c.data),this.setState({complaintData:c.data}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.LoadData()}},{key:"componentDidUpdate",value:function(e){this.props.id!==e.id&&this.LoadData()}},{key:"render",value:function(){window.location.pathname.slice(-1);return console.log(this.state.complaintData[0]),c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("h1",null,this.state.complaintData[0]?this.state.complaintData[0].Category:null)),c.a.createElement("div",{className:"row my-5 mx-5"},c.a.createElement("div",{className:"col ".concat(f.a.c_detail)},c.a.createElement("p",null,this.state.complaintData[0]?this.state.complaintData[0].description:null),c.a.createElement("br",null),c.a.createElement("p",null,this.state.complaintData[0]?this.state.complaintData[0].latitude:null),c.a.createElement("p",null,this.state.complaintData[0]?this.state.complaintData[0].longitude:null)),c.a.createElement("div",{className:"col"},c.a.createElement($,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"50vh",width:"50vw"},center:[80.94615925,26.8467088],zoom:[9]},c.a.createElement(q.b,{type:"circle",id:"marker",paint:{"circle-color":"#ff5200","circle-stroke-width":1,"circle-stroke-color":"#fff","circle-stroke-opacity":1}},c.a.createElement(q.a,{coordinates:[-.132,51.518]}),c.a.createElement(q.a,{coordinates:[-.142,51.518]}))))))}}]),a}(n.Component);var te=function(){return c.a.createElement("div",null,c.a.createElement(j.a,{store:R},c.a.createElement(J,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:H}),c.a.createElement(s.b,{exact:!0,path:"/newcomplaint",component:M}),c.a.createElement(s.b,{exact:!0,path:"/pastcomplaints",component:Y}),c.a.createElement(s.b,{exact:!0,path:"/complaintdetail/:pk",component:ee}),c.a.createElement(s.b,{exact:!0,path:"/login",component:V}),c.a.createElement(s.b,{exact:!0,path:"/signup",component:B}),c.a.createElement(s.b,{exact:!0,path:"/reset_password",component:Z}),c.a.createElement(s.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:Q}),c.a.createElement(s.b,{exact:!0,path:"/activate/:uid/:token",component:X}),c.a.createElement(s.b,{component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d.a,null,c.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,a){e.exports={nvbr:"Components_nvbr__3iG-Z",navlink:"Components_navlink__24IkJ",toggler:"Components_toggler__2Yk1k",container:"Components_container__3jssv",btn:"Components_btn__1U7OY",fill_button:"Components_fill_button__3WKKB",empty_button:"Components_empty_button__26J0a",form:"Components_form__2izBT",C_input:"Components_C_input__HAbIC",complaint:"Components_complaint__3Ukaq",linkk:"Components_linkk__1GeqS",c_detail:"Components_c_detail__2hfV2",fitpage:"Components_fitpage__3lYhw",overflow_scroll:"Components_overflow_scroll__1VCd2"}},63:function(e,t,a){e.exports=a(104)},68:function(e,t,a){},69:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.ae492b26.chunk.js.map