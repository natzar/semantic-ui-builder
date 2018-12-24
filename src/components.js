
function List(opts){
  
  Element.call(this,opts);

  console.log('LIST DATA',this.data.items);
  this.template = '<div data-capullo="true" {{{attributes}}}>';
  var that = this;
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
List.prototype = Object.create(Element.prototype);