$(function(){
	$(document.body).css("background-color","rgb(255, 255, 100)");//set background
	//notes
	var ratio = window.innerWidth/window.innerHeight;
	var invRatio = 1/ratio;
	var names = [
		"Variables and Strings"
	];//names of the notes
	var urls = [
		"https://docs.google.com/document/d/1EecgKsusFAbvUtwgjJZXX8lhX7MpzNZc-UVgYtCv6iw/edit"
	];//notes will be on google docs.
	$.each(names, function(i, val){
		//create a "box" for each notes topic
		$("#notes").append("<div class='notesbox' id='notes"+i+"'></div>");
		$("#notes"+i).append("<iframe src='"+urls[i]+"'></iframe>").append("<div class='links'>"+val+"</div>")
	});//iterate through 'names'
	$(".notesbox").dblclick(function(){
		location.href=urls[parseInt(this.id.replace("notes",""))];
	}).height(invRatio*0.3*window.innerWidth);
	
});