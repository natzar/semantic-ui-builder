/* Template Engine Quick Adapter
====================================*/
function TemplateEngineRender(template, data){		
	return Mustache.render(template,data);	
}

/* Super Class 
====================================*/
function Ui (){
	this.version = 1;	
	this.data = {};
	this.template = '{{output}}';
}

/* Every Html/Css item is an Element subclass
====================================*/
function Element(opts){	
	Ui.call(this);		
	this.data = opts;	
	this.append = function (c){
		this.children.push(c);		
	}	
	this.prerender = function(){
		return TemplateEngineRender(this.template,this.data);
	}
	this.render = function (){
		document.write(this.prerender());
	}
}
Element.prototype = Object.create(Ui.prototype);

/* CSS Classes and Items 
====================================*/
function Button (opts){
	Element.call(this,opts);		
	this.template = "<a class='ui button primary' href='{{link}}'>{{label}}</a>";
}
Button.prototype = Object.create(Element.prototype);

function Header (opts){	
	Element.call(this,opts);		
	this.template ="<h1 class='ui header'>{{text}}{{#subheader}}<div class='sub header'>{{subheader}}</div>{{/subheader}}</h1>";
}
Header.prototype = Object.create(Element.prototype);

function Container(opts){
	Element.call(this,opts);
	this.template = '<div class="ui container {{classes}}">{{{output}}}</div>';
	this.children = [];		
	this.render = function(){		
		if (this.children.length > 0){
			this.children.forEach(function(item){
				if (item.children.length>0){
					item.children.forEach(function(sitem){
						this.data.output += sitem.prerender();
					});
				}
				output += TemplateEngineRender(item.template, item.data);
			});			
		}		
		document.write(TemplateEngineRender(this.template,this.data));
	}
}

Container.prototype = Object.create(Element.prototype);