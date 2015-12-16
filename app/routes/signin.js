import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    signin() {
      let username = this.get('controller.username');
      let password = this.get('controller.password');
      this.get('session').authenticate('authenticator:oauth2', username, password).then(()=> {
        this.set('controller.username', '');
        this.set('controller.password', '');
        this.transitionTo('add-link');
      });
    }
  }
});
