# Semantic Ui - builder
Proof of concept: Build web ui with Vanilla JS based in Semantic UI CSS. 

This is sort of an specific exploration I'm doing. 
Inspired by iOS applications, Objective C & XCode.

Basic example:

	  var container = new Container({ classes: "centered aligned text"});
	  var header = new Header({ text:'hello!', subheader:'Lorem ipsum dolor sit amet'});
	  var btn = new Button({ label: 'hello!', link: 'hello'});
	  container.append(header);
	  container.append(btn);
	  container.render();
	  
- All elements can have 0 or more children.
- Order of appends is important (DOM hierarchy)
- All elements can be rendered
- Only "View elements" can do document.write (sections, or screens or iOS APP View concept...)


To-do:
- Build typical tier2 ui elements: dialogs, wizards, modals, forms ...
- Backbone Views to controle actions
- Bootstrap Adapter or abstraction layer to work with any CSS Framework
		


### Diary

27 Dec - Imposible to work with customized elements with this approach. Thinking on using this as an IDE. Exactly like you would develop a iOS app with Xcode.
23 Dec - Creating elements dinamically. Adding new items to a list. Attaching events.
23 Dec - started TO-DO app example
23 Dec - Refactored. el() function does all the work. Removed Element Class.
15 Dec - Getting it back

9 Sep - Pause with this project
8 Sep - Made first step, example and basic exploration
