import DS from "ember-data";
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  handle: DS.attr(),
  avi: DS.attr()
});
