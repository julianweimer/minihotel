$(function() {
	
	// Variables for Reservento integration
	var width = 500;
	var height = 500;

    $('#map, #slides').remove().insertAfter('section#body_content h1');

    $('#map').goMap({
        maptype: 'ROADMAP',
        latitude: 53.56423,
        longitude: 9.98309,
        zoom: 15,
        markers: [{latitude: 53.56423, longitude: 9.98309, title: 'Mini-Hotel an der Messe'}]
    });

    $('#slides').slides({
        generateNextPrev: true,
        generatePagination: false,
        effect: 'fade',
        play: 5000
    });

    $('a.booking_button').fancybox({
      onStart: function(){
                 $('div#hotelspider').show();
               },
      onComplete: function(){
                 $('div#hotelspider iframe').attr('src','https://reservation.tourisoft.ch/hotel-spider/hotel/index.php?HotelCode=1554');
               },
      onClosed: function(){
                 $('div#hotelspider').hide();
                }
    });

});
