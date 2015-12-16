import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signin() {
      this.transitionTo('add-link');
    }
  }
});
