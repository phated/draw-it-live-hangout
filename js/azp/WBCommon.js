var doGfxTouchStart = function(evt){
 	doGfxMouseDown(evt.changedTouches[0]);
};

var doGfxTouchEnd = function(evt){
 	doGfxMouseUp(evt.changedTouches[0]);
};

var doGfxTouchMove = function(evt){
  evt.preventDefault();
 	doGfxMouseMove(evt.changedTouches[0]);
};