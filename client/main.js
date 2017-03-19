import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import {Rankings, teacherCategories, studentCategories} from '../lib/collections';

import './main.html';

function placeToFactor(place) {
    return 4 - place;
}

function voteFor(type, category, name, place) {
    for (let i = placeToFactor(place); i > 0; i--) {
        const current = Rankings.find({_id: type}).fetch()[0];
        if (typeof current[category] !== 'object') {
            console.warn("Category", category, "does not exist!");
            return false;
        }

        if (current[category][name])
            current[category][name] += 1;
        else
            current[category][name] = 1;

        delete current._id;
        Rankings.update({_id: type}, {$set: current});
    }
}

function print() {
    console.log(Rankings.find().fetch());
}

function getCategory() {
    if (Template.instance().category.get() == "teachers")
        return teacherCategories[Template.instance().counter.get()];
    else if (Template.instance().category.get() == "students")
        return studentCategories[Template.instance().counter.get()];
}

Template.hello.onCreated(function helloOnCreated() {
    this.counter = new ReactiveVar(0);
    this.category = new ReactiveVar("teachers");
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    teacherCategories: teacherCategories,
    studentCategories: studentCategories,
    current: getCategory,
});

Template.hello.events({
    'click button.print'(event, instance) {
        // increment the counter when button is clicked
        // instance.counter.set(instance.counter.get() + 1);
        // voteFor("teachers", 'Stress in Person', "Kraut");
        print();
    },
    'click button.next'(event, instance) {
        const category = getCategory();
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const third = document.getElementById("third");
        voteFor(Template.instance().category.get(), category, first.value, 1);
        voteFor(Template.instance().category.get(), category, second.value, 2);
        voteFor(Template.instance().category.get(), category, third.value, 3);
        instance.counter.set(instance.counter.get() + 1);
        if (category == undefined) {
            console.log("Done w/ teachers. Continuing w/ students");
            instance.category.set("students");
            instance.counter.set(0);
        }
        if (category == undefined) {
            console.log("DONE");
        }
    }
});
