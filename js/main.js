//alert('Привет мир!');
//var(let) - переменная;
//= - присвоение
// var a = 10; //числа без ''
// var b = 'Hello'; //строки
// var c = true / false; //пулевые значения
//alert(b);

//a = prompt('100-90=?')
// if (a == 10) {    /* если true*/
// 	alert('А ты не плох!');
// }
// else {       /*если другое значение*/
// 	alert('ups!')
// }
// for (var i = 0; i < 5; i++) {
// 	alert(i);
// }

/*Обьект*/
// var user = {
// 	'name': 'Jon',
// 	'surname': 'Jones',
// 	'age': '25'
// }
// alert(user.age);

/*Массив*/
// var mas = ['Jon', 'Jones', 25];
// alert(mas[1]);

/*Функция*/
// function doMagic(a, b) {
// 	alert(a + b);
// }
// doMagic(2, 2); /*вызов функции*/

/*btn*/

var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	var img = document.querySelector('.header_img');
	img.classList.add('rotateIn');
	// img.classList.add('rotateInDownLeft');
	// img.style.width = 0;
	document.querySelector('.header_content').classList.add('center');

	// var text = document.querySelector('header_content');
	// text.classList.add('center');
	// var center = document.querySelector('header_content');
	// center.style.text - align = center;
	// document.querySelector('header_content').style.text - align = center;
}

// Зачем я обучаюсь

$(function () {
	$(window).scroll(function () {
		$('.lear_itm-left').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 450) {
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
			if (imagePos < topOfWindow + 450) {
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
			if (imagePos < topOfWindow + 450) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input_2').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 450) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input_3').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 450) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input_4').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 450) {
				$(this).addClass("fadeInRight");
			}
		});
	});
	$(window).scroll(function () {
		$('.btn--last').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 450) {
				$(this).addClass("jackInTheBox");
			}
		});
	});
});