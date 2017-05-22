# semantic-ui-builder
Semantic UI items and components + Mustache.

I would like to build web apps the same way you would build an iOS UI programatically.
Objective is to build all Semantic UI CSS framework components and items, so you can build any UI programatically without touching HTML.
I'm used to backbone, so final objective would be to implement this Semantic UI componenets, into Backbone views.

Basic example:

	  var container = new Container({ classes: "centered aligned text"});
	  var header = new Header({ text:'hello!', subheader:'Lorem ipsum dolor sit amet'});
	  var btn = new Button({ label: 'hello!', link: 'hello'});
	  container.append(header);
	  container.append(btn);
	  container.render();


