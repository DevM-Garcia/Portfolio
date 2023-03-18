$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    })
    $('.icon-menu').click(function(){
        $('.nav .menu').toggleClass("active");
        $('icon-menu i').toggleClass("active");
    });
});