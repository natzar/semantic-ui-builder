var App = {	
	views: [],
	current_view: null,	
	init: function(){
		this.views[0].show.call(this.views[0]);
	},
	onResize: function(){

	},
	onScroll: function(){

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
	this.innerHtml = "";
	

	this.template = "<{{tag}} {{{attributes}}}>{{{innerHtml}}}</{{tag}}>";

	this.compile = function(){		
		var classes = "";
		
		var attributesToString = "";
		var ignore = ['items','content','tag','innerHtml','children','attributes'];
		for (var x in this.data){	
			if ( ignore.indexOf(x) < 0 ){		
			attributesToString +=' '+x+'="';
			if (typeof this.data[x] == "object"){
				attributesToString += this.data[x].join(" ")+'"' ;
			}else{
				attributesToString += this.data[x]+'"';
			}
			}
		}
		
		this.data.attributes = attributesToString.toLowerCase();

		//this.data.attributes = "id='"+this.id+"' class=\'"+classes.trim().toLowerCase()+"\'";
		return Mustache.render(this.template,this.data);			
	}
	
	this.onReady = function(){

	};
	this.onHover = function(){

	};

	this.render = function(node){
		console.log('render',node.template,node.data);
		
		var that = this;
		if (node.children.length > 0){
			var output = "";
			node.children.forEach(function(item){
				output += that.render(item);
			});
			
			node.data.innerHtml += output;
		
		} 
			
		return  this.compile.call(node);			
		
	}
	
	this.show = function(){
		console.log('show',this.children);
		
		var html = this.render(this);
		document.write(html);
	}
	return this;
}
Element.prototype = Object.create(Ui.prototype);


/* CSS Classes and Items 
====================================*/
function el(ui, _opts){
	var opts = {
		class: ['ui',ui],
		content: '',
		id: 'ID'+ui+'-',
		tag: 'div',
		innerHtml: ''
	};
	

	for (var op in _opts){ //extend options
		if (op == "class"){
			_opts['class'].forEach(function(op_class){
				opts['class'].push(op_class);
			});
		}else{
			opts[op] = _opts[op];
		}
	}

	// dirty hack (fix)
	opts.innerHtml = opts.content ||'';
	
	
	if (typeof window[ui] != "undefined" && typeof window[ui].call != "undefined"){
		window[ui].call(this,opts);

	}else{
		Element.call(this,opts);
	}




}




