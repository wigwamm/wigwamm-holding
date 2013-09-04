if (Meteor.isClient) {
  Template.invite.heading = function () {
    return "Wigwamm";
  };

  /* #### Invite #### */
  Template.invite.events({
  	'click button' : function (e) {
  		// Focus on email 
  		$(e.currentTarget).addClass('active');
  		$('#invite .email').focus();
  		
  		setTimeout(function() {
  			$('#invite form > p').addClass('active');
  		}, 300);
  	},
  	'blur .email' : function (e) {
		  $('#invite form > p').removeClass('active');
		
  		setTimeout(function() {
  			$('button').removeClass('active');
  		}, 300);
  	},
  	'click a' : function (e) {
  		e.preventDefault();
  		
  		$('html, body').animate({ 
  			scrollTop: $(window).height() 
  		}, 600);
  	}
  });
  
  // Use backstretch on image.
  Template.invite.invokeAfterLoad = function() {
  	Meteor.defer(function() {
  		$('#invite').backstretch('images/background.jpg');
  		// Email is focussed by default.
  		$('.email').blur();
  	});
  };
  
  
  /* #### Info #### */
  Template.info.invokeAfterLoad = function() {
  	Meteor.defer(function() {
  		var evt = document.createEvent('UIEvents');
  		evt.initUIEvent('resize', true, false, window, 0);
  		window.dispatchEvent(evt);
  		$('html, body').animate({
  			scrollTop: 0
  		}, 0);
  	});
  };
  
  /* #### About #### */
  Template.about.events({
  	'click button' : function (e) {
  		// Focus on email 
  		$(e.currentTarget).addClass('active');
  		$('#about .email').focus();
  		
  		setTimeout(function() {
  			$('#about form > p').addClass('active');
  		}, 300);
  	},
  	'blur .email' : function (e) {
		$('#about form > p').removeClass('active');
		
  		setTimeout(function() {
  			$('#about button').removeClass('active');
  		}, 300);
  	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}