"use strict";

String.prototype.trim = function () {
    const removeLeadingAndTrailingWhitspace = /^\s+|\s+$/g;

    return this.replace(removeLeadingAndTrailingWhitspace, "");
};
