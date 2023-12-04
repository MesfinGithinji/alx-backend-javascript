export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((stdn) => stdn.location === city)
    .map((person) => {
      const grades = newGrades.filter((stdn) => stdn.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
