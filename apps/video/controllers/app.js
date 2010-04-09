// ==========================================================================
// Project:   VideoApp.appController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals VideoApp */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
VideoApp.appController = SC.Object.create(
/** @scope VideoApp.appController.prototype */ {

  playPause: function() {
    var pb=VideoApp.mainPage.mainPane.videoPlayer.canvasView;
    pb.playPause();
  },
  
  play: function() {
    var pb=VideoApp.mainPage.mainPane.videoPlayer.canvasView;
    pb.play();
  },
  
  pause: function() {
    var pb=VideoApp.mainPage.mainPane.videoPlayer.canvasView;
    pb.stop();
  },
  
  theatherMode: function() {
    
    var mp=VideoApp.mainPage.mainPane;
    var cl = mp.get('classNames');
    if(cl.indexOf('theather_mode')!=-1){
      cl.pop();
      mp.set('classNames', cl);
    }
    else{
      mp.set('classNames', cl.concat('theather_mode'));
    }
    mp.displayDidChange();
  }
  
}) ;
