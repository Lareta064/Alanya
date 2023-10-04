document.addEventListener("DOMContentLoaded", function (){

	/*============= open/close mob menu ===============*/
	const menuToggle = document.querySelector('#menu-toggle');

	const mobileMenu = document.querySelector('#header-menu');


	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener('click', function (e) {
			e.stopPropagation();

			if (this.classList.contains('active')) {

				this.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			} else {
				this.classList.add('active');
				mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});
		mobileMenu.addEventListener('click', function () {
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			bodyEl.classList.remove('lock');
		})
		/*======== закрывать моб меню при ресайзе экрана ====== */
		window.addEventListener('resize', function () {
			if (this.innerWidth > 767) {
				if (mobileMenu.classList.contains('active')) {
					menuToggle.classList.remove('active');
					mobileMenu.classList.remove('active');
					bodyEl.classList.remove('lock');
				}
			}
		});
	}
	/*==== header slider ======= */
	$('.header-slider').owlCarousel({
		items:1,
		dots: true,
		loop: true,
		smartSpeed: 800,
		// autoplay: true,
		
		animateOut: 'fadeOut',
	});
    /*==== main-menu ========= */
	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			// Variables
			var link = this.el.find('.main-menu-link');
			// Eventos
			link.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
		}

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;
			$this = $(this),
				$next = $this.next();

			
			$next.slideToggle();
			
			$this.parent().toggleClass('open');

			
			if (!e.data.multiple) {
				$el.find('.main-menu__sub').not($next).slideUp().parent().removeClass('open');
			}

		}
		
		let accordion = new Accordion($('#main-menu-list'), false);
	});
});
