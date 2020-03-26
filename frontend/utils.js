require("isomorphic-fetch");

async function getCampground(campgroundName) {
    return fetch(`http://pegasusrugby.org/api/info?q=${campgroundName}`).then(function(resp){
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
