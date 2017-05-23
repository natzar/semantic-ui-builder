# Semantic-ui Js builder
Proof of concept: Build web ui with Vanilla JS based in Semantic UI CSS. 


Basic example:

	  var container = new Container({ classes: "centered aligned text"});
	  var header = new Header({ text:'hello!', subheader:'Lorem ipsum dolor sit amet'});
	  var btn = new Button({ label: 'hello!', link: 'hello'});
	  container.append(header);
	  container.append(btn);
	  container.render();
	  
To-do:
- Build typical tier2 ui elements: dialogs, wizards, modals, forms ...
- Backbone Views to controle actions
- Bootstrap Adapter or abstraction layer to work with any CSS Framework
		


