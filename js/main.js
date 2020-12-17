alert('Улыбнись, и продолжим!');

/*btn*/

var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	var img = document.querySelector('.header_img');
	img.classList.add('rotateIn');
	document.querySelector('.header_content').classList.add('center');
	document.querySelector('.header_logo').classList.add('center');

	// var text = document.querySelector('header_content');
	// text.classList.add('center');
	// var center = document.querySelector('header_content');
	// center.style.textAlign = center;
	// document.querySelector('header_content').style.text - align = center;
}

// Зачем я обучаюсь

$(function () {
	$(window).scroll(function () {
		$('.lear_itm-left').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 550) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('.lear_itm-center').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 550) {
				$(this).addClass("fadeInUp");
			}
		});
	});
	$(window).scroll(function () {
		$('.lear_itm-right').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 550) {
				$(this).addClass("fadeInRight");
			}
		});
	});
})

// Я буду писать вам

$(function () {
	$(window).scroll(function () {
		$('.input_1').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 850) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input_2').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 750) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input_3').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 750) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input_4').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 750) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function () {
		$('.btn--last').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 750) {
				$(this).addClass("jackInTheBox");
			}
		});
	});
});