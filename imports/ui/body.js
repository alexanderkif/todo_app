import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

window.Tasks = Tasks;
 
Template.tasks_list.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.tasks_list.events({
  'click .btn_create'() {
    FlowRouter.go('Create.form');
  }
});
