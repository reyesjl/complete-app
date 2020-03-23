require("isomorphic-fetch");

async function getCampground(campgroundName) {
    return fetch(`http://35.190.190.219/info?q=${campgroundName}`).then(function(resp){
        return resp.json();
    });
}

function handleError(error) {
    console.warn(error);
    return null;
}

module.exports = {
    getCampgroundInfo: function(campground) {
        return getCampground(campground).catch(handleError);
    }
}
