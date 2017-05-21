
function TemplateEngineRender(template, data){
		return Mustache.render(template,data);	
}

function Ui (){
	this.version = 1;
	
	
	this.tree = [];
}


function Element(){
	Ui.call(this);
	this.view ='view';
	this.children = [];
	
	this.payload = {output: ''};
	this.template = null;
	this.append = function (c){
		this.children.push(c);		
	}
	var self = this;
	this.render = function(){
		var output = "";
		if (this.children.length > 0){
			this.children.forEach(function(item){
				if (item.children.length>0){
					item.children.forEach(function(sitem){
						output += TemplateEngineRender(sitem.template, sitem.payload);
					});
				}
			output += TemplateEngineRender(item.template, item.payload);
			});
			
		}
		self.payload.output = output; 
		document.write(TemplateEngineRender(this.template,this.payload));
	}
	this.show = function(){
		self.render();
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
	this.payload.text = text ;
	this.template ="<h1 class='ui header'>{{text}}</h1>";
}
Header.prototype = Object.create(Element.prototype);


function Container(){
	Element.call(this);
	this.template = '<div class="ui container">{{{content}}}</div>'
	this.data = null;
	output = "";	
}

Container.prototype = Object.create(Element.prototype);