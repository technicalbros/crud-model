"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeModel(Model, attributes, initModel) {
    if (initModel === void 0) { initModel = function (Model) { return new Model(); }; }
    if (!attributes)
        return attributes;
    var propTypes = Model.propTypes;
    if (attributes instanceof Array) {
        var array = [];
        for (var key in attributes) {
            array[key] = makeModel(Model, attributes[key]);
        }
        return array;
    }
    else {
        var model = initModel(Model);
        for (var key in attributes) {
            if (propTypes && propTypes[key]) {
                model[key] = makeModel(propTypes[key], attributes[key]);
            }
            else {
                model[key] = attributes[key];
            }
        }
        return model;
    }
}
exports.makeModel = makeModel;
