var colorGlobal;
var colorGlobal2;

pintarDiv = function(){
    // console.log('pintar');
    element = document.getElementById('key');
    element.style.backgroundColor = colorGlobal;
}
pintarOcrearDiv = function(){
    // console.log('pintarOcrear');
    element = document.getElementById('key2');
    if(!element){
        // crear div2
        element = document.createElement("div");
        element.id = 'key2';
        element.style = "width: 200px;height: 200px;background-color: white;border: 2px solid black;";
        body = document.querySelector('body');
        body.appendChild(element);
    }

    element.style.backgroundColor = colorGlobal;
}

document.addEventListener('keydown',function(event){
    if(event.key === 'a'){
        colorGlobal = 'pink';
        // console.log(colorGlobal)
        pintarDiv();
    }
    else if(event.key === 's'){
        colorGlobal = 'orange';
        // console.log(colorGlobal)
        pintarDiv();

    }
    else if(event.key === 'd'){
        colorGlobal = 'purple';
        // console.log(colorGlobal)
        pintarDiv();
    }
    if(event.key === 'q'){
        colorGlobal = 'pink';
        // console.log(colorGlobal2)
        pintarOcrearDiv();
    }
    else if(event.key === 'w'){
        colorGlobal = 'gray';
        // console.log(colorGlobal2)
        pintarOcrearDiv();

    }
    else if(event.key === 'e'){
        colorGlobal = 'brown';
        // console.log(colorGlobal2)
        pintarOcrearDiv();
    }
})