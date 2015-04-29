
function cambiarColor(){
  var x = document.getElementById("sliderPrincipal").value;
  if(x < 50){
    document.getElementById("sliderPrincipal").style.backgroundColor = "#FFFFFF";
  }
}


window.onload=function()
{
 var classname = document.getElementsByClassName("PIDControlSlider");

    var myFunction = function() {
        var attribute = this.getAttribute("sliderPrincipal");
//Your code goes here
document.getElementById("sliderPrincipal").style.backgroundColor = "#FFFFFF";
        socket.emit('SCMD', this.getAttribute("sliderPrincipal")+' '+ this.value);
    };

    for(var i=0;i<classname.length;i++){
        classname[i].addEventListener('change', myFunction, false);
    }
}