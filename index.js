// Write your solution in this file!

const employee = {
    name: "Gilbert Shikwe",
    streetAdress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
 return {
    ...employee, 
    [key]:value
 }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key from employee object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to destructively delete a key from employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
