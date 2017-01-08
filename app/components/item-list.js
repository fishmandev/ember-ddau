import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComponentAction(item) {
      this.sendAction('save', item);
    }
  }
});
