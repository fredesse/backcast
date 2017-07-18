var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.$('.video-list-entry-title').on('change', this.model.select(), this);
  },

  render: function() {
    // $('.video-list-entry-title').click(function() {
    //   this.model.select();
    // });
    // console.log(1, this.$('.video-list-entry-title'));

    // console.log('this.$el', this.$el, 'this', this);
    // console.log('videoListEntry render ran');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
