// var camera, scene, renderer,
//     geometry, material, mesh;

// init();
// animate();

// function init() {
//     //stats = new Stats();
//     //stats.setMode(0);
//     //stats.domElement.style.position = 'absolute';
//     //stats.domElement.style.left = '0px';
//     //stats.domElement.style.top = '0px';
//     //document.body.appendChild(stats.domElement);

//     clock = new THREE.Clock();

//     renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize( window.innerWidth, window.innerHeight );

//     scene = new THREE.Scene();

//     camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
//     camera.position.z = 1000;
//     scene.add( camera );

//     geometry = new THREE.CubeGeometry( 200, 200, 200 );
//     material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
//     mesh = new THREE.Mesh( geometry, material );
//     //scene.add( mesh );
//     cubeSineDriver = 0;

//     textGeo = new THREE.PlaneGeometry(200,100);
//     THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
//     textTexture = THREE.ImageUtils.loadTexture('assets/img/textbanner.png');
//     textMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
//     text = new THREE.Mesh(textGeo,textMaterial);
//     text.position.z = 800;
//     // scene.add(text);

//     light = new THREE.DirectionalLight(0xffffff,0.5);
//     light.position.set(-1,0,1);
//     scene.add(light);

//     smokeTexture = THREE.ImageUtils.loadTexture('assets/img/Smoke-Element.png');
//     smokeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: smokeTexture, transparent: true});
//     smokeGeo = new THREE.PlaneGeometry(300,300);
//     smokeParticles = [];


//     for (p = 0; p < 15; p++) {
//         var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
//         particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
//         particle.rotation.z = Math.random() * 360;
//         scene.add(particle);
//         smokeParticles.push(particle);
//     }
//     if($('#smoke').length !== 0) {
//         document.getElementById('smoke').appendChild( renderer.domElement );
//     }

// }

// function animate() {

//     // note: three.js includes requestAnimationFrame shim
//     //stats.begin();
//     delta = clock.getDelta();
//     requestAnimationFrame( animate );
//     evolveSmoke();
//     render();
//     //stats.end();
// }

// function evolveSmoke() {
//     var sp = smokeParticles.length;
//     while(sp--) {
//         smokeParticles[sp].rotation.z += (delta * 0.2);
//     }
// }

// function render() {

//     mesh.rotation.x += 0.005;
//     mesh.rotation.y += 0.01;
//     cubeSineDriver += .01;
//     mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
//     renderer.render( scene, camera );

// }

