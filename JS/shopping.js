$(document).ready(function () {

	// Validate text box, then add value in text box to list

	$('#add-button').click(function() {
		if( $('input.item').val().trim().length == 0 ) {
				// alert("put something here");
				$('#error').show();
				$('input#add-todo').val("");
		} else { 
		var cat = $(".category").val();
		$("ul li."+cat).next().append('<li>' + $('.item').val() + '</li>');
		$('input#add-todo').val("");
		$('#error').hide();
		$(".page1").hide(); $(".page2").show();


		};	
	
	});

});
$(document).ready(function(){
    $("#allitems").click(function(){
        $(".page1").hide(); $(".page2").show();
    });
     $("#additems").click(function(){
        $(".page2").hide(); $(".page1").show();
   	});
});
