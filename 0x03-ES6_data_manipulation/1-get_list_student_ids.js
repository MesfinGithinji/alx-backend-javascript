export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const idsArray = students.map((student) => student.id);

  return idsArray;
}
