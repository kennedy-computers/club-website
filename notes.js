$(function(){
	$(document.body).css("background-color","rgb(255, 255, 100)");//set background
	//notes
	var ratio = window.innerWidth/window.innerHeight;
	var invRatio = 1/ratio;
	var names = [
		"Variables and Strings",
		"Conditionals",
		"Loops",
		"Functions"
	];//names of the notes
	var urls = [
		"https://docs.google.com/document/d/1EecgKsusFAbvUtwgjJZXX8lhX7MpzNZc-UVgYtCv6iw/edit",
		"https://docs.google.com/document/d/1BFH8bY-CwMxBf3tHrMjN_i6xcTFTJG5IEnS4q5X6vQA/edit",
		"https://docs.google.com/document/d/1dfM1GmaavLKGyvanC4gaPd9Y7ysU4Oe1Jj1jRwu6xm0/edit",
		"https://docs.google.com/document/d/1_pabhdNj321AxN-n9liwuqZYmOJ2l6fLBS-6SEOb9os/edit"
	];//notes will be on google docs.
	var top;
	$.each(names, function(i, val){
		//create a "box" for each notes topic
		$("<div class='notesbox'></div>").appendTo("#notes")
			.append("<iframe src='"+urls[i]+"'></iframe>")
			.append("<div class='links'>"+val+"</div>")
			.css({
				"left": (i%3)*31 +"%",
				"top": Math.floor(i/3)*(invRatio*30)+"vw"
			});
	});//iterate through 'names'
	$(".notesbox").dblclick(function(){
		location.href=urls[parseInt(this.id.replace("notes",""))];
	}).height(invRatio*0.3*window.innerWidth);
	
});
