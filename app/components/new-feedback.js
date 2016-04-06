import Ember from 'ember';

export default Ember.Component.extend({
  newFeedbackForm: false,
  actions: {
    feedbackForm() {
      this.toggleProperty('newFeedbackForm');
    },
    saveFeedback(instrument) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        instrument: instrument
      };
      console.log(params);
      this.sendAction('saveFeedback', params);
    },
  }
});
