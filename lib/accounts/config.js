/**
 * Created by Office on 9/27/2015.
 */

Meteor.startup(function() {


});


AccountsTemplates.configure({
    defaultLayout: 'appLayout',
    defaultLayoutRegions: {
        header: '_header',
        footer: '_footer'
    },

    defaultContentRegion: 'content',
    showForgotPasswordLink: true,
    overrideLoginErrors: false,
    enablePasswordChange: true,
    // sendVerificationEmail: true,
    // showResendVerificationEmailLink: true,



    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    //Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,
    //preSignUpHook: myPreSubmitFunc,

    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        },
        inputIcons: {
            isValidating: "fa fa-spinner fa-spin",
            hasSuccess: "fa fa-check",
            hasError: "fa fa-times"
        }
    }
});

AccountsTemplates.addFields([
    {
        _id: "firstName",
        type: "text",
        displayName: "First Name"
    },
    {
        _id: "lastName",
        type: "text",
        displayName: "First Name"
    },
    {
        _id: "companyName",
        type: "text",
        displayName: "Company Name"
    },
    {
        _id: "streetAddress",
        type: "text",
        displayName: "Street Address"
    },
    {
        _id: "city",
        type: "text",
        displayName: "City"
    },
    {
        _id: "state",
        type: "text",
        displayName: "State"
    },
    {
        _id: "zip",
        type: "text",
        displayName: "Zip"
    },
    {
        _id: "phone",
        type: "tel",
        displayName: "Phone"
    },
    {
        _id: 'emailProfile',
        type: 'email',
        displayName: "Best Contact Email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email'
    },


]);