import { Meteor } from 'meteor/meteor';
import { Tasks, TasksSchema } from '../imports/api/tasks.js';

Meteor.publish('tasks', () => Tasks.find({}));

Meteor.methods({

  insertTask(task) {
    const newTask = {};
    Object.assign(newTask, task);
    newTask.createdAt = new Date();
    newTask.updatedAt = new Date();
    TasksSchema.validate(newTask);
    return Tasks.insert(newTask);
  },
});
