(this["webpackJsonpfrontend-recepies"]=this["webpackJsonpfrontend-recepies"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(3);var i=n(4);function u(e){return r.a.createElement("div",{className:"RamenChicken"},r.a.createElement("h1",null,e.rData2.name),r.a.createElement("li",null,r.a.createElement("a",{rel:"group"},r.a.createElement("img",{src:"img/ChickenRamen.jpg"}))),r.a.createElement("h3",null,"Ingredients:"),!!e.iData2&&e.iData2.map((function(e){return r.a.createElement("div",null," ",e.name," : ",e.amount)})),r.a.createElement("h3",null,"Instructions"),!!e.rData2&&r.a.createElement("div",null,"   ",e.rData2.instruction),r.a.createElement("textarea",{className:"comment-area",placeholder:"Comment on recipe"}))}function o(e){return r.a.createElement("div",{className:"RamenPork"},r.a.createElement("h1",null,e.rData.name),r.a.createElement("li",null,r.a.createElement("a",{rel:"group"},r.a.createElement("img",{src:"img/PorkRamen.jpg"}))),r.a.createElement("h3",null,"Ingredients:"),!!e.iData&&e.iData.map((function(e){return r.a.createElement("div",null," ",e.name," : ",e.amount)})),r.a.createElement("h3",null,"Instructions"),!!e.rData&&r.a.createElement("div",null,"   ",e.rData.instruction),r.a.createElement("textarea",{className:"comment-area",placeholder:"Comment on recipe"}))}function l(e){return r.a.createElement("div",{className:"RamenGarlic"},r.a.createElement("h1",null,e.rData3.name),r.a.createElement("li",null,r.a.createElement("a",{rel:"group"},r.a.createElement("img",{src:"img/spicy-garlic-ramen.jpg"}))),r.a.createElement("h3",null,"Ingredients:"),!!e.iData3&&e.iData3.map((function(e){return r.a.createElement("div",null," ",e.name," : ",e.amount)})),r.a.createElement("h3",null,"Instructions"),!!e.rData3&&r.a.createElement("div",null,"   ",e.rData3.instruction),r.a.createElement("textarea",{className:"comment-area",placeholder:"Comment on recipe"}))}var m=n(1),p=n.n(m),h=n(2),f="/RamenRecipes/resources";function E(){return d.apply(this,arguments)}function d(){return(d=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/recipe/1",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Could not fetch data!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/recipe/2",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Could not fetch data!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/recipe/3",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Could not fetch data!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/RamenRecipes/resources/recipe_has_ingredients/1",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Could not fetch data!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/RamenRecipes/resources/recipe_has_ingredients/2",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Could not fetch data!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/RamenRecipes/resources/recipe_has_ingredients/3",{method:"GET"});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:return n=e.sent,e.next=9,n;case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Could not fetch data!");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){function t(){return(t=Object(h.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:return n=t.sent,t.next=5,E();case 5:a=t.sent,e.setrData(a),e.setiData(n),e.navigate(1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(h.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return n=t.sent,t.next=5,v();case 5:a=t.sent,e.setrData(a),e.setiData(n),e.navigate(2);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=Object(h.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return n=t.sent,t.next=5,x();case 5:a=t.sent,e.setrData(a),e.setiData(n),e.navigate(3);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{className:"RamenStart"},r.a.createElement("li",null,r.a.createElement("a",{rel:"group"},r.a.createElement("img",{src:"img/PorkRamen.jpg",onClick:function(){return t.apply(this,arguments)}}))),r.a.createElement("li",null,r.a.createElement("a",{rel:"group"},r.a.createElement("img",{src:"img/ChickenRamen.jpg",onClick:function(){return n.apply(this,arguments)}}))),r.a.createElement("li",null,r.a.createElement("a",{rel:"group"},r.a.createElement("img",{src:"img/spicy-garlic-ramen.jpg",onClick:function(){return a.apply(this,arguments)}}))))}function O(e){return r.a.createElement("div",{className:"RamenHeader"},r.a.createElement("h1",null,r.a.createElement("a",{href:"http://localhost:3000"},"Ramen recipes")))}function N(e){return r.a.createElement("div",{className:"RamenFooter"},"@Copyright")}s.a.render(r.a.createElement((function(e){var t=r.a.useState(0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=r.a.useState(void 0),m=Object(i.a)(s,2),p=m[0],h=m[1],f=r.a.useState(void 0),E=Object(i.a)(f,2),d=E[0],v=E[1];function g(e){c(e)}var x=null;return 0===a?x=r.a.createElement(C,{navigate:g,setrData:h,setiData:v}):1===a?x=r.a.createElement(o,{navigate:g,rData:p,iData:d}):2===a?x=r.a.createElement(u,{navigate:g,rData2:p,iData2:d}):3===a&&(x=r.a.createElement(l,{navigate:g,rData3:p,iData3:d})),r.a.createElement("div",null,r.a.createElement(O,null),x,r.a.createElement(N,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,n){},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4707c442.chunk.js.map