import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    signout() {
      this.get('session').invalidate().then(()=> {
        this.transitionTo('links');
      });
    }
  }
});
