$( document ).ready(function() { 
	
    var users = [];

    $("#second").hide();
    $("#third").hide();
    $("#fourth").hide();
    $("#fifth").hide();
    $("#sixth").hide();
    $("#docPaste").hide();

	//for(var i = 0; i < users.length; i++){
	//}




    $("#first").click(function(){

    	<!--//if statement for create a class. make it so that it goes to new window-->
    	

    	$("#login").click(function(){
    		var potentialId = $("#classID").val();
    		var potentialPass = $("#password").val();

    		users.push([potentialId, potentialPass]);

    	});
    	    
    });

      $("#create").click(function(){
        $("#first.hide")();
        $("#link.show")();
      });


    
    //$("#teacher").click(function(){
    //	$("#second").hide();
   // 	$("#fourth").show();
   // });

   // $("#student").click(function(){
   // 	$("#second").hide();
   // 	$("#fifth").show();
   // });

   <!--//$("#teacherLogin").click(function(){
    	//var teacherPass = $("#teacherPass").val();
    	//    if (teacherPass == "swag"){
    	//	$("#fourth").hide();
    	//	$("#sixth").show();
    	//} 
    	//else {
    	//	alert("incorrect login");
    	//}
	//});-->

   // $("#placeholder").attr("src", event.fpfile.url);
//});

});
