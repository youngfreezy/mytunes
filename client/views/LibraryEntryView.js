// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist"><b><%= artist %></b></td><td><%= title %></td><td><b><%= playCount %></b></td>'),

  events: {
    'click': function() {
      this.model.enqueue();      
    }
  },

  render: function(){
    debugger;
    return this.$el.html(this.template(this.model.attributes));
  }

});
