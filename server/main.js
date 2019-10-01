
import { Tasks } from '../imports/api/tasks.js';

import { Meteor } from 'meteor/meteor';

Meteor.methods({
    insertTask(task) {

        // Get value from form element
        const title = task.title;
        const description = task.description;

        // Insert a task into the collection
        return Tasks.insert({
        title,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
        });
    },
    updateTask(task) {

        // Get value from form element
        const title = task.title;
        const description = task.description;

        const id = Tasks.findOne({title: title})._id;

        // Insert a task into the collection
        return Tasks.update(id, {
            $set: {
            description,
            updatedAt: new Date()
            },
        });
    },
});
