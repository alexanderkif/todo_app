import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/tasks.js';


Meteor.methods({

  insertTask(task) {
    const { title } = task;
    const { description } = task;
    return Tasks.insert({
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },

  updateTask(task) {
    const { title } = task;
    const { description } = task;
    const id = Tasks.findOne({ title: title })._id;
    return Tasks.update(id, {
      $set: {
        description,
        updatedAt: new Date(),
      },
    });
  },
});
