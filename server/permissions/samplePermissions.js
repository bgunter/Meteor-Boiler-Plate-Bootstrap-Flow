/**
 * Created by BGunter on 10/22/2015.
 */
Samplecollection.allow({
    'insert': function(userId, doc) {
        return userId;
    },
    'update': function(userId, doc, fields, modifier) {
        return userId;
    }


});