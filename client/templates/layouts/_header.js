Template._header.helpers({
    "currentUser": function(){
        return Meteor.users.find().fetch()
    }
});

Template._header.events({});

Template._header.onRendered(function () {

});
Template._header.onCreated(function () {

});
