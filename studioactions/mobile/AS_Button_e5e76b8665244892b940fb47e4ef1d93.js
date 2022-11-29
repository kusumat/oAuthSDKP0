function AS_Button_e5e76b8665244892b940fb47e4ef1d93(eventobject) {
    var self = this;
    try {
        var options = {};
        var authorizationClient = null;
        alert("inside onclick");
        var sdkClient = kony.sdk.getCurrentInstance();
        if (Object.keys(sdkClient).length !== 0) {
            authorizationClient = sdkClient.getIdentityService("google");
        }
        //this.view.forceLayout();
        //options.browserWidget = this.view.brwD;
        options["UseDeviceBrowser"] = true; //To open the device browser instead kony browser widget
        //#ifdef android    
        options["success_url"] = "http://com.orgname.browserLic"; //Deeplink URL of the application
        //#else    
        options["success_url"] = "http://com.hcl.browserLic"; //Deeplink URL of the application
        //#endif
        authorizationClient.login(options, function(response) {
            alert("login success" + JSON.stringify(response));
            kony.print("login success" + JSON.stringify(response));
        }, function(error) {
            alert("login1 failed" + JSON.stringify(error));
            kony.print(" login1 failed" + JSON.stringify(error));
        });
        //  this.successWrapper.bind(this), this.failureWrapper.bind(this));
    } catch (exception) {
        alert(JSON.stringify(exception));
    }
}