function displayStudentInfo(obj) {
    var firstName = obj.firstName, lastName = obj.lastName;
    return "Jouw volledige naam is ".concat(firstName, " ").concat(lastName);
}
// Voorbeeldgebruik:
var student = {
    firstName: "Homer",
    lastName: "Simpson",
};
var result = displayStudentInfo(student);
console.log(result); // Geeft 'Jouw volledige naam is Homer Simpson' weer
