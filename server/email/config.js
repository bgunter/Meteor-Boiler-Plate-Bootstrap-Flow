/**
 * Created by Office on 9/27/2015.
 */
Meteor.startup(function() {
    process.env.MAIL_URL = 'smtp://postmaster@sandbox8483452fb6dc44d2a311f57d2858d07a.mailgun.org:PASSWORD@smtp.mailgun.org:587';

    Meteor.Mailgun.config({
        username: 'postmaster@sandbox8483452fb6dc44d2a311f57d2858d07a.mailgun.org',
        password: 'f11c0117e7c2de91cfe4fefb12e77916'
    });


    // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
    Accounts.emailTemplates.from = 'New Site <no-reply@newsite.com>';

    // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
    Accounts.emailTemplates.siteName = 'New Site.com';

    // A Function that takes a user object and returns a String for the subject line of the email.
    Accounts.emailTemplates.verifyEmail.subject = function(user) {
        return 'Confirm Your Email Address';
    };
    Accounts.emailTemplates.resetPassword.subject = function(user) {
        return 'New Site Password Reset Reqeust';
    };

    // A Function that takes a user object and a url, and returns the body text for the email.
    // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
    // Accounts.emailTemplates.verifyEmail.text = function(user, url) {return 'click on the following link to verify your email address: ' + url;
    // };






    Meteor.methods({

        'sendingContactEmail': function(doc) {

            this.unblock();
            var recipents = 'bgunter@solaxx.com, jchampagne@solaxx.com,' + doc.email;

            Meteor.Mailgun.send({
                to: recipents,
                from: doc.name + ' <' +doc.email + '>',
                subject: 'New Contact Form Message',
                text: doc.message,
                html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: doc.name, fromEmail: doc.email, message: doc.message})
            });
        }

    });



});