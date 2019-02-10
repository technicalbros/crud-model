import "reflect-metadata";
export function HasModel(type?) {
    return (target, key) => {
        if (!target.constructor.propTypes)
            target.constructor.propTypes = {}
        target.constructor.propTypes[key] = type || Reflect.getMetadata("design:type", target, key)
    }
}