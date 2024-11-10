const courseDetails = {
    
  amr_course: {
    name: "American Red Cross (ARC) Courses:",
    price: 0.0,
    descriptionFile: "schedule_folder/descriptions/ara/amr_course.html",
    dates: [
    ],
  }, 

  bls_blended: {
    name: "ARC Basic Life Support-BL R.21",
    price: 65.00,
    descriptionFile: "schedule_folder/descriptions/ara/4.bls_blended.html",
    dates: [
      { "start": "2024-10-05", "end": "", "startTime": "10:00", "endTime": "12:00" },
      { "start": "2024-11-16", "end": "", "startTime": "10:00", "endTime": "12:00" }


    ],
  },

  cpr_blended_pediatric: {
    name: "ARC Adult And Pediatric First Aid/CPR/AED-BL-R.21 - BLENDED",
    price: 90.00,
    descriptionFile: "schedule_folder/descriptions/ara/1.cpr_blended_pediatric.html",
    dates: [
      { "start": "2024-09-22", "end": "", "startTime": "10:00", "endTime": "12:00" },
      { "start": "2024-10-05", "end": "", "startTime": "10:00", "endTime": "12:00" },
      { "start": "2024-10-06", "end": "", "startTime": "15:00", "endTime": "17:00" },
      { "start": "2024-10-13", "end": "", "startTime": "15:00", "endTime": "17:00" },
      { "start": "2024-10-20", "end": "", "startTime": "15:00", "endTime": "17:00" },
      { "start": "2024-10-27", "end": "", "startTime": "15:00", "endTime": "17:00" },
      { "start": "2024-11-16", "end": "", "startTime": "10:00", "endTime": "12:00" },
      { "start": "2024-11-23", "end": "", "startTime": "15:00", "endTime": "17:00" }

    ],
    
  },
  
  cpr_blended_first_aid: {
    name: "Adult First Aid/CPR/AED-BL-R.21 - BLENDED",
    price: 95.00,
    descriptionFile: "schedule_folder/descriptions/ara/1.cpr_blended_first_aid.html",
    dates: [
      "None"
    ],
  },
  
  
  cpr_blended_adult: {
    name: " Adult CPR/AED-BL-R.21  - BLENDED",
    price: 70.00,
    descriptionFile: "schedule_folder/descriptions/ara/1.cpr_blended_adult.html",
    dates: [
      "None"

    ],
  },
  
  
  cpr_session_first_aid_classroom: {
    name: "Adult First Aid/CPR/AED Classroom-R.21",
    price: 85.00,
    descriptionFile: "schedule_folder/descriptions/ara/temp.cpr_sessions_first_aid.html",
    dates: [
      { start: "2024-08-19", end: "", startTime: "09:00", endTime: "11:15" }
    ],
    
  },
  
  
  cpr_sessions_pediatric: {
    name: "Adult and Pediatric First Aid/CPR/AED Skills Session-R.21",
    price: 77.00,
    descriptionFile: "schedule_folder/descriptions/ara/3.cpr_sessions_pediatric.html",
    dates: [
        "None"
    ],
    
  },



  
  cpr_sessions_adult: {
    name: "Adult CPR/AED Skills Session-R.21",
    price: 37.00,
    descriptionFile: "schedule_folder/descriptions/ara/3.cpr_sessions_adult.html",
    dates: [
        "None"
    ],
    
  },
  

  



  bls_classroom: {
    name: " Basic Life Support-R.21 - CLASSROOM",
    price: 85.00,
    descriptionFile: "schedule_folder/descriptions/ara/4.bls_classroom.html",
    dates: [
      "None"
    ],
  },

  
  babysitter_classroom: {
    name: " Babysitter Training And Pediatric First Aid/CPR",
    price: 200.00,
    descriptionFile: "schedule_folder/descriptions/ara/5.babysitter_classroom.html",
    dates: [
      "None"
    ],
  },
  
  
  babysitter_training: {
    name: " Babysitters Training",
    price: 90.00,
    descriptionFile: "schedule_folder/descriptions/ara/5.babysitter_training.html",
    dates: [
      "None"
    ],
  },


  
  cpr1_virtual:{
    name:" Adult & Pediatric First Aid/CPR/AED Blended r.21 - VIRTUAL" ,
    price : 95.00,
    descriptionFile: "schedule_folder/descriptions/ara/cpr1_virtual.html",
    dates: [
      "None"
    ],
  
  }, 


  cpr2_virtual:{
    name:" Adult First Aid/CPR/AED Blended r.21 - VIRTUAL",
    price : 86.00,
    descriptionFile: "schedule_folder/descriptions/ara/cpr2_virtual.html",
    dates: [
      "None"
    ],
  
  },
  
  cpr_classroom_pediatric: {
    name: " Adult And Pediatric First Aid/CPR/AED-R.21 - CLASSROOM",
    price: 110.00,
    descriptionFile: "schedule_folder/descriptions/ara/2.cpr_classroom_pediatric.html",
    dates: [
        "None"
  
    ],
  },
  
  cpr_classroom_first_aid: {
    name: " Adult First Aid/CPR/AED-R.21 - CLASSROOM",
    price: 98.00,
    descriptionFile: "schedule_folder/descriptions/ara/2.cpr_classroom_first_aid.html",
    dates: [
      { start: "2024-08-13", end: "2024-08-13", startTime: "09:30", endTime: "13:30" },
      { start: "2024-08-14", end: "2024-08-14", startTime: "09:30", endTime: "13:30" }
        
  
    ],
  },
  cpr_classroom_adult: {
    name: " Adult CPR/AED-R.21 - CLASSROOM",
    price: 75.00,
    descriptionFile: "schedule_folder/descriptions/ara/2.cpr_classroom_adult.html",
    dates: [
        "None"
  
    ],
  },
  

  };
  
  
  function getFormattedDateInET(dateString) {
    // Parse the input date string
    const date = new Date(dateString);
  
    // Adjust for Eastern Time (New York) offset
    const etOffset = -5 * 60; // Eastern Time offset in minutes
    date.setMinutes(date.getMinutes() - etOffset);
  
    // Format the adjusted date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  
  fetch('schedule_folder/descriptions/description.html')
    .then(response => response.text())
    .then(descriptionHtml => {
        document.getElementById("description").innerHTML = descriptionHtml;
  
  
    })
    .catch(error => console.error("Error loading description:", error));
  
    fetch('schedule_folder/scams.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('scams').innerHTML = html;
    })
    .catch(error => console.error('Error fetching scams.html:', error));
  
  
    function redirectToConfirmation(course, date, startTime, endTime) {
      const selectedCourse = courseDetails[course];
      const confirmationDetails = {
          course: selectedCourse.name,
          price: selectedCourse.price.toFixed(2),
          date: date,
          startTime: startTime,
          endTime: endTime,
      };
  
      // Read the course description file content
      fetch(selectedCourse.descriptionFile)
          .then(response => response.text())
          .then(description => {
              // Redirect to confirmation page with selected course details and description as query parameters
              const queryString = Object.entries(confirmationDetails)
                  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                  .join("&");
  
              // Include the course description in the query parameters
              const fullQueryString = `${queryString}&description=${encodeURIComponent(description)}`;
  
              window.location.href = `confirmation.html?${fullQueryString}`;
          })
          .catch(error => console.error('Error fetching course description:', error));
  }
    
  


  document.addEventListener("DOMContentLoaded", function () {
    const courseButtonsContainer = document.getElementById("course-buttons-container");
  
    courseButtonsContainer.style.display = "flex";
    courseButtonsContainer.style.flexDirection = "column";
    courseButtonsContainer.style.width = "100%"; 
  
    // Keep track of currently open container
    let currentOpenContainer = null;
  
    function toggleCourseDetails(course, courseContainer) {
      const courseDetail = courseDetails[course];
      
      // If clicking the same container that's open, close it
      if (currentOpenContainer === courseContainer && courseContainer.style.display === "block") {
        courseContainer.style.display = "none";
        currentOpenContainer = null;
        return;
      }
  
      // Close previously open container
      if (currentOpenContainer) {
        currentOpenContainer.style.display = "none";
      }
  
      // Clear and populate the container
      courseContainer.innerHTML = "";
      
      const descriptionDiv = document.createElement("div");
      const datesDiv = document.createElement("div");
  
      // Fetch and set description
      fetch(courseDetail.descriptionFile)
        .then(response => response.text())
        .then(descriptionHtml => {
          descriptionDiv.innerHTML = descriptionHtml;
        })
        .catch(error => console.error("Error loading description:", error));
  
      // Add dates
      courseDetail.dates.forEach(dateObj => {
        const dateTimeString = `${dateObj.start}T${dateObj.startTime}`;
        const courseDate = new Date(dateTimeString);
        const now = new Date();
  
        if (now > courseDate) {
          return;
        }
  
        if (isNaN(courseDate)) {
          const dateButton = document.createElement("button");
          dateButton.innerHTML = "Please contact us to schedule a class.";
          dateButton.style.backgroundColor = "transparent";
          dateButton.style.color = "red";
          dateButton.style.padding = "8px 12px";
          dateButton.style.margin = "5px 0";
          dateButton.style.cursor = "pointer";
          dateButton.style.border = "1px solid #ddd";
          dateButton.style.borderRadius = "3px";
          dateButton.style.display = "block";
          dateButton.style.width = "100%";
          dateButton.style.textAlign = "left";
  
          dateButton.addEventListener("click", () => {
            window.location.href = "./contactus";
          });
  
          datesDiv.appendChild(dateButton);
        } else {
          const startTime = dateObj.startTime;
          const endTime = dateObj.endTime;
  
          const options = { timeZone: 'America/New_York' };
          const formattedDate = getFormattedDateInET(courseDate);
          const formattedStartTime = new Date(`2000-01-01T${startTime}`).toLocaleTimeString('en-US', options);
          const formattedEndTime = new Date(`2000-01-01T${endTime}`).toLocaleTimeString('en-US', options);
  
          const dateButton = document.createElement("button");
          dateButton.innerHTML = `${formattedDate} (${formattedStartTime} - ${formattedEndTime})`;
          dateButton.style.backgroundColor = "transparent";
          dateButton.style.color = "red";
          dateButton.style.padding = "8px 12px";
          dateButton.style.margin = "5px 0";
          dateButton.style.cursor = "pointer";
          dateButton.style.border = "1px solid #ddd";
          dateButton.style.borderRadius = "3px";
          dateButton.style.display = "block";
          dateButton.style.width = "100%";
          dateButton.style.textAlign = "left";
          dateButton.style.backgroundColor = "lightgreen";
          dateButton.style.color = "red";
  
          dateButton.addEventListener("click", () => {
            redirectToConfirmation(course, formattedDate, formattedStartTime, formattedEndTime);
          });
  
          datesDiv.appendChild(dateButton);
        }
      });
  
      // Style and show container
      courseContainer.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      courseContainer.style.borderRadius = "0";
      courseContainer.style.backgroundColor = "#f9f9f9";
      courseContainer.style.marginTop = "10px";
      courseContainer.style.padding = "15px";
  
      // Add content
      courseContainer.appendChild(descriptionDiv);
      descriptionDiv.style.fontSize = "16px";
      descriptionDiv.style.color = "#333";
      descriptionDiv.style.margin = "0 20px";
      descriptionDiv.style.marginBottom = "10px";
      descriptionDiv.style.textAlign = "justify";
  
      courseContainer.appendChild(datesDiv);
      courseContainer.style.display = "block";
  
      // Update current open container
      currentOpenContainer = courseContainer;
    }
  
    Object.keys(courseDetails).forEach((course, index) => {
      const courseButton = document.createElement("button");
      
      // Create a container for course name and price
      const buttonContent = document.createElement("div");
      buttonContent.style.display = "flex";
      buttonContent.style.justifyContent = "space-between";
      buttonContent.style.alignItems = "center";
      buttonContent.style.width = "100%";
  
      // Course name span
      const courseName = document.createElement("span");
      courseName.innerHTML = courseDetails[course].name;
  
  
      // Price tag span
      const priceWithDollar = "$" + courseDetails[course].price;
      const priceTag = document.createElement("span");
      if (index === 0 || index === 18) {
        priceTag.innerHTML = "";
      } else {
        priceTag.innerHTML = priceWithDollar || "";
      }
      priceTag.style.backgroundColor = "#4CAF50"; 
      priceTag.style.color = "white";
      priceTag.style.padding = "4px 8px";
      priceTag.style.borderRadius = "4px";
      priceTag.style.marginLeft = "10px";
      priceTag.style.fontSize = "0.9em";
      priceTag.style.fontWeight = "bold";
      priceTag.style.width = "50px";

      // Add both elements to button content
      buttonContent.appendChild(courseName);
      buttonContent.appendChild(priceTag);
      courseButton.appendChild(buttonContent);
  
      courseButton.style.backgroundColor = "transparent";
      courseButton.style.color = "#333";
      courseButton.style.padding = "10px 20px";
      courseButton.style.margin = "5px 0";
      courseButton.style.cursor = "pointer";
      courseButton.style.border = "1px solid #ddd";
      courseButton.style.borderRadius = "0px";
      courseButton.style.transition = "background-color 0.3s";
      courseButton.style.textAlign = "left";
      courseButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      courseButton.style.fontWeight = "bold";
      courseButton.style.width = "100%";
  
      // Apply color coding
      if (index === 0) courseName.style.color = "blue";
      if (index === 1 || index === 5) courseName.style.color = "purple";
      if (index === 18) courseName.style.color = "red";
      if (index === 19 || index === 20) courseName.style.color = "purple";
      if (index === 34) courseName.style.color = "blue";
  
      const container = document.createElement("div");
      container.style.display = "none";
      courseDetails[course].container = container;
  
      courseButton.addEventListener("mouseenter", () => {
        courseButton.style.backgroundColor = "#f2f2f2";
      });
  
      courseButton.addEventListener("mouseleave", () => {
        courseButton.style.backgroundColor = "transparent";
      });
  
      courseButton.addEventListener("click", (event) => {
        event.preventDefault();
        toggleCourseDetails(course, container);
      });
  
      courseButtonsContainer.appendChild(courseButton);
      courseButtonsContainer.appendChild(container);
    });
  });
  
  
  //OTHER JS COPY just for the heading
  
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
      function closeBanner2() {
        document.getElementById('bannerContainer2').style.display = 'none';
    }
  
    // Function to show the banner
    function showBanner2() {
        document.getElementById('bannerContainer2').style.display = 'block';
    }
  
    // Call the showBanner function on page load
    window.onload = showBanner2;