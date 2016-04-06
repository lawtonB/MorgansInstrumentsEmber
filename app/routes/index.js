import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('instrument');
  },
  actions: {
  saveInstrument(params) {
    var newInstrument = this.store.createRecord('instrument', params);
    newInstrument.save();
    this.transitionTo('index');
  },
  destroyInstrument(instrument) {
    instrument.destroyRecord();
    this.transitionTo('index');
  },
  update(instrument, params) {
    instrument.save();
    this.transitionTo('index');
  }
}
});
