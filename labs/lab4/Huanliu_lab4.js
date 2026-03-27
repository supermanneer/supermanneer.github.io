//  ITMD 541-04 Graduate Student

// 1a. Change the main headline text in the hero section.
(function(){
    document.querySelector('.text-4xl.font-bold').textContent="Uplift Your Brand with Stellar Marketing";
})();

// b. Change the line of text below the hero headline to the following text
(function(){
    document.querySelector('.text-xl.mb-6').innerHTML=`Utilize cutting-edge strategies from Stellar Marketing to help your business <i><b> thrive </b></i>  and <i><b> excel </b></i>.`;
})();

// c. Change the image in the background of the hero to the one below
(function(){
    document.querySelector('#hero').style.background="url('https://picsum.photos/id/683/1280/720')";
})();

// d. Remove the Get Started CTA from the hero.
(function(){
  var child=document.querySelector('.relative.bg-blue-600');
    child.remove();
})();

// e. Change the background color of the nav bar to the same color that is used in the footer.

(function(){
    var header=document.querySelector('header');
     header.style.backgroundColor='#1F2937';
 })();


//  2. Our Services Section
// a. In the services section change the icons color to (#47C714).

(function(){
   document.querySelectorAll('.material-symbols-outlined.text-6xl')[0].style.color="#47C714";
   document.querySelectorAll('.material-symbols-outlined.text-6xl')[1].style.color="#47C714";
   document.querySelectorAll('.material-symbols-outlined.text-6xl')[2].style.color="#47C714";
 })();


//  b. The icons use the material symbols outlined library. Change the digital marketing icon to use  Ads Click instead of the current icon

(function(){
 
 var wrap=document.querySelector('.bg-white.p-6.rounded.shadow.items-center.flex.flex-col');
  var icon=document.createElement("span");
 icon.className='material-symbols-outlined';
 icon.style.fontSize="58px"
 icon.innerText="ads_click";
 icon.style.color="#47C714";
 wrap.prepend(icon);
 document.querySelector('.material-symbols-outlined.text-6xl').remove();

 
})();

// 3. Specialized Marketing Solutions section
// a. In the specialized marketing solutions section make a change to the layout of the tiles so that at  >= 1024px they are 4 across instead of 2 across.

(function(){
    const screenWidth=window.innerWidth;
    console.log(screenWidth);
    if(screenWidth>1024){

document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.gap-6').style.gridTemplateColumns='repeat(4, minmax(0, 1fr))';
console.log(document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.gap-6'));
}
})();

// b. In the same section change the Musicians image to the following: https://picsum.photos/id/453/400/300
(function(){

document.querySelectorAll('.w-full.h-auto')[3].src='https://picsum.photos/id/453/400/300';

})();

// Graduate Additional Requirements

(function(){
    var name=document.getElementsByName('name')[0].value.trim();
    var email=document.getElementsByName('email')[0].value.trim();
    var submit=document.querySelector('.bg-blue-600.text-white.px-6.py-2.w-full.md\\:w-auto.rounded.hover\\:bg-blue-700');
  
   console.log(name);
   console.log(email);

    if(name==null || name==""|| email==null||email==""){
  //If the user did not input a name or email in the form show an alert box with the, Please provide a name and email.
        submit.onclick=function(){
            alert("Please provide a name and email.");
            return false;
        }
    }else{
 // Thank you, name! We will be in touch with you shortly at email.
        submit.onclick=function(){
        alert("Thank you,"+name+"! We will be in touch with you shortly at email");
        return false;
    }
    }
 
})();

