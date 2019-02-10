export function HasModels({types}) {
    return target => {
        target.propTypes = types
    }
}