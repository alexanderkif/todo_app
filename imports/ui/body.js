import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';

Meteor.subscribe('tasks');
window.Tasks = Tasks;

Template.tasks_list.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.tasks_list.events({
  'click .btn_create'() {
    FlowRouter.go('Create.form');
  },
});

Template.create_form.events({
  'submit'() {
    FlowRouter.go('Lists.show');
  },
});

Template.edit_form.events({
  'submit'() {
    FlowRouter.go('Lists.show');
  },
});
