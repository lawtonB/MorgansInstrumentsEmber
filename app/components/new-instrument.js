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
        description: this.get('description'),
        category: this.get('category'),
        image: "/img/" + (this.get('image')) 
      };
      this.set('name', "");
      this.set('price', "");
      this.set('condition', "");
      this.set('category', "");
      this.set('description', "");
      this.set('image', "");
      this.set('addNewInstrument', false);
      this.sendAction('saveInstrument', params);
    }
  }
});
