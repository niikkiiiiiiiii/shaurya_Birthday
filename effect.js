// Global audio reference - accessible everywhere
var backgroundAudio = null;
var wasMusicPlayingBeforeVideo = false;

$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		// Initialize background audio
		backgroundAudio = $('.song')[0];
		
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		if(!backgroundAudio) {
			backgroundAudio = $('.song')[0];
		}
        backgroundAudio.play();
        isMusicPlaying = true;
        // Update music control button
        $('#music_control').find('.music-text').text('Stop Music');
        $('#music_control').css('background', 'linear-gradient(135deg, #FFB6C1 0%, #FF6B9D 50%, #C4515C 100%)');
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		// First show lighting animation
		$('.fuego').fadeIn('slow');
		
		// After lighting animation, show cake.png image
		setTimeout(function() {
			$('.cake').fadeOut('slow');
			$('#cake_image').fadeIn('slow');
		}, 1500);
		
		// Then show cut cake button
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#cake_cut').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#cake_cut').click(function(){
		// Hide cake.png and show cut cake.png
		$('#cake_image').fadeOut('slow');
		setTimeout(function() {
			$('#cut_cake_image').fadeIn('slow');
			
			// Start celebration animation
			startCelebration();
		}, 500);
		
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});
	
	function startCelebration() {
		// Show celebration container
		$('#celebration_container').css('display', 'block');
		
		// Trigger confetti animations with staggered timing
		$('.confetti').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.addClass('confetti-fall');
			}, index * 50);
		});
		
		// Trigger party poppers with staggered timing
		$('.party-popper-1').addClass('popper-blast-1');
		setTimeout(function() {
			$('.party-popper-2').addClass('popper-blast-2');
		}, 150);
		setTimeout(function() {
			$('.party-popper-3').addClass('popper-blast-3');
		}, 300);
		setTimeout(function() {
			$('.party-popper-4').addClass('popper-blast-4');
		}, 450);
		setTimeout(function() {
			$('.party-popper-5').addClass('popper-blast-1');
		}, 600);
		setTimeout(function() {
			$('.party-popper-6').addClass('popper-blast-2');
		}, 750);
		
		// Hide celebration after animation
		setTimeout(function() {
			$('#celebration_container').fadeOut(1000);
		}, 3500);
	}
	
	// Message control functionality
	var isPaused = false;
	var currentMessageIndex = 1;
	var msgLoopTimeout = null;
	var autoPlayTimeout = null;
	var totalMessages = 0;

	function updateButtonText() {
		var btnText = $('#pause_resume').find('.btn-text');
		// Keep button width fixed to prevent position changes
		if(isPaused) {
			// When paused, show resume text
			btnText.fadeOut(200, function() {
				$(this).text('OK Now Ready to be Overlove Again').fadeIn(200);
			});
			$('#pause_resume').css('background', 'linear-gradient(135deg, #FFB6C1 0%, #FF6B9D 50%, #C4515C 100%)');
		} else {
			// When playing, show pause text
			btnText.fadeOut(200, function() {
				$(this).text('Happiness Overloaded! Press and Take a Breath').fadeIn(200);
			});
			$('#pause_resume').css('background', 'linear-gradient(135deg, #FF6B9D 0%, #C4515C 50%, #FFB6C1 100%)');
		}
	}

	// Music control functionality
	var isMusicPlaying = false;

	// Initialize music control button
	if(backgroundAudio) {
		backgroundAudio.addEventListener('play', function() {
			isMusicPlaying = true;
			$('#music_control').find('.music-text').text('Stop Music');
			$('#music_control').css('background', 'linear-gradient(135deg, #FFB6C1 0%, #FF6B9D 50%, #C4515C 100%)');
		});
		backgroundAudio.addEventListener('pause', function() {
			isMusicPlaying = false;
			$('#music_control').find('.music-text').text('Music');
			$('#music_control').css('background', 'linear-gradient(135deg, #FF6B9D 0%, #C4515C 50%, #FFB6C1 100%)');
		});
	}

	$('#music_control').click(function(){
		// Always ensure backgroundAudio is initialized
		if(!backgroundAudio) {
			backgroundAudio = $('.song')[0];
		}
		
		// If still not found, try to find it in the DOM
		if(!backgroundAudio) {
			var audioElement = document.querySelector('.song');
			if(audioElement) {
				backgroundAudio = audioElement;
			}
		}
		
		if(backgroundAudio) {
			if(!backgroundAudio.paused) {
				// Stop music
				backgroundAudio.pause();
				isMusicPlaying = false;
				$('#music_control').find('.music-text').text('Music');
				$('#music_control').css('background', 'linear-gradient(135deg, #FF6B9D 0%, #C4515C 50%, #FFB6C1 100%)');
			} else {
				// Start music
				backgroundAudio.play().then(function() {
					isMusicPlaying = true;
					$('#music_control').find('.music-text').text('Stop Music');
					$('#music_control').css('background', 'linear-gradient(135deg, #FFB6C1 0%, #FF6B9D 50%, #C4515C 100%)');
				}).catch(function(error) {
					console.log('Error playing music:', error);
				});
			}
		}
	});

	function showMessage(index) {
		if(index < 1 || index > totalMessages) {
			return;
		}
		
		// Stop all animations
		$('.message p').stop(true, false);
		clearTimeout(msgLoopTimeout);
		clearTimeout(autoPlayTimeout);
		
		// Hide all messages
		$('.message p').fadeOut('fast');
		
		// Show current message
		setTimeout(function() {
			$("p:nth-child("+index+")").fadeIn('slow');
			currentMessageIndex = index;
			
			// Auto play next if not paused
			if(!isPaused && index < totalMessages) {
				autoPlayTimeout = setTimeout(function() {
					if(!isPaused) {
						showMessage(index + 1);
					}
				}, 2000);
			}
		}, 300);
	}

	function showPreviousMessage() {
		if(currentMessageIndex > 1) {
			showMessage(currentMessageIndex - 1);
		}
	}

	function showNextMessage() {
		if(currentMessageIndex < totalMessages) {
			showMessage(currentMessageIndex + 1);
		}
	}

	$('#pause_resume').click(function(){
		isPaused = !isPaused;
		updateButtonText();
		
		if(!isPaused && currentMessageIndex < totalMessages) {
			// Resume auto play
			autoPlayTimeout = setTimeout(function() {
				if(!isPaused) {
					showMessage(currentMessageIndex + 1);
				}
			}, 2000);
		} else {
			// Pause - stop auto play
			clearTimeout(autoPlayTimeout);
		}
	});

	$('#prev_message').click(function(){
		showPreviousMessage();
		// If auto-playing, reset the timer
		if(!isPaused && currentMessageIndex < totalMessages) {
			clearTimeout(autoPlayTimeout);
			autoPlayTimeout = setTimeout(function() {
				if(!isPaused) {
					showMessage(currentMessageIndex + 1);
				}
			}, 2000);
		}
	});

	$('#next_message').click(function(){
		showNextMessage();
		// If auto-playing, reset the timer
		if(!isPaused && currentMessageIndex < totalMessages) {
			clearTimeout(autoPlayTimeout);
			autoPlayTimeout = setTimeout(function() {
				if(!isPaused) {
					showMessage(currentMessageIndex + 1);
				}
			}, 2000);
		}
	});

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.container').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
			// Start animations
			animateGiftPage();
		});
	});
	
	function animateGiftPage() {
		// Animate birthday title
		$('.birthday-title').css('opacity', 0).animate({opacity: 1}, 1000);
		setTimeout(function() {
			$('.birthday-name').css('opacity', 0).animate({opacity: 1}, 1000);
		}, 500);
		setTimeout(function() {
			$('.age-display').addClass('age-animate');
		}, 1000);
		
		// Animate gift sections
		$('.gift-section').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 0).css('transform', 'translateY(30px)').animate({
					opacity: 1
				}, 800).css('transform', 'translateY(0)');
			}, 1500 + (index * 200));
		});
		
		// Start floating compliments
		$('.compliment').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.addClass('compliment-float');
			}, 2000 + (index * 300));
		});
	}
	
	// Letter section click handler
	$('#letter_section').click(function(){
		$('#gift_page').fadeOut('slow').promise().done(function(){
			$('#letter_page').fadeIn('slow');
			startLetterAnimation();
		});
	});
	
	// Back to gifts buttons
	$('#back_to_gifts_letter').click(function(){
		$('#letter_page').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
		});
	});
	
	$('#back_to_gifts_song').click(function(){
		// Pause video
		var songVideo = $('.song-video')[0];
		if(songVideo) {
			songVideo.pause();
		}
		
		// Resume background music if it was playing
		if(wasMusicPlayingBeforeVideo && backgroundAudio) {
			backgroundAudio.play();
		}
		
		$('#song_page').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
		});
	});
	
	$('#back_to_gifts_video').click(function(){
		// Pause all videos
		$('.gallery-video').each(function() {
			var video = this;
			if(video) {
				video.pause();
			}
		});
		
		// Resume background music if it was playing
		if(wasMusicPlayingBeforeVideo && backgroundAudio) {
			backgroundAudio.play();
		}
		
		$('#video_page').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
		});
	});
	
	$('#back_to_gifts_memories').click(function(){
		$('#memories_page').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
		});
	});
	
	// Song section click handler
	$('#song_section').click(function(){
		// Pause background music if playing
		if(backgroundAudio && !backgroundAudio.paused) {
			wasMusicPlayingBeforeVideo = true;
			backgroundAudio.pause();
		} else {
			wasMusicPlayingBeforeVideo = false;
		}
		
		$('#gift_page').fadeOut('slow').promise().done(function(){
			$('#song_page').fadeIn('slow');
			// Play video
			setTimeout(function() {
				var songVideo = $('.song-video')[0];
				if(songVideo) {
					songVideo.play();
				}
			}, 500);
		});
	});
	
	// Video section click handler
	$('#video_section').click(function(){
		// Pause background music if playing
		if(backgroundAudio && !backgroundAudio.paused) {
			wasMusicPlayingBeforeVideo = true;
			backgroundAudio.pause();
		} else {
			wasMusicPlayingBeforeVideo = false;
		}
		
		$('#gift_page').fadeOut('slow').promise().done(function(){
			$('#video_page').fadeIn('slow');
			animateVideos();
		});
	});
	
	function animateVideos() {
		// Show first video immediately
		$('.video-item').first().addClass('visible');
		
		// Use Intersection Observer for scroll animations and auto-play
		if ('IntersectionObserver' in window) {
			var videoObserver = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						$(entry.target).addClass('visible');
						// Get current video and button
						var currentVideo = $(entry.target).find('.gallery-video')[0];
						var $currentBtn = $(entry.target).find('.video-play-pause-btn');
						
						// Pause all other videos when one comes into view
						$('.gallery-video').each(function() {
							if (this !== currentVideo && !this.paused) {
								this.pause();
								var $btn = $(this).siblings('.video-play-pause-btn');
								$btn.removeClass('playing');
							}
						});
						
						// Auto-play current video when it comes into view
						if (currentVideo && currentVideo.paused) {
							currentVideo.play().then(function() {
								$currentBtn.addClass('playing');
							}).catch(function(error) {
								console.log('Auto-play prevented:', error);
								// If auto-play is blocked, show play button
								$currentBtn.removeClass('playing');
							});
						}
					} else {
						// Pause video when it leaves viewport
						var video = $(entry.target).find('.gallery-video')[0];
						var $btn = $(entry.target).find('.video-play-pause-btn');
						if (video && !video.paused) {
							video.pause();
							$btn.removeClass('playing');
						}
					}
				});
			}, {
				threshold: 0.6,
				rootMargin: '0px'
			});
			
			$('.video-item').each(function() {
				videoObserver.observe(this);
			});
			
			// Auto-play first video immediately
			setTimeout(function() {
				var firstVideo = $('.video-item').first().find('.gallery-video')[0];
				var $firstBtn = $('.video-item').first().find('.video-play-pause-btn');
				if (firstVideo && firstVideo.paused) {
					firstVideo.play().then(function() {
						$firstBtn.addClass('playing');
					}).catch(function(error) {
						console.log('Auto-play prevented for first video:', error);
					});
				}
			}, 500);
		} else {
			// Fallback for older browsers
			$('.video-item').each(function(index) {
				var $this = $(this);
				setTimeout(function() {
					$this.addClass('visible');
				}, index * 300);
			});
		}
		
		// Start floating compliments
		$('.video-compliment').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, 1000 + (index * 300));
		});
		
		// Start floating flowers
		$('.video-flower').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, 1500 + (index * 250));
		});
		
		// Play/Pause button handlers
		$('.video-play-pause-btn').click(function(e) {
			e.stopPropagation();
			var videoNum = $(this).data('video');
			var $videoItem = $('.video-item[data-video="' + videoNum + '"]');
			var video = $videoItem.find('.gallery-video')[0];
			var $btn = $(this);
			
			if (video.paused) {
				// Pause all other videos
				$('.gallery-video').each(function() {
					if (this !== video && !this.paused) {
						this.pause();
						$(this).siblings('.video-play-pause-btn').removeClass('playing');
					}
				});
				// Play current video
				video.play().then(function() {
					$btn.addClass('playing');
				}).catch(function() {
					console.log('Video play failed');
				});
			} else {
				video.pause();
				$btn.removeClass('playing');
			}
		});
		
		// Hide play button when video is playing
		$('.gallery-video').on('play', function() {
			$(this).siblings('.video-play-pause-btn').addClass('playing');
		});
		
		$('.gallery-video').on('pause', function() {
			$(this).siblings('.video-play-pause-btn').removeClass('playing');
		});
	}
	
	// Memories section click handler
	$('#memories_section').click(function(){
		$('#gift_page').fadeOut('slow').promise().done(function(){
			$('#memories_page').fadeIn('slow');
			animateMemories();
		});
	});
	
	// Timeline section click handler
	$('#timeline_section').click(function(){
		$('#gift_page').fadeOut('slow').promise().done(function(){
			$('#timeline_page').fadeIn('slow');
			animateTimeline();
		});
	});
	
	$('#back_to_gifts_timeline').click(function(){
		$('#timeline_page').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
		});
	});
	
	// Best gift section click handler
	$('#best_gift_section').click(function(){
		$('#gift_page').fadeOut('slow').promise().done(function(){
			$('#best_gift_page').fadeIn('slow');
			animateBestGift();
		});
	});
	
	$('#back_to_gifts_best').click(function(){
		$('#best_gift_page').fadeOut('slow').promise().done(function(){
			$('#gift_page').fadeIn('slow');
		});
	});
	
	// Reveal gift button
	$('#reveal_gift_btn').click(function(){
		$(this).fadeOut('slow', function(){
			$('#gift_reveal_content').fadeIn('slow', function(){
				// Animate image appearing slowly
				$('#gift_image').css('opacity', 0).css('transform', 'scale(0.5)').animate({
					opacity: 1
				}, 2000).css('transform', 'scale(1)');
				
				// Animate message lines one by one
				setTimeout(function(){
					$('.gift-message-line').each(function(index){
						var $this = $(this);
						setTimeout(function(){
							$this.css('opacity', 0).css('transform', 'translateY(20px)').animate({
								opacity: 1
							}, 600).css('transform', 'translateY(0)');
						}, index * 500);
					});
				}, 1500);
			});
		});
	});
	
	function animateBestGift() {
		// Start floating elements
		$('.best-gift-compliment, .best-gift-flower').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, 500 + (index * 200));
		});
	}
	
	function animateTimeline() {
		// Animate timeline items
		$('.timeline-item').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 0).css('transform', 'translateY(50px)').animate({
					opacity: 1
				}, 800).css('transform', 'translateY(0)');
			}, index * 300);
		});
		
		// Start floating elements
		$('.timeline-compliment, .timeline-flower').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, 1500 + (index * 200));
		});
	}
	
	function animateMemories() {
		// Animate images appearing one by one
		$('.memory-item').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.addClass('visible');
			}, index * 150); // Stagger the appearance
		});
		
		// Start floating compliments
		$('.mem-compliment').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, 1000 + (index * 300));
		});
		
		// Start floating flowers
		$('.mem-flower').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, 1500 + (index * 250));
		});
		
		// Animate transition section after all regular images
		var totalMemoryItems = $('.memory-item').length;
		setTimeout(function() {
			$('.memories-transition').css('opacity', 0).css('transform', 'translateY(30px)').animate({
				opacity: 1
			}, 1000).css('transform', 'translateY(0)');
		}, totalMemoryItems * 150 + 500);
		
		// Animate childhood photos after transition
		setTimeout(function() {
			$('.childhood-item').each(function(index) {
				var $this = $(this);
				setTimeout(function() {
					$this.addClass('visible');
					// Animate floating hearts for this item
					$this.find('.floating-heart').each(function(heartIndex) {
						var $heart = $(this);
						setTimeout(function() {
							$heart.css('opacity', 1);
						}, heartIndex * 200);
					});
				}, index * 400); // Stagger childhood items more
			});
		}, totalMemoryItems * 150 + 2000);
	}
	
	function startLetterAnimation() {
		// Start floating elements
		$('.letter-compliment, .letter-flower').each(function(index) {
			var $this = $(this);
			setTimeout(function() {
				$this.css('opacity', 1);
			}, index * 200);
		});
		
		var letterLines = $('.letter-line');
		var currentIndex = 0;
		
		function showNextLine() {
			if(currentIndex < letterLines.length) {
				$(letterLines[currentIndex]).addClass('show');
				currentIndex++;
				setTimeout(showNextLine, 800); // Delay between each line
			}
		}
		
		// Start animation after a short delay
		setTimeout(showNextLine, 500);
	}
});




//alert('hello');