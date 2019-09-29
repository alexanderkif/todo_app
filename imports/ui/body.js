import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';
 
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

Template.create_form.events({
  'click .new-task__btn'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = $('.new-task').get(0);
    const title = target.title.value;
    const description = target.description.value;

    // Insert a task into the collection
    Tasks.insert({
      title,
      description,
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
    });

    // Clear form
    target.title.value = '';
    target.description.value = '';

    FlowRouter.go('Lists.show');
  },
});
