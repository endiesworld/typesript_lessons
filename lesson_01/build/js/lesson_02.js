"use strict";
// Literal types
let app_username;
const multply_function = (x, y) => {
    return x * y;
};
// Optional parameters for functions
const add_all = (x, y, z) => {
    if (typeof z !== "undefined") {
        return x + y + z;
    }
    return x + y;
};
function getWindowStat() {
    return "closed";
}
