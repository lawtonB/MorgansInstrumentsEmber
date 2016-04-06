import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

export default FirebaseAdapter.extend({
  firebase: inject.service(),
});
