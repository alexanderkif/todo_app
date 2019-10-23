import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Tasks = new Mongo.Collection('tasks');

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
    autoform: {
      value: new Date(),
      type: 'hidden',
    },
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
