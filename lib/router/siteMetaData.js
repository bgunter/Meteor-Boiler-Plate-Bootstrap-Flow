/**
 * Created by Office on 9/27/2015.
 */
if(Meteor.isClient) {
    Meta.config({
        options: {
            // Meteor.settings[Meteor.settings.environment].public.meta.title
            title: 'Site Title',
            suffix: 'Site Sub Title'
        }
    });
}