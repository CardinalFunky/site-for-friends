function googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log(user.displayName);
        $("#login_area").replaceWith("<h2>" + user.displayName + "</h2>")
    }).catch(function(err) {
        console.log(err);
        console.log("Failed")
    });
}