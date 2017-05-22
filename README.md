# semantic-ui-builder
Semantic UI items and components + Mustache

Full example:

var container = new Container({ classes: "centered aligned text"});
  var header = new Header({ text:'hello!', subheader:'Lorem ipsum dolor sit amet'});
  var btn = new Button({ label: 'hello!', link: 'hello'});
  container.append(header);
  container.append(btn);
  container.render();


