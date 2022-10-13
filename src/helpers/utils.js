export const getCaseStartsWith = (start, obj) => {
    return Object.keys(obj).filter(key => key.startsWith(start) && obj[key] !== "" && obj[key] !== " " && obj[key])
        .map(item => obj[item])
}

export const getStepByStep = (steps) => {
    return steps.split("\n")
}