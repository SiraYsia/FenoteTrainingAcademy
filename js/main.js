jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Intro background carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'fadeOut',
    items: 1
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


  // Porfolio - uses the magnific popup jQuery plugin
  $('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 } }
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  //Google Map
  var get_latitude = $('#google-map').data('latitude');
  var get_longitude = $('#google-map').data('longitude');

  function initialize_google_map() {
    var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
    var mapOptions = {
      zoom: 14,
      scrollwheel: false,
      center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize_google_map);

});


document.addEventListener('DOMContentLoaded', function () {
  var menuItemsWithChildren = document.querySelectorAll('.menu-has-children');

  menuItemsWithChildren.forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleDropdown(this);
    });
  });

  document.addEventListener('click', function () {
    closeAllDropdowns();
  });

  function toggleDropdown(menuItem) {
    var subMenu = menuItem.querySelector('ul');
    closeAllDropdowns();
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.nav-menu ul').forEach(function (subMenu) {
      subMenu.style.display = 'none';
    });
  }
});

  window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });






    // JavaScript to handle mobile navigation toggle
// JavaScript to handle mobile navigation toggle and submenu visibility
function toggleNav() {
  var navLinks = document.querySelector('.navbar-links');
  navLinks.classList.toggle('active');

  var mobileNav = document.querySelector('.mobile-nav');
  mobileNav.style.display = (mobileNav.style.display === 'none' || mobileNav.style.display === '') ? 'block' : 'none';
}



  // Get the navigation bar element
  var navbar = document.querySelector('.navbar');

  // Get the offset position of the navigation bar
  var navbarOffset = navbar.offsetTop;

  // Function to handle scroll events
  function handleScroll() {
    if (window.pageYOffset >= navbarOffset) {
      // Add the 'fixed' class when scrolling down
      navbar.classList.add('fixed');
    } else {
      // Remove the 'fixed' class when scrolling back to the top
      navbar.classList.remove('fixed');
    }
  }

  // Listen for scroll events and call the handleScroll function
  window.addEventListener('scroll', handleScroll);




    // Function to close the banner
    function closeBanner() {
        document.getElementById('bannerContainer').style.display = 'none';
    }

    // Function to show the banner
    function showBanner() {
        document.getElementById('bannerContainer').style.display = 'block';
    }

    // Call the showBanner function on page load
    window.onload = showBanner;







  
    // Function to close the banner
    function closeBanner2() {
      document.getElementById('bannerContainer2').style.display = 'none';
  }

  // Function to show the banner
  function showBanner2() {
      document.getElementById('bannerContainer2').style.display = 'block';
  }

  // Call the showBanner function on page load
  window.onload = showBanner2;