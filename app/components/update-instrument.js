import Ember from 'ember';

export default Ember.Component.extend({
  updateInstrumentForm: false,
  actions: {
    updateInstrumentForm() {
      this.set('updateInstrumentForm', true);
    },
    update(instrument) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        condition: this.get('condition'),
        description: this.get('description'),
        category: this.get('category'),
        image: "/img/" + (this.get('image'))
      };
      this.set('updateInstrumentForm', false);
      this.sendAction('update', instrument, params)
    }
  }
});
