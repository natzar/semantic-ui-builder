
App.onResize = function(){

}

var home = new el('view');
var grid = new el('grid');
var leftColumn = new el('column',{class:['six wide' ]});
var rightColumn = new el('column',{class:['ten wide' ]});

var header = new el('header',{content:"LEFT"});
var header2 = new el('header',{content:"RIGHT"});

leftColumn.append(header);
rightColumn.append(header2);
grid.append(leftColumn);
grid.append(rightColumn);

var container = new el('container',{caca: true, class: ['text','centered','center','align'],content: 'This is home content!!!!!'});
var header = new el('header',{content: 'Semantic UI Builder'});
var subheader = new el('sub header',{content: "Fucking crazy building this"});

header.append(subheader);
container.append(header);
container.append(grid);
home.append(container);

var container = new el('container',{class: ['text','centered','center','align'],content: 'Container 2'});
var segment = new el('segment',{class: ['teal']});
var header = new el('header',{ 
	content: 'Segment Header!',
	children: { "sub header": ""},
	// onHover: function(){
	// 	console.log('Hover!');
	// }
});


var button = new el('button',{
	class:['positive'],
	content:'Click here!',
	// onClick:function(){
	// 	alert("Genau!");
	// }
});
var p =  new el('p',{content: 'Lorem ipsum!'});

segment.append(header);
segment.append(p);

var list = new el('List', {class:['relaxed','divided'], content: 'xx',
	items: [
	{description: "Didi", header:'Melon'},
	{description: "Dedo", header:'Hanino'},
	{description: "Falbi", header:'Tuplvi'},
	{description: "Diana", header:'Krol'},
	{description: "Daddy", header:'Sugar'}]})
segment.append(list);
segment.append(button);
container.append(segment);


// container.append(header);
// container.append(p);

// home.append(segment);
// home.append(header);

// <div class="ui form">
//   <div class="field">
//     <label>User Input</label>
//     <input type="text">
//   </div>
// </div>

var form = new el('form');
var input = new el('Input',{tag: "input",label:"USer Input", type: "text", name: "text"});
form.append(input);
container.append(form);
home.append(container);

home.onReady(function(){

});

App.views.push(home);
App.init();






