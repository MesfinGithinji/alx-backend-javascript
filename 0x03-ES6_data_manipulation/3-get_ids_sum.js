export default function getStudentIdsSum(students) {
  return students.reduce((first, next) => first + next.id, 0);
}
