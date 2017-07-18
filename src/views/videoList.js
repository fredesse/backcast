var VideoListView = Backbone.View.extend({


  render: function() {
    console.log('videoList render ran');

    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.map(function(video) {
      var vleView = new VideoListEntryView({ model: video });
      return vleView.render();
      // VideoListEntryView.prototype.render();
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
