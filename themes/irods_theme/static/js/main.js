$(document).ready(function(){
    $(".toggler").click(function(){
    	$(this).siblings(".toggle_cont").toggle("normal");
    });

    function deactivate_trirods_content() {
		$(".trirods_1").addClass('inactive_content');
		$(".trirods_2").addClass('inactive_content');
		$(".trirods_3").addClass('inactive_content');
		$(".trirods_4").addClass('inactive_content');

		$(".trirods_1_button").removeClass('active');
		$(".trirods_2_button").removeClass('active');
		$(".trirods_3_button").removeClass('active');
		$(".trirods_4_button").removeClass('active');
	}

    $(".trirods_1_button").click(function(){
    	deactivate_trirods_content();
    	$(".trirods_1").removeClass('inactive_content');
    	$(".trirods_1_button").addClass('active');
    });
    $(".trirods_2_button").click(function(){
    	deactivate_trirods_content();
    	$(".trirods_2").removeClass('inactive_content');
    	$(".trirods_2_button").addClass('active');
    });

});

