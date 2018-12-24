var App = {	
	views: [],	
	init: function(){
		this.views[0].show();
	}
	
};


/* Super Class 
====================================*/
function Ui (){
	this.version = 1;	
	this.c = 0;
	this.data = {};
	
	this.children = [];
	this.id = null;

	this.append = function (c){
		this.children.push(c);		
	}	
}


/* Every Html/Css item is an Element subclass
====================================*/
function Element(opts){	
	var that = this;
	Ui.call(that);		
	this.data = opts;		
	
	
	this.template = "<{{tag}} {{{attributes}}}>{{{innerHtml}}}</{{tag}}>";

	this.compile = function(){		
		var classes = "";
		var attributesToString = "";
		var ignore = ['content','tag','innerHtml'];
		for (var x in this.data){	
			if ( ignore.indexOf(x) < 0 ){		
			attributesToString += " "+x+"='";
			if (typeof this.data[x] == "object"){
				attributesToString += this.data[x].join(" ")+"'" ;
			}else{
				attributesToString += this.data[x]+"'";
			}
			}
		}
		
		this.data.attributes = attributesToString.toLowerCase();

		//this.data.attributes = "id='"+this.id+"' class=\'"+classes.trim().toLowerCase()+"\'";
		return Mustache.render(this.template,this.data);			
	}
	
	this.render = function(node){
		console.log('render',typeof node);
		var that = this;
		if (node.children.length > 0){
			var output = "";
			node.children.forEach(function(item){
				output += that.render(item);
			});
			
			node.data.innerHtml = output;
		
		} 
			
		return  this.compile.call(node);			
		
	}
	
	this.show = function(){
		console.log('show',this.children);
		this.data.innerHtml = this.render(this);
		var html = this.compile();
		document.write(html);
	}
	return this;
}
Element.prototype = Object.create(Ui.prototype);


/* CSS Classes and Items 
====================================*/
function el(ui, opts){
	if (typeof opts == 'undefined'){
		opts = {};
		
	}
	if (!opts.class){
		opts.class = [];
	}
	
	opts.tag = 'div';
	opts.class.push('ui');
	opts.class.push(ui);
	opts.id = ui+'-';

	opts.innerHtml = opts.content;
	Element.call(this,opts);
	this.c++;
	
	return this;

}
el.prototype = Object.create(Element.prototype);



