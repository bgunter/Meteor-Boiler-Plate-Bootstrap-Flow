/**
 * Created by Office on 9/27/2015.
 */
FlowRouter.route('/', {
    name: 'home',
    fastRender: true,
    action: function () {
        BlazeLayout.render("appLayout", {header: "_header", content: "home", footer: "_footer"});
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    fastRender: true,
    action: function () {
        BlazeLayout.render("appLayout", {header: "_header", content: "dashboard", footer: "_footer"});
    }
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');