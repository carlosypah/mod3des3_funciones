pintar = function(element,color='green'){
  // console.log(element)
  element.style.backgroundColor = color
}
  const ele = document.getElementById("ele1")
  ele.addEventListener("click", function(){
                                pintar(ele,'yellow')
                              });