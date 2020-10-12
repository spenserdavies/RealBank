(function(t){function a(a){for(var o,c,r=a[0],i=a[1],l=a[2],d=0,m=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(a);while(m.length)m.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],o=!0,r=1;r<e.length;r++){var i=e[r];0!==n[i]&&(o=!1)}o&&(s.splice(a--,1),t=c(c.s=e[0]))}return t}var o={},n={app:0},s=[];function c(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=o,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)c.d(e,o,function(a){return t[a]}.bind(null,o));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=i;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"32a5":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);var o=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("navbar"),e("router-view")],1)},s=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e("i",{staticClass:"fas fa-coins pr-3"}),t._v("RealBank")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[t.$auth.isAuthenticated?e("li",{staticClass:"nav-item",class:{active:"accounts"==t.$route.name}},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"accounts"}}},[t._v("Accounts")])],1):t._e()]),e("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?e("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):e("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],i=e("bc3a"),l=e.n(i);l.a.create({baseURL:"https://localhost:5001",withCredentials:!0});var u={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},d=u,m=e("2877"),p=Object(m["a"])(d,c,r,!1,null,null,null),b=p.exports,v=e("335d"),h={name:"App",async beforeCreate(){await Object(v["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer)},components:{Navbar:b}},f=h,g=(e("5c0b"),Object(m["a"])(f,n,s,!1,null,null,null)),_=g.exports,C=e("8c4f"),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home container-fluid mx-0 px-0"},[e("div",{staticClass:"overlay px-5 pt-5"},[e("div",{staticClass:"row pt-5"},[e("div",{staticClass:"col-5 mx-auto card mt-5 text-center py-3"},[e("h2",[t._v("RealBank")]),t.$auth.isAuthenticated?t._e():e("hr"),t.$auth.isAuthenticated?t._e():e("p",{staticClass:"pt-3"},[t._v("You are not signed in. Click the login button to sign in and continue")]),t.$auth.isAuthenticated?t._e():e("button",{staticClass:"btn btn-info",on:{click:t.login}},[t._v("Login")])])])])])},y=[],w={name:"home",computed:{user(){return this.$store.state.user}},methods:{logout(){this.$store.dispatch("logout")},async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user)}}},x=w,A=(e("cccb"),Object(m["a"])(x,T,y,!1,null,null,null)),F=A.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"accounts container"},[e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-9 mx-auto card bg-light pt-4"},[e("h2",{staticClass:"text-center"},[t._v("Accounts")]),e("button",{staticClass:"btn btn-success w-25 align-self-center my-2 position-relative",attrs:{type:"button","data-toggle":"modal","data-target":"#newAccount"},on:{click:function(a){t.newAccount.accountNumber=null}}},[t._v(" New Account ")]),t.accounts.length>1?e("button",{staticClass:"btn btn-warning w-25 align-self-end position-absolute transfer-btn",attrs:{type:"button","data-toggle":"modal","data-target":"#transferFunds"}},[t._v(" Transfer Funds ")]):t._e(),e("hr"),t.accounts.length>0?e("div",{staticClass:"row border-bottom pb-3 pt-2"},[t._m(0),t._m(1),t._m(2)]):e("div",{staticClass:"row pt-4"},[t._m(3)]),e("div",{staticClass:"pb-5"},t._l(t.accounts,(function(a){return e("div",{key:a.accountNumber,attrs:{account:a}},[e("router-link",{staticClass:"text-dark",attrs:{to:{name:"account",params:{accountId:a.accountNumber}}}},[e("div",{staticClass:"row border-bottom"},[e("div",{staticClass:"col-4 pt-3 text-center border-right"},[e("p",[t._v(t._s(a.accountType))])]),e("div",{staticClass:"col-5 col-md-4 pt-3 text-center border-right"},[e("p",[t._v(t._s(a.accountNumber))])]),e("div",{staticClass:"col-3 col-md-4 pt-3 text-center"},[e("p",[t._v(t._s(a.balance.toFixed(2)))])])])])],1)})),0)])]),e("div",{staticClass:"modal fade",attrs:{id:"newAccount",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Open A New Account")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.resetModal}},[e("span",[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("form",[t._m(4),e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAccount.accountType,expression:"newAccount.accountType"}],staticClass:"form-check-input",attrs:{type:"radio",name:"accountType",id:"accountType1",value:"Checking",checked:"",required:""},domProps:{checked:t._q(t.newAccount.accountType,"Checking")},on:{change:function(a){return t.$set(t.newAccount,"accountType","Checking")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"accountType1"}},[t._v(" Checking ")])]),e("div",{staticClass:"form-check pb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newAccount.accountType,expression:"newAccount.accountType"}],staticClass:"form-check-input",attrs:{type:"radio",name:"accountType",id:"accountType2",value:"Savings"},domProps:{checked:t._q(t.newAccount.accountType,"Savings")},on:{change:function(a){return t.$set(t.newAccount,"accountType","Savings")}}}),e("label",{staticClass:"form-check-label",attrs:{for:"accountType2"}},[t._v(" Savings ")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.resetModal}},[t._v(" Close ")]),e("button",{staticClass:"btn btn-success",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.openAccount}},[t._v(" Open Account ")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"transferFunds",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(5),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.newTransfer(a)}}},[e("p",[t._v("Select an Account To Withdraw From:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.accountFrom,expression:"accountFrom"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.accountFrom=a.target.multiple?e:e[0]}}},t._l(t.accounts,(function(a){return e("option",{key:a.accountNumber,domProps:{value:a}},[t._v(" "+t._s(a.accountType)+" #"+t._s(a.accountNumber)+" : $"+t._s(a.balance)+" ")])})),0),Object.keys(t.accountFrom).length>0?e("div",[e("p",{staticClass:"mt-5"},[t._v("Select an Account To Deposit To:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.accountTo,expression:"accountTo"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.accountTo=a.target.multiple?e:e[0]}}},t._l(t.accounts,(function(a){return e("option",{key:a.accountNumber,domProps:{value:a}},[t._v(" "+t._s(a.accountType)+" #"+t._s(a.accountNumber)+" : $"+t._s(a.balance)+" ")])})),0)]):t._e(),Object.keys(t.accountTo).length>0?e("div",{staticClass:"mt-5 pt-2"},[t._m(6),e("small",[t._v("Maximum Amount: "+t._s(t.accountFrom.balance)+" ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.transferAmount,expression:"transferAmount",modifiers:{number:!0}}],staticClass:"form-control mb-3",attrs:{type:"number",min:"0",max:t.accountFrom.balance,placeholder:"$$$",step:"0.01"},domProps:{value:t.transferAmount},on:{input:function(a){a.target.composing||(t.transferAmount=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]):t._e(),t.transferAmount>0?e("button",{staticClass:"btn btn-warning float-right",attrs:{type:"submit"}},[t._v(" Transfer ")]):t._e()])]),t._m(7)])])])])},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-4 text-center"},[e("h5",[t._v("Type")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-5 col-md-4 text-center"},[e("h5",[t._v("Account #")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-3 col-md-4 text-center"},[e("h5",[t._v("Bal. ($)")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-10 text-center mx-auto"},[e("p",[t._v(" You Currently Do Not Have Any Accounts. "),e("br"),t._v(" Click The 'New Account' Button To Create One. ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("u",[t._v("Account Type:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Transfer Funds")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e("span",[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("u",[t._v("Enter a Dollar Amount To Open the Account With:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")])])}],B={name:"accounts",data(){return{newAccount:{balance:0,accountType:null,accountNumber:null},accountFrom:{},accountTo:{},fromSelection:!1,toSelection:!1,transferAmount:null,cashDeposit:!1,depositAmount:null}},computed:{accounts(){return this.$store.state.accounts}},mounted(){this.$store.dispatch("getAccounts")},methods:{resetModal(){this.newAccount={balance:0,accountType:null}},openAccount(){null!=this.newAccount.accountType?(this.newAccount.accountNumber=Math.floor(1e8+9e8*Math.random()),this.$store.dispatch("newAccount",this.newAccount)):alert("Make sure to select an account type. Please try again")},newTransfer(){if(this.accountTo!==this.accountFrom){let t={accountNumber:this.accountTo.accountNumber,memo:"Transfer from account",category:"Transfer",transactionType:"Deposit",amount:this.transferAmount,date:(new Date).toISOString().slice(0,10)};this.$store.dispatch("newTransaction",t),this.accountTo.balance+=this.transferAmount,this.$store.dispatch("editBalance",this.accountTo);let a={accountNumber:this.accountFrom.accountNumber,memo:"Transfer to account",category:"Transfer",transactionType:"Withdrawal",amount:this.transferAmount,date:(new Date).toISOString().slice(0,10)};this.$store.dispatch("newTransaction",a),this.accountFrom.balance-=this.transferAmount,this.$store.dispatch("editBalance",this.accountFrom),this.accountTo={},this.accountFrom={},this.transferAmount=null,$("#transferFunds").modal("hide")}}}},N=B,O=(e("a1eb"),Object(m["a"])(N,E,k,!1,null,null,null)),P=O.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid",attrs:{id:"account"}},[e("div",{staticClass:"row",attrs:{title:"accountNumber"}},[e("div",{staticClass:"col-9 mx-auto text-white mt-5"},[e("h3",[t._v("Account #: "+t._s(t.account.accountNumber))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-9 px-0 pt-2 mx-auto bg-white text-info"},[e("div",{staticClass:"row w-100"},[e("div",{staticClass:"col-6"},[e("h4",{staticClass:"m-3"},[t._v("Account type: "+t._s(t.account.accountType))])]),e("div",{staticClass:"col-6 text-right"},[e("h3",{staticClass:"m-3"},[t._v("Balance: $"+t._s(t.account.balance.toFixed(2)))])])]),e("button",{staticClass:"btn btn-success float-right my-3 mr-3",on:{click:function(a){t.newTransactionForm=!0}}},[t._v(" Transaction + ")]),e("h4",{staticClass:"text-center border-bottom border-info mt-4 w-50 mx-auto"},[t._v(" Transactions ")]),t._m(0),0==t.transactions.length&&0==t.newTransactionForm?e("div",{staticClass:"row w-100 my-5 ml-1"},[t._m(1)]):t._e(),t.newTransactionForm?e("div",{staticClass:"row bg-secondary border-bottom border-info m-0"},[e("div",{staticClass:"col-2 bg-secondary border-right border-bottom border-info p-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.newTransaction.transactionType,expression:"newTransaction.transactionType"}],staticClass:"form-control form-control-sm",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.newTransaction,"transactionType",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:""}},[t._v("Withdrawal")]),e("option",[t._v("Deposit")])])]),e("div",{staticClass:"col-2 bg-secondary border-right border-bottom border-info p-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.newTransaction.category,expression:"newTransaction.category"}],staticClass:"form-control form-control-sm",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.newTransaction,"category",a.target.multiple?e:e[0])}}},[t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)])]),e("div",{staticClass:"col-3 bg-secondary border-right border-bottom border-info p-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTransaction.memo,expression:"newTransaction.memo"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"groceries",required:""},domProps:{value:t.newTransaction.memo},on:{input:function(a){a.target.composing||t.$set(t.newTransaction,"memo",a.target.value)}}})]),e("div",{staticClass:"col-2 p-1 bg-secondary border-right border-bottom border-info"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.newTransaction.amount,expression:"newTransaction.amount",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",placeholder:"$$$",step:"0.01",required:""},domProps:{value:t.newTransaction.amount},on:{input:function(a){a.target.composing||t.$set(t.newTransaction,"amount",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-2 border-bottom border-right border-info p-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTransaction.date,expression:"newTransaction.date"}],staticClass:"w-100",attrs:{type:"date"},domProps:{value:t.newTransaction.date},on:{input:function(a){a.target.composing||t.$set(t.newTransaction,"date",a.target.value)}}})]),t._m(8),e("div",{staticClass:"col-12 bg-white"},[e("button",{staticClass:"btn btn-dark float-right mx-1 my-1",on:{click:function(a){t.newTransaction=t.newTransactionDefault,t.newTransactionForm=!1}}},[t._v(" Cancel ")]),e("button",{staticClass:"btn btn-success float-right ml-1 mr-1 my-1",on:{click:t.submitTransaction}},[t._v(" Save ")])])]):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:t.transactions.length>0,expression:"transactions.length > 0"}]},t._l(t.transactions,(function(a){return e("div",{key:a.id},[0==t.editTransaction?e("div",{staticClass:"row w-100 m-0 border-bottom border-info"},[e("div",{staticClass:"col-2 border-right border-info text-info p-1"},[t._v(" "+t._s(a.transactionType)+" ")]),e("div",{staticClass:"col-2 border-right border-info text-info p-1"},[t._v(" "+t._s(a.category)+" ")]),e("div",{staticClass:"col-3 border-right border-info text-info p-1"},[t._v(" "+t._s(a.memo)+" ")]),"Withdrawal"==a.type?e("div",{staticClass:"col-2 border-right border-info text-danger p-1 text-right"},[t._v(" -"+t._s(a.amount)+" ")]):e("div",{staticClass:"col-2 border-right border-info text-info p-1 text-right"},["Withdrawal"==a.transactionType?e("span",[t._v("-")]):t._e(),t._v(t._s(a.amount.toFixed(2))+" ")]),e("div",{staticClass:"col-2 border-right border-info text-info p-1 text-right"},[t._v(" "+t._s(a.date)+" ")]),"Transfer"!==a.category?e("div",{staticClass:"col text-info p-1 text-center"},[e("i",{staticClass:"fas fa-edit pointer",on:{click:function(e){t.originalType=a.transactionType,t.originalAmt=a.amount,t.transToEdit=a,t.editTransaction=!0}}}),t._v(" / "),e("i",{staticClass:"fas fa-trash-alt pointer",on:{click:function(e){return t.deleteTransaction(a)}}})]):t._e()]):t.transToEdit.id==a.id?e("div",{staticClass:"row bg-secondary border-bottom border-info m-0"},[e("div",{staticClass:"col-2 bg-secondary border-right border-bottom border-info p-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.transToEdit.transactionType,expression:"transToEdit.transactionType"}],staticClass:"form-control form-control-sm",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.transToEdit,"transactionType",a.target.multiple?e:e[0])}}},[e("option",{attrs:{selected:""}},[t._v("Withdrawal")]),e("option",[t._v("Deposit")])])]),e("div",{staticClass:"col-2 bg-secondary border-right border-bottom border-info p-1"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.transToEdit.category,expression:"transToEdit.category"}],staticClass:"form-control form-control-sm",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.transToEdit,"category",a.target.multiple?e:e[0])}}},[t._m(9,!0),t._m(10,!0),t._m(11,!0),t._m(12,!0),t._m(13,!0),t._m(14,!0)])]),e("div",{staticClass:"col-3 bg-secondary border-right border-bottom border-info p-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transToEdit.memo,expression:"transToEdit.memo"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"groceries",required:""},domProps:{value:t.transToEdit.memo},on:{input:function(a){a.target.composing||t.$set(t.transToEdit,"memo",a.target.value)}}})]),e("div",{staticClass:"col-2 p-1 bg-secondary border-right border-bottom border-info"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.transToEdit.amount,expression:"transToEdit.amount",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",placeholder:"$$$",step:"0.01",required:""},domProps:{value:t.transToEdit.amount},on:{input:function(a){a.target.composing||t.$set(t.transToEdit,"amount",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-2 border-right border-bottom border-info p-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.transToEdit.date,expression:"transToEdit.date"}],staticClass:"w-100",attrs:{type:"date"},domProps:{value:t.transToEdit.date},on:{input:function(a){a.target.composing||t.$set(t.transToEdit,"date",a.target.value)}}})]),e("div",{staticClass:"col-1 border-bottom border-info"}),e("div",{staticClass:"col-12 bg-white"},[e("button",{staticClass:"btn btn-dark float-right mx-1 my-1",on:{click:function(a){t.transToEdit={},t.editTransaction=!1}}},[t._v(" Cancel ")]),e("button",{staticClass:"btn btn-success float-right ml-1 mr-1 my-1",on:{click:t.putTransaction}},[t._v(" Save ")])])]):t._e()])})),0),t.accounts.length>0?e("button",{staticClass:"btn btn-danger float-right m-3",attrs:{"data-toggle":"modal","data-target":"#closeAccount"}},[t._v(" CLOSE ACCOUNT ")]):t._e()]),e("div",{staticClass:"modal fade",attrs:{id:"closeAccount",tabindex:"-1",role:"dialog"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(15),e("div",{staticClass:"modal-body"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.deleteAccount(a)}}},[e("div",[e("p",{staticClass:"mt-1"},[t._v("Select An Account To Move Funds Into:")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.accountTo,expression:"accountTo"}],staticClass:"custom-select",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.accountTo=a.target.multiple?e:e[0]}}},t._l(t.accounts,(function(a){return e("option",{key:a.accountNumber,domProps:{value:a}},[t._v(" "+t._s(a.accountType)+" #"+t._s(a.accountNumber)+" : $"+t._s(a.balance.toFixed(2))+" ")])})),0)]),e("button",{staticClass:"btn btn-danger mt-3 mb-0 float-right",attrs:{type:"submit"}},[t._v(" CLOSE ACCOUNT ")])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.resetModal}},[t._v(" Cancel ")])])])])])])])},D=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row w-100 m-0 border-top border-bottom border-info"},[e("div",{staticClass:"col-2 border-right border-info text-info p-1"},[e("small",[e("b",[t._v("Type")])])]),e("div",{staticClass:"col-2 border-right border-info text-info p-1"},[e("small",[e("b",[t._v("Category")])])]),e("div",{staticClass:"col-3 border-right border-info text-info p-1"},[e("small",[e("b",[t._v("Payee / Memo")])])]),e("div",{staticClass:"col-2 border-right border-info text-info p-1 text-right"},[e("small",[e("b",[t._v("Amount ($)")])])]),e("div",{staticClass:"col-2 border-right border-info text-info text-right p-1"},[e("small",[e("b",[t._v("Date")])])]),e("div",{staticClass:"col text-info p-1 text-center"},[e("small",[e("b",[t._v("Edit")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 text-center"},[e("h5",[t._v("No Transactions At This Time")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Deposits"}},[e("option",[t._v("Paycheck")]),e("option",[t._v("Cash Deposit")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Bills"}},[e("option",[t._v("Cable / Internet")]),e("option",[t._v("Power")]),e("option",[t._v("Water")]),e("option",[t._v("Phone")]),e("option",[t._v("Credit Card")]),e("option",[t._v("Insurance")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Car"}},[e("option",[t._v("Car Payment")]),e("option",[t._v("Car Insurance")]),e("option",[t._v("Car Maint.")]),e("option",[t._v("Gas")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Food"}},[e("option",[t._v("Groceries")]),e("option",[t._v("Fast Food")]),e("option",[t._v("Restaurant")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Home"}},[e("option",[t._v("Maintenance")]),e("option",[t._v("Tech")]),e("option",[t._v("Entertainment")]),e("option",[t._v("Furniture")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Other"}},[e("option",[t._v("Emergency")]),e("option",[t._v("Misc.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-1 border-bottom border-info"},[e("p")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Deposits"}},[e("option",[t._v("Paycheck")]),e("option",[t._v("Cash Deposit")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Bills"}},[e("option",[t._v("Cable / Internet")]),e("option",[t._v("Power")]),e("option",[t._v("Water")]),e("option",[t._v("Phone")]),e("option",[t._v("Credit Card")]),e("option",[t._v("Insurance")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Car"}},[e("option",[t._v("Car Payment")]),e("option",[t._v("Car Insurance")]),e("option",[t._v("Car Maint.")]),e("option",[t._v("Gas")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Food"}},[e("option",[t._v("Groceries")]),e("option",[t._v("Fast Food")]),e("option",[t._v("Restaurant")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Home"}},[e("option",[t._v("Maintenance")]),e("option",[t._v("Tech")]),e("option",[t._v("Entertainment")]),e("option",[t._v("Furniture")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("optgroup",{attrs:{label:"Other"}},[e("option",[t._v("Emergency")]),e("option",[t._v("Misc.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v("Transfer Funds")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[e("span",[t._v("×")])])])}],I={name:"account",data(){return{account:this.$store.state.accounts.filter(t=>t.accountNumber==this.$route.params.accountId).pop(),newTransactionForm:!1,newTransaction:{accountNumber:this.$route.params.accountId},newTransactionDefault:{accountNumber:this.$route.params.accountId,memo:null,transactionType:null,category:null,amount:null},accountTo:{},accountFrom:{},transToEdit:{},editTransaction:!1,originalAmt:null,originalType:null}},computed:{transactions(){return this.$store.state.transactions.filter(t=>t.accountNumber==this.account.accountNumber).sort((t,a)=>t.date<a.date?1:-1)},accounts(){return this.$store.state.accounts.filter(t=>t.id!=this.account.id)}},methods:{submitTransaction(){let t=this.newTransaction;null!=t.amount&&null!=t.transactionType&&null!=t.memo&&null!=t.category&&null!=t.date&&(this.newTransaction.id=Math.floor(999999*Math.random()),this.$store.dispatch("newTransaction",this.newTransaction),"Withdrawal"==this.newTransaction.transactionType&&(this.account.balance-=this.newTransaction.amount),"Deposit"==this.newTransaction.transactionType&&(this.account.balance+=this.newTransaction.amount),this.$store.dispatch("editBalance",this.account),setTimeout(()=>{this.newTransaction.amount=0,this.newTransaction.transactionType=null,this.newTransaction.category=null,this.newTransaction.date=null,this.newTransaction.memo=null},3e3),this.newTransactionForm=!1)},deleteTransaction(t){"Deposit"==t.transactionType&&(this.account.balance-=t.amount),"Withdrawal"==t.transactionType&&(this.account.balance+=t.amount),this.$store.dispatch("editBalance",this.account),this.$store.dispatch("deleteTransaction",t)},resetModal(){this.accountTo={}},deleteAccount(){if(0!=Object.entries(this.accountTo).length){let t=this.account.balance;this.accountTo.balance+=this.account.balance;let a={accountNumber:this.accountTo.accountNumber,memo:"From Closed Account",category:"Transfer",transactionType:"Deposit",amount:t,date:(new Date).toISOString().slice(0,10)};this.$store.dispatch("editBalance",this.accountTo),this.$store.dispatch("newTransaction",a),this.$store.dispatch("deleteAccount",this.account.id),this.$store.dispatch("deleteAccountTransactions",this.account.id),$("#closeAccount").modal("hide"),this.account.balance=0,this.$router.push({path:"/accounts"})}},putTransaction(){let t=this.transToEdit.amount-this.originalAmt,a=this.transToEdit.transactionType;if(0==t&&this.originalType!==a){let t=this.transToEdit.amount;"Deposit"==this.originalType&&"Withdrawal"==a?(console.log("changed from Deposit to Withdrawal"),this.account.balance=this.account.balance-2*t):(console.log("changed from Withdrawal to Deposit"),this.account.balance=this.account.balance+2*t)}0!==t&&this.originalType==a&&("Deposit"==this.transToEdit.transactionType?this.account.balance+=t:this.account.balance-=t),0!==t&&this.originalType!==a&&("Withdrawal"==a?(this.account.balance-=this.originalAmt,this.account.balance-=this.transToEdit.amount):(this.account.balance+=this.originalAmt,this.account.balance+=this.transToEdit.amount)),this.$store.dispatch("editTransaction",this.transToEdit),this.$store.dispatch("editBalance",this.account),this.transToEdit={},this.editTransaction=!1}},mounted(){this.account=this.$store.state.accounts.filter(t=>t.accountNumber==this.$route.params.accountId).pop(),this.$store.dispatch("getTransactions")}},M=I,j=(e("90c7"),Object(m["a"])(M,S,D,!1,null,null,null)),W=j.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"row mt-3 bg-white"},[e("div",{staticClass:"col mx-auto py-2 text-info"},[0==t.billBudgetForm?e("button",{staticClass:"btn btn-success m-3 float-right",on:{click:function(a){t.billBudgetForm=!0}}},[t._v("Create Budget")]):t._e(),e("h4",{staticClass:"m-3"},[t._v("Bills:")]),t.billBudgetForm?e("div",{staticClass:"row"},[e("form",[e("label",{staticClass:"ml-3",attrs:{for:"budget"}},[t._v("Budget")]),e("input",{staticClass:"m-2",attrs:{type:"number",placeholder:"$$$"}}),e("button",{staticClass:"btn btn-secondary border-info mx-2",attrs:{type:"button"},on:{click:function(a){t.billBudgetForm=!1}}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-info mx-2"},[t._v("Save")])])]):t._e()])]),e("div",{staticClass:"row mt-3 bg-white"},[e("div",{staticClass:"col mx-auto py-2 text-info"},[0==t.carBudgetForm?e("button",{staticClass:"btn btn-success m-3 float-right",on:{click:function(a){t.carBudgetForm=!0}}},[t._v("Create Budget")]):t._e(),e("h4",{staticClass:"m-3"},[t._v("Car:")]),t.carBudgetForm?e("div",{staticClass:"row"},[e("form",[e("label",{staticClass:"ml-3",attrs:{for:"budget"}},[t._v("Budget")]),e("input",{staticClass:"m-2",attrs:{type:"number",placeholder:"$$$"}}),e("button",{staticClass:"btn btn-secondary border-info mx-2",on:{click:function(a){t.carBudgetForm=!1}}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-info mx-2"},[t._v("Save")])])]):t._e()])]),e("div",{staticClass:"row mt-3 bg-white"},[e("div",{staticClass:"col mx-auto py-2 text-info"},[0==t.foodBudgetForm?e("button",{staticClass:"btn btn-success m-3 float-right",on:{click:function(a){t.foodBudgetForm=!0}}},[t._v("Create Budget")]):t._e(),e("h4",{staticClass:"m-3"},[t._v("Food:")]),t.foodBudgetForm?e("div",{staticClass:"row"},[e("form",[e("label",{staticClass:"ml-3",attrs:{for:"budget"}},[t._v("Budget")]),e("input",{staticClass:"m-2",attrs:{type:"number",placeholder:"$$$"}}),e("button",{staticClass:"btn btn-secondary border-info mx-2",on:{click:function(a){t.foodBudgetForm=!1}}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-info mx-2"},[t._v("Save")])])]):t._e()])]),e("div",{staticClass:"row mt-3 bg-white"},[e("div",{staticClass:"col mx-auto py-2 text-info"},[0==t.homeBudgetForm?e("button",{staticClass:"btn btn-success m-3 float-right",on:{click:function(a){t.homeBudgetForm=!0}}},[t._v("Create Budget")]):t._e(),e("h4",{staticClass:"m-3"},[t._v("Home:")]),t.homeBudgetForm?e("div",{staticClass:"row"},[e("form",[e("label",{staticClass:"ml-3",attrs:{for:"budget"}},[t._v("Budget")]),e("input",{staticClass:"m-2",attrs:{type:"number",placeholder:"$$$"}}),e("button",{staticClass:"btn btn-secondary border-info mx-2",on:{click:function(a){t.homeBudgetForm=!1}}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-info mx-2"},[t._v("Save")])])]):t._e()])]),e("div",{staticClass:"row mt-3 bg-white"},[e("div",{staticClass:"col mx-auto py-2 text-info"},[0==t.otherBudgetForm?e("button",{staticClass:"btn btn-success m-3 float-right",on:{click:function(a){t.otherBudgetForm=!0}}},[t._v("Create Budget")]):t._e(),e("h4",{staticClass:"m-3"},[t._v("Other:")]),t.otherBudgetForm?e("div",{staticClass:"row"},[e("form",[e("label",{staticClass:"ml-3",attrs:{for:"budget"}},[t._v("Budget")]),e("input",{staticClass:"m-2",attrs:{type:"number",placeholder:"$$$"}}),e("button",{staticClass:"btn btn-secondary border-info mx-2",on:{click:function(a){t.otherBudgetForm=!1}}},[t._v("Cancel")]),e("button",{staticClass:"btn btn-info mx-2"},[t._v("Save")])])]):t._e()])])])},U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center mt-3 py-2 text-white"},[e("h4",[t._v("Budgets")])])])}],R={name:"budget",data(){return{billBudgetForm:!1,carBudgetForm:!1,foodBudgetForm:!1,homeBudgetForm:!1,otherBudgetForm:!1}}},L=R,H=Object(m["a"])(L,q,U,!1,null,null,null),z=H.exports;o["a"].use(C["a"]);var G=new C["a"]({routes:[{path:"/",name:"home",component:F},{path:"/budgets",name:"budget",component:z,beforeEnter:v["b"]},{path:"/accounts",name:"accounts",component:P,beforeEnter:v["b"]},{path:"/account/:accountId",name:"account",component:W,beforeEnter:v["b"]}]}),J=e("2f62");o["a"].use(J["a"]);let Y=location.host.includes("localhost")?"https://localhost:5001/":"/",Z=l.a.create({baseURL:Y+"api/",timeout:3e3,withCredentials:!0});var K=new J["a"].Store({state:{accounts:[],transactions:[],activeTransactions:[],accountTo:{},accountFrom:{}},mutations:{openAccount(t,a){t.accounts.push(a)},transferFunds(t,a){let e=a.to,o=a.from,n=t.accounts.findIndex(t=>t.accountNumber==e.accountNumber);t.accounts[n].balance=e.balance;let s=t.accounts.findIndex(t=>t.accountNumber==o.accountNumber);t.accounts[s].balance=o.balance},getTransactionsByAccountNumber(t,a){t.activeTransactions=t.transactions.filter(t=>t.accountNumber==a)},submitTransaction(t,a){let e=t.accounts.findIndex(t=>t.accountNumber==a.accountNumber);"Withdrawal"==a.type&&(t.accounts[e].balance-=a.amount),"Deposit"==a.type&&(t.accounts[e].balance+=a.amount),t.transactions.push(a)},setAccounts(t,a){t.accounts=a},setActiveTo(t,a){t.accountTo=a},setActiveFrom(t,a){t.accountFrom=a},setTransactions(t,a){t.transactions=a}},actions:{setBearer({},t){Z.defaults.headers.authorization=t,G.push("accounts")},resetBearer(){Z.defaults.headers.authorization=""},openAccount({commit:t,dispatch:a},e){t("openAccount",e)},transferFunds({commit:t,dispatch:a},e){e.to.balance===e.amount?(e.from.balance-=e.amount,e.from.balance.toFixed(2)):(e.to.balance+=e.amount,e.to.balance.toFixed(2),e.from.balance-=e.amount,e.from.balance.toFixed(2)),t("transferFunds",{to:e.to,from:e.from})},getTransactionsByAccountNumber({commit:t,dispatch:a},e){t("getTransactionsByAccountNumber",e)},submitTransaction({commit:t,dispatch:a},e){t("submitTransaction",e),a("getTransactionsByAccountNumber",e.accountNumber)},getAccounts({commit:t}){Z.get("accounts").then(a=>{t("setAccounts",a.data)}).catch(t=>console.error(t))},async getAccountById({commit:t,dispatch:a},e){try{let a=await Z.get("accounts/"+e);t("setActiveAccount",a.data)}catch(o){console.error(o)}},async getAccountToById({commit:t,dispatch:a},e){try{let a=await Z.get("accounts/"+e);t("setActiveTo",a.data)}catch(o){console.error(o)}},async getAccountFromById({commit:t,dispatch:a},e){try{let a=await Z.get("accounts/"+e);t("setActiveFrom",a.data)}catch(o){}},async newAccount({commit:t,dispatch:a},e){try{await Z.post("accounts",e);a("getAccounts")}catch(o){console.error(o)}},async editBalance({commit:t,dispatch:a},e){try{await Z.put("accounts/"+e.id,e);a("getAccounts")}catch(o){console.error(o)}},async deleteAccount({commit:t,dispatch:a},e){try{await Z.delete("accounts/"+e);a("getAccounts")}catch(o){console.error(o)}},async getTransactions({commit:t,dispatch:a}){try{let a=await Z.get("transactions");t("setTransactions",a.data)}catch(e){console.error(e)}},async newTransaction({commit:t,dispatch:a},e){try{await Z.post("transactions",e);a("getTransactions")}catch(o){console.error(o)}},async deleteTransaction({commit:t,dispatch:a},e){try{await Z.delete("transactions/"+e.id,e);a("getTransactions")}catch(o){console.error(o)}},async deleteAccountTransactions({commit:t,dispatch:a},e){try{await Z.delete("accounts/"+e+"/transactions");a("getTransactions")}catch(o){console.error(o)}},async editTransaction({commit:t,dispatch:a},e){try{await Z.put("transactions/"+e.id,e);a("getTransactions")}catch(o){console.error(o)}}}});const Q="spenserdavies.auth0.com",V="https://realBank",X="fuzP55CVTl1mzZvP6eKDA5A7brHQf8Zh";o["a"].use(v["a"],{domain:Q,clientId:X,audience:V,onRedirectCallback:t=>{G.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new o["a"]({router:G,store:K,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var o=e("9c0c"),n=e.n(o);n.a},"5ced":function(t,a,e){},"90c7":function(t,a,e){"use strict";var o=e("32a5"),n=e.n(o);n.a},9582:function(t,a,e){},"9c0c":function(t,a,e){},a1eb:function(t,a,e){"use strict";var o=e("9582"),n=e.n(o);n.a},cccb:function(t,a,e){"use strict";var o=e("5ced"),n=e.n(o);n.a}});