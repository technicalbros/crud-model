"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HasModels(_a) {
    var types = _a.types;
    return function (target) {
        target.propTypes = types;
    };
}
exports.HasModels = HasModels;
