/* TO-DO APP example */

App.name = "Todo List";

var home = new el('view');

var container = new el('container',{class:['text']});
var segment = new el('segment',{class:[]});
var list = new el('List',{class:['relaxed','divided'], items: [{header:"Task1", description: "Fix bugs in phpninja.info"}]});

var button = new el('button',{content: "Add To-do"},{click: function(){ list.append({header:"Task2", description: "Appended"});}});

segment.append(list);
segment.append(button);
container.append(segment);

home.append(container)

App.views.push(home);
App.init();






