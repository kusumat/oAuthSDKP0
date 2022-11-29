function AS_FlexContainer_f35b26e46906487ca47558272013fe59(eventobject) {
    var self = this;
    try {
        var options = {};
        var authorizationClient = null;
        alert("inside onclick");
        var sdkClient = kony.sdk.getCurrentInstance();
        if (Object.keys(sdkClient).length !== 0) {
            authorizationClient = sdkClient.getIdentityService("google");
        }
        this.view.forceLayout();
        options.browserWidget = this.view.brwD;
        options.UseDeviceBrowser = true;
        //#ifdef android    
        options.success_url = "Deep link url registered for android";
        //#else    
        options.success_url = "Deep link url registered for rest";
        //#endif
        authorizationClient.login(options, function(res) {
            alert("login passed");
            //Form1.show();
        }, function(err) {
            alert("login failed due to" + JSON.stringify(err));
        });
        //  this.successWrapper.bind(this), this.failureWrapper.bind(this));
    } catch (exception) {
        alert(JSON.stringify(exception));
    }
}