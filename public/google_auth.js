/**
 * Signs the user into the site using Google's sign in credentials.
 */
function GoogleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        window.location = "index.html";
    }).catch(function(err) {
        console.log(err);
        console.log("Failed")
    });
}

/**
 * Sign the user out of the website.
 */
function GoogleSignOut() {
    firebase.auth().signOut().then(function() {
        window.location = "index.html";
    }).catch(function(error) {
        console.log(error);
    });
}