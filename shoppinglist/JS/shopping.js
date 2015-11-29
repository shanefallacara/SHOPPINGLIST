$(document).ready(function () {

	// Validate text box, then add value in text box to list

	$('#add-button').click(function() {
		var cat = $(".category")
		$('ul').append('<li>' + $('input#add-todo').val() + '</li>');
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
