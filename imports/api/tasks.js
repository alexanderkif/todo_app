import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Tasks = new Mongo.Collection('tasks');

Tasks.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200,
        unique: true
    },
    description: {
        type: String,
        max: 1000,
        autoform: {
           rows: 3
        },
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'CreatedAt',
        optional: true,
    },
    updatedAt: {
        type: Date,
        optional: true,
        label: 'UpdatedAt'
    },
  }, { tracker: Tracker }));
  
  Tasks.allow({
    insert: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });
