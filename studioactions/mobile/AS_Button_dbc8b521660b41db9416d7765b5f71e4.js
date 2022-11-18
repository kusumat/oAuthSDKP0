function AS_Button_dbc8b521660b41db9416d7765b5f71e4(eventobject) {
    var self = this;
    try {
        var konyIdent = kony.sdk.getCurrentInstance().getIdentityService("LinkedInLogin");
        var options = {};
        options.browserWidget = this.view.brwD;
        konyIdent.login(options, function(response) {
            alert("linkedin login success" + JSON.stringify(response));
            kony.print("linkedin login success" + JSON.stringify(response));
        }, function(error) {
            alert("linkedin login2 failed" + JSON.stringify(error));
            kony.print("linkedin login2 failed" + JSON.stringify(error));
        });
    } catch (exception) {
        alert("catch linkedin : " + JSON.stringify(exception));
    }
}