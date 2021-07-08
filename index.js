// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue (obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyDeleteFromEmployeeByKey (obj, key, value) {
    obj[key] = value;
    return obj;
}
