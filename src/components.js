
function List(opts){
  
  Ui.call(this,opts);

  console.log('LIST DATA',this.data.items);
  
  var that = this;
  this.setTemplate = function(){
    this.template = '<div {{{attributes}}}>';
    if (this.data && this.data.items && this.data.items.length > 0){
      this.data.items.forEach(function(item){
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
    document.getElementById(that.data.id).replaceWith(that.render().toDOM());
    
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



function TodoList(opts){
  List.call(this,opts);

}
TodoList.prototype = Object.create(Ui.prototype);