var btnHTML = document.getElementById('btn-html');
var btnCSS = document.getElementById('btn-css');
var btnJS= document.getElementById('btn-js');
var bgColor = document.getElementById('bg-color');
var bodyHTML = document.getElementById('body-html');
var bodyCSS = document.getElementById('body-css');
var bodyJS = document.getElementById('body-js');
var bodynone=document.getElementById('body-none');


function showHTML (){
 btnHTML.style.backgroundColor = "orange";
 bgColor.style.backgroundColor="orange"
 btnCSS.style.backgroundColor = "transparent";
 btnJS.style.backgroundColor = "transparent";
 bodyHTML.style.display = "block";
 bodyCSS.style.display = "none";
 bodyJS.style.display = "none";
 bodynone.style.display="none"

 
}
function showCSS (){
 btnHTML.style.backgroundColor = "transparent";
 btnCSS.style.backgroundColor = "blue";
 bgColor.style.backgroundColor="blue"
 btnJS.style.backgroundColor = "transparent";
 bodyHTML.style.display = "none";
 bodyCSS.style.display = "block";
 bodyJS.style.display = "none";
 bodynone.style.display="none"
}
function showJS (){
 btnJS.style.backgroundColor = "yellow";
 bgColor.style.backgroundColor="yellow"
 btnHTML.style.backgroundColor = "transparent";
 btnCSS.style.backgroundColor = "transparent";
 bodyHTML.style.display = "none";
 bodyCSS.style.display = "none";
 bodyJS.style.display = "block";
 bodynone.style.display="none"
 
 
}