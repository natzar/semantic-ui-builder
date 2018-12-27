function swapContent (source, dest) {
    const main = document.getElementById(so);
    const div = document.getElementById(id);
    const clone = div.cloneNode(true);

    while (main.firstChild) main.firstChild.remove();

    main.appendChild(clone);
}

String.prototype.toDOM=function(){
  var d=document
     ,i
     ,a=d.createElement("div")
     ,b=d.createDocumentFragment();
  a.innerHTML=this;
  while(i=a.firstChild)b.appendChild(i);
  return b;
};