/**
 * This function adds a video game to the database.
 */
function addVideoGame(name, system) {
    db.collection("video_games").add({
        name: name,
        system: system
    }); 

    location.reload(true);
};