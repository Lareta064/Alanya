document.addEventListener("DOMContentLoaded", function (){
	/*==== header slider ======= */
	$('.header-slider').owlCarousel({
		items:1,
		dots: true,
		loop: true,
		smartSpeed: 800,
		autoplay: true,
		
		animateOut: 'fadeOut',
	});
    /*==== main-menu ========= */
	// $(function () {
	// 	var Accordion = function (el, multiple) {
	// 		this.el = el || {};
	// 		this.multiple = multiple || false;

	// 		// Variables
	// 		var link = this.el.find('.main-menu-link');
	// 		// Eventos
	// 		link.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	// 	}

	// 	Accordion.prototype.dropdown = function (e) {
	// 		var $el = e.data.el;
	// 		$this = $(this),
	// 			$next = $this.next();

			
	// 		$next.slideToggle();
			
	// 		$this.parent().toggleClass('open');

			
	// 		if (!e.data.multiple) {
	// 			$el.find('.main-menu__sub').not($next).slideUp().parent().removeClass('open');
	// 		}

	// 	}
		
	// 	let accordion = new Accordion($('#main-menu-list'), false);
	// });
});
