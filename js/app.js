const container = document.querySelector(".container");

function calcLensometer(){
    let power_1=Number(document.getElementById("power1").value);
    let axis_1=Number(document.getElementById("axis1").value);
    let power_2=Number(document.getElementById("power2").value);
    let axis_2=Number(document.getElementById("axis2").value);


    let _a=power_1>power_2?power_1:power_2;
    let _b=power_1==_a?power_2:power_1;

    if(power_1!=0&&power_2!=0){
        let axis= power_1==_a?axis_2:axis_1;
        let sphere=_a;
        let cylinder=_b-_a;
        displayPower(sphere,cylinder,axis);
        transpose(sphere,cylinder,axis);
    }else if(power_1==0){
        let axis= 0;
        let sphere=power_2;
        let cylinder=0;
        displayPower(sphere,cylinder,axis);
    }else {
        let axis= 0;
        let sphere=power_1;
        let cylinder=0;
        displayPower(sphere,cylinder,axis);
    }
}

function displayPower(sphere,cylinder,axis){
    document.getElementById("s").innerText=sphere;
    document.getElementById("c").innerText=cylinder;
    document.getElementById("a").innerText=axis;
}

function transpose(sphere,cylinder,axis){
    var sphere2=sphere;
    var cylinder2=cylinder;
    var axis2=axis;
    if(cylinder!=0){
         sphere2=sphere+cylinder;
         cylinder2=cylinder*-1;
         axis2=axis>90?axis-90:axis+90;
    }
    document.getElementById("s2").innerText=sphere2;
    document.getElementById("c2").innerText=cylinder2;
    document.getElementById("a2").innerText=axis2;
}


function transpose_2(){
    let sphere=Number(document.getElementById("sphere").value);
    let cylinder=Number(document.getElementById("cylinder").value);
    let axis=Number(document.getElementById("axis").value);

    var sphere2=sphere;
    var cylinder2=cylinder;
    var axis2=axis;
    if(cylinder==0)axis2=0;

    if(cylinder!=0){
         sphere2=sphere+cylinder;
         cylinder2=cylinder*-1;
         axis2=axis>90?axis-90:axis+90;
    }
    document.getElementById("s3").innerText=sphere2;
    document.getElementById("c3").innerText=cylinder2;
    document.getElementById("a3").innerText=axis2;
}

function changesign(id){
    var num=Number(document.getElementById(id).value);
    num=num*-1;
    console.log(num);
    document.getElementById(id).value=num;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

document.addEventListener("DOMContentLoaded", function(){
    if(!window.location.hostname.includes("000webhost"))return;
    var divs=document.getElementsByTagName('div');
    var target=divs.length-1;
    divs[target].style.display="none";
});
