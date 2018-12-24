

var home = new el('View',{content: 'hello!!!!!'});

var container = new el('container',{class: ['text','centered','center','align']});
var segment = new el('segment',{class: ['teal' ]});
var header = new el('header',{ content: 'hello!' });
var p =  el('p',{content: 'Lorem ipsum!'});

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






