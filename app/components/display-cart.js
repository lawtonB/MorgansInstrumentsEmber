import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalPrice: Ember.computed('shoppingCart.instruments.[]', function() {
    var total = 0;
    for (var i = 0; i < this.get('shoppingCart.instruments.length'); i++) {
        total += this.get('shoppingCart.instruments')[i].get('price');
    }
      return total;
    })
  });
