Meteor.startup(function() {
  var dom = document.querySelectorAll('script[type="text/inject-data"]');
  var injectedDataString = dom && dom.length > 0 ? dom[0].innerHTML : "";
  InjectData._data = InjectData._decode(injectedDataString) || {};
});

InjectData.getData = function(key, callback) {
  Meteor.startup(function() {
    callback(InjectData._data[key]);
  });
};