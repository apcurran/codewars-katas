"use strict";

String.prototype.isAudio = function () {
    return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this);
};

console.log("DaftPunk.FLAC".isAudio()); // false (only lowercase .flac ext)
console.log("DaftPunk.flac".isAudio()); // true

String.prototype.isImage = function () {
    return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
};

console.log("flat.jpeg".isImage()); // true
