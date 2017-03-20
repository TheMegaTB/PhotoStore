import { calculatePrice, validateEmail } from './helper';
import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor'


if (Meteor.isClient) {
    Session.setDefaultPersistent("name", "");
    Session.setDefaultPersistent("email", "");
    Session.setDefaultPersistent("photos", {});
}

/**
 * Returns a order object
 * @param [session]
 * @param [username]
 * @param [email]
 * @param [photos]
 * @constructor
 */
export function PhotoOrder(session=true, username = "", email = "", photos = {}) {
    if (session) {
        this.username = Session.get("name");
        this.email = Session.get("email");
        this.photos = Session.get("photos");
    } else {
        this.username = username;
        this.email = email;
        this.photos = photos;
    }
}

PhotoOrder.prototype = {
    savePhotos: function() {
        Session.setPersistent("photos", this.photos);
    },

    addPrint: function(photoId) {
        const s = this.photos.hasOwnProperty(photoId) ? this.photos[photoId] : 0;
        if (s == 0 || s == 2)
            this.photos[photoId] = s + 1;
        this.savePhotos();
    },
    removePrint: function(photoId) {
        const s = this.photos.hasOwnProperty(photoId) ? this.photos[photoId] : 0;
        if (s == 1 || s == 3)
            this.photos[photoId] = s - 1;
        this.savePhotos();
    },
    addDigital: function(photoId) {
        const s = this.photos.hasOwnProperty(photoId) ? this.photos[photoId] : 0;
        if (s == 0 || s == 1)
            this.photos[photoId] = s + 2;
        this.savePhotos();
    },
    removeDigital: function(photoId) {
        const s = this.photos.hasOwnProperty(photoId) ? this.photos[photoId] : 0;
        if (s == 2 || s == 3)
            this.photos[photoId] = s - 2;
        this.savePhotos();
    },

    printSelected: function(photoId) {
        const s = this.photos.hasOwnProperty(photoId) ? this.photos[photoId] : 0;
        return s == 1 || s == 3;
    },

    digitalSelected: function(photoId) {
        const s = this.photos.hasOwnProperty(photoId) ? this.photos[photoId] : 0;
        return s == 2 || s == 3;
    },

    countPrint: function() {
        let c = 0;
        for (let photoId in this.photos) {
            if (!this.photos.hasOwnProperty(photoId)) continue;
            const s = this.photos[photoId];
            if (s === 1 || s === 3) c++;
        }
        return c;
    },

    countDigital: function() {
        let c = 0;
        for (let photoId in this.photos) {
            if (!this.photos.hasOwnProperty(photoId)) continue;
            const s = this.photos[photoId];
            if (s === 2 || s === 3) c++;
        }
        return c;
    },

    /**
     * Calculates the total price
     * @returns {number}
     */
    getTotalPrice: function() {
        let price = 0;
        for (let photoId in this.photos) {
            if (!this.photos.hasOwnProperty(photoId)) continue;
            price += calculatePrice(this.photos[photoId]);
        }
        return price;
    },

    /**
     * Returns the price for a single photo
     * @param photoId
     * @returns {number}
     */
    getPriceOfPhoto: function(photoId) {
        return calculatePrice(this.photos[photoId]);
    },

    /**
     * Returns weather the user wants the image with print digital only or not at all
     * @param photoId
     * @returns {number}
     */
    getSelectTypeOfPhoto: function(photoId) {
        if (this.photos.hasOwnProperty(photoId)) {
            return this.photos[photoId]
        } else {
            return 0;
        }
    },

    /**
     * Changes the username
     * @param username - the new username
     */
    changeUsername: function (username) {
        this.username = username;
        Session.setPersistent("name", this.username);
    },

    /**
     * Changes the email
     * @param email - the new email
     */
    changeEmail: function (email) {
        this.email = email;
        Session.setPersistent("email", this.email);
    },

    /**
     * Returns the status of the current user/order
     * @returns {string}
     */
    getStatus: function () {
        if (this.username === "") return "Bitte gib einen gültigen Namen ein.";
        else if (!validateEmail(this.email)) return "Bitte gib eine gütige Email-Adresse ein. Diese wird für die digitalen Bilder benötigt.";
        else if (this.getTotalPrice() === 0) return "Bitte wähle mindestens ein Photo aus.";
        else return "";
    }
};