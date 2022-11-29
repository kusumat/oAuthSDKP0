function testDeepLink(params){
  alert("Sk:: Deeplink start. params = "+JSON.stringify(params));
  if(params && params.launchmode==3)
  {
    handleDeeplinkCallback(params);
  }

  var currentForm = kony.application.getCurrentForm();
  kony.print("Sk:: Deeplink end");
  return currentForm;
}
function logout(){
  	 var konyIdent = kony.sdk.getCurrentInstance().getIdentityService("LinkedInLogin");
      var options ={};
  
      konyIdent.logout(function(response){
       alert("logout success"+JSON.stringify(response));
        kony.print("logout success"+JSON.stringify(response));
      },function(error){
       alert("logout failed"+JSON.stringify(error));
        kony.print(" logout failed"+JSON.stringify(error));
      });
}

function logout2(){
  	 var konyIdent = kony.sdk.getCurrentInstance().getIdentityService("LinkedInLogin");
      var options ={};
  options.browserWidget = this.view.brwD;
      konyIdent.logout(function(response){
       alert("logout success"+JSON.stringify(response));
        kony.print("logout success"+JSON.stringify(response));
      },function(error){
       alert("logout failed"+JSON.stringify(error));
        kony.print(" logout failed"+JSON.stringify(error));
      },options);
}

function logout3(){
  	 var konyIdent = kony.sdk.getCurrentInstance().getIdentityService(identityService3);
      var options ={};
      konyIdent.logout(function(response){
       alert("logout success"+JSON.stringify(response));
        kony.print("logout success"+JSONin.stringify(response));
      },function(error){
       alert("logout failed"+JSON.stringify(error));
        kony.print(" logout failed"+JSON.stringify(error));
      });
}




//SPA
function googleOauth(){
  var sdkObject = voltmx.sdk.getDefaultInstance();
  var identityServiceObject = sdkObject.getIdentityService("google");
  var options = {};
  options["loginOptions"] = {}; 
  options["loginOptions"]["noPopup"] = true; 
  options["loginOptions"]["customQueryParamsForOAuth"] = {"success_url": "https://m100000013001.qa-hclvoltmx.net/apps/oAuthSDKTest"}; /* For example -> http://example.com/apps/appName// */
  // options["customOAuthParams"] =
  // {
  // 	"key2":"value2",
  // 	"key3":"value3"
  // };
  identityServiceObject.login(options, function (res) { 
    alert("login passed without redirection"); 
  }, function (err) { 
    alert("login failed due to" + JSON.stringify(err)); 
  });//Type your code here

}

function customerAppServiceFunction(eventObject)
{
  var loginResponse = eventObject.loginResponse;
  if (loginResponse)
  {
    if (loginResponse.isError == false)
    {
      //login complete, can return next form
      alert("Success");
      return "Form2";
    }
    else
    {
      //login failed, can return error/retry form
      alert("Failed ");
      return "Form2";
    }
  }
}

function openUrlAsyncSelf(){
  //voltmx.application.openURL("http://www.google.com");

  var _url = "fb://page/";
  var callbackFunction = function(response) {
    if (response == constants.OPEN_URL_SUCCESS) {
      //openURL return successfull from Native Side
      alert("success");
    } else if (response == constants.OPEN_URL_FAILURE) {
      //openURL return failed from Native Side
      alert("failure");
    } else if (response == constants.OPEN_URL_UNKNOWN) {
      // if native don't provide a callback, we need to supply this to the end user
      alert("unknown");
    }
  };

  kony.application.openURLAsync({
    url: _url,
    isSameWindow: true,
    callback: callbackFunction
  });
}