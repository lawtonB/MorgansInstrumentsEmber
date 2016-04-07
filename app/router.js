import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('instrument', {path: '/instrument/instrument_id'});
  this.route('sign-up');
  this.route('sign-in');
  this.route('welcome');
});

export default Router;
