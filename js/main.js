

$(function () {

	/*Filter
	---------------------------*/

	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		if (cat == 'All') {
			$("[data-cat]").removeClass('hide');
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});

	/*Modals
	----------------------------------*/

	const modalCall = $('[data-modal]');
	const modalClose = $('[data-close]');
	const worksSlider = $('[data-slider="slick"]');

	modalCall.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$('body').addClass('no-scroll');

		setTimeout(function () {
			$(modalId).find('.modal_dialog').css({
				transform: 'rotateX(0)'/*'scale(1)'*/
			});
		}, 200);

		worksSlider.slick('setPosition');

	});

	modalClose.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.find('.modal_dialog').css({
			transform: 'rotateX(90deg)'/*'scale(0)'*/
		});

		setTimeout(function () {
			modalParent.removeClass('show');
			$('body').removeClass('no-scroll');
		}, 200);

	});

	$('.modal').on('click', function (event) {
		let $this = $(this);
		$this.find('.modal_dialog').css({
			transform: 'rotateX(90deg)'/*'scale(0)'*/
		});

		setTimeout(function () {
			$this.removeClass('show');
			$('body').removeClass('no-scroll');
		}, 200);
	});

	$('.modal_dialog').on('click', function (event) {
		event.stopPropagation();
	});

	/*Slider https://kenwheeler.github.io/slick/
	------------------------------------------*/

	worksSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});

	$('.prev').on('click', function (event) {
		event.preventDefault();

		let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

		currentSlider.slick('prev');
	});
	$('.next').on('click', function (event) {
		event.preventDefault();

		let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

		currentSlider.slick('next');
	});

	/*MobileNav
	----------------------------------------------------*/

	const navToggle = $('#navToggle');
	const nav = $('#nav');

	navToggle.on('click', function (event) {
		event.preventDefault();

		nav.toggleClass('show');

	});

});