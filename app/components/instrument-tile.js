import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    delete(instrument) {
      if (confirm('delete listing?')) {
        this.sendAction('destroyInstrument', instrument);
      }
    },
    addToCart(instrument) {
      this.get('shoppingCart').add(instrument);
    },
    update(instrument, params) {
      this.sendAction('update', instrument, params);
    },
    saveFeedback(params) {
      this.sendAction('saveFeedback', params);
    },
    deleteFeedback(feedback) {
      if (confirm('delete feedback?')) {
        this.sendAction('deleteFeedback', feedback);
      }
    }

  }
});
