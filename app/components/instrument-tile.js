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
    }
  }
});
