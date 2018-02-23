jQuery(document).ready(function() {
	$(".dial").knob();

// 	$(".carousel_items").owlCarousel({
// 		loop:true,
// 		items:6
// 	});


// 	var owl = $('.single_carousel');
// owl.owlCarousel();
// // Go to the next item
// $('.fa-chevron-right').click(function() {
//     owl.trigger('next.owl.carousel');
// });
// // Go to the previous item
// $('.fa-chevron-left').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// });

$('.carousel_items').owlCarousel({
        
        margin: 30,
        loop: true,
        responsive:{
            300:{
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:6
            }

        }
    });
    $('.carousel_trigger .fa-chevron-left').click(function (){
        $('.single_carousel').trigger('prev.owl.carousel', [2000]);
    });
    $('.carousel_trigger .fa-chevron-right').click(function (){
        $('.single_carousel').trigger('next.owl.carousel', [3000]);
    });

$('.main_menu').slicknav();
    
    $('.slicknav_parent').click(function(){
        $('.slicknav_parent ul').removeClass('sub_menu');
    });
    new WOW().init();

$(".content").mixItUp();
 $(".venobox").venobox({
    numeratio: true,
    titleattr: 'data-title'
 }); 
 $('#count').countdown('2018/01/01 9:20:37', function(event) {
  //   $(this).html(event.strftime('%w Weeks %d Days %H:%M:%S'));
  //   $(this).html(evnt.strftime("<span class='week'>%w</span>"+"<span class='day'>%d</span>"+"<span class='second'>%S</span>"))
  // });
$(this).html(event.strftime("<span class='week'>Week:%w</span><span class='day'>Day:%d</span><span class='hour'>Hours:%H</span><span class='hour'>Minutes:%M</span><span class='hour'>Seconds:%S</span>"
    ));

});
 $("#style1").on('click', function() {
    $("body").removeClass('style2 style1 style3 style4');
    $("body").addClass('style1');
 });
 $("#style2").on('click', function() {
    $("body").removeClass('style2 style1 style3 style4');
    $("body").addClass('style2');
 });
 $("#style3").on('click', function() {
    $("body").removeClass('style2 style1 style3 style4');
    $("body").addClass('style3');
 });
 $("#style4").on('click', function() {
    $("body").removeClass('style2 style1 style3 style4');
    $("body").addClass('style4');
 });
 $(".trigger").on('click',function() {
    $(".color").toggleClass('left');
 });

});

// function myMap() {
// var mapProp= {
//     center:new google.maps.LatLng(23.776050, 90.390344),
//     zoom:15,
//     scrollwheel:false
// };

// var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// var marker = new google.maps.Marker({
//     icon: "../images/slider1.png"
//   });
// marker.setMap(map);

// }
function myMap() {
  var mapCanvas = document.getElementById("googleMap");
  var myCenter = new google.maps.LatLng(23.776050, 90.390344); 
  var mapOptions = {center: myCenter, zoom: 15,zoomControl: false,
  scaleControl: false,
  scrollwheel: false,
  disableDoubleClickZoom: true};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    icon: "images/p.png"
  });

  marker.setMap(map);

}