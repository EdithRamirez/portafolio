$(document).ready(function() {
	
	//posicion de seccion skills
	var posicionSkills = $('#skills').position().top;
	var height = $(window).height();
	
	ajustesIniciales();

	function ajustesIniciales() {
		$('section#sobreMi').css({'margin-top': height - 0 + 'px'});
	}

	$(document).on("scroll", function() {
		//calcula los pixeles que se hacen del scroll top 
		var	scrollTop = $(this).scrollTop();
		console.log(scrollTop);
		var pixeles = scrollTop / 70;
		//efecto blur de bg de fondo
		if(scrollTop < height) {
			$('#parallax').css({
				'-webkit-filter': 'blur(' + pixeles + 'px)',
				'background-position': 'center -' + pixeles * 10 + 'px'
			});
		}
		//efecto de las barras
		if (scrollTop > posicionSkills) {
			//skills
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},2000);
			});
		}
	});

	//efecto de mi nombre
	$('.intro').flipping_text({
		tickerTime: 40, // Define la rapidez con la que se escribe, el tiempo es en milisegundos
		customRandomChar: false, //Cadena de caracteres que se escribe en forma aleatoria: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		tickerCount: 10, //Controla cuantas veces se sustituyen los caracteres hasta visualizar el texto
		opacityEffect: true, //Añade un efecto al aparecer
		resetOnChange: false //Funcion de reserva cuando se desea que el texto detenga la animacion
	});

	//efectos de menu
	$('.navicon').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('navicon--active');
		$('.toggle').toggleClass('toggle--active');
	});
	
	//cierra el menu al darle un clic al enlace GM+200
	$('.menu').on('click' , function(){
		$('.navicon.navicon--active').trigger('click');	
	});
	
	//wow para efectos en seccion proyecto
	var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();
});