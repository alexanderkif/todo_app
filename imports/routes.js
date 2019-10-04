import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

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

FlowRouter.route('/edit/:task', {
  name: 'Edit.form',
  action(params) {
    BlazeLayout.render('edit_form', { task: JSON.parse(params.task), id: params.task._id });
  },
});
