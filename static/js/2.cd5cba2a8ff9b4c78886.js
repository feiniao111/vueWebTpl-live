webpackJsonp([2],{"/Fb2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={watch:{},data:function(){return{role:null}},methods:{login:function(){if(null!=this.role){var e=void 0;switch(this.role){case"admin":e=this.$t("page.examples.admin");break;case"client":e=this.$t("page.examples.ordin");break;default:e=this.$t("page.examples.vistor")}this.$store.commit("common/SET_USERNAME",e),window.myGlobalClosure.setRole(this.role),this.$router.push({name:"vuexUsage"})}else alert(this.$t("page.examples.choseTitle"))}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("header",[a("h1",[e._v(e._s(e.$t("page.examples.choseTitle")))]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{type:"radio",name:"admin",value:"admin"},domProps:{checked:e._q(e.role,"admin")},on:{change:function(t){e.role="admin"}}}),e._v(e._s(e.$t("page.examples.admin")))]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{type:"radio",name:"client",value:"client"},domProps:{checked:e._q(e.role,"client")},on:{change:function(t){e.role="client"}}}),e._v(e._s(e.$t("page.examples.ordin")))]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{type:"radio",name:"client",value:""},domProps:{checked:e._q(e.role,"")},on:{change:function(t){e.role=""}}}),e._v(e._s(e.$t("page.examples.vistor")))])]),e._v(" "),a("p",[a("button",{on:{click:e.login}},[e._v(e._s(e.$t("comp.button.login")))])])])},staticRenderFns:[]};var n=a("VU/8")(o,l,!1,function(e){a("lVIy")},"data-v-bda0045a",null);t.default=n.exports},lVIy:function(e,t){}});
//# sourceMappingURL=2.cd5cba2a8ff9b4c78886.js.map