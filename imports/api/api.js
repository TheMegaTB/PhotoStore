import './User.js';

/**
 *
 * @param selectType - 0: not selected; 1: digital only; 2: digital + print
 * @returns {number}
 */
export function calculatePrice(selectType) {
    if      (selectType == 0) return 0;
    else if (selectType == 1) return 1.1;
    else                      return 0.6;
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

/**
 * Returns a user object
 * @param username
 * @param email
 * @param [photos]
 * @constructor
 */
export function PhotoUser(username, email, photos = {}) {
    this.username = username;
    this.email = email;
    this.photos = photos;
}

PhotoUser.prototype = {
    /**
     * @param photoId
     * @param selectType - 0: not selected; 1: digital only; 2: digital + print
     */
    changePhoto: function(photoId, selectType) {
        this.photos[id] = selectType
    },

    getTotalPrice: function() {
        let price = 0;
        for (let photoId in this.photos) {
            if (!this.photos.hasOwnProperty(photoId)) continue;
            price += calculatePrice(this.photos[photoId]);
        }
        return price;
    },

    getPriceOfPhoto: function(photoId) {
        return calculatePrice(this.photos[photoId]);
    },

    getSelectTypeOfPhoto: function(photoId) {
        if (this.photos.hasOwnProperty(photoId)) {
            return this.photos[photoId]
        } else {
            return 0;
        }
    },

    changeUsername: function (username) {
        this.username = username;
    },

    changeEmail: function (email) {
        this.email = email;
    },

    getStatus: function () {
        if (this.username === "") return "Bitte gib einen gültigen Namen ein.";
        else if (!validateEmail(this.email)) return "Bitte gib eine gütige Email-Adresse ein. Diese wird für die digitalen Bilder benötigt.";
        else if (this.getTotalPrice() === 0) return "Bitte wähle mindestens ein Photo aus.";
    }
};

