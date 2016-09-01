import Ember from 'ember';

const {Service} = Ember;

export default Service.extend({
  isShow: false,
  options: null,
  callback: null,
  show(option, callback) {
    this.set('options', option);
    this.set('isShow', true);
    this.set('callback', callback);
  },
  close(isConfirmed) {
    if (this.get('callback')) {
      this.get('callback')(isConfirmed);
    }
    this.set('isShow', false);
  }
});
