$(document).ready(function(){
    var colors = new Array(
  [22,169,148],
  [4,108,104],
  [0,130,151],
  [4,108,104],
  [4,94,122],
  [102,99,95]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, center top, center bottom, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

   $('#gradient2').css({
   background: "-webkit-gradient(linear, center top, center bottom, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);

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

    $(".btn-group").hover(function(){        
        $(this).children(".nav_dropdown_button").addClass("open_dropdown");
        $(this).children(".dropdown-menu").stop().toggle("fast");
        }, function(){
        $(this).children(".nav_dropdown_button").removeClass("open_dropdown");
        $(this).children(".dropdown-menu").stop().toggle("fast");    
    });

    $(".toggler").click(function(){
    	$(this).siblings(".toggle_cont").toggle("normal");
    });

    $(".navbar-toggle").click(function(){
        if (!$(this).hasClass("collapsed")) {
          $("#page-top").removeClass("static");
        };
        if ($(this).hasClass("collapsed")) {
          $("#page-top").addClass("static");
        };
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
