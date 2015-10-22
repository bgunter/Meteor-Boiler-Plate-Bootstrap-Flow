/**
 * Created by BGunter on 10/22/2015.
 */
Meteor.publish("sampleCollection", function() {
    var user = this.userId;
    if(user) {
        return samplePub.find({createdBy: this.userId});
    }

});