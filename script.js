/* var parent = document.querySelector('.parent');

parent.onclick = function(){
    parent.className = ".menu .parent ul";
    
    if (menu.display == 'none'){
        menu.display = 'block';
    }
     else{
         menu.display = 'none';
     }

} */

var prev = document.querySelector('.slaider .buttons .prev');
var next = document.querySelector('.slaider .buttons .next');


var img = document.querySelectorAll(".slaider .photos img");
var i = 0;

prev.onclick = function(){
    img[i].style.display = "none";
    i = i - 1;
    
    if(i < 0 ){
        i = img.length - 1;
    }
    
    img[i].style.display = "block";
}

next.onclick = function(){
    img[i].style.display = "none";
    i++;
    
    if(i >= img.length){
        i = 0;
    }
    
    img[i].style.display = "block";
}

