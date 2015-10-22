/**
 * Created by BGunter on 10/22/2015.
 */
Samplecollection = new Mongo.Collection('sampleCollection');

Samplecollection.helpers({

});

Samplecollection.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});

Samplecollection.attachSchema(new SimpleSchema({
    name: {
        type: String,
        optional: false,
        max: 200
    },
    email: {
        type: String,
        optional: false,
        max: 1000

    },
    message: {
        type: String,
        optional: false,
        autoform: {
            type: 'textarea'
        }
    }
}));