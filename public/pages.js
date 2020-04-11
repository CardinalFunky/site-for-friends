function profilePage() {
    var container = $(".primary-body");
    container.html(
        `
            <div class="profile-page">
                <img src="` + userAccount.photoURL + `" class="rounded mx-auto d-block" alt="...">
                <div class="col">
                    <h2><b>Name:</b> ` + userAccount.displayName + `</h2>
                    <h2><b>Email:</b> ` + userAccount.email + `</h2>
                </div>
            </div>
        `
    );
}