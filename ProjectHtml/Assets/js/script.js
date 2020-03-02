document.querySelector('h1').onclick = function (){
    alert('ouch deja de tocarme');
}
//window.onload = function(){
var miImage = document.getElementById('profilepicture');
miImage.onclick = function (){
var miSrc = miImage.getAttribute('src');
if(miSrc === '../images/fotoportafolio.png'){
miImage.setAttribute('src','../images/fototaller.jpg');
}else{
 miImage.setAttribute('src','../images/fotoportafolio.png')
}
}
//}
/* SubSkills*/
window.onload = function(){
 var setBoolPopUp = true;
 var setBoolPopUp2 = true;
 var setBoolPopUp3 = true;

var moreImage = document.getElementById('moreOrlessInformation');
var skills = document.getElementById('subSkills');
moreImage.onclick = function (){
    console.log("Entro a la funcion onclick");
    var miSrc = moreImage.getAttribute('src');
    if(miSrc === '../images/more.png'){
        moreImage.setAttribute('src','../images/less.png');
        console.log("cambio la imagen");
          skills.style.height = "110px";
    }else{
        moreImage.setAttribute('src','../images/more.png')
          skills.style.height = "0px";
    
    }
}


/* subWorkExperience
var moreImage2 = document.getElementById('moreOrlessInformation2');
var workExperience = document.getElementById('subWorkExperience');
moreImage3.onclick = function (){
    console.log("Entro a la funcion onclick");
    var miSrc = moreImage3.getAttribute('src');
    if(miSrc === '../images/more.png'){
        moreImage3.setAttribute('src','../images/less.png');
        console.log("cambio la imagen");

     
    }else{
        moreImage3.setAttribute('src','../images/more.png')
     
}
}
*/ 
/*Studies*/

var moreImage3 = document.getElementById('moreOrlessInformation3');
var subStudies = document.getElementById('subStudies');
moreImage3.onclick = function (){
    console.log("Entro a la funcion onclick");
    var miSrc = moreImage3.getAttribute('src');
    if(miSrc === '../images/more.png'){
        moreImage3.setAttribute('src','../images/less.png');
        console.log("cambio la imagen");
        subStudies.style.height = "200px";
        
     
    }else{
        moreImage3.setAttribute('src','../images/more.png')
        subStudies.style.height = "0px";
}
}

/*Work experience*/ 
var moreImage2 = document.getElementById('moreOrlessInformation2');
var subWorkExperience = document.getElementById('subWorkExperience');
moreImage2.onclick = function (){
    console.log("Entro a la funcion onclick");
    var miSrc = moreImage2.getAttribute('src');
    if(miSrc === '../images/more.png'){
        moreImage2.setAttribute('src','../images/less.png');
        console.log("cambio la imagen");
        subWorkExperience.style.height = "850px";
   
     
    }else{
        moreImage2.setAttribute('src','../images/more.png')
        subWorkExperience.style.height = "0px";
        subWorkExperience.style.overflow = "hidden";
      //  setAllPopUp();
     
}
}



    const popup = document.getElementById('titleWorkOne');
    var mypopup = document.getElementById("myPopup"); 
    
    popup.onclick = function myFunction() {
    if( setBoolPopUp ===true){
        mypopup.classList.toggle("show");
        setBoolPopUp === false;
        subWorkExperience.style.overflow = "visible";
    }else{
        setBoolPopUp === true;
        subWorkExperience.style.overflow = "hidden";

    }
   
  }

  const popup2 = document.getElementById('titleWorkTwo');
  var mypopup2 = document.getElementById("myPopup2");

    popup2.onclick = function myFunction() {
    mypopup2.classList.toggle("show");
         
       
  }

  
  const popup3 = document.getElementById('titleWorkThree');
  var mypopup3 = document.getElementById("myPopup3");

  popup3.onclick = function myFunction() {
      
        mypopup3.classList.toggle("show");
    
}


  function  setAllPopUp(){
        mypopup.classList.values("hide");    
        mypopup2.classList.toggle("hide");  
        mypopup3.classList.toggle("hide");    
      
     

  }

}