<!DOCTYPE HTML>
<html>
<body onload="loadUser()">
<div id="target">Loading...</div>
<script id="template" type="x-tmpl-mustache">
Hello {{ name }}!
</script>
</body>
</html>
function loadUser() {
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, {name: "Luke"});
  $('#target').html(rendered);
}


function Ui (){
	this.version = 1;
}

function Group(){
	
}
Group.prototype = Object.create(Ui.prototype);

function Element(){
	Ui.call(this);
	this.view ='view';
	this.content = [];
	this.add = function (c){
		this.content.push(c);
	}
}
Element.prototype = Object.create(Ui.prototype);

function Button (label,link){
	Element.call(this);
	this.label = label;
	this.link = link;
}
Button.prototype = Object.create(Element.prototype);

function Header (text){
	Element.call(this);
	this.label = label;
	this.link = link;
}
Header.prototype = Object.create(Element.prototype);


function Container(){
	Element.call(this);
	
	
}

Container.prototype = Object.create(Element.prototype);

var container = new Container();
var button = new Button('helo','href');
container.add(button);
console.log(button.version,button.label,button.view,container);