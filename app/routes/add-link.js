import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    addLink() {
      this.store.createRecord('link', {
        title: this.get('controller.title'),
        url: this.get('controller.url'),
        description: this.get('controller.description')
      }).save();
      this.transitionTo('links');
    }
  }
});
