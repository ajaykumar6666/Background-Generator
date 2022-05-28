var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var h3=document.querySelector('h3');
var body=document.getElementById("gradient");

var random=document.getElementById('random');

h3.innerHTML=    body.style.background = "linear-gradient(to right, "
+color1.value
+", "
+color2.value
+")";
h3.innerHTML=body.style.background+";";
function setGradient(){
    body.style.background = "linear-gradient(to right, "
    +color1.value
    +", "
    +color2.value
    +")";
    h3.innerHTML=body.style.background+";";
}
color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);

var copytext=document.getElementById('copytext');
copytext.addEventListener('click',function(){
    navigator.clipboard.writeText(h3.textContent);
})

random.addEventListener('click',function(){
    var r1=Math.floor(Math.random() * 255);
    var r2=Math.floor(Math.random() * 255);
    var g1=Math.floor(Math.random() * 255);
    var g2=Math.floor(Math.random() * 255);
    var b1=Math.floor(Math.random() * 255);
    var b2=Math.floor(Math.random() * 255);
    var color1="rgb("+r1+","+g1+","+b1+")"
    var color2="rgb("+r2+","+g2+","+b2+")"
    h3.innerHTML=    body.style.background = "linear-gradient(to right, "
+color1
+", "
+color2
+")";
})