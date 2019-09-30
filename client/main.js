import '../imports/routes.js';
import '../imports/ui/body.js';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  insertTask() {
    FlowRouter.go('Lists.show');
  },
  updateTask() {
    FlowRouter.go('Lists.show');
  },
});
