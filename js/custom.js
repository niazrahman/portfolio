$(window).on('load', function(){

	"use strict";


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$("a.scrool").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});
 

	/* ========================================================== */
	/*   Countdown                                                */
	/* ========================================================== */
	
	$('#countdown').countdown({
		date: "09 December 2020 12:00:00",
		format: "on"
	},
	
	function() {
		// callback function
	});


	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */
	
	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'email':$('input[name="register_email"]').val(),
					'message':$('textarea[name="register_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})
	
});

 