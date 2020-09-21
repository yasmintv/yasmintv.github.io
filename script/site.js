var lerper = 0;
var current_progression = 0;
var step = 0.05;
var step_interval = 15;
$(document).ready(function () {

	COLLISION_WITH.push("a");
	(new eSheep()).Start();

	$("#twitchBtn").mouseover(function () {
		// $("body").css("background-color", "#b481ff");
		lerp_to($("body").css("background-color"), "#b481ff");
	});
	$("#twitterBtn").mouseover(function () {
		// $("body").css("background-color", "#78c2ef");
		lerp_to($("body").css("background-color"), "#78c2ef");
	});
	$("#instaBtn").mouseover(function () {
		// $("body").css("background-color", "#fbc77f");
		lerp_to($("body").css("background-color"), "#fbc77f");
	});

	$("#discordBtn").mouseover(function () {
		// $("body").css("background-color", "#97a6da");
		lerp_to($("body").css("background-color"), "#97a6da");
	});
	$("#ytBtn").mouseover(function () {
		// $("body").css("background-color", "#fd7e7e");
		lerp_to($("body").css("background-color"), "#fd7e7e");
	});
	$(".btn-sns").mouseleave(function () {
		// $("body").css("background-color", "#ffe4c7");
		lerp_to($("body").css("background-color"), "#ffe4c7");
	});

	$("#contactBtn").mouseover(function () {
        $("#contactIcon").removeClass("fa-envelope-o");
        $("#contactIcon").addClass("fa-envelope");
    });

    $("#contactBtn").mouseout(function () {
        $("#contactIcon").removeClass("fa-envelope");
        $("#contactIcon").addClass("fa-envelope-o");
    });
});

function lerp_to(fromColor, toColor) {
	// old
	// $("body").css("background-color", toColor);
	fromColor = rgb2hex(fromColor);
	// new
	if (lerper !== 0) {
		window.clearInterval(lerper);
		lerper = 0;
	}
	// console.log("new code");
	lerper = window.setInterval(function () {
		if (current_progression >= 1) {
			window.clearInterval(lerper);
			lerper = 0;
			current_progression = 0;
		}
		else {
			// console.log($("body").css("background-color"));
			current_progression += step;
			$("body").css("background-color", lerpColor(fromColor, toColor, current_progression));
			// console.log(toColor);
		}
	}, step_interval);
}

/**
 * A linear interpolator for hexadecimal colors
 * @param {String} a
 * @param {String} b
 * @param {Number} amount
 * @example
 * // returns #7F7F7F
 * lerpColor('#000000', '#ffffff', 0.5)
 * @returns {String}
 */

function lerpColor(a, b, amount) {

	var ah = parseInt(a.replace(/#/g, ''), 16),
		ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
		bh = parseInt(b.replace(/#/g, ''), 16),
		br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
		rr = ar + amount * (br - ar),
		rg = ag + amount * (bg - ag),
		rb = ab + amount * (bb - ab);

	return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

function rgb2hex(rgb) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}