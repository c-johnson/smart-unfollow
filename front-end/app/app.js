import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

$.ajax("http://localhost:3000/hello", function (data) {
  console.log(data);
}).then(function(data) {
  console.log(data);
});

loadInitializers(App, config.modulePrefix);

export default App;
