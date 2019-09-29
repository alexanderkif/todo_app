import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './task.html';
 
Template.task.events({
    'click .toggle-checked'() {
        // Set the checked property to the opposite of its current value
        Tasks.update(this._id, {
        $set: { checked: ! this.checked },
        });
    },
    'click li'(event) {
        if (event.target.classList.contains('edit')) {
            FlowRouter.go('Edit.form', { task: JSON.stringify(this) });
        }
    },
    'click .delete'() {
        Tasks.remove(this._id);
    },
});
