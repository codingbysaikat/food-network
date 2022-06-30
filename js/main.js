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
       if(winheight>diff){
        $('.blog h2').addClass('animate-run');
        $('.blog-about').addClass('animate-run');
        
       }
       let blog_con_height = $('.blog-con').offset().top;
       let blog_diff = blog_con_height - scrollhight;
       if(winheight>blog_diff){
        $('.blog-con').addClass('animate-run');
       }

        
    });

    


});
