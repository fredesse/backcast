var Videos = Backbone.Collection.extend({

  model: Video,

  trigger: function() {
    var collection = new Videos();
    var vlView = new VideoListView({ collection });
    vlView.render();
  },

  select: function() {
    this.trigger('select', this);
  }

});
