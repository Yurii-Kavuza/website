$(document).ready(function() {
    
    /* For sticky navigation */
    $('.js--section-after-header').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '80px'
    });
    
    /* Scroll on buttons */
    $('.js--scroll-to-showcase').click(function(){
        $('html,body').animate({scrollTop: $('.js--showcase').offset().top}, 1000);
    });
    
    $('.js--scroll-to-form').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });
    
    /* Animation on scroll */
    $('.js--waypoint-1').waypoint(function(direction){
        $('.js--waypoint-1').addClass('animated fadeIn');
    },{
        offset:'80%'        
    });
    
    $('.js--waypoint-2').waypoint(function(direction){
        $('.js--waypoint-2').addClass('animated fadeIn');
    },{
        offset:'80%'        
    });
        
    $('.js--waypoint-3').waypoint(function(direction){
        $('.js--waypoint-3').addClass('animated fadeInUp');
    },{
        offset:'75%'        
    });
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.addClass('nav-icon-big');
            icon.removeClass('ion-ios-menu');            
        }
        else{
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');   
            icon.removeClass('nav-icon-big');   
        }
    });
    
    /* Maps */
    var map = new GMaps({
      div: '.map',
      lat: 50.485368,
      lng: 30.416945,
    zoom: 14
    });
    
    map.addMarker({
      lat: 50.485368,
      lng: 30.416945,
      title: 'ТОВ А.В.Д.Групп',
      infoWindow: {
          content: '<p>Ваші алюмінієві вікна, двері та інші скляні конструкції</p>'
        }
    });
    
});

/*js--showcase*/