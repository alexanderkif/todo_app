import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', () => Tasks.find({}));
}

export const TasksSchema = new SimpleSchema({
  title: {
    type: String,
    max: 200,
    unique: true,
  },
  description: {
    type: String,
    max: 1000,
    autoform: {
      rows: 3,
    },
    optional: true,
  },
  createdAt: {
    type: Date,
    defaultValue: () => new Date(),
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue: () => new Date(),
  },
  checked: {
    type: Boolean,
    defaultValue: false,
    optional: true,
  },
}, { tracker: Tracker });

Tasks.attachSchema(TasksSchema);
