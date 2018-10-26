(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(63)},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(3),s=a(4),i=a(6),u=a(5),m=a(7),p=a(65),h=a(67),d=a(66),b=a(8),f=a.n(b),v=a(12),E=a(64),y=a(29),C=a(17),j=a(13),g=a.n(j),O=r.a.createContext(),N=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(C.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(C.a)({},e,{contacts:[t.payload].concat(Object(y.a)(e.contacts))});case"UPDATE_CONTACT":return Object(C.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState(function(t){return N(t,e)})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),w=O.Consumer,x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(v.a)(f.a.mark(function e(t,a){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:a({type:"DELETE_CONTACT",payload:t});case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(w,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3 "},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,s),className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(E.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{onClick:e.onDeleteClick.bind(e,a,s),className:"fas fa-edit",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},"Contact List"),t.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=a(14),T=a(27),D=a.n(T),P=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"{name}"},t),r.a.createElement("input",{type:o,name:a,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var q=P,I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,g.a.post("https://jsonplaceholder.typicode.com/users/",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(q,{type:"email",label:"Email",name:"email",placeholder:"Enter email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(v.a)(f.a.mark(function e(t,n){var r,c,o,l,s,i,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:u=e.sent,t({type:"UPDATE_CONTACT",payload:u.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(q,{type:"email",label:"Email",name:"email",placeholder:"Enter email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),M=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add"))))))};M.defaultProps={branding:"Contact Manager"};var L=M,U=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manageer"),r.a.createElement("p",null,"11111"),r.a.createElement("p",null,"22222"),r.a.createElement("p",null,"33333"))};function B(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page not found"),r.a.createElement("p",{className:"lead"},"Sorry that page does not exist"))}var F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("did mount"),fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,userid:t.userId})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.userid;return r.a.createElement("div",null,r.a.createElement("h1",null,"Test Component"),r.a.createElement("p",null,t),r.a.createElement("br",null),r.a.createElement("p",null,a))}}]),t}(n.Component),J=(a(58),a(60),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:_}),r.a.createElement(d.a,{exact:!0,path:"/about",component:U}),r.a.createElement(d.a,{exact:!0,path:"/test",component:F}),r.a.createElement(d.a,{component:B}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.159adbca.chunk.js.map