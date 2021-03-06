import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tasks } from '../api/tasks.js';
import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: !this.checked },
    });
  },
  'click li'(event) {
    if (event.target.classList.contains('edit')) {
      FlowRouter.go('Edit.form', { taskId: this._id });
    }
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});
