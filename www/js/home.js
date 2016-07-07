
var homeView = (function(){
	"use strict";
	
	var settings = {},
		_pageTransitions = null,
		_id = 'homeView',
		_clickControls = {},
		_swipeCarousel = {},
		_orbCarousel = null,
		_ajaxTimeout = null,
		_inView = false;


	settings.accountButtonClicked = new Event(_id);
	settings.selectionClicked = new Event(_id);
	settings.logoutButtonClicked = new Event(_id);

	if(ClickControl){
		_clickControls["account"] = new ClickControl({selector:'#home',childSelector:'.mp3-header .icon-right.account-icon',callback:function(e){
			settings.accountButtonClicked.notify();
		}});
		_clickControls["logout"] = new ClickControl({selector:'#home',childSelector:'.mp3-header .icon-right.logoutbutton',callback:function(e){
			settings.logoutButtonClicked.notify();
		}});
		_clickControls["orb"] = new ClickControl({selector:'#home',childSelector:'.orb:not(.orb-center)',callback:function(e){
			var _sID = $(this).attr('data-id');
			settings.selectionClicked.notify({id:_sID});
		}});
	};

	if(SwipeCarousel){
		_swipeCarousel["orbs"] = new SwipeCarousel('#home .orbs',{
			onCarouselChange:function(dir){
				if(!_orbCarousel)return false;
				
				if(dir === 'right'){
					_orbCarousel.prev();
				}else{
					_orbCarousel.next();
				}

				var _id = $('#home .orb.active').attr('data-id');

				$('.orb-text-item, .orb-desc-item').removeClass('active');
				$('.orb-text-item[data-id="'+_id+'"], .orb-desc-item[data-id="'+_id+'"]').addClass('active');
			}
		});
	}


	settings.start = function(){
		_pageTransitions =  new PageTransitions({
			el:'#home',
			transition:'left'
		});
		_orbCarousel = new orbRotation($('#home > .content > .section-selection > .orbs'),{
			mm:$('#home .orb.mm'),
			ls:$('#home .orb.ls'),
			qz:$('#home .orb.qz'),
			mw:$('#home .orb.mw')
		}, $('#home .orb.orb-center'));
	};

	settings.showLogOutButton = function(){
		$('#home .mp3-header .icon-right').removeClass('account-icon').addClass('logoutbutton');
	};
	settings.showLoginButton = function(){
		$('#home .mp3-header .icon-right').removeClass('logoutbutton').addClass('account-icon');
	};

	settings.show = function(callback,args){
		_inView = true;
		$('#home, .trans-overlay').addClass('active');
		args = (!$.isEmptyObject(args) && args&&typeof(args.dir)!=='undefined') ? args.dir : 'left';
		_pageTransitions.in(args,null,function(){
			$('.trans-overlay').removeClass('active');
			if(typeof(callback)==='function'){ callback(); };
		});
	};

	settings.hide = function(callback,args){
		_inView = false;
		args = (!$.isEmptyObject(args) && args&&typeof(args.dir)!=='undefined') ? args.dir : 'left';
		_pageTransitions.out(args,null,function(){
			$('#home').removeClass('active');
			if(typeof(callback)==='function'){ callback(); };
		});
	};

	settings.showLoader = function(){
		$('.disable-overlay').addClass('show');
	};

	settings.hideLoader = function(){
		$('.disable-overlay').removeClass('show');
	};

	return settings;
}());

var homeController = (function(){
	"use strict";

	var settings = {},
		_inView = false,
		_view = homeView;

	globalEvent.attach("app:ready",function(args){
		// initialise now that the app is ready.
		settings.start();
	});

	globalEvent.attach("home:show",function(args){
		settings.show(false,args);
	});

	globalEvent.attach("user:loggedin",function(args){
		_view.showLogOutButton();
	});

	globalEvent.attach("user:loggedout",function(args){
		_view.showLoginButton();
	});

	_view.accountButtonClicked.attach(function(sender, args){
		// check permissions and show account / login
		settings.hide(false,{dir:'right'});
		globalEvent.notify("login:show");
		
	});

	_view.logoutButtonClicked.attach(function(sender, args){
		globalEvent.notify("user:logout");
	});

	_view.selectionClicked.attach(function(sender, args){
		if(typeof(args)!=='object' || typeof(args.id)!=='string'){
			debug&&console.log('id not defined, dont do anything');
			return false;
		};

		switch(args.id){
			case 'matchmaker':
			globalEvent.notify('matchmakercat1:show');
			settings.hide(false,{dir:'right'});
			break;

			case 'quizzes':
			globalEvent.notify('quizzes:show');
			settings.hide(false,{dir:'right'});
			break;

			case 'lessons':
			globalEvent.notify('lessons:show');
			settings.hide(false,{dir:'right'});
			break;

			case 'mywines':
			globalEvent.notify("permission:canShowMyWines",{
				callback:function(e){

				if(!e.value){
					debug&&console.log('cannot show!');
					globalEvent.notify("messages:restrictedNoInternet");
					return false;
				};

				globalEvent.notify('mywines:show');
				settings.hide(false,{dir:'right'});
				return true;
			}});
			break;

			default:
			debug&&console.log('There is no id matching a selection view.');
			return false;
			break;
		
		};
	});

	settings.start = function(){
		_view.start();
	};

	settings.hide = function(callback,args){
		_inView = false;
		_view.hide(function(){
			if(typeof(callback)==='function'){ callback(); };
		},args);
	};

	settings.show = function(callback,args){
		_inView = true;
		_view.showLoader();
		_view.show(function(){
			_view.hideLoader();
			if(typeof(callback)==='function'){ callback(); };
		},args);
	};

	return settings;
}());