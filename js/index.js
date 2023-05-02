window.onscroll = () =>{
    if(window.innerWidth < 991){
       menu.classList.remove('fa-times');
       header.classList.remove('active');
       document.body.classList.remove('active');
    }
 
    document.querySelectorAll('section').forEach(sec =>{
 
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');
 
       if(top >= offset && top < offset + height){
          document.querySelectorAll('.header .navbar a').forEach(links =>{
             links.classList.remove('active');
             document.querySelector('.header .navbar a[href*='+ id +']').classList.add('active')
          });
       };
 
    });
 
}
// Typing 
var typed = new Typed(".typing-1",{
   strings: [
      "Frontend Developer", "Web Designer", "Graphic Designer",
      "WordPress Developer"
   ],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
});
var typed = new Typed(".typing-2",{
   strings: [
      "Frontend Developer", "Web Designer", "Graphic Designer",
      "WordPress Developer"
   ],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
});

// jQuery
$(document).ready(function(){

   $(window).scroll(function(){

       if(this.scrollY > 200){
           $('.navbar').addClass("sticky");
           }else{
               $('.navbar').removeClass("sticky");
               }

         // Scrolling Button Btn
         if(this.scrollY >500){
           $('.scroll-up-btn').addClass("show");
           }else{
           $('.scroll-up-btn').removeClass("show");
           }   
   });

   //slide-up script
   $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop:0});
   });

});
// End of jQuery
