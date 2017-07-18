var Videos = Backbone.Collection.extend({

  model: Video,

  trigger: function() {
    var vlView = new VideoListView({ collection });
    console.log({collection});
    console.log('collection', JSON.stringify(collection, null, 2));
    vlView.render();
  }

});
