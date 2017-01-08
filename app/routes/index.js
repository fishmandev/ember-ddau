import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: '1', label: 'item 1'},
      {id: '2', label: 'item 2'},
      {id: '3', label: 'item 3'},
    ]
  },
  actions: {
    saveRouteAction(item) {
      //TODO Implement model saving here
      Ember.Logger.info(item);
    }
  }
});
