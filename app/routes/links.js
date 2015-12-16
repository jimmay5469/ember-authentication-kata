import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('link');
  },
  actions: {
    addLink() {
      let title = this.get('controller.newTitle');
      let url = this.get('controller.newUrl');
      let description = this.get('controller.newDescription');
      this.set('controller.newTitle', '');
      this.set('controller.newUrl', '');
      this.set('controller.newDescription', '');
      this.transitionTo('add-link', {
        queryParams: {
          title: title,
          url: url,
          description: description
        }
      });
    }
  }
});
