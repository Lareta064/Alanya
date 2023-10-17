document.addEventListener("DOMContentLoaded", function (){
	$(function () {
		$('.lazy').Lazy();
	});
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
		autoplay: true,
		
		animateOut: 'fadeOut',
	});

	$(function () {
		let teamSlider = $('.team-slider');
		teamSlider.owlCarousel({
			// loop: true,
			autoplay: true,
			autoplaySpeed: 700,
			items: 1,
			animateOut: 'fadeOut',
			onInitialized: counter, 
			onTranslated: counter 
		});

		function counter(event) {
			var element = event.target; 
			var items = event.item.count; 
			var item = event.page.index + 1; 
			$('#team-counter').html("" + item + " /" + items)
		}
		$(".team-slider-prev").click(function () {
			$('.team-slider').trigger("prev.owl.carousel", [600]);
		});

		$(".team-slider-next").click(function () {
			teamSlider.trigger("next.owl.carousel", [600]);
		});
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
	$('.news-slider').owlCarousel({
		items:1,
		dots:true,
		animateOut: 'fadeOut',
		autoplay: true,
		margin:30,
		loop:true
	})
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
	
	/*====fotorama =====*/
	
	$('.fotorama').fotorama({
		width: 1120,
		maxwidth: '100%',
		// ratio: 16 / 9,
		allowfullscreen: false,
		nav: 'thumbs',
		navwidth:'100%',
		thumbwidth: 157,
		thumbheight: 94
	});

	const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
	mySelectBlocks.forEach((item, i) => {
		const mySelect = item.querySelector('.mySelect-input');
		const mySelectInput = item.querySelector('.selectValue');
		let mySelectOptions = item.querySelectorAll('.mySelect-options');
		const mySelectIcon = item.querySelector('.mySelect-icon');
		const mySelecDrop = item.querySelector('.mySelect-drop');

		mySelect.addEventListener('click', () => {

			if (mySelecDrop.classList.contains('active')) {
				mySelecDrop.classList.remove('active');
				mySelectIcon.classList.remove('active');
				mySelect.classList.remove('open');


			} else {
				mySelecDrop.classList.add('active');
				mySelectIcon.classList.add('active');
				mySelect.classList.add('open');
			}

		});
		for (let item of mySelectOptions) {
			item.addEventListener('click', () => {
				mySelecDrop.classList.remove('active');
				mySelectIcon.classList.remove('active');
				mySelectInput.value = item.value;

			});
		}

	});

	/*======показать расширенный поиск */
	const advSearchBtn = document.querySelector('#advanced-search-btn');
	
	
	if (advSearchBtn){
		const advForm = document.querySelector('#advanced-form');
		
		advSearchBtn.addEventListener('click',()=>{
			advForm.classList.toggle('open');
		});
	}


	jQuery(($) => {

		const section = $(".sticky-menu-section");
		const nav = $("#sticky-menu");
		const navHeight = nav.outerHeight(); // получаем высоту навигации

		// поворот экрана
		window.addEventListener("orientationchange", () => {
			navHeight = nav.outerHeight();
		}, false);

		$(window).on("scroll", () => {
			const position = $(this).scrollTop();

			section.each(function () {
				const top = $(this).offset().top - navHeight - 5,
					bottom = top + $(this).outerHeight();

				if (position >= top && position <= bottom) {
					nav.find("a").removeClass("active");
					section.removeClass("active");
					
					$(this).addClass("active");
					nav.find('a[href="#' + $(this).attr('id') +'"]').addClass("active");
					
				}
			});
		});

		nav.find("a").on("click", function () {
			const id = $(this).attr("href");

			$("html, body").animate({
				scrollTop: $(id).offset().top - navHeight
			}, 487);

			return false;
		});

	});


	/* =============== modal с атрибутом frame-modal ===============*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');
	if (modalFrames.length > 0) {
		const modalFramesClose = document.querySelectorAll('[frame-close]');

		for (let item of modalFramesOpen) {
			item.addEventListener('click', function (e) {
				for (let item of modalFrames) {
					item.classList.remove('visible');

					bodyEl.classList.remove('lock');
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for (let frame of modalFrames) {
					const frameAttr = frame.getAttribute('frame-modal');
					if (frameAttr == itemAttr) {
						frame.classList.add('visible');
						bodyEl.classList.add('lock');

					}
				}
			});
		}
		/*==  закрыть модалки  frame-modal по клику на крестик ======*/
		for (let item of modalFramesClose) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('lock');


			});
		}
		/*=============== закрыть модалки по клику вне ===============*/
		for (let frame of modalFrames) {
			frame.addEventListener('click', function (e) {
				if (e.target === e.currentTarget) {
					this.classList.remove(`visible`);
					bodyEl.classList.remove('lock');
				}
			});
		}
	}

   //===============страница калькулятора =================
	const switchBlocks = document.querySelectorAll('.switch-block');
	if (switchBlocks.length > 0) {
		for (let item of switchBlocks) {
			const switchToggle = item.querySelector('input');
			const switchContentOf = item.querySelector('.switch-content_of');
			const switchContentOn = item.querySelector('.switch-content_on');
			if (!switchToggle.checked) {
				switchContentOf.classList.add('active');
				switchContentOn.classList.remove('active');
			} else {
				switchContentOf.classList.remove('active');
				switchContentOn.classList.add('active');
			}
			item.addEventListener('click', () => {
				if (!switchToggle.checked) {
					switchContentOf.classList.add('active');
					switchContentOn.classList.remove('active');
				} else {
					switchContentOf.classList.remove('active');
					switchContentOn.classList.add('active');
				}
			})
		}

	}
	const okvedItems = document.querySelectorAll('.okved-list__header');
	if (okvedItems.length > 0) {
		for (let item of okvedItems)
			item.addEventListener('click', function () {
				if (this.nextElementSibling) {
					if (this.classList.contains('open')) {
						this.nextElementSibling.classList.remove('visible');
						this.classList.remove('open');
					} else {
						this.nextElementSibling.classList.add('visible');
						this.classList.add('open');
					}
				}

			})
	}

	/*кнопка вверх */
	$("#back-top").hide();


	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
				$('.header-top').removeClass('fixed');
			}
		});

	});
});
