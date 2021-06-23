var interval = setInterval(caroslide,3000);
//setInterval(carobutton,3000);
var slide = 0;
function caroslide(){
    slide = slide + 1; 
    var x = document.getElementsByClassName("caroslide");
    var y = document.getElementsByClassName("slidebuttons")[0].getElementsByTagName("i");
    if(slide>=x.length)
    {
        slide = 0;
    }
    if(slide==0)
    {
        x[x.length-1].style.opacity = "0";
        x[0].style.opacity = "1";
        y[y.length-1].style.color = "grey";
        y[0].style.color = "white";
    }
    else
    {
        x[slide-1].style.opacity = "0";
        x[slide].style.opacity = "1";
        y[slide-1].style.color = "grey";
        y[slide].style.color = "white";
    }
}

function slidebutton(sb){
    var x = document.getElementsByClassName("caroslide");
    var y = document.getElementsByClassName("slidebuttons")[0].getElementsByTagName("i");
    x[slide].style.opacity = "0";
    y[slide].style.color = "grey";
    slide = sb;
    x[slide].style.opacity = "1";
    y[slide].style.color = "white";
    clearInterval(interval);
    interval = setInterval(caroslide,4000);
}