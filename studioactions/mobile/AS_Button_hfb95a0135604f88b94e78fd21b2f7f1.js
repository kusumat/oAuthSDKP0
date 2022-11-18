function AS_Button_hfb95a0135604f88b94e78fd21b2f7f1(eventobject) {
    var self = this;
    try {
        var konyIdent = kony.sdk.getCurrentInstance().getIdentityService("googleOld");
        var options = {};
        konyIdent.login({}, function(response) {
            alert("login success" + JSON.stringify(response));
            kony.print("login success" + JSON.stringify(response));
        }, function(error) {
            alert("login2 failed" + JSON.stringify(error));
            kony.print(" login2 failed" + JSON.stringify(error));
        });
    } catch (exception) {
        alert(JSON.stringify(exception));
    }
}