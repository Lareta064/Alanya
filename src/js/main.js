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
	$('.invest-projects-slider').owlCarousel({
		items: 1.1,
		dots: false,
		// loop: true,
		smartSpeed: 800,
		nav: true,
		navText: ['<svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM91 7L1 7V9L91 9V7Z"  /></svg > ', '<svg width="92" height="16" viewBox="0 0 92 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M91.7071 8.7071C92.0976 8.31657 92.0976 7.68341 91.7071 7.29289L85.3431 0.928925C84.9526 0.5384 84.3195 0.538401 83.9289 0.928925C83.5384 1.31945 83.5384 1.95261 83.9289 2.34314L89.5858 7.99999L83.9289 13.6568C83.5384 14.0474 83.5384 14.6805 83.9289 15.0711C84.3195 15.4616 84.9526 15.4616 85.3431 15.0711L91.7071 8.7071ZM1 9L91 8.99999L91 6.99999L1 7L1 9Z" /></svg>'],
		margin:10,
		responsive: {
			424: {
				items: 1.2,
				
			},
			550: {
				items: 1.5,

			},		
			768: {
				items: 2,
				margin: 30,
    		},
			992: {
				items: 2.2,
			},
			1365: {
				items: 2.5,
			},
			1600: {
				items: 3,

			},
			2400: {
				items: 4,

			},
		}
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

	/*футер в зоне видимости */
	// Создаем новый observer (наблюдатель)
	let observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			
			if (entry.isIntersecting == true){
				
				document.querySelector('#header-menu').classList.add('hide')
			}else{
				
				document.querySelector('#header-menu').classList.remove('hide')
			}
		});
	});
	
	let el = document.querySelector('#footer');
	observer.observe(el);
	
});
