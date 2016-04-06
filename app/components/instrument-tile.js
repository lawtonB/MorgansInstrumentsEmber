import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(instrument) {
      if (confirm('delete listing?')) {
        this.sendAction('destroyInstrument', instrument);
      }
    }
  }
});
