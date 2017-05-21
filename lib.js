
function loadUser() {
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, {name: "Luke"});
  $('#target').html(rendered);
}

var Template = {

	render: function(template, data){
		return Mustache.render(template,data);
		// var output = "";
		// for (var x in data) {
		// 	console.log(x, data[x]);
		// 	template = template.replace('{{'+x+'}}',data[x]);			
		// }
		// return template;
	}
}

function Ui (){
	this.version = 1;
	this.id = null;
	this.tree = [];
}

function Group(){
	
}
Group.prototype = Object.create(Ui.prototype);

function Element(){
	Ui.call(this);
	this.view ='view';
	this.children = [];
	this.setId = function(){
		//random ID
	}
	this.data = {};

	this.append = function (c){
		this.children.push(c);
	}
	// this.render = function(){
	// 	document.write(Template.render(this.template, this.data));
	// }
}
Element.prototype = Object.create(Ui.prototype);

function Button (label,link){
	Element.call(this);
	
	this.data = {label , link};
	
	this.template = "<a class='ui button primary' href='{{link}}'>{{label}}</a>";
}
Button.prototype = Object.create(Element.prototype);

function Header (text){
	Element.call(this);	
	this.data = { text: text };
	this.template ="<h1 class='ui header'>{{text}}</h1>";
}
Header.prototype = Object.create(Element.prototype);


function Container(){
	Element.call(this);
	this.template = '<div class="ui container">{{{content}}}</div>'
	this.data = null;
	output = "";
	this.flush = function(){
		this.children.forEach(function(item){
			output += Template.render(item.template, item.data);
		});
		document.write(Template.render(this.template,{content: output}));
		
	}
}

Container.prototype = Object.create(Element.prototype);