jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $(window).scroll(function(){
        let winheight = $(window).height();
        let scrollhight= window.scrollY;
        let height_from_top = $('.blog h2').offset().top;
        let diff=height_from_top - scrollhight;
        //Blog heding 2
       if(winheight>diff){
        $('.blog h2').addClass('animate-run');
        $('.blog-about').addClass('animate-run');
        
       }
       //Blog 
       let blog_con_height = $('.blog-con').offset().top;
       let blog_diff = blog_con_height - scrollhight;
       if(winheight>blog_diff){
        $('.blog-con').addClass('animate-run');
       }
       //about image animation
       let about_image_height = $('.about-img img').offset().top
       let about_image_diffrint = about_image_height - scrollhight;
       if(winheight > about_image_diffrint){
        $('.about-img img').addClass('image-animation');
       }
       // About Description Animation
       let about_description_animation = $('.about-con').offset().top;
       let about_description_diffrent = about_description_animation - scrollhight;
       if(winheight > about_description_diffrent){
        $('.about-con').addClass('about-animation');
       }


    });
        
})