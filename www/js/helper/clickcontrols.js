/* Controls touch events, so user won't click a button if the user has moved! */

function ClickControl(_args){
	if(typeof(_args)==='undefined')return false;

	this.selector = _args.selector;
	this.childSelector = _args.childSelector;
	this.callback = _args.callback;
	this.customEvent = typeof(_args)==='object'&&_args.customEvent ? _args.customEvent : 'touchend';
	this.hasMoved = false;

	var _self = this;

	var _start = function(){
		if(_self.customEvent!=='touchend'){
			if(typeof(_self.childSelector) !== 'undefined'){
				$(_self.selector).on(_self.customEvent,_self.childSelector,function(e){ _self.onCustomEvent(e,$(this)); });
			}else{
				$(_self.selector).on(_self.customEvent,function(e){ _self.onCustomEvent(e,$(this)); });
			}
			return true;
		};

		if(typeof(_self.childSelector) !== 'undefined'){
			$(_self.selector).on('touchstart touchmove '+_self.customEvent,_self.childSelector,function(e){ _self.checkIfTouchMoved(e,$(this)); });
		}else{
			$(_self.selector).on('touchstart touchmove '+_self.customEvent,function(e){ _self.checkIfTouchMoved(e,$(this)); });
		}
	};

	_start();

	return this;

};
ClickControl.prototype.trigger = function(){
	if(this.childSelector==='undefined'){
		$(this.selector).trigger(this.customEvent);
	}else{
		$(this.selector+' '+this.childSelector).trigger(this.customEvent);
	}
};

ClickControl.prototype.onCustomEvent = function(e,jq){
	if(this.callback){ this.callback.call($(jq),e); };
};

ClickControl.prototype.checkIfTouchMoved = function(e,jq){
	e.preventDefault();

	if(e.type==='touchstart'){ this.hasMoved = false; return false;}else
	if(e.type==='touchmove'){ this.hasMoved = true; return false;}else
	if(e.type===this.customEvent&&!this.hasMoved){
		if(this.callback){ this.callback.call($(jq),e); };
		this.hasMoved = false;
	}

	this.hasMoved = false;
	return false;
};