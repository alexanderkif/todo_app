import { check } from 'meteor/check';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Tasks } from './api/tasks';

FlowRouter.route('/', {
  name: 'Lists.show',
  action() {
    BlazeLayout.render('tasks_list');
  },
});

FlowRouter.route('/create', {
  name: 'Create.form',
  action() {
    BlazeLayout.render('create_form');
  },
});

FlowRouter.route('/edit/:taskId', {
  name: 'Edit.form',
  action(params) {
    check(params.taskId, String);
    BlazeLayout.render('edit_form', { task: Tasks.findOne(params.taskId) });
  },
});
