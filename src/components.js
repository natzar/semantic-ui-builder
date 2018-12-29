
function List(opts){
  
  Ui.call(this,opts);

  console.log('LIST DATA',this.data.items);
  
  var that = this;
  this.data.items =[];

  this.setTemplate = function(){
    this.template = '<div {{{attributes}}}>';
    if (this.data && this.data.items && this.data.items.length > 0){
      this.data.items.forEach(function(item){
        
        console.log('item.data',item);
        that.template += '<div class="item">';
        that.template += '<i class="large github middle aligned icon"></i>'; 
        that.template += '<div class="content">';
        that.template += ' <a class="header">'+item.header+'</a>';
        that.template +='<div class="description">'+item.description+'</div>';    
        that.template += '</div>';
        that.template += '</div>';
      });
    }
    this.template += '</div>';
  }

  this.setTemplate(); 
  
  this.append = function(data){
    console.log(that.data.id, data);
    
    this.data.items.push(data);   
    this.setTemplate();

    // toDOM()
    //document.getElementById(that.data.id).replaceWith(that.render().toDOM());
    
    console.log('list update',this.data.items);
  }

}
List.prototype = Object.create(Ui.prototype);


function Input(opts){
  
  Ui.call(this,opts);

  console.log('LIST DATA',this.data.items);
  this.template = '<div class="field"><label>{{label}}</label><input  {{{attributes}}}></div>';
  var that = this;
  
  

}
Input.prototype = Object.create(Ui.prototype);


function Sidebar(opts){
Ui.call(this,opts);
  this.template = '<div id="sidebar" class="ui bottom attached segment pushable">'+
  '<div class="ui visible inverted left vertical sidebar menu">'+
    '<a class="item">'+
      '<i class="home icon"></i>'+
      'Home'+
    '</a>'+
  '</div>'+
  '<div class="pusher" id="main">'+
    '{{{content}}}'+
  '</div>'+
'</div>';

}
function TodoList(opts){
  List.call(this,opts);

}
TodoList.prototype = Object.create(Ui.prototype);