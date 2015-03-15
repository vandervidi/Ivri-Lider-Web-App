var updatesData,
selectedElement,
    sHTML;

$(window).load(function() {
	$.ajax({
		type : "GET",
		url : "includes/json/updates.json",
		success : function(data) {
			updatesData = data;
			getUpdates();
		},
		error : function(objRequest, errortype) {
			console.log("Failed reading Json file... ");
		}
	});
});

function getUpdates() {
	console.log(updatesData);
	$.each(updatesData.updates, function(key, val) {	


		sHTML = "<article class='listItems' id='"+ val.id+"'><section id='imageHolder' style='background: url("+val.img+") no-repeat;'><section class='redO'></section>"+ "</section><section id='ivContentHolder'><section id='itemListTitle'>"
		 + val.title + "</section><section id='updateContent'>" + val.content + "</section></section><div class='clear'></div></article>";
		$("#rightList").append(sHTML);
	});
	
	$("#rightList > article").click(function(){
		
		selectedElement = $(this).attr('id');
		$.each(updatesData.updates, function(key, val) {
			if(selectedElement == val.id){
				$("#videoBox").css("display", "block");
				$("#player").attr("src", val.link);
				$("#videoBoxTitle").html(val.title);
				
			}
			
		});
	});
}



