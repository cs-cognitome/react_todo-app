(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),o=n(9),c=n.n(o),r=(n(16),n(17),n(7)),s=n(10),i=n(1),d=n(2),m=n(4),u=n(3),h=n(5),f=function(e){var t=e.todosLength,n=e.isAllChecked,l=e.todos,o=e.handleItemDestroyer,c=e.handleItemsCheck,r=e.handleCheckedAll;return a.a.createElement("section",{className:"main",style:{display:"block"}},t&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n,onChange:function(){return r(n)}}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete ")),a.a.createElement("ul",{className:"todo-list"},l.map(function(e){return a.a.createElement("li",{className:""},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",checked:e.completed,onClick:function(){return c(e.id)}}),a.a.createElement("label",{htmlFor:"todo-1"},e.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(e.id)}})))})))},p=n(6),I=n.n(p),E=function(e){var t=e.selectedFilterItem,n=e.setItemFilter;return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:I()({selected:"all"===t}),onClick:function(){return n(C.all)}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:I()({selected:"active"===t}),onClick:function(){return n(C.active)}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:I()({selected:"completed"===t}),onClick:function(){return n(C.completed)}},"Completed")))},b=function(e){var t=e.todosFooter,n=e.todosLeft,l=e.clearCompletedItems,o=e.selectedFilterItem,c=e.setItemFilter;return a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},"Items Left:"," ",n),a.a.createElement(E,{selectedFilterItem:o,setItemFilter:c}),t.some(function(e){return e.completed})&&a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:l},"Clear Completed"))},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var l=arguments.length,a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={inputText:""},n.handleInputText=function(e){n.setState({inputText:e.target.value})},n.handleInputSubmit=function(e){e.preventDefault();var t=n.state.inputText;(0,n.props.addTodo)(t),n.setState({inputText:""})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.inputText;return a.a.createElement("header",{className:"header"},a.a.createElement("form",{onSubmit:this.handleInputSubmit},a.a.createElement("h1",null,"todos"),a.a.createElement("input",{value:e,className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleInputText})))}}]),t}(a.a.Component),C={all:"all",active:"active",completed:"completed"},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var l=arguments.length,a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],counterId:1,selectedFilterItem:C.all},n.getTodoId=function(){var e=n.state.counterId;return n.setState(function(e){return{counterId:e.counterId+1}}),e},n.addTodo=function(e){n.setState(function(t){return{todos:[].concat(Object(s.a)(t.todos),[{id:n.getTodoId(),title:e,complited:!1}])}})},n.handleItemDestroyer=function(e){n.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},n.handleItemsChecked=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?Object(r.a)({},t,{completed:!t.completed}):t})}})},n.handleCheckedAll=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return Object(r.a)({},t,{completed:!e})})}})},n.isAllChecked=function(){return n.state.todos.every(function(e){return e.completed})},n.clearCompletedItems=function(){n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},n.setItemFilter=function(e){n.setState({selectedFilterItem:e})},n.filterTodoItems=function(){var e=C.all,t=C.active,l=C.completed,a=n.state.todos;switch(n.state.selectedFilterItem){case t:return a.filter(function(e){return!e.completed});case l:return a.filter(function(e){return e.completed});case e:default:return a}},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.filterTodoItems(),t=this.isAllChecked(),n=this.state.todos;return a.a.createElement("section",{className:"todoapp"},a.a.createElement("form",{className:"header",onSubmit:this.handleInputSubmit},a.a.createElement("h1",null,"todos"),a.a.createElement(k,{addTodo:this.addTodo})),a.a.createElement(f,{todos:e,todosLength:0!==this.state.todos.length,handleItemDestroyer:this.handleItemDestroyer,handleItemsCheck:this.handleItemsChecked,filterTodoItems:this.filterTodoItems,handleCheckedAll:this.handleCheckedAll,isAllChecked:t}),0!==this.state.todos.length&&a.a.createElement(b,{todos:e,todosFooter:this.state.todos,todosLength:0!==this.state.todos.length,filterTodoItems:this.filterTodoItems,selectedFilterItem:this.state.selectedFilterItem,setItemFilter:this.setItemFilter,clearCompletedItems:this.clearCompletedItems,todosLeft:n.filter(function(e){return!e.completed}).length}))}}]),t}(a.a.Component);c.a.render(a.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6c2a52af.chunk.js.map