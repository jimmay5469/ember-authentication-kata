import Ember from 'ember';

export default Ember.Route.extend({
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
