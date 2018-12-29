/* TO-DO APP example */

App.name = "Todo List";

var home = new el('view');

// {
// 	home: {
// 		container:{
// 			segment:{
// 				list:{
// 					listItem:{}

// 				},
// 				button:{
					
// 				}
// 			}
// 		}
// 	}
// }
var container = new el('container',{class:['text']});
var segment = new el('segment',{class:[]});
var list = new el('List',{class:['relaxed','divided']});
var listItem = new el('item',{content: {header:"Task1", description: "Fix bugs in phpninja.info"}});
list.append(listItem);

var button = new el('button',{content: "Add To-do"},
	{
		click: function(){ 
			var item = new el('item',{content:{header:"Task2", description: "Appended"}});
			list.append(item);
		}
	});
var table = new el('table');

segment.append(list);
segment.append(button);
container.append(segment);

home.append(container)

App.views.push(home);
App.init();






