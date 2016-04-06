import Ember from 'ember';

export default Ember.Component.extend({
  addNewInstrument: false,
  actions: {
    instrumentFormShow() {
      this.set('addNewInstrument', true);
    },
    saveInstrument() {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        condition: this.get('condition'),
        category: this.get('category')
      };
      this.set('name', "");
      this.set('price', "");
      this.set('condition', "");
      this.set('category', "");
      this.set('addNewInstrument', false);
      this.sendAction('saveInstrument', params);
    }
  }
});
