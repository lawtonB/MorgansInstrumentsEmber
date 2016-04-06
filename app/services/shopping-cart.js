import Ember from 'ember';

export default Ember.Service.extend({
  instruments: [],

  add(instrument) {
    this.get('instruments').addObject(instrument);
  }
});
