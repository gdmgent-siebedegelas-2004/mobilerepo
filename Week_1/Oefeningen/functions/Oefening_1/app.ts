type Student = {
  firstName: string;
  lastName: string;
};

function displayStudentInfo(obj: Student) {
  const { firstName, lastName } = obj;
  return `Jouw volledige naam is ${firstName} ${lastName}`;
}

// Voorbeeldgebruik:
const student: Student = {
  firstName: "Homer",
  lastName: "Simpson",
};

const result = displayStudentInfo(student);
console.log(result); // Geeft 'Jouw volledige naam is Homer Simpson' weer
