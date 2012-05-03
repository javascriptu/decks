function login() {
  var loginForm = $("login-form"),
    deferred = new $.Deferred(), // Deferred
    getAccess = deferred.pipe(function () {
      return $.post("/path/to/api/login", loginForm);
    });

  getAccess.done(function(access) {
     //Log User In With Access
  });

  if (isValidLogin(loginForm)) {
    deferred.resolve();
  } else { deferred.reject(); } //Reject the deferred .fail()
  return deferred.promise(); //Returns the promise Object
}

//Validate And Return Boolean
function isValidLogin() {return true;}
function loginSuccess() {alert("success");}
function loginFail() {alert("fail");}
//@Usage
login().done(loginSuccess).fail(loginFail);

​