var App = {
    scrollid: function() {
        jQuery(function() {
            jQuery.scrollify({
                section: ".section-page",
                sectionName: "section-name",
                scrollbars: true,
                setHeights: true,
                //overflowScroll: true,
                updateHash: true,
                touchScroll: true,
                before: function(index, sections) {
                    var sno = index + 1;
                    var sno1 = index;
                    $(".section-page").removeClass("section-active");
                    $(".left-nav ul li").removeClass("active");
                    $(".section-page:nth-child(" + sno + ")").addClass("section-active");
                    $(".left-nav ul li:nth-child(" + sno1 + ")").addClass("active");
                    if (index == 0 || index == 4) {
                        $('.left-nav').hide();
                    } else {
                        $('.left-nav').show();
                    }
                },
            });
            if (jQuery.scrollify.currentIndex() != 0) {
                jQuery('.border_site').addClass('border-white');
            } else {
                jQuery('.border_site').removeClass('border-white');
            }
        });
        jQuery(window).scroll(function() {
            if (jQuery.scrollify.currentIndex() == $('.section-page').length - 1) {
                jQuery('.border_site').removeClass('border-white');
                jQuery('#menu-left').removeClass('menu-white');
                jQuery('#contact-right').removeClass('contact-white');
            } else if (jQuery.scrollify.currentIndex() != 0) {
                jQuery('.border_site').addClass('border-white');
                jQuery('#menu-left').addClass('menu-white');
                jQuery('#contact-right').addClass('contact-white');

            } else {
                jQuery('.border_site').removeClass('border-white');
                jQuery('#menu-left').removeClass('menu-white');
                jQuery('#contact-right').removeClass('contact-white');
            }
        })
    },
    menushow: function() {
        jQuery('.button_menu').click(function() {
            jQuery('.wrapper_site').toggleClass('showmenu')
            jQuery('#menu-left').toggleClass('showmenu')
            jQuery('.menu_site').toggleClass('showmenu')
            jQuery('.border_site').toggleClass('showmenu')
        });
    },
    contactshow: function() {
        jQuery('.contacticon').click(function() {
            jQuery('.wrapper_site').toggleClass('showcontact')
            jQuery('#contact-right').toggleClass('showcontact')
            jQuery('.menu_site').toggleClass('showcontact')
            jQuery('.border_site').toggleClass('showcontact')
        });
    },
    galleryeffect: function() {
        $('.row-gallery .view').hover(function() {
            $('.row-gallery .view').toggleClass("anim");
            $(this).toggleClass('hover');
            var toggleImg = $(this).data('bg');
            $(toggleImg).toggleClass('active');
        });
    },
    slider_whycycle: function() {
        // $("#whycycle-slider").waterwheelCarousel({
        //     horizon: 180,
        //     horizonOffset: -10,
        //     horizonOffsetMultiplier: .3,
        //     separation: 280,
        //     edgeFadeEnabled: true,
        //     sizeMultiplier: 0.7,
        //     opacityMultiplier: 0.9,
        //     forcedImageWidth: 400,
        //     forcedImageHeight: 340
        // });
    },
    map: function() {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 11,
                disableDefaultUI: true,
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP,
                },
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            { "saturation": 36 },
                            { "color": "#000000" },
                            { "lightness": 40 }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            { "visibility": "on" },
                            { "color": "#000000" },
                            { "lightness": 16 }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            { "visibility": "off" }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 20 }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 17 },
                            { "weight": 1.2 }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 20 }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 21 }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 17 }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 29 },
                            { "weight": 0.2 }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 18 }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 16 }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            { "color": "#000000" },
                            { "lightness": 19 }
                        ]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            { "color": "#000000" }, { "lightness": 17 }
                        ]
                    }
                ]
            };

            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                icon: 'assets/img/map-marker.png',
                map: map,
                title: 'Tattoo!'
            });
            var mapElement1 = document.getElementById('header-map');

            // Create the Google Map using our element and options defined above
            var map1 = new google.maps.Map(mapElement1, mapOptions);

            // Let's also add a marker while we're at it
            var marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                icon: 'assets/img/map-marker.png',
                map: map1,
                title: 'Tattoo!'
            });
        }
    }
};
$(document).ready(function() {
    App.scrollid();
    App.menushow();
    App.contactshow();
    App.galleryeffect();
    App.map();
    App.slider_whycycle();
    $('.left-nav ul li a').click(function() {
        $.scrollify.move("#" + $(this).data('id'));
        console.log($(this).data('id'));
    });

    $('.tattoos .section_four .box_st4').click(function() {
        $('.tattoos .section_four .step_content').removeClass('step_show');
        $('.tattoos .section_four .box_st4').removeClass('box_active');
        $(this).addClass('box_active');
        $('#step-' + $(this).data('id')).addClass('step_show');
    });

    $('.tattoos .section_six .questions').click(function() {
        $('.tattoos .section_six div').removeClass('questions_show')
        $(this).toggleClass('questions_show', 'questions');
    });

    $('.tattoos .section_five .apparen').click(function() {
        $('.tattoos .section_five .apparen_item').removeClass('appa_show');
        $('.tattoos .section_five .apparen').removeClass('appa_active')
        $(this).addClass('appa_active')
        $('#apparen-' + $(this).data('id')).addClass('appa_show');
    });

    $('.tattoos .section_eight .cover_ups').click(function() {
        $('.tattoos .section_eight .cover_ups').removeClass('coverup_show');
        $(this).toggleClass('coverup_show', 'cover_ups');
    });

    $('.piercings .section_second .bg_introduction').click(function() {
        $('.piercings .section_second .bg_introduction').removeClass('introduction_show');
        $(this).toggleClass('introduction_show', 'bg_introduction');
    });

    $('.piercings .section_third .bg_process').click(function(){
        $('.piercings .section_third .process-item').removeClass('show_process');
         $('.piercings .section_third .bg_process').removeClass('bg_active');
        $(this).addClass('bg_active');
        $('.piercings .section_third #process-' + $(this).data('id')).addClass('show_process');
    });

    $('.piercings .section_four .bg_aftercare').click(function(){
        $(this).toggleClass('aftercare_show','.bg_aftercare');
    });

    $('.left_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.right_slider',
        focusOnSelect: true,
        vertical: true,
        nextArrow: '<img class="slick-next" src="assets/img/arrow-up.png" />',
        prevArrow: '<img class="slick-prev" src="assets/img/arrow-down.png" />',
    });
    $('.right_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.left_slider',
        arrows: false
    });
    $('.cover_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<img class="slick-next" src="assets/img/arrow-right.png" />',
        prevArrow: '<img class="slick-prev" src="assets/img/arrow-left.png" />',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


}); {
    // setTimeout(() => document.body.classList.add('render'), 60);
    // const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
    // const total = navdemos.length;
    // const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
    // const navigate = (linkEl) => {
    //     document.body.classList.remove('render');
    //     document.body.addEventListener('transitionend', () => window.location = linkEl.href);
    // };
    // navdemos.forEach(link => link.addEventListener('click', (ev) => {
    //     ev.preventDefault();
    //     navigate(ev.target);
    // }));
    // document.addEventListener('keydown', (ev) => {
    //     const keyCode = ev.keyCode || ev.which;
    //     let linkEl;
    //     if ( keyCode === 37 ) {
    //         linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
    //     }
    //     else if ( keyCode === 39 ) {
    //         linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
    //     }
    //     else {
    //         return false;
    //     }
    //     navigate(linkEl);
    // });
    imagesLoaded('.glitch__img', { background: true }, () => {
        document.body.classList.remove('loading');
        document.body.classList.add('imgloaded');
    });
}