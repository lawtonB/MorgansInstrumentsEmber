import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      instruments: this.store.findAll('instrument'),
      feedbacks: this.store.findAll('feedback')
    });
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
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!==" ") {
          instrument.set(key,params[key]);
        }
      });
      instrument.save();
      this.transitionTo('index');
    },
    saveFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var instrument = params.instrument;
      instrument.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return instrument.save();
      });
      this.transitionTo('index');
    }
  }
});
