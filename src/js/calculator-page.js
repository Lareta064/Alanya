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
		autoplay: true,
		
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
/*===переход между страницами формы калькулятора ====== */
	const calculatorPages  = document.querySelectorAll('[data-page]');
	if (calculatorPages.length > 0){
		const pageBtns = document.querySelectorAll('[data-btn]');
		console.log(pageBtns);
		for (let item of pageBtns){
			item.addEventListener('click', function(){
				console.log(item.dataset);
				const btnData = item.getAttribute('data-btn');
				
				for (let i = 0; i < calculatorPages.length; i++){
					calculatorPages[i].classList.remove('visible');
				}
				for (let page of calculatorPages ){
					const pageData = page.getAttribute('data-page');
					if (btnData == pageData){
						page.classList.add('visible');
					}
				}
			});
		}
		
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