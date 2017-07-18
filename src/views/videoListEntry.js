var VideoListEntryView = Backbone.View.extend({

/*  initialize: function() {
    this.render();
  },*/

  render: function() {
    console.log('this.$el', this.$el, 'this', this);
    console.log('videoListEntry render ran');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
