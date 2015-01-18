var myPlayer = myPlayer || {};
myPlayer._currentSound = null;
var clickId = null;

myPlayer.setup = function(){
  $('#player button').on('click', myPlayer.play);
};

myPlayer.play = function(ev) {
  ev.preventDefault();
  console.log('clicked id' + ev.currentTarget.id);
  clickId = ev.currentTarget.id;
  var sound = myPlayer.getSound(clickId);
  sound.play();
  myPlayer._currentSound = null;
};

myPlayer.getSound = function(clickId){
  if (!myPlayer._currentSound) {
   myPlayer._currentSound = soundManager.createSound({
    id: clickId,
    url: 'sounds/' + clickId  + '.wav'
  });
 }
 return myPlayer._currentSound;
};

soundManager.setup({
  url: '/swf/',
  preferFlash: true,
  onready: myPlayer.setup 
});


