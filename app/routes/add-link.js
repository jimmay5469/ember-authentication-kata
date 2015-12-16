import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params, transition) {
    return this.store.createRecord('link', {
      title: transition.queryParams.title,
      url: transition.queryParams.url,
      description: transition.queryParams.description
    }).save().then(()=> {
      this.transitionTo('links');
    });
  }
});
