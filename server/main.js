import { Meteor } from 'meteor/meteor';
import {Rankings, teacherCategories, studentCategories} from '../lib/collections';

Meteor.startup(() => {
    if (Rankings.find({}).count() == 0) {
        console.log("EMPTY");
        const teacher = {_id: "teachers"};
        const student = {_id: "students"};
        teacherCategories.forEach((cat) => teacher[cat] = {});
        studentCategories.forEach((cat) => student[cat] = {});
        Rankings.insert(teacher);
        Rankings.insert(student);
    }
    const teachers = Rankings.find({_id: "teachers"}).fetch()[0];
    const students = Rankings.find({_id: "students"}).fetch()[0];
    console.log(teachers, students);
    // Meteor.publish("Rankings", function () {
    //     return Rankings.find({});
    // });
});
