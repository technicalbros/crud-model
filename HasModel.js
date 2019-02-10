"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function HasModel(type) {
    return function (target, key) {
        if (!target.constructor.propTypes)
            target.constructor.propTypes = {};
        target.constructor.propTypes[key] = type || Reflect.getMetadata("design:type", target, key);
    };
}
exports.HasModel = HasModel;
