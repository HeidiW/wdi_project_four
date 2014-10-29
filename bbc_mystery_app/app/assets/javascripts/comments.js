$(document).ready(function(){
	$("div#form1").append(
		$("<h3/>").text("Start a topic"), $("<p/>").text("Questions about the episodes? Answers? Add them here."), $(
			"<form/>", {
				action: 'add-comment',
				method: 'POST'
			}).append(
			$("<input/>", {
				type: 'text',
				id: 'vname',
				name: 'name'
				placeholder: 'Your Name'
			}),
			$("<input/>"
				type: 'text',
				id: 'vemail',
				name: 'email'
				placeholder: 'Your Email'
			}), $("<textarea/>", {
				rows: '5px'
				cols: '27px'
				type: 'text'
				id: 'vmsg'
				name: 'msg'
				placeholder: 'Copy'
			}), $("<br/>"), $("<input/>", {
				type: 'submit'
				id: 'submit', 
				value: 'Submit'
			})))
});