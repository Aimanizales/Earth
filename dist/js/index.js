$(document).ready(function() {
	var athmosphere = 1000,
      $indicator = $("#depth_indicator>span"),
      depth = 0,
      concept = {
        
      },
      h_indicator = $indicator.css('top');
  
  $(window).scroll(function() {
    depth = athmosphere - Math.floor($(window).scrollTop()); 
    $indicator.text(depth);
	});
});