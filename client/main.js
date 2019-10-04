import '../imports/routes.js';
import '../imports/ui/body.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  insertTask() {
    FlowRouter.go('Lists.show');
  },
  updateTask() {
    FlowRouter.go('Lists.show');
  },
});
