// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function() {
    //instantiate the play count on the SongModel
    this.set('playCount', 0);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);

  },

  removeSong: function(){
    this.trigger('dequeue', this);
  }
});
