// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function(){
    if(this.length >= 1){
      this.at(0).play();
    }
  },

  dequeue: function(){
    this.shift();
  }

});