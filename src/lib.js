var App = {	
	views: [],
	current_view: null,	
	counter: 0,
	events:{},
	init: function(){
		this.show(this.views[0]);
	},
	onResize: function(){

	},
	onScroll: function(){

	},
	getId: function(){
		this.counter++;
		return this.counter;
	},
	show: function(view){
		var html = view.render();
		document.write(html);
		var that = this;
		this.bindEvents(view);
			
	},
	bindEvents: function(ui){
		var that = this;
		if (ui.children.length > 0) {
			ui.children.forEach(function(child){
				that.bindEvents(child);
			});	
		}

		if (ui.events != null){
			for (var event in ui.events){	
			console.log("bindEvents",ui.data.id,event);		
				document.getElementById(ui.data.id).addEventListener(event, ui.events[event]);
			}
		}	
	}
	
};


/* Super Class 
====================================*/
function Ui (){
	this.version = 1;	
	
	this.children = [];
	this.template = "<{{tag}} {{{attributes}}}>{{{content}}}</{{tag}}>";

	

	this.append = function (kid){
		App.events[this.id] = this.events;
		this.children.push(kid);		
	}

	this.compile = function(){		
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
		return Mustache.render(this.template,this.data);			
	}
	
	this.render = function(node){
		if (node == null){
			node = this;
		}
		var that = this;
		if (node.children.length > 0){
			var output = "";
			node.children.forEach(function(item){
				output += that.render(item);
			});
			node.data.content += output;
		} 
		return  this.compile.call(node);			
		
	}
	
	

	// 	document.getElementById("myBtn").addEventListener("click", displayDate);
// var event = new Event('build');

// // Listen for the event.
// elem.addEventListener('build', function (e) { /* ... */ }, false);

// // Dispatch the event.
// elem.dispatchEvent(event);

// var event = new CustomEvent('build', { detail: elem.dataset.time });
// This will then allow you to access the additional data in the event listener:

// function eventHandler(e) {
//   console.log('The time is: ' + e.detail);
// }






}


/* Factory
====================================*/
function el(ui, _opts,events){
	var opts = {
		class: ['ui',ui],
		content: '',
		id:'id-'+ui.toLowerCase()+'-'+App.getId(),
		tag: 'div',
		
	};
	
	// EXTEND Options
	for (var op in _opts){ //extend options
		if (op == "class"){
			_opts['class'].forEach(function(op_class){
				opts['class'].push(op_class);
			});
		}else{
			opts[op] = _opts[op];
		}
	}

	this.data = opts;
	this.events = events || null;
	
	if (typeof window[ui] != "undefined" && typeof window[ui].call != "undefined"){
		window[ui].call(this);
	}else{
		Ui.call(this);
	}
}




