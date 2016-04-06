import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  category: DS.attr(),
  condition: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
