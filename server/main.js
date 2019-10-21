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

  // updateTask(task) {
  //   const id = task.title;
  //   const { description } = task;
  //   console.log(task);
  //   // console.log(description);
  //   return Tasks.update(id, {
  //     $set: {
  //       description,
  //       updatedAt: new Date(),
  //     },
  //   });
  // },
});
