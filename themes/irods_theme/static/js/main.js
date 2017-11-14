$(document).ready(function(){
    var todays_date = new Date().getTime();
    var IDs = [];
    $(".event_list_container").find(".event_container").each(function(){ IDs.push(this.id); });
    IDs.reverse();
    console.log(IDs);
    for (var i = 0; i < IDs.length; i++) {
        if(IDs[i] > todays_date && !$('.event_container_next').length){
            $('#'+IDs[i]).addClass("event_container_next");
            $('#'+IDs[i]).children(".col-xs-1").children(".not_next").addClass("next_event");
            $('#'+IDs[i]).children(".col-xs-1").children(".not_next").removeClass("not_next");
        }
    }


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
    $(".trirods_3_button").click(function(){
        deactivate_trirods_content();
        $(".trirods_3").removeClass('inactive_content');
        $(".trirods_3_button").addClass('active');
    });
    $(".trirods_4_button").click(function(){
        deactivate_trirods_content();
        $(".trirods_4").removeClass('inactive_content');
        $(".trirods_4_button").addClass('active');
    });

});

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var url = $("input#url").val();
            var description = $("textarea#description").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "../theme/js/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    url: url,
                    description: description
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
