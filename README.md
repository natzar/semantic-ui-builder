# Semantic Ui - builder
Proof of concept: Build web ui with Vanilla JS based in Semantic UI CSS. 

This is sort of an specific exploration I'm doing. 
Inspired by iOS applications, Objective C & XCode.

Basic example:

	  var container = new Container({ class: "centered aligned text"});
	  var header = new Header({ content:'hello!'});
	  var btn = new Button({ label: 'hello!', link: 'hello'});
	  container.append(header);
	  container.append(btn);
	  container.render();
	  
With Events:

	  el({main class},{element's attributes}, {element's events});

	  var list = new el('list',{class:['relaxed']});
	  var btn = new el('button',{class:['primary']},{click: function(){ list.append({header: "Text header new item","description": "Whatever", icon:"sample.png" });
	  
- All elements can have 0 or more children.
- If you want a sub header, append it to a header element.
- Order of appends is important (DOM hierarchy)
- All elements can be rendered
- Only "View elements" can do document.write (sections, or screens or iOS APP View concept...)


To-do:
- Keep exploring whatever appeals you.

### Documentation
In order to facilitate the understanding and use of the Semantic UI builder, detailed documentation on how to use and extend the system will be developed. This documentation will provide guidelines on element creation and manipulation, event handling, and best practices for constructing user interfaces with Semantic UI builder.

### Log

27 Dec - Impossible to work with customized elements with this approach. Thinking on using this as an IDE. Exactly like you would develop an iOS app with Xcode.

23 Dec - Creating elements dynamically. Adding new items to a list. Attaching events.

23 Dec - started TO-DO app example

23 Dec - Added App Super Class.

23 Dec - Refactored. el() function does all the work. Removed Element Class.

15 Dec - Getting it back

9 Sep - Pause with this project

8 Sep - Made first step, example and basic exploration