export function makeModel(Model, attributes, initModel: (Model: any) => any = (Model) => new Model()) {

    if (!attributes)
        return attributes;

    const {propTypes} = Model;

    if (attributes instanceof Array) {
        const array = []
        for (let key in attributes) {
            array[key] = makeModel(Model, attributes[key])
        }
        return array;
    } else {
        let model = initModel(Model);
        for (let key in  attributes) {
            if (propTypes && propTypes[key]) {
                model[key] = makeModel(propTypes[key], attributes[key]);
            } else {
                model[key] = attributes[key];
            }
        }
        return model;
    }
}
