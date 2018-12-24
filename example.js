

var home = new el('View',{content: 'hello!!!!!'});

container = new el('container');
segment = new el('segment',{class: ['teal' ]});
header = new el('header',{ content: 'hello!' });
p =  el('p',{content: 'Lorem ipsum!'});

segment.append(header);
segment.append(p);
container.append(segment);
// container.append(header);
// container.append(p);

// home.append(segment);
// home.append(header);
home.append(container);


App.views.push(home);
App.init();






