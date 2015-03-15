//initializing boolean flags
var element1_isActive = false,
    element2_isActive = false,
    element3_isActive = false,
    element4_isActive = false,
    element5_isActive = false;

$(window).load(function() {
	initialize();
	//click event handler for element #1 in shows list
	$("#e1").click(function() {
		//If the element is not clicked, show 'arrow section' with animation
		if (element1_isActive == false) {
			$("#upd_eventPicture").css("background", "url('images/upd_event1.jpg')");
			$("#upd_eventDetailsTitle").html("יום שלישי 2/5/2015");
			$("#upd_eventDetailsContent").html("זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה  טקסט בעברית זה סתם  זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית");
			$("#clickEffectArrowPopUp1").css("display", "inline"); // make the object visible
			$("#clickEffectArrowPopUp1").animate({
				"right" : "+=27px"
			}, "slow");
			element1_isActive = true;

			//if this element was previosly clicked, hide it with animation
			if (element2_isActive) {
				element2_isActive = false;
				$("#clickEffectArrowPopUp2").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp2").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element3_isActive) {
				element3_isActive = false;
				$("#clickEffectArrowPopUp3").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp3").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element4_isActive) {
				element4_isActive = false;
				$("#clickEffectArrowPopUp4").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp4").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element5_isActive) {
				element5_isActive = false;
				$("#clickEffectArrowPopUp5").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp5").css("display", "none");
				});

			}

		}

	});

	//click event handler for element #2 in shows list
	$("#e2").click(function() {
		//If the element is not clicked, show 'arrow section' with animation
		if (element2_isActive == false) {
			$("#upd_eventPicture").css("background", "url('images/upd_event2.jpg')");
						$("#upd_eventDetailsTitle").html("יום שישי 31/5/2015");
			$("#upd_eventDetailsContent").html("זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית");
			$("#clickEffectArrowPopUp2").css("display", "inline");// make the object visible
			$("#clickEffectArrowPopUp2").animate({
				"right" : "+=27px"
			}, "slow");
			element2_isActive = true;

			//if this element was previosly clicked, hide it with animation
			if (element1_isActive) {
				element1_isActive = false;
				$("#clickEffectArrowPopUp1").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp1").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element3_isActive) {
				element3_isActive = false;
				$("#clickEffectArrowPopUp3").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp3").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element4_isActive) {
				element4_isActive = false;
				$("#clickEffectArrowPopUp4").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp4").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element5_isActive) {
				element5_isActive = false;
				$("#clickEffectArrowPopUp5").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp5").css("display", "none");
				});
			}
		}
	});

	//click event handler for element #3 in shows list
	$("#e3").click(function() {
		//If the element is not clicked, show 'arrow section' with animation
		if (element3_isActive == false) {
			$("#upd_eventPicture").css("background", "url('images/upd_event3.jpg')");
						$("#upd_eventDetailsTitle").html("יום חמישי 14/6/2015");
			$("#upd_eventDetailsContent").html("זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית");
			$("#clickEffectArrowPopUp3").css("display", "inline");// make the object visible
			$("#clickEffectArrowPopUp3").animate({
				"right" : "+=27px"
			}, "slow");
			element3_isActive = true;

			//if this element was previosly clicked, hide it with animation
			if (element1_isActive) {
				element1_isActive = false;
				$("#clickEffectArrowPopUp1").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp1").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element2_isActive) {
				element2_isActive = false;
				$("#clickEffectArrowPopUp2").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp2").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element4_isActive) {
				element4_isActive = false;
				$("#clickEffectArrowPopUp4").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp4").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element5_isActive) {
				element5_isActive = false;
				$("#clickEffectArrowPopUp5").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp5").css("display", "none");
				});
			}
		}
	});

	//click event handler for element #4 in shows list
	$("#e4").click(function() {
		//If the element is not clicked, show 'arrow section' with animation
		if (element4_isActive == false) {
			$("#upd_eventPicture").css("background", "url('images/upd_event4.jpg')");
						$("#upd_eventDetailsTitle").html("יום רביעי 7/7/2015");
			$("#upd_eventDetailsContent").html("זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית בעברית זה סתם טקסט בעברית");
			$("#clickEffectArrowPopUp4").css("display", "inline");// make the object visible
			$("#clickEffectArrowPopUp4").animate({
				"right" : "+=27px"
			}, "slow");
			element4_isActive = true;

			//if this element was previosly clicked, hide it with animation
			if (element1_isActive) {
				element1_isActive = false;
				$("#clickEffectArrowPopUp1").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp1").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element2_isActive) {
				element2_isActive = false;
				$("#clickEffectArrowPopUp2").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp2").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element3_isActive) {
				element3_isActive = false;
				$("#clickEffectArrowPopUp3").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp3").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element5_isActive) {
				element5_isActive = false;
				$("#clickEffectArrowPopUp5").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp5").css("display", "none");
				});
			}
		}
	});

	//click event handler for element #5 in shows list
	$("#e5").click(function() {
		//If the element is not clicked, show 'arrow section' with animation
		if (element5_isActive == false) {
			$("#upd_eventPicture").css("background", "url('images/upd_event5.jpg')");
						$("#upd_eventDetailsTitle").html("יום שני 15/8/2015");
			$("#upd_eventDetailsContent").html("זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית");
			$("#clickEffectArrowPopUp5").css("display", "inline"); // make the object visible
			$("#clickEffectArrowPopUp5").animate({
				"right" : "+=27px"
			}, "slow");
			element5_isActive = true;

			//if this element was previosly clicked, hide it with animation
			if (element1_isActive) {
				element1_isActive = false;
				$("#clickEffectArrowPopUp1").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp1").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element2_isActive) {
				element2_isActive = false;
				$("#clickEffectArrowPopUp2").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp2").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element3_isActive) {
				element3_isActive = false;
				$("#clickEffectArrowPopUp3").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp3").css("display", "none");
				});

				//if this element was previosly clicked, hide it with animation
			} else if (element4_isActive) {
				element4_isActive = false;
				$("#clickEffectArrowPopUp4").animate({
					"right" : "-=27px"
				}, "slow", function() {
					$("#clickEffectArrowPopUp4").css("display", "none");
				});
			}
		}
	});
});

//This function is called at window load time to initialize the view
function initialize() {
	$("#upd_eventPicture").css("background", "url('images/upd_event1.jpg')");
				$("#upd_eventDetailsTitle").html("יום שלישי 2/5/2015");
			$("#upd_eventDetailsContent").html("זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית זה סתם טקסט בעברית");
	$("#clickEffectArrowPopUp1").css("display", "inline"); // make the object visible
	$("#clickEffectArrowPopUp1").animate({
		"right" : "+=27px"
	}, "slow");
	element1_isActive = true;
}
