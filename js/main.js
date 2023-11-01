
	$('.contributor-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
	    // startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});


	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });




const myModal = new bootstrap.Modal(document.getElementById('myModal'), options);

const exampleEl = document.getElementById('example');
const tooltip = new bootstrap.Tooltip(exampleEl, options);
